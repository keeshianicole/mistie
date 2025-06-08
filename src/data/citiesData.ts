import { OutboundLink } from '../types/common';

export interface City {
  id: string;
  name: string;
  slug: string;
  description?: string;
  floodRisk?: string;
  waterTable?: string;
  commonIssues?: string[];
  landmarks?: string[];
  outboundLinks?: OutboundLink[];
}

const existingCities: City[] = [
  {
    id: "1",
    name: "Allendale",
    slug: "allendale",
    description: "A suburban community with varying terrain that presents unique basement water management challenges.",
    floodRisk: "moderate",
    waterTable: "moderate to high",
    commonIssues: [
      "Seasonal flooding during heavy rains",
      "High water table in certain areas",
      "Storm-related power outages"
    ]
  },
  {
    id: "2",
    name: "Alpine",
    slug: "alpine",
    description: "Located along the Palisades, Alpine properties often face unique drainage challenges due to elevation changes.",
    floodRisk: "moderate",
    waterTable: "varies by elevation",
    commonIssues: [
      "Cliff-side water management",
      "Underground spring activity",
      "Storm runoff issues"
    ]
  },
  {
    id: "3",
    name: "Bergenfield",
    slug: "bergenfield",
    description: "A densely populated area with diverse housing stock and varying basement conditions.",
    floodRisk: "moderate to high",
    waterTable: "high in some areas",
    commonIssues: [
      "Urban flooding during storms",
      "Aging sump pump systems",
      "Power outage concerns"
    ]
  },
  {
    id: "4",
    name: "Bogota",
    slug: "bogota",
    description: "Located near the Hackensack River, Bogota properties often face river-related water challenges.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River-related flooding",
      "Storm surge issues",
      "Frequent pump operation"
    ]
  },
  {
    id: "5",
    name: "Carlstadt",
    slug: "carlstadt",
    description: "A mix of residential and industrial areas with unique water management needs.",
    floodRisk: "moderate to high",
    waterTable: "high",
    commonIssues: [
      "Industrial area drainage",
      "Meadowlands proximity effects",
      "Complex water table management"
    ]
  },
  {
    id: "6",
    name: "Closter",
    slug: "closter",
    description: "A suburban community with varied topography affecting basement water management.",
    floodRisk: "moderate",
    waterTable: "varies by location",
    commonIssues: [
      "Hill runoff management",
      "Spring water intrusion",
      "Storm drainage challenges"
    ]
  },
  {
    id: "7",
    name: "Cresskill",
    slug: "cresskill",
    description: "Features both highland and lowland areas with different water management needs.",
    floodRisk: "moderate",
    waterTable: "varies by elevation",
    commonIssues: [
      "Elevation-based flooding",
      "Natural spring activity",
      "Storm water management"
    ]
  },
  {
    id: "8",
    name: "Dumont",
    slug: "dumont",
    description: "A residential community with established neighborhoods and varying basement conditions.",
    floodRisk: "moderate",
    waterTable: "moderate",
    commonIssues: [
      "Aging home infrastructure",
      "Storm water backup",
      "System maintenance needs"
    ]
  },
  {
    id: "9",
    name: "Elmwood Park",
    slug: "elmwood-park",
    description: "Located along the Passaic River, requiring robust water management solutions.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River flooding concerns",
      "High water table management",
      "Emergency response needs"
    ]
  },
  {
    id: "10",
    name: "Emerson",
    slug: "emerson",
    description: "A suburban town with various water management challenges based on location.",
    floodRisk: "moderate",
    waterTable: "moderate to high",
    commonIssues: [
      "Local flooding issues",
      "Drainage system maintenance",
      "Power reliability concerns"
    ]
  },
  {
    id: "11",
    name: "Englewood",
    slug: "englewood",
    description: "A diverse city with varying elevation and water management needs.",
    floodRisk: "moderate to high",
    waterTable: "varies by area",
    commonIssues: [
      "Urban drainage challenges",
      "Historic home systems",
      "Storm preparation needs"
    ]
  },
  {
    id: "12",
    name: "Fair Lawn",
    slug: "fair-lawn",
    description: "Located between two rivers, requiring comprehensive water management solutions.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River proximity issues",
      "Storm surge management",
      "Backup system needs"
    ]
  },
  {
    id: "13",
    name: "Fort Lee",
    slug: "fort-lee",
    description: "High-density area with unique water management challenges due to elevation and development.",
    floodRisk: "moderate",
    waterTable: "varies by location",
    commonIssues: [
      "High-rise building systems",
      "Cliff-side drainage",
      "Urban flooding concerns"
    ]
  },
  {
    id: "14",
    name: "Franklin Lakes",
    slug: "franklin-lakes",
    description: "Large residential lots with varying terrain and water management needs.",
    floodRisk: "moderate",
    waterTable: "varies by area",
    commonIssues: [
      "Lake proximity challenges",
      "Large property drainage",
      "System sizing requirements"
    ]
  },
  {
    id: "15",
    name: "Glen Rock",
    slug: "glen-rock",
    description: "Suburban area with unique geological features affecting water management.",
    floodRisk: "moderate",
    waterTable: "moderate",
    commonIssues: [
      "Rock formation impacts",
      "Storm water routing",
      "System maintenance needs"
    ]
  }
];

