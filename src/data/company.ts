export const company = {
  name: 'Precifarm AI Ltd',
  shortName: 'Precifarm',
  tagline: 'Solar built for Kenya.',
  oneLine:
    'EPRA-licensed EPC and O&M contractor delivering distributed solar and EV-ready charging across Kenya.',
  operatingPrinciple: 'Critical energy infrastructure demands lifelong accountability.',
  founded: 2025,
  incorporated: 'August 2025',
  headquarters: 'Nairobi, Kenya',
  email: 'sales@precifarm.com',
  phone: '+254 794 702 768',
  phoneE164: '+254794702768',
  whatsappLink: 'https://wa.me/254794702768',
  whatsappMessage:
    'Hello Precifarm, I would like to discuss a solar installation.',
  website: 'https://precifarm.com',
  copyright: `© ${new Date().getFullYear()} Precifarm AI Ltd. Headquartered in Nairobi.`,
  socials: {
    linkedin: 'https://www.linkedin.com/company/precifarm',
    // Add other platforms only after the accounts are confirmed live.
  },
} as const;

export const team = [
  {
    name: 'Sayia David Givondo',
    role: 'Lead Engineer and Co-Founder',
    bio: 'Registered Graduate Engineer (EBK B25264). B.Eng Agricultural and Biosystems Engineering, University of Eldoret (2021). Field Engineer at SunCulture Kenya 2023 to 2026, leading deployments across Kenya\'s arid and semi-arid lands. YALI Fellow. Designer of Precifarm\'s engineering operating model.',
    verified: true,
  },
  {
    name: 'Wycliffe Wabaye',
    role: 'CTO and Co-Founder',
    bio: 'Embedded firmware lead. Architect of Neura Pod control firmware and the over-the-air (OTA) update infrastructure operating across the six-city fleet, ensuring every installed system remains maintainable on a single firmware track.',
    verified: true,
  },
  {
    name: 'Amon Kipchirchir',
    role: 'Head of Operations and Co-Founder',
    bio: 'Water and civil infrastructure engineer. Leads borehole assessment, hydraulic system design, and the coordination of city-resident technical crews across all six operating hubs and the five Commercial Plus deployment archetypes.',
    verified: true,
  },
] as const;

export const beliefs = [
  {
    title: 'We stay after the install.',
    body: 'Solar should not be transactional. The team that designs your system is the team that services it. No subcontractor we never see again.',
  },
  {
    title: 'EPC and O&M as one obligation.',
    body: 'Engineering, procurement, construction, operations, and maintenance live in the same team. Most Kenyan installers sell EPC and walk away. We do not.',
  },
  {
    title: 'We grow on revenue, not capital.',
    body: 'No outside investors. No five-year plan that depends on someone else writing a cheque. We answer to the customers who pay our bills.',
  },
] as const;

export const audienceSegments = [
  'Schools',
  'Clinics',
  'SMEs',
  'Households',
  'Cooperatives',
  'Renters',
  'EV fleet operators',
  'Hospitality',
  'Industrial sites',
  'Multi-tenant residential',
] as const;

export const deploymentSteps = [
  {
    number: 1,
    title: 'Site audit',
    body: 'We dispatch an engineer to evaluate your roof structure, analyse your exact load requirements, and map your daily energy routine.',
  },
  {
    number: 2,
    title: 'Custom engineering',
    body: 'We size your solar array, lithium storage, and inverter capacity precisely. You receive a written design and bill of quantities before any commitment.',
  },
  {
    number: 3,
    title: 'Professional installation',
    body: 'Deployed by EPRA-licensed crews with all hardware on-site. Residential installs typically complete same-day; commercial sites are sequenced to avoid operational disruption.',
  },
  {
    number: 4,
    title: 'Five-year service',
    body: 'Scheduled preventive maintenance, fault response from your regional depot, warranty management handled by us. The same team across all five years.',
  },
] as const;

export const exampleInstallations = [
  {
    customer: 'A school in Kitui',
    package: 'Commercial',
    description:
      'A canopy array overhead, classrooms running below. Tablet charging through the morning, lights that hold for night classes, and two pumps keeping the school garden alive.',
    image: '/images/installations/school-kitui.jpg',
    alt: 'A solar-panel canopy mounted above an institutional building, illustrating the kind of Commercial deployment a Kenyan school would commission.',
  },
  {
    customer: 'A salon in Eldoret',
    package: 'Family',
    description:
      'Panels above, business below. Clippers, driers, and a drinks fridge running on stable power, every day, while the rest of the strip waits out the next blackout.',
    image: '/images/installations/salon-eldoret.jpg',
    alt: 'Rooftop solar panels on a small commercial building in warm afternoon light, illustrating the Family-tier system powering a small business.',
  },
  {
    customer: 'A boda rider in Mombasa',
    package: 'Starter',
    description:
      'A Starter package on the wall. Phone charged for every shift, lights on for the family at night, and the monthly KPLC bill is gone.',
    image: '/images/installations/boda-mombasa.jpg',
    alt: 'A small wall-mounted electrical installation with cabling and controllers, illustrating a Starter system on the wall of a single-room dwelling.',
  },
] as const;

export const trustBadges = [
  'Installed in 1 to 3 days',
  'Five-year service, same team',
  'EPRA-licensed throughout',
] as const;
