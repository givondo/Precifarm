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
  image: { src: string; alt: string };
  // Optional override used on small card surfaces (PackageCard on the homepage
  // and the /products/ overview grid). If unset, the card falls back to image.
  // Used so a product can carry a clean studio kit shot on the card and a
  // location-context photo on the detail-page hero.
  cardImage?: { src: string; alt: string };
  // "Best for" detail block surfaced on the product detail page beneath the
  // bestFor heading. Each package describes what it powers; the residential
  // and commercial tiers also describe irrigation support; Commercial Plus
  // describes its designed-for use cases instead of irrigation.
  powers?: string;
  irrigationSupport?: string;
  irrigationNote?: string;
  designedFor?: string;
};

export const packages: Package[] = [
  {
    slug: 'starter',
    name: 'Precifarm Starter',
    shortName: 'Starter',
    tagline: 'Independence from blackouts.',
    capacity: '550 W · 1.5 kWh',
    targetCustomer:
      'Most Kenyan households start small. The Starter Neura Pod is the entry into Precifarm\'s distributed-storage architecture. 550 W of solar, 1.5 kWh of battery storage, in a single wall-mounted enclosure. Lights, Wi-Fi, fans, charging, basic appliances. Available on Lipa Pole Pole PAYG. Upgrades happen by swapping the Pod, not by rewiring the property.',
    dailyLoad: 'Approximately 0.6 kWh per day. Lights, Wi-Fi, TV, fans, phone charging.',
    hardware: 'One 550 W panel, a Neura Pod 1 (1.5 kWh), a 1.5 kW hybrid inverter.',
    inverter: '1.5 kW hybrid',
    panels: '1 × 550 W',
    cashPrice: 'KSh 95,000',
    financing: 'KSh 5,472 per month over 24 months on Lipa Pole Pole (KSh 12,500 deposit).',
    serviceTier: 'Standard',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year service commitment, same engineering team.',
    bestFor: 'Single-room homes, kiosks, renters, boda riders',
    powers: 'Up to 10 LED bulbs, 1 TV, Wi-Fi router, phone charging, and 1 small fan (8 to 12 hours per day depending on usage).',
    irrigationSupport: 'Up to 1 acre of irrigation water supply (approximately 10,000 litres per day).',
    irrigationNote: 'Irrigation pump is not included in the package.',
    startingPrice: 'KSh 95,000 cash, or KSh 5,472/month',
    image: {
      src: '/images/packages/starter-home.jpg',
      alt: 'Solar panels mounted on the corrugated iron roof of a rural Kenyan home at golden hour, with the Precifarm service vehicle parked along the dirt road behind and acacia trees scattered across the landscape. This is what the Starter package looks like in its real operating environment: small enough to fit on a single roof, sized to take a single-room household off-grid, and installed in a single working day by the regional engineering crew that will return to service the system for the next five years.',
    },
    cardImage: {
      src: '/images/packages/starter-card.jpg',
      alt: 'The complete Precifarm Starter kit assembled for delivery: a single high-efficiency monocrystalline solar panel standing upright, a Vestwoods by Haier Energy lithium power station, and a coiled set of red and black PV cables ready for the wall-mount installation.',
    },
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
    capacity: '2.2 kWp · 5 kWh',
    targetCustomer:
      'Two-to-three bedroom households want independence from KPLC outage cycles. The Family Neura Pod delivers it. 2.2 kWp of solar, 5 kWh of battery storage, in one replaceable enclosure. Fridge, full lighting, entertainment, Wi-Fi, fans, daily routine carried through grid interruptions. Bank facilities with Equity, KCB, Co-op, and SACCOs. EV-ready when vehicle charging is added.',
    dailyLoad: 'Approximately 5 to 6 kWh per day. Fridge, full LED lighting, entertainment, Wi-Fi, fans, and small appliances.',
    hardware: 'Four 550 W panels (2.2 kWp expandable), Neura Pod 5 (5 kWh, expandable), 5 kW hybrid inverter.',
    inverter: '5 kW hybrid',
    panels: '4 × 550 W (expandable)',
    cashPrice: 'KSh 290,000 cash',
    financing: 'Bank financing customer-arranged via Equity, KCB, Co-op Bank, or SACCO partners.',
    serviceTier: 'Standard',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year service commitment, same engineering team.',
    bestFor: 'Two to three bedroom off-grid homes seeking reliable full-day power',
    powers: '10 to 20 LED bulbs across the home, 1 energy-efficient fridge, 1 TV, Wi-Fi router, 2 to 3 fans, phone charging, and small appliances (used at different times).',
    irrigationSupport: 'Up to 2 acres of irrigation water supply (approximately 25,000 litres per day).',
    irrigationNote: 'Irrigation pump is not included in the package.',
    startingPrice: 'KSh 290,000 cash',
    image: {
      src: '/images/packages/family-rooftop.jpg',
      alt: 'A Precifarm installer in a high-visibility orange safety vest walks across the red corrugated iron roof of a typical Kenyan home, having just finished commissioning the array of solar panels mounted across the rooftop alongside the chimney. The Family package sits on roofs like this across the country, sized to keep a two-to-three bedroom household running independently of the grid, with the same engineer returning to service the system across each year of the five-year commitment.',
    },
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
      'Schools, clinics, SMEs, cooperatives, and farms with borehole irrigation require continuous power, not intermittent. The Commercial Neura Pod runs them. From 2.75 kWp up to 13.2 kWp of solar, 15 kWh of battery storage, 12 kW hybrid inverter, borehole capability to 3 km. Cold storage, milling, lodges, clinic loads, irrigation across 5 to 45 acres. Bank facilities through KCB Clean Energy and Stanbic Solar PV.',
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
    bestFor: 'Schools, clinics, SMEs, cooperatives, irrigation farms',
    powers: 'Multi-room lighting systems, refrigeration (clinics and shops), water pumping systems, milling or processing equipment, and productive farm or enterprise loads.',
    irrigationSupport: 'Designed for 5 to 45 acres depending on site energy requirements and system configuration.',
    irrigationNote: 'Irrigation pump is not included unless specified in the project scope.',
    startingPrice: 'From KSh 520,000',
    image: {
      src: '/images/packages/commercial-school.jpg',
      alt: 'Four monocrystalline solar panels stand alongside a wall-mounted hybrid solar inverter, six stacked lithium battery units, and the DC and AC cabling that connects them, laid out as a complete kit. This is the hardware specification of a Precifarm Commercial-tier system: the configuration a school, clinic, agricultural cooperative, or small commercial operator receives when commissioning a fifteen-kilowatt-hour deployment built to keep operations running through grid interruptions and through the night.',
    },
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
    tagline: 'Sub-megawatt solar, lithium storage, and EV charging delivered as one integrated EPC and O&M contract.',
    capacity: '50 kWp to 1 MWp · 100 kWh to 2 MWh storage',
    targetCustomer:
      'Commercial Plus is the contractor engagement for sites that need on-site solar generation, lithium storage, and EV charging delivered as a single integrated installation under one engineering contract. The five recurring deployment archetypes are peri-urban institutional anchor sites (schools, clinics, and agricultural cooperatives) with on-site charging needs; electric-motorbike fleet and battery-swap operators such as Roam, Spiro, Ampersand, and ARC Ride; hospitality and fuel-retail sites adding charging amenities; industrial and special economic zone tenants electrifying logistics fleets and forklifts; and multi-tenant residential property managers serving resident vehicles from a shared array and storage spine.',
    dailyLoad:
      'Highly variable by deployment archetype: institutional anchor sites typically run classroom, clinic, and cooperative loads plus 2-4 AC charging points; fleet hubs run continuous DC fast-charge or battery-swap rotations; industrial sites smooth peak draw against grid limits while charging delivery vehicles overnight.',
    hardware:
      'Tier-1 mono PV (from approximately 90 panels at the entry tier up to roughly 1,800 panels at the 1 MWp ceiling); hybrid three-phase inverter sized per deployment; lithium iron phosphate (LFP) battery storage in modular cabinets; AC charging stations from 7 kW to 22 kW; DC fast chargers from 30 kW to 180 kW; grid-interactive controls where utility interconnection and net-metering are available.',
    inverter: 'Sized per deployment, hybrid configuration',
    panels: 'From 90 × 550 W up to ~1,800 × 550 W',
    cashPrice: 'From KSh 4 million (bespoke; up to KSh 80 million depending on configuration)',
    financing:
      'Customer-arranged commercial financing via partner banks (KCB Clean Energy, Stanbic Solar PV, Co-op Bank). Optional five-year operating-lease structure for institutional anchor sites.',
    serviceTier: 'Priority, on-site',
    warranty: 'One-year workmanship warranty',
    serviceCommitment: 'Five-year EPC and O&M contract standard. Extended to ten years on industrial-scale deployments.',
    bestFor: 'EV-ready mini-grids, industrial sites, fleets, campuses',
    powers: 'Large facilities, workshops, agro-processing units, cold storage clusters, ICT systems, and EV charging infrastructure (multi-point charging possible).',
    designedFor: 'Distributed energy systems, continuous industrial loads, and fleet charging operations at scale.',
    startingPrice: 'From KSh 4 million',
    isHighlighted: true,
    image: {
      src: '/images/packages/commercial-plus-array.jpg',
      alt: 'An aerial perspective of an industrial warehouse with its entire roof surface covered in solar PV panels arranged in a continuous gridded array, with the surrounding landscape and tree line visible beyond the building footprint. This is what a Commercial Plus deployment looks like at the upper end of its scale, where a single Precifarm installation can generate up to one megawatt of on-site solar power for an industrial tenant, a special economic zone operator, a hospitality or fuel-retail site, or a logistics fleet depot.',
    },
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
    description: 'Dedicated charging infrastructure for electric motorbike fleets and battery-swap operators such as Roam, Spiro, Ampersand, and ARC Ride. DC fast-charge or battery-swap bays sized to fleet rotation. Often run as a paid-charging revenue line.',
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
    description: 'Manufacturing, logistics, and special economic zone tenants charging delivery trucks, staff EVs, and forklifts on site. Logistics-fleet operators such as BasiGo electric-bus depots and SEZ tenants fit this profile. Larger storage smooths peak draw against grid limits.',
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

// Price display helpers. Only Starter and Family carry firm cash prices on
// the public site; Commercial and Commercial Plus are sized at the site
// assessment and the price is issued in writing afterwards. Surfacing a
// "from" figure for those two tiers misleads on bigger configurations,
// so they show "On quotation basis" everywhere a price would otherwise
// render. Internal pricing remains in cashPrice / startingPrice on the
// Package object for engineering reference and structured data.
const QUOTE_ONLY_SLUGS: PackageSlug[] = ['commercial', 'commercial-plus'];
const QUOTE_LABEL = 'On quotation basis';

export function isQuoteOnly(pkg: Package): boolean {
  return QUOTE_ONLY_SLUGS.includes(pkg.slug);
}

export function getStartingPriceDisplay(pkg: Package): string {
  return isQuoteOnly(pkg) ? QUOTE_LABEL : pkg.startingPrice;
}

export function getCashPriceDisplay(pkg: Package): string {
  return isQuoteOnly(pkg) ? QUOTE_LABEL : pkg.cashPrice;
}
