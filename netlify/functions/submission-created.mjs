// Netlify Function: submission-created
// ---------------------------------------------------------------------------
// Netlify convention: any function file named exactly "submission-created"
// is automatically invoked on every successful Netlify Forms submission. The
// event body contains the parsed form payload, no webhook config required.
//
// Purpose:
//   Send a branded auto-acknowledgement email back to the submitter via
//   Resend, with the product catalogue PDF attached.
//
// Required env vars (set in Netlify dashboard: Site configuration ->
// Environment variables):
//   RESEND_API_KEY        Resend API key (Project API key, with "Send" scope)
//   REPLY_FROM            (optional) sender, defaults to "Precifarm <sales@precifarm.com>"
//   REPLY_BCC             (optional) bcc address, e.g. sales@precifarm.com to copy the inbox
//
// Required domain setup at Resend:
//   1. Add precifarm.com as a domain in Resend
//   2. Resend will provide 3-4 DNS records (SPF + DKIM CNAMEs)
//   3. Add those at Netlify DNS (Domains -> precifarm.com -> Add new record)
//   4. Click "Verify" in Resend until all rows show green
//
// Without verified domain, Resend will reject sends from sales@precifarm.com.

import { Resend } from 'resend';

const CATALOGUE_URL = 'https://precifarm.com/docs/precifarm-catalogue.pdf';
const DEFAULT_FROM = 'Precifarm <sales@precifarm.com>';

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function brandedShell({ preheader, headline, greeting, opening, steps, attachmentLine, ctaUrl, ctaLabel, signoff }) {
  const stepsHtml = steps.map((s) => `
    <tr>
      <td style="padding:0 0 14px 0;vertical-align:top;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right:14px;vertical-align:top;font-size:13px;font-weight:800;color:#C99800;letter-spacing:0.04em;width:24px;">${escapeHtml(String(s.n))}</td>
            <td style="font-size:14px;line-height:1.55;color:#2A2F35;">
              <strong style="color:#0F2832;font-weight:700;">${escapeHtml(s.title)}</strong>
              <span style="color:#4A5158;"> &mdash; ${escapeHtml(s.body)}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>`).join('');
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(headline)}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0F2832;line-height:1.55;">
  <!-- Preheader (hidden, shows in inbox preview) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#FAFAF7;">${escapeHtml(preheader)}</div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FAFAF7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:white;">
          <!-- Top brand strip -->
          <tr>
            <td style="padding:24px 36px 18px;border-top:3px solid #0F2832;border-bottom:1px solid #E2E2DD;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-size:16px;font-weight:800;letter-spacing:-0.02em;color:#0F2832;">PRECIFARM</td>
                  <td align="right" style="font-size:9px;text-transform:uppercase;letter-spacing:0.14em;color:#6A7079;font-weight:600;">EPRA-licensed · EPC + O&amp;M</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Headline + greeting -->
          <tr>
            <td style="padding:28px 36px 4px;">
              <h1 style="margin:0 0 14px;font-size:22px;font-weight:700;color:#0F2832;line-height:1.2;letter-spacing:-0.01em;">${escapeHtml(headline)}</h1>
              <p style="margin:0 0 14px;font-size:15px;color:#0F2832;">${escapeHtml(greeting)}</p>
              <p style="margin:0;font-size:15px;color:#2A2F35;line-height:1.55;">${escapeHtml(opening)}</p>
            </td>
          </tr>
          <!-- Steps -->
          <tr>
            <td style="padding:20px 36px 0;">
              <p style="margin:0 0 14px;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:#1F6F4A;font-weight:700;">How this works</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${stepsHtml}</table>
            </td>
          </tr>
          ${ctaUrl ? `
          <!-- CTA -->
          <tr>
            <td style="padding:8px 36px 4px;">
              <a href="${escapeHtml(ctaUrl)}" style="background:#0F2832;color:white;text-decoration:none;padding:12px 22px;font-weight:700;display:inline-block;font-size:13px;letter-spacing:0.02em;">${escapeHtml(ctaLabel)} &rarr;</a>
            </td>
          </tr>` : ''}
          <!-- Attachment call-out -->
          <tr>
            <td style="padding:24px 36px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#F4F1E8;border-left:3px solid #C99800;">
                <tr>
                  <td style="padding:14px 16px;font-size:13px;color:#2A2F35;line-height:1.5;">
                    <strong style="color:#0F2832;display:block;margin-bottom:3px;text-transform:uppercase;font-size:10px;letter-spacing:0.14em;font-weight:700;">Attached</strong>
                    ${escapeHtml(attachmentLine)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Sign-off -->
          <tr>
            <td style="padding:28px 36px 8px;">
              <p style="margin:0;font-size:14px;color:#0F2832;line-height:1.5;">${escapeHtml(signoff)}</p>
              <p style="margin:8px 0 0;font-size:12px;color:#6A7079;">If you have questions before our call, just reply to this email &mdash; it goes directly to the engineering team.</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:18px 36px 28px;border-top:1px solid #E2E2DD;background:#FAFAF7;">
              <p style="margin:0;font-size:11px;color:#6A7079;line-height:1.55;">
                <a href="mailto:sales@precifarm.com" style="color:#0F2832;text-decoration:none;font-weight:600;">sales@precifarm.com</a> &nbsp;·&nbsp;
                <a href="tel:+254794702768" style="color:#0F2832;text-decoration:none;font-weight:600;">+254 794 702 768</a> &nbsp;·&nbsp;
                <a href="https://precifarm.com" style="color:#0F2832;text-decoration:none;font-weight:600;">precifarm.com</a><br>
                <span style="color:#6A7079;">Precifarm AI Ltd &nbsp;·&nbsp; Nairobi HQ &nbsp;·&nbsp; Mombasa, Kisumu, Eldoret, Nakuru, Nyeri</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function contactReply(name) {
  const first = name ? name.split(' ')[0] : null;
  return brandedShell({
    preheader: 'Your Precifarm quote enquiry has been received. An engineer responds within one business day.',
    headline: 'Your quote enquiry is in.',
    greeting: first ? `Hello ${first},` : 'Hello,',
    opening: 'Thanks for reaching out. Your enquiry is logged against the regional engineering hub responsible for your area, and the engineer covering your region will be in touch within one business day to schedule the site assessment.',
    steps: [
      { n: 1, title: 'Engineer assigned', body: 'Routed to whichever of our six regional hubs covers your site.' },
      { n: 2, title: 'Free site assessment', body: 'We visit, measure your loads, and map the design against your actual operating routine.' },
      { n: 3, title: 'Written quote within two business days', body: 'A sized recommendation, bill of quantities, and a firm price.' },
      { n: 4, title: 'Install and five-year service', body: 'The same engineer who commissioned the system services it for five years. No subcontractors, no handoffs.' },
    ],
    ctaUrl: 'https://precifarm.com/products/',
    ctaLabel: 'See the four packages',
    attachmentLine: 'Precifarm Product Catalogue 2026 — the four-package line-up at a glance, plus solar irrigation and EPRA training. Worth opening side-by-side with our reply so you can flag which tier looks closest to your loads.',
    signoff: '— The Precifarm Engineering Team',
  });
}

function trainingReply(name) {
  const first = name ? name.split(' ')[0] : null;
  return brandedShell({
    preheader: 'Your Precifarm EPRA T1/T2/T3 training registration has been received. We respond within two business days.',
    headline: 'Your training registration is in.',
    greeting: first ? `Hello ${first},` : 'Hello,',
    opening: 'Thanks for registering interest in a Precifarm EPRA T1, T2, or T3 cohort. We will contact you within two business days to confirm the next available cohort matching your tier and hub, share the published fee, and walk you through the EPRA application document pack you should start preparing.',
    steps: [
      { n: 1, title: 'Qualification call', body: 'A short conversation to confirm your prior training, documented experience, and the right tier for your background.' },
      { n: 2, title: 'Cohort offer', body: 'Published fee, dates, venue, and the prerequisite document pack you should prepare.' },
      { n: 3, title: 'Enrolment and pre-cohort onboarding', body: 'eLearning access and the EPRA application checklist.' },
      { n: 4, title: 'Cohort delivery + EPRA application support', body: 'Lecture, laboratory, supervised site work; on completion we support your T1, T2, or T3 application submission.' },
    ],
    ctaUrl: 'https://precifarm.com/training/',
    ctaLabel: 'Review the training page',
    attachmentLine: 'Precifarm Product Catalogue 2026 — covers the full product line and the training programme structure. Worth a read before our qualification call.',
    signoff: '— The Precifarm Engineering Team',
  });
}

export async function handler(event) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('[submission-created] RESEND_API_KEY env var not set; skipping send.');
      return { statusCode: 200, body: 'No API key configured' };
    }

    const body = JSON.parse(event.body || '{}');
    // Netlify delivers submission events in two shapes depending on how the
    // function is invoked:
    //   - "submission-created" auto-trigger:   { payload: { form_name, data } }
    //   - Outgoing webhook notification:       { form_name, data, ... } at top level
    // Handle both so the function works regardless of which mechanism delivers.
    const payload = body.payload || body;
    const data = payload.data || payload || {};
    const formName = payload.form_name || data.form_name || data['form-name'] || '';
    const recipientEmail = (data.email || '').trim();
    const recipientName = (data.name || '').trim();
    console.log(`[submission-created] Received submission: form="${formName}", email="${recipientEmail}", name="${recipientName}"`);

    if (!recipientEmail) {
      console.log(`[submission-created] Form "${formName}" submission has no email; skipping.`);
      return { statusCode: 200, body: 'No recipient email' };
    }

    let subject;
    let html;
    if (formName === 'contact') {
      subject = 'Precifarm: your quote enquiry was received';
      html = contactReply(recipientName);
    } else if (formName === 'training-registration') {
      subject = 'Precifarm: your training registration was received';
      html = trainingReply(recipientName);
    } else {
      // Unknown form; default to a generic acknowledgement using the contact template
      subject = 'Precifarm: we received your message';
      html = contactReply(recipientName);
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const sendArgs = {
      from: process.env.REPLY_FROM || DEFAULT_FROM,
      to: recipientEmail,
      subject,
      html,
      attachments: [
        {
          filename: 'Precifarm-Product-Catalogue-2026.pdf',
          path: CATALOGUE_URL,
        },
      ],
    };
    if (process.env.REPLY_BCC) sendArgs.bcc = process.env.REPLY_BCC;

    const { data: sendResult, error } = await resend.emails.send(sendArgs);
    if (error) {
      console.error('[submission-created] Resend send error:', error);
      return { statusCode: 200, body: `Send failed: ${error.message}` };
    }

    console.log(`[submission-created] Auto-reply sent to ${recipientEmail} (form: ${formName}, id: ${sendResult?.id})`);
    return { statusCode: 200, body: 'OK' };
  } catch (err) {
    console.error('[submission-created] Unexpected error:', err);
    // Always return 200 so Netlify doesn't retry; the submission itself was already saved.
    return { statusCode: 200, body: 'Internal error, submission still recorded' };
  }
}