const additionalCities: City[] = [
  {
    id: "16",
    name: "Hackensack",
    slug: "hackensack",
    description: "County seat with diverse residential areas and proximity to the Hackensack River.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River flooding concerns",
      "Urban drainage challenges",
      "Emergency response needs"
    ],
    landmarks: ["Hackensack University Medical Center", "Bergen County Courthouse", "The Shops at Riverside"]
  },
  {
    id: "17",
    name: "Hasbrouck Heights",
    slug: "hasbrouck-heights",
    description: "Elevated community with unique drainage requirements due to terrain.",
    floodRisk: "moderate",
    waterTable: "varies by location",
    commonIssues: [
      "Hill runoff management",
      "Storm drainage systems",
      "Power outage preparation"
    ]
  },
  {
    id: "18",
    name: "Hillsdale",
    slug: "hillsdale",
    description: "Suburban community with varying elevations affecting water management.",
    floodRisk: "moderate",
    waterTable: "moderate",
    commonIssues: [
      "Pascack Brook flooding",
      "Storm water management",
      "System maintenance needs"
    ]
  },
  {
    id: "19",
    name: "Ho-Ho-Kus",
    slug: "ho-ho-kus",
    description: "Historic area with unique water management challenges due to age and architecture.",
    floodRisk: "moderate",
    waterTable: "varies by area",
    commonIssues: [
      "Historic home systems",
      "Stream proximity issues",
      "Drainage system updates"
    ]
  },
  {
    id: "20",
    name: "Leonia",
    slug: "leonia",
    description: "Dense suburban area with varied water management needs.",
    floodRisk: "moderate",
    waterTable: "moderate to high",
    commonIssues: [
      "Urban flooding concerns",
      "Aging infrastructure",
      "Storm preparation needs"
    ]
  },
  {
    id: "21",
    name: "Little Ferry",
    slug: "little-ferry",
    description: "Located in the Hackensack River flood plain requiring robust water management.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River flooding risks",
      "Storm surge protection",
      "Emergency backup needs"
    ]
  },
  {
    id: "22",
    name: "Lodi",
    slug: "lodi",
    description: "Mixed residential and commercial area near the Saddle River.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River proximity challenges",
      "Urban flooding issues",
      "System capacity needs"
    ]
  },
  {
    id: "23",
    name: "Lyndhurst",
    slug: "lyndhurst",
    description: "Meadowlands community with significant water management requirements.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "Meadowlands flooding",
      "Tidal influence effects",
      "Backup system importance"
    ]
  },
  {
    id: "24",
    name: "Mahwah",
    slug: "mahwah",
    description: "Large township with varied terrain and water management challenges.",
    floodRisk: "moderate to high",
    waterTable: "varies by location",
    commonIssues: [
      "Mountain runoff management",
      "River proximity issues",
      "Large property systems"
    ],
    landmarks: ["Ramapo College", "Mahwah Mountains", "Ramapo Valley County Reservation"]
  },
  {
    id: "25",
    name: "Maywood",
    slug: "maywood",
    description: "Residential community along the Saddle River requiring reliable water management.",
    floodRisk: "high",
    waterTable: "high",
    commonIssues: [
      "River flooding concerns",
      "Storm water management",
      "Emergency response needs"
    ]
  }
];

// Combine existing and additional cities
export const bergenCountyCities: City[] = [...existingCities, ...additionalCities];

export const getCityBySlug = (slug: string): City | undefined => {
  return bergenCountyCities.find(city => city.slug === slug);
};

export const getNearbyCities = (currentSlug: string, limit: number = 5): City[] => {
  const currentCityIndex = bergenCountyCities.findIndex(city => city.slug === currentSlug);
  if (currentCityIndex === -1) return [];
  
  const cities = [...bergenCountyCities];
  cities.splice(currentCityIndex, 1);
  
  return cities.slice(0, limit);
};