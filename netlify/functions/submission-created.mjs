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

function brandedShell({ headline, intro, body, ctaUrl, ctaLabel, name }) {
  const greeting = name ? `Hello ${escapeHtml(name.split(' ')[0])},` : 'Hello,';
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(headline)}</title>
</head>
<body style="margin:0;padding:0;background:#FAFAF7;font-family:Helvetica,Arial,sans-serif;color:#1C1F22;line-height:1.6;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FAFAF7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:white;border-top:4px solid #C99800;">
          <tr>
            <td style="padding:32px 40px 8px;">
              <p style="margin:0;font-size:18px;font-weight:800;letter-spacing:-0.02em;color:#0F2832;">PRECI<span style="color:#C99800;">FARM</span></p>
              <p style="margin:4px 0 0;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#6A7079;">EPRA-licensed solar EPC + O&amp;M</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px 8px;">
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#0F2832;line-height:1.2;">${escapeHtml(headline)}</h1>
              <p style="margin:0 0 16px;font-size:15px;color:#1C1F22;">${greeting}</p>
              <p style="margin:0 0 16px;font-size:15px;color:#4A5158;">${escapeHtml(intro)}</p>
              ${body}
              ${ctaUrl ? `
              <p style="margin:32px 0 8px;">
                <a href="${escapeHtml(ctaUrl)}" style="background:#C99800;color:#0F2832;text-decoration:none;padding:12px 24px;font-weight:700;display:inline-block;font-size:14px;">${escapeHtml(ctaLabel)}</a>
              </p>` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #E2E2DD;background:#FAFAF7;">
              <p style="margin:0 0 8px;font-size:12px;color:#6A7079;">Attached: <strong>Precifarm Product Catalogue 2026</strong> — the full four-package line-up, solar irrigation, EPRA T1/T2/T3 training, and the five-year EPC and O&amp;M commitment.</p>
              <p style="margin:8px 0 0;font-size:11px;color:#6A7079;line-height:1.5;">
                Precifarm AI Ltd · Headquartered in Nairobi · Operating hubs in Mombasa, Kisumu, Eldoret, Nakuru, Nyeri<br>
                <a href="mailto:sales@precifarm.com" style="color:#0F2832;">sales@precifarm.com</a> · <a href="tel:+254794702768" style="color:#0F2832;">+254 794 702 768</a> · <a href="https://precifarm.com" style="color:#0F2832;">precifarm.com</a>
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
  return brandedShell({
    name,
    headline: 'Your quote enquiry was received.',
    intro: 'Thanks for getting in touch with Precifarm. Your enquiry has been logged against the regional engineering hub responsible for your area, and the engineer covering your region will be in touch within one business day to acknowledge it and schedule the site assessment.',
    body: `
      <p style="margin:0 0 16px;font-size:15px;color:#4A5158;">What happens next:</p>
      <ol style="margin:0 0 16px 0;padding-left:20px;font-size:14px;color:#4A5158;">
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">We acknowledge within one business day</strong>, by email or phone.</li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">An engineer is assigned by city</strong>, and becomes your single point of contact through to commissioning.</li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">A free site assessment is scheduled</strong>. The engineer maps your loads, operating hours, and structural details.</li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">A written design and quote arrives within two business days</strong> of the assessment. From there, decide on payment path and we book the install.</li>
      </ol>
      <p style="margin:0;font-size:15px;color:#4A5158;">In the meantime, the attached catalogue covers our full four-package line-up and what each one is sized for.</p>
    `,
    ctaUrl: 'https://precifarm.com/products/',
    ctaLabel: 'See the packages',
  });
}

function trainingReply(name) {
  return brandedShell({
    name,
    headline: 'Your training registration was received.',
    intro: 'Thanks for registering interest in a Precifarm EPRA T1, T2, or T3 cohort. We will contact you within two business days to confirm the next available cohort matching your tier and hub, share the published fee, and walk you through the EPRA application document pack you should start preparing.',
    body: `
      <p style="margin:0 0 16px;font-size:15px;color:#4A5158;">What happens next:</p>
      <ol style="margin:0 0 16px 0;padding-left:20px;font-size:14px;color:#4A5158;">
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">Acknowledgement within two business days</strong>, with the prerequisite checklist for your target tier.</li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">A short qualification call</strong> to confirm prior training, documented experience, and the right tier for your background.</li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">Cohort offer with dates, venue, and published fee.</strong></li>
        <li style="margin-bottom:8px;"><strong style="color:#0F2832;">On confirmation, enrolment and pre-cohort onboarding</strong>, with eLearning access and the EPRA application document pack.</li>
      </ol>
      <p style="margin:0;font-size:15px;color:#4A5158;">Registration does not commit you to enrolment. The attached catalogue covers our full product line and the training programme structure.</p>
    `,
    ctaUrl: 'https://precifarm.com/training/',
    ctaLabel: 'Review the training page',
  });
}

export async function handler(event) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('[submission-created] RESEND_API_KEY env var not set; skipping send.');
      return { statusCode: 200, body: 'No API key configured' };
    }

    const body = JSON.parse(event.body || '{}');
    const payload = body.payload || {};
    const data = payload.data || {};
    const formName = payload.form_name || data['form-name'] || '';
    const recipientEmail = (data.email || '').trim();
    const recipientName = (data.name || '').trim();

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
