export type CitySlug = 'nairobi' | 'mombasa' | 'kisumu' | 'eldoret' | 'kitui' | 'nakuru';

export type City = {
  slug: CitySlug;
  name: string;
  region: string;
  role: 'HQ' | 'Field hub';
  shortNote: string;
  capabilities: string[];
  localCapability: string;
  customerSegments: string[];
};

export const cities: City[] = [
  {
    slug: 'nairobi',
    name: 'Nairobi',
    region: 'Central',
    role: 'HQ',
    shortNote:
      'Engineering and operations headquarters. All four packages, including Commercial Plus EV-ready deployments.',
    capabilities: [
      'Engineering team',
      'Operations centre',
      'Regional spare-parts depot',
      'All four packages',
      'Commercial Plus pilots',
    ],
    localCapability:
      'Nairobi is Precifarm headquarters. The full engineering team, operations centre, and primary spare-parts depot are based here. All four packages are designed, dispatched, and serviced from this office, and Commercial Plus pilots run from Nairobi before sequencing into the field-hub cities.',
    customerSegments: [
      'Households in Nairobi and the surrounding satellite towns',
      'Schools and clinics across Nairobi County',
      'SMEs in industrial areas',
      'Hospitality and multi-tenant residential estates',
      'Boda-boda and motorbike-fleet operators (Commercial Plus pilot work)',
    ],
  },
  {
    slug: 'mombasa',
    name: 'Mombasa',
    region: 'Coast',
    role: 'Field hub',
    shortNote: 'Coast region service. Resident engineering team and regional depot.',
    capabilities: ['Resident engineering team', 'Regional spare-parts depot', 'All four packages'],
    localCapability:
      'The Mombasa field hub serves the entire Coast region with a resident engineering team and a regional spare-parts depot. Coastal salt loading and humidity drive different hardware selection and corrosion-resistance specs, which the local team has accumulated experience handling.',
    customerSegments: [
      'Coastal households, including renters and boda riders (Starter)',
      'Family homes in Mombasa, Kilifi, and Kwale',
      'Coastal hospitality and clinic loads',
      'Salons and small businesses in commercial centres',
    ],
  },
  {
    slug: 'kisumu',
    name: 'Kisumu',
    region: 'Western',
    role: 'Field hub',
    shortNote: 'Western region service. Resident engineering team and regional depot.',
    capabilities: ['Resident engineering team', 'Regional spare-parts depot', 'All four packages'],
    localCapability:
      'The Kisumu field hub serves the Western region with a resident engineering team and a regional spare-parts depot. Strong cooperative sector and lakeside hospitality loads shape what the local team installs most often.',
    customerSegments: [
      'Households across Kisumu, Vihiga, Siaya, Homa Bay',
      'Schools and clinics across the Western counties',
      'Agricultural cooperatives running cold-chain and processing loads',
      'Lakeside hospitality and small lodges',
    ],
  },
  {
    slug: 'eldoret',
    name: 'Eldoret',
    region: 'Rift Valley',
    role: 'Field hub',
    shortNote: 'Rift Valley service. Resident engineering team and regional depot.',
    capabilities: ['Resident engineering team', 'Regional spare-parts depot', 'All four packages'],
    localCapability:
      'The Eldoret field hub serves the Rift Valley region with a resident engineering team and a regional spare-parts depot. Highland agricultural loads, milling cooperatives, and a growing SME corridor shape what the local team handles day to day.',
    customerSegments: [
      'Households across Uasin Gishu, Trans-Nzoia, Nandi',
      'Family-run salons, shops, and small businesses',
      'Schools and clinics across the Rift counties',
      'Milling cooperatives and grain processors',
    ],
  },
  {
    slug: 'kitui',
    name: 'Kitui',
    region: 'Eastern',
    role: 'Field hub',
    shortNote:
      'Eastern region service. Resident engineering team and regional depot. Strong borehole-irrigation segment.',
    capabilities: [
      'Resident engineering team',
      'Regional spare-parts depot',
      'All four packages',
      'Borehole irrigation specialism',
    ],
    localCapability:
      'The Kitui field hub serves the Eastern region with a resident engineering team, a regional spare-parts depot, and a specialism in borehole irrigation. Commercial systems with boreholes up to 3 km from source are routine work here. The Eastern aquifer and irrigation profile is where Precifarm engineering put in much of its early field hours.',
    customerSegments: [
      'Households across Kitui, Machakos, Makueni',
      'Schools and clinics in semi-arid catchments',
      'Farms running borehole irrigation across 5 to 45 acres',
      'Agricultural cooperatives and small-holder consolidations',
    ],
  },
  {
    slug: 'nakuru',
    name: 'Nakuru',
    region: 'Central Rift',
    role: 'Field hub',
    shortNote: 'Central Rift service. Resident engineering team and regional depot.',
    capabilities: ['Resident engineering team', 'Regional spare-parts depot', 'All four packages'],
    localCapability:
      'The Nakuru field hub serves the Central Rift with a resident engineering team and a regional spare-parts depot. Mixed urban-residential, agricultural, and hospitality loads define the customer mix here.',
    customerSegments: [
      'Households across Nakuru, Naivasha, Gilgil',
      'Family homes and small-business owners',
      'Hospitality and conferencing loads around the Rift Valley lakes',
      'Schools and clinics across Nakuru County',
    ],
  },
];

export function getCityBySlug(slug: CitySlug): City {
  const city = cities.find((c) => c.slug === slug);
  if (!city) throw new Error(`Unknown city slug: ${slug}`);
  return city;
}
