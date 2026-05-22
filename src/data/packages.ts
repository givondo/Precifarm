export type PackageSlug = 'starter' | 'family' | 'commercial' | 'commercial-plus';

export type Package = {
  slug: PackageSlug;
  name: string;
  shortName: string;
  tagline: string;
  capacity: string;
  targetCustomer: string;
  dailyLoad: string;
  hardware: string;
  inverter: string;
  panels: string;
  cashPrice: string;
  financing: string;
  serviceTier: string;
  warranty: string;
  serviceCommitment: string;
  bestFor: string;
  startingPrice: string;
  isHighlighted?: boolean;
  whatYouGet: string[];
  faqs: { q: string; a: string }[];
};

export const packages: Package[] = [
  {
    slug: 'starter',
    name: 'Precifarm Starter',
    shortName: 'Starter',
    tagline: 'Independence from blackouts.',
    capacity: '550 W · 1.5 kWh',
    targetCustomer:
      'Single rooms, kibandas, small dwellings, boda riders, and renters who need reliable power without rewiring a whole house. The Starter package fits on a single wall and pays for itself by removing a KPLC bill or replacing nightly kerosene and candle costs.',
    dailyLoad: 'Approximately 0.6 kWh per day. Lights, Wi-Fi, TV, fans, phone charging.',
    hardware: 'One 550 W panel, a Neura Pod 1 (1.5 kWh), a 1.5 kW hybrid inverter.',
    inverter: '1.5 kW hybrid',
    panels: '1 × 550 W',
    cashPrice: 'KSh 95,000',
    financing: 'KSh 5,472 per month over 24 months on Lipa Pole Pole (KSh 12,500 deposit).',
    serviceTier: 'Standard',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year service commitment, same engineering team.',
    bestFor: 'Single-room households, kibandas, renters, boda riders',
    startingPrice: 'KSh 95,000 cash, or KSh 5,472/month',
    whatYouGet: [
      'One 550 W solar panel with mounting hardware',
      'Neura Pod 1 lithium storage (1.5 kWh)',
      '1.5 kW hybrid inverter, wall-mounted',
      'LED lighting circuit, phone and small-appliance sockets',
      'EPRA-licensed installation, typically same-day',
      'One-year workmanship warranty',
      'Five-year service commitment, same engineering team',
    ],
    faqs: [
      {
        q: 'What can I actually run on a Starter system?',
        a: 'Six to eight LED lights, a TV, Wi-Fi, two phone chargers, and a small fan, comfortably through an evening. The Starter is sized for the loads a single-room household actually uses.',
      },
      {
        q: 'How long does the install take?',
        a: 'Most Starter installs complete in a single day. Our crew arrives in the morning with all hardware on the truck and you have power that evening.',
      },
      {
        q: 'What happens if something stops working?',
        a: 'You call us. The same engineering team that designed and installed the system services it for five years. Your regional depot is never more than a same-day drive away.',
      },
      {
        q: 'Can I upgrade later?',
        a: 'Yes. Starter customers regularly move up to Family when household loads grow. The Neura Pod platform is the same across all four packages, so the upgrade path is straightforward.',
      },
    ],
  },
  {
    slug: 'family',
    name: 'Precifarm Family',
    shortName: 'Family',
    tagline: 'Off-grid 2 to 3 bedroom homes. Zero KPLC bills.',
    capacity: '900 W · 5 kWh',
    targetCustomer:
      'Off-grid 2 to 3 bedroom homes seeking independence from the grid. Family runs a small fridge, lighting, entertainment, and Wi-Fi day in and day out, with enough storage to ride through evening peaks and cloudy days.',
    dailyLoad: 'Approximately 3 kWh per day. Small fridge, TV, Wi-Fi, fans, full LED lighting.',
    hardware: 'Two 450 W panels (900 W expandable), Neura Pod 5 (5 kWh, expandable), 5 kW hybrid inverter.',
    inverter: '5 kW hybrid',
    panels: '2 × 450 W (expandable)',
    cashPrice: 'KSh 290,000 cash',
    financing: 'Bank financing customer-arranged via Equity, KCB, Co-op Bank, or SACCO partners.',
    serviceTier: 'Standard',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year service commitment, same engineering team.',
    bestFor: 'Off-grid 2 to 3 bedroom homes seeking independence from the grid',
    startingPrice: 'KSh 290,000 cash',
    whatYouGet: [
      'Two 450 W solar panels, mounted on roof or ground frame',
      'Neura Pod 5 lithium storage (5 kWh, expandable)',
      '5 kW hybrid inverter',
      'Whole-home wiring with dedicated circuits for fridge, lighting, and outlets',
      'EPRA-licensed installation, typically one to two days',
      'One-year workmanship warranty',
      'Five-year service commitment, same engineering team',
      'Expansion-ready: add panels and storage as household loads grow',
    ],
    faqs: [
      {
        q: 'Will Family run a fridge full-time?',
        a: 'Yes, a 100 to 150 litre energy-efficient fridge runs comfortably on Family, alongside lighting, entertainment, and Wi-Fi. We size the system against your actual fridge during the site assessment.',
      },
      {
        q: 'Can I add a borehole pump later?',
        a: 'If you anticipate a borehole or larger productive loads, we recommend stepping up to Commercial during the site assessment. We will tell you honestly which package fits your actual load profile.',
      },
      {
        q: 'How does bank financing work?',
        a: 'You arrange financing directly with Equity, KCB, Co-op Bank, or a SACCO using the written design and quote we provide. We do not lend or take a percentage of the loan; the relationship is between you and your bank.',
      },
      {
        q: 'What does the five-year service commitment cover?',
        a: 'Scheduled preventive maintenance visits, fault response from your regional depot, warranty management on hardware, and firmware updates on the Neura Pod. The same engineering team services your system across all five years.',
      },
    ],
  },
  {
    slug: 'commercial',
    name: 'Precifarm Commercial',
    shortName: 'Commercial',
    tagline: 'Solar that runs your operation.',
    capacity: 'From 2.75 kWp · 15 kWh',
    targetCustomer:
      'Schools, clinics, SMEs, cooperatives, and farms running borehole irrigation. Commercial is sized to keep an operation running, not just keep the lights on. Cold storage, milling, lodges, clinic loads, and irrigation across 5 to 45 acres are typical use cases.',
    dailyLoad:
      'Approximately 28 kWh per day typical. Cold storage, milling, lodges, clinic loads, irrigation across 5 to 45 acres with pumps up to 3 km from source.',
    hardware:
      'From 5 × 550 W (2.75 kWp) up to 24 × 550 W (13.2 kWp). Neura Pod 15 (15 kWh). Inverter from 10 kVA, scalable to 12 kW Deye hybrid.',
    inverter: 'From 10 kVA, scalable to 12 kW Deye hybrid',
    panels: 'From 5 × 550 W up to 24 × 550 W',
    cashPrice: 'From KSh 520,000 (bespoke after site survey)',
    financing: 'Bank financing customer-arranged via KCB Clean Energy and Stanbic Solar PV partner links.',
    serviceTier: 'Priority, on-site',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year service commitment, same engineering team.',
    bestFor: 'Schools, clinics, SMEs, cooperatives, farms with borehole irrigation',
    startingPrice: 'From KSh 520,000',
    whatYouGet: [
      'Solar array sized 2.75 kWp to 13.2 kWp against your measured load',
      'Neura Pod 15 lithium storage (15 kWh, expandable)',
      'Hybrid inverter from 10 kVA, scalable to 12 kW Deye',
      'Borehole or process integration where required',
      'Three-phase compatibility for milling and cold-storage loads',
      'EPRA-licensed installation, sequenced to avoid operational disruption',
      'One-year workmanship warranty',
      'Priority on-site service tier across the five-year commitment',
    ],
    faqs: [
      {
        q: 'How do you size a Commercial system for my operation?',
        a: 'We dispatch an engineer to your site. They map every load, every operating hour, and every seasonal peak. You receive a written design with a bill of quantities and sized array, storage, and inverter before any commitment.',
      },
      {
        q: 'Can Commercial run a borehole 3 km from source?',
        a: 'Yes. We design for borehole runs up to 3 km with surface or submersible pumps depending on the head and aquifer profile. Eastern-region farms in particular use this configuration regularly.',
      },
      {
        q: 'What does "priority service tier" mean in practice?',
        a: 'Faster response targets, scheduled preventive visits, and a named engineer at your regional depot who has worked on your system since installation. Commercial loads do not wait in the standard queue.',
      },
      {
        q: 'Do you replace the grid or supplement it?',
        a: 'Either, depending on your site. Most Commercial systems are hybrid: solar plus storage carries the daytime and shoulder loads, with the grid as backup. For grid-unreliable sites, we size to run fully off-grid.',
      },
      {
        q: 'Who arranges the bank financing?',
        a: 'You do, using our written design and quote. KCB Clean Energy and Stanbic Solar PV both have partner-bank links sized for Commercial systems. We do not take a financing margin.',
      },
    ],
  },
  {
    slug: 'commercial-plus',
    name: 'Precifarm Commercial Plus',
    shortName: 'Commercial Plus',
    tagline: 'Solar + storage + EV charging, under 1 MW.',
    capacity: '50 kWp to 1 MWp · 100 kWh to 2 MWh storage',
    targetCustomer:
      'Schools and clinics with EV charging needs, motorbike-fleet hubs, hospitality and fuel retail, industrial and SEZ tenants, multi-tenant residential. Commercial Plus is for sites that need on-site solar generation plus charging infrastructure sized to their fleet or visitor profile.',
    dailyLoad:
      '50 kWp to 1 MWp solar capacity, 100 kWh to 2 MWh storage, charging infrastructure sized to deployment archetype.',
    hardware:
      'Solar array sized 50 kWp to 1 MWp. Storage 100 kWh to 2 MWh. AC and DC charging points configured to the customer\'s deployment archetype.',
    inverter: 'Sized per deployment, hybrid configuration',
    panels: 'From 90 × 550 W up to ~1,800 × 550 W',
    cashPrice: 'From KSh 4 million (bespoke; up to KSh 80 million depending on configuration)',
    financing:
      'Customer-arranged commercial financing via partner banks (KCB Clean Energy, Stanbic Solar PV, Co-op Bank). Optional five-year operating-lease structure for institutional anchor sites.',
    serviceTier: 'Priority, on-site',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year EPC and O&M contract standard. Extended to ten years on industrial-scale deployments.',
    bestFor: 'EV-ready solar mini-grids under 1 MW across five deployment archetypes',
    startingPrice: 'From KSh 4 million',
    isHighlighted: true,
    whatYouGet: [
      'Solar array sized 50 kWp to 1 MWp against site demand',
      'Lithium storage from 100 kWh to 2 MWh',
      'AC and DC charging points configured to deployment archetype',
      'Hybrid inverter sized per deployment, three-phase',
      'Grid-interactive design where utility connection is available',
      'EPRA-licensed installation sequenced around site operations',
      'One-year workmanship warranty',
      'Five-year EPC and O&M contract standard; ten-year option on industrial sites',
      'Optional operating-lease structure for institutional anchor sites',
    ],
    faqs: [
      {
        q: 'What is the difference between Commercial and Commercial Plus?',
        a: 'Commercial powers an operation up to roughly 13 kWp. Commercial Plus is mini-grid scale (50 kWp to 1 MWp) and adds EV charging infrastructure as a first-class part of the design.',
      },
      {
        q: 'Which deployment archetypes are typical?',
        a: 'Five so far: peri-urban institutional anchor sites (schools and clinics), boda-boda and motorbike-fleet charging hubs, hospitality and fuel-station retrofits, industrial and SEZ tenant sites, and multi-tenant residential or gated estates.',
      },
      {
        q: 'How long does a Commercial Plus deployment take?',
        a: 'Site-dependent. A 50 kWp anchor site can be commissioned in two to four weeks. A 1 MWp industrial site is sequenced over several months with milestone commissioning.',
      },
      {
        q: 'Can we operate the EV chargers as a revenue line?',
        a: 'Yes. Boda-boda hubs and hospitality retrofits commonly run paid charging as a revenue line. We size the array, storage, and charger mix against the customer-flow profile during the site assessment.',
      },
      {
        q: 'What does the ten-year service option cover?',
        a: 'On industrial-scale deployments, the standard five-year EPC and O&M commitment extends to ten years. This covers preventive maintenance, warranty management, firmware updates, and on-site engineer response across the full decade.',
      },
      {
        q: 'How does the operating-lease structure work?',
        a: 'For institutional anchor sites (schools, clinics, ag cooperatives), Precifarm can own and operate the system for an agreed monthly fee, with the customer paying for the energy delivered. Useful where capital is constrained but the load profile is well understood.',
      },
    ],
  },
];

export type DeploymentArchetype = {
  title: string;
  description: string;
  solar: string;
  storage: string;
  charging: string;
};

export const commercialPlusArchetypes: DeploymentArchetype[] = [
  {
    title: 'Peri-urban institutional anchor sites',
    description: 'Schools, clinics, agricultural cooperatives. On-site solar and storage powering core operations, with charging available for staff, visitors, and institutional fleet.',
    solar: '50 to 200 kWp solar',
    storage: '100 to 400 kWh storage',
    charging: '2 to 4 AC charging points',
  },
  {
    title: 'Boda-boda and motorbike-fleet charging hubs',
    description: 'Dedicated charging infrastructure for electric motorbike fleets, with DC fast-charge or battery-swap bays. Often run as a paid-charging revenue line.',
    solar: '100 to 300 kWp solar',
    storage: '200 to 600 kWh storage',
    charging: '20 to 50 DC fast-charge or battery-swap bays',
  },
  {
    title: 'Hospitality and fuel-station retrofits',
    description: 'Lodges, hotels, and fuel retailers adding solar generation and charging amenities for guests and forecourt visitors. Charging becomes a draw, not just an expense.',
    solar: '100 to 500 kWp solar',
    storage: '200 kWh to 1 MWh storage',
    charging: '4 to 8 AC charge points plus 1 to 2 DC fast chargers',
  },
  {
    title: 'Industrial and SEZ tenant sites',
    description: 'Manufacturing, logistics, and special economic zone tenants charging delivery trucks, staff EVs, and forklifts on site. Larger storage smooths peak draw against grid limits.',
    solar: '300 kWp to 1 MWp solar',
    storage: '600 kWh to 2 MWh storage',
    charging: 'Fleet charging for delivery trucks, staff EVs, forklifts',
  },
  {
    title: 'Multi-tenant residential and gated estates',
    description: 'Distributed AC charging at resident parking bays, plus a shared array and storage spine covering common-area loads. Sized to the estate, not the unit.',
    solar: '100 to 400 kWp solar',
    storage: '200 to 800 kWh storage',
    charging: 'Distributed AC charging at 10 to 40 parking bays',
  },
];

export function getPackageBySlug(slug: PackageSlug): Package {
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) throw new Error(`Unknown package slug: ${slug}`);
  return pkg;
}
