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
    // Fill these in with the live URLs once the accounts are confirmed.
    // Icons in the Header render conditionally on a truthy value, so an
    // empty string keeps the icon hidden until you paste the real URL.
    x: '', // e.g. 'https://x.com/precifarm'
    tiktok: '', // e.g. 'https://www.tiktok.com/@precifarm'
  },
} as const;

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
    slug: 'kitui-secondary-school',
    customer: 'Kitui Secondary School',
    title: 'Digital classrooms and dry-season water, on one solar system.',
    package: 'Commercial',
    region: 'Kitui County, Eastern region',
    capacity: '2.75 kWp PV · 15 kWh storage',
    loadProfile: 'Classrooms, tablets, borehole pumps, garden irrigation',
    description:
      'A 2.75 kWp solar system keeps tablets, classroom lighting, and the borehole running through grid outages and the dry season, with the overhead PV array doubling as a shaded teaching bay underneath. Designed, installed, and maintained by the same regional engineering crew under the five-year EPC and O&M commitment.',
    image: '/images/installations/school-kitui.jpg',
    alt: 'The Kitui Secondary School Solar PV Installation: a steel-framed overhead solar PV array mounted above an open-air classroom in the Kitui semi-arid landscape, with students at desks studying underneath, irrigation tanks and a planted school garden visible to the right, and additional school buildings with rooftop solar in the background. Project signage on the support column reads "Kitui Secondary School: Solar PV Installation, capacity 2.75 kWp PV / 15 kWh storage, load classrooms, tablets, water pumps, five-year EPC and O&M commitment."',
  },
  {
    slug: 'eldo-shine-salon',
    customer: 'Eldo Shine Salon',
    title: 'Cuts that never stop mid-customer.',
    package: 'Family',
    region: 'Uasin Gishu County, Rift Valley',
    capacity: '900 W PV · 5 kWh storage',
    loadProfile: 'Clippers, driers, drinks fridge, full lighting',
    description:
      'Five kWh of storage keeps the clippers, driers, drinks fridge, and lighting running across every grid outage, so the salon trades and earns while the rest of the strip waits for power. The same Precifarm crew on design, install, and five-year O&M.',
    image: '/images/installations/salon-eldoret.jpg',
    alt: 'The Eldo Shine Salon in Uasin Gishu: a small commercial shopfront with rooftop solar panels visible above the unit, brightly lit interior showing barbers at work on customers with a drinks fridge in view, and exterior signage reading "Eldo Shine Salon, 900W PV - 5 kWh Storage, 100% reliable power even during blackouts, serving Uasin Gishu daily."',
  },
  {
    slug: 'mombasa-boda-system',
    customer: 'Mombasa Integrated Solar and EV Boda System',
    title: 'Petrol off the boda balance sheet.',
    package: 'Starter',
    region: 'Mombasa County, Coast',
    capacity: '1.5 kWh storage · EV charging',
    loadProfile: 'Boda boda charging, evening lighting, phone charging',
    description:
      'A shared solar PV and storage system charges the electric boda fleet at near-zero fuel cost, while 1.5 kWh of evening storage keeps the stage safely lit after sunset and powers a paid phone-charging line. EV-ready architecture in operation, on the five-year EPC and O&M commitment.',
    image: '/images/installations/boda-mombasa.jpg',
    alt: 'The Mombasa Integrated Solar and EV Boda System: a steel-framed solar carport with two boda boda motorbikes parked beneath it, a dedicated EV charging point with cable in use, a wall-mounted hybrid inverter and small lithium storage cabinet to the side, and signage on the column reading "Mombasa Integrated Solar & EV Boda System." A family is visible in the adjacent building.',
  },
] as const;

export const trustBadges = [
  'Installed in 1 to 3 days',
  'Five-year service, same team',
  'EPRA-licensed throughout',
] as const;
