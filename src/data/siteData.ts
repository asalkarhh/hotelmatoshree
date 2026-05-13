export type FranchiseType = "hotel" | "tea";

export type NavigationLink = {
  label: string;
  to: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type Branch = {
  id: string;
  vertical: FranchiseType;
  name: string;
  city: string;
  locality: string;
  address: string;
  timings: string;
  format: string;
  specialty: string;
  note: string;
  image: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge: string;
};

export type MenuSectionData = {
  id: string;
  vertical: FranchiseType;
  title: string;
  kicker: string;
  summary: string;
  items: MenuItem[];
};

export type GalleryItem = {
  id: string;
  label: string;
  title: string;
  caption: string;
  image: string;
};

export type FranchiseOffer = {
  eyebrow: string;
  title: string;
  description: string;
  investment: string;
  area: string;
  payback: string;
  highlights: string[];
  support: string[];
  formats: string[];
  audience: string[];
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Hotel Franchise", to: "/hotel-franchise" },
  { label: "Tea Franchise", to: "/tea-franchise" },
  { label: "Branches", to: "/branches" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Franchise Inquiry", to: "/franchise-inquiry" },
  { label: "Contact", to: "/contact" },
];

export const footerHotelLinks: NavigationLink[] = [
  { label: "Hotel Franchise Model", to: "/hotel-franchise" },
  { label: "Hotel Menu Preview", to: "/menu" },
  { label: "Hotel Branches", to: "/branches" },
];

export const footerTeaLinks: NavigationLink[] = [
  { label: "Tea Franchise Model", to: "/tea-franchise" },
  { label: "Tea Gallery", to: "/gallery" },
  { label: "Inquiry Form", to: "/franchise-inquiry" },
];

export const contactInfo = {
  brand: "Matoshree Group",
  tagline: "Assal swad, garam atithya, ani smart franchise growth.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "hello@matoshreegroup.in",
  address: "Balewadi High Street, Pune, Maharashtra",
  mapLink: "https://maps.google.com/?q=Balewadi+High+Street+Pune",
  hours: "Daily | 9:00 AM to 10:30 PM",
  instagram: "https://instagram.com/matoshreegroup",
};

export const homeStats: Stat[] = [
  { label: "Active outlets", value: "18+" },
  { label: "Cities in play", value: "7" },
  { label: "Launch support days", value: "45" },
  { label: "Daily guest touchpoints", value: "4.8K" },
];

export const aboutPillars: FeatureCard[] = [
  {
    title: "Marathi warmth, modern polish",
    description:
      "Brand language local feel deto, pan presentation premium aahe so both family guests and franchise partners connect quickly.",
  },
  {
    title: "Two verticals, one umbrella",
    description:
      "Hotel and tea donhi models ekach group framework madhe aahet, mhanun expansion story more flexible bante.",
  },
  {
    title: "Operations first thinking",
    description:
      "Kitchen flow, service rhythm, menu engineering, and launch checklist already process-friendly format madhe tayar aahet.",
  },
];

export const partnerJourney = [
  {
    step: "01",
    title: "Discovery call",
    description: "City, budget, footprint, ani ideal franchise format samjun ghetla jato.",
  },
  {
    step: "02",
    title: "Model fit and location review",
    description: "Hotel ki tea vertical better suit hoto te practical demand angle ne decide karto.",
  },
  {
    step: "03",
    title: "Launch prep",
    description: "Interiors, vendor setup, training, menu prep, ani marketing creatives parallel run hotat.",
  },
  {
    step: "04",
    title: "Opening support",
    description: "Ground launch, trial feedback, ani first month handholding mule confidence build hoto.",
  },
];

export const hotelBranches: Branch[] = [
  {
    id: "hotel-pune",
    vertical: "hotel",
    name: "Matoshree Signature Dining",
    city: "Pune",
    locality: "Balewadi",
    address: "Near High Street Circle, Balewadi, Pune",
    timings: "11:00 AM to 11:30 PM",
    format: "Flagship dine-in + delivery",
    specialty: "Kolhapuri thali, tandoor platters, family dining",
    note: "Evening family dining and corporate lunch crowd give this store strong average billing.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-nashik",
    vertical: "hotel",
    name: "Matoshree Highway Feast",
    city: "Nashik",
    locality: "Mumbai Naka",
    address: "Service Road, Mumbai Naka, Nashik",
    timings: "10:30 AM to 11:00 PM",
    format: "High street family restaurant",
    specialty: "Traveller buffet and combo meals",
    note: "Highway movement creates strong weekend volume and consistent family group orders.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-kolhapur",
    vertical: "hotel",
    name: "Matoshree Spice Courtyard",
    city: "Kolhapur",
    locality: "Shahupuri",
    address: "2nd Lane, Shahupuri, Kolhapur",
    timings: "11:30 AM to 11:30 PM",
    format: "City centre premium casual",
    specialty: "Spice-forward gravies and weekend live counter",
    note: "The menu gives a local yet premium identity, which helps brand memory stay sharp.",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const teaBranches: Branch[] = [
  {
    id: "tea-pune",
    vertical: "tea",
    name: "Matoshree Chai Studio",
    city: "Pune",
    locality: "Kothrud",
    address: "Paud Road Corner, Kothrud, Pune",
    timings: "7:00 AM to 11:00 PM",
    format: "Kiosk + standing cafe",
    specialty: "Kesar chai, bun maska, office break adda",
    note: "Morning commuter traffic keeps cup rotation high and snack add-ons moving.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-aurangabad",
    vertical: "tea",
    name: "Matoshree Tapri Royale",
    city: "Chhatrapati Sambhajinagar",
    locality: "CIDCO",
    address: "Town Center, CIDCO, Chhatrapati Sambhajinagar",
    timings: "7:30 AM to 10:30 PM",
    format: "Compact lounge format",
    specialty: "Cutting chai, toasties, youth hangout",
    note: "Low capex and repeat orders make this format appealing for first-time operators.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-thane",
    vertical: "tea",
    name: "Matoshree Brew Station",
    city: "Thane",
    locality: "Hiranandani Estate",
    address: "Boulevard Plaza, Hiranandani Estate, Thane",
    timings: "8:00 AM to 11:00 PM",
    format: "Mall-adjacent cafe kiosk",
    specialty: "Cold chai coolers and premium snack pairings",
    note: "Young professionals drive high evening pick-up volume and premium cup trials.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const hotelMenuSections: MenuSectionData[] = [
  {
    id: "hotel-signatures",
    vertical: "hotel",
    title: "Signature Plates",
    kicker: "Hotel favorites",
    summary: "Rich family-style dishes built for dine-in memories and strong delivery recall.",
    items: [
      {
        name: "Kolhapuri Chicken Thali",
        description: "Bold spice gravy, bhakri, solkadhi, and comfort sides in one signature spread.",
        price: "INR 390",
        badge: "Local favorite",
      },
      {
        name: "Matoshree Tandoor Platter",
        description: "Smoky kebabs and malai tikka served as a premium sharing starter.",
        price: "INR 525",
        badge: "Best seller",
      },
      {
        name: "Lazeez Paneer Handi",
        description: "Creamy tomato-cashew curry tuned for repeat family table orders.",
        price: "INR 310",
        badge: "Vegetarian hero",
      },
    ],
  },
  {
    id: "hotel-comfort",
    vertical: "hotel",
    title: "Comfort Meals",
    kicker: "Daily movers",
    summary: "Lunch friendly and delivery friendly meals that keep volume healthy through the week.",
    items: [
      {
        name: "Executive Meal Box",
        description: "Fast service combo built for office lunch traffic and efficient kitchen flow.",
        price: "INR 260",
        badge: "High volume",
      },
      {
        name: "Dum Biryani Royale",
        description: "Layered masala rice finish that performs well in both dine-in and takeaway.",
        price: "INR 365",
        badge: "Weekend rush",
      },
      {
        name: "Basundi Saffron Bowl",
        description: "A festive dessert note that adds warmth to the premium family dining story.",
        price: "INR 145",
        badge: "Sweet ending",
      },
    ],
  },
];

export const teaMenuSections: MenuSectionData[] = [
  {
    id: "tea-signatures",
    vertical: "tea",
    title: "Signature Chai",
    kicker: "Tea bestsellers",
    summary: "Fast-moving cups with strong habit potential and a distinct Matoshree finish.",
    items: [
      {
        name: "Royal Kesar Chai",
        description: "Creamy saffron chai with a premium aroma and photo-friendly appeal.",
        price: "INR 55",
        badge: "Premium cup",
      },
      {
        name: "Strong Tapri Cutting",
        description: "Kadak daily repeat brew designed for commuter traffic and quick service.",
        price: "INR 25",
        badge: "Fast mover",
      },
      {
        name: "Gud Adrak Brew",
        description: "Jaggery and ginger warmth that gives the menu a seasonal storytelling angle.",
        price: "INR 45",
        badge: "Seasonal favorite",
      },
    ],
  },
  {
    id: "tea-pairings",
    vertical: "tea",
    title: "Adda Pairings",
    kicker: "Snack upsells",
    summary: "Simple food pairings that lift ticket size without slowing service rhythm.",
    items: [
      {
        name: "Maska Bun Toast",
        description: "Buttery bun and crisp edges made for chai pairing and evening cravings.",
        price: "INR 65",
        badge: "Add-on king",
      },
      {
        name: "Elaichi Chai Frappe",
        description: "Youth-first cold brew format for summer sales and mall catchments.",
        price: "INR 110",
        badge: "Seasonal hit",
      },
      {
        name: "Cheese Chilli Puff",
        description: "Impulse snack that supports high repeat cup orders during rush hours.",
        price: "INR 70",
        badge: "Impulse buy",
      },
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    label: "Hotel",
    title: "Flagship dining mood",
    caption: "Warm lighting, copper finishes, and family table energy set the premium tone.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gallery-2",
    label: "Tea",
    title: "Counter in full flow",
    caption: "Fast brew choreography keeps the tapri-premium vibe sharp and efficient.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gallery-3",
    label: "Launch",
    title: "Opening day excitement",
    caption: "Soft launch moments, sampling, and social buzz help local markets notice quickly.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gallery-4",
    label: "Kitchen",
    title: "Chef-led finishing",
    caption: "Detail-focused plating supports the premium promise of the hotel vertical.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gallery-5",
    label: "Tea",
    title: "Evening chai adda",
    caption: "Compact seating and warm service encourage repeat local hangout traffic.",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gallery-6",
    label: "Hotel",
    title: "Celebration table",
    caption: "Group dining and occasion energy strengthen the family-brand memory.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const franchiseOffers: Record<FranchiseType, FranchiseOffer> = {
  hotel: {
    eyebrow: "Hotel Franchise",
    title: "A premium family dining format with Marathi warmth and scalable SOPs.",
    description:
      "Hotel vertical ha celebration dining, delivery comfort, ani branded hospitality yacha balanced model aahe.",
    investment: "INR 35L to 65L",
    area: "1200 to 2200 sq. ft.",
    payback: "18 to 30 months target",
    highlights: [
      "Higher average bill from family and group tables",
      "Strong dine-in plus delivery mix for broader revenue coverage",
      "Signature menu gives the brand a memorable local identity",
    ],
    support: [
      "Location review and layout planning",
      "Kitchen SOPs, staff training, and pre-opening readiness",
      "Launch marketing with photo, digital, and local activation support",
      "Menu engineering and vendor guidance after opening",
    ],
    formats: [
      "High street family restaurant",
      "Premium casual dine-in with delivery support",
      "Urban compact restaurant for dense catchments",
    ],
    audience: [
      "Experienced restaurant operators",
      "Investors looking for a premium food brand",
      "City-based partners with family dining demand pockets",
    ],
  },
  tea: {
    eyebrow: "Tea Franchise",
    title: "A compact chai-first format built for repeat footfall and quick service.",
    description:
      "Tea vertical daily habit business la premium twist deto, mhanun lower capex madhun scale karayla sope padte.",
    investment: "INR 12L to 22L",
    area: "180 to 550 sq. ft.",
    payback: "10 to 18 months target",
    highlights: [
      "High cup frequency makes daily sales more predictable",
      "Compact layout and lighter staffing reduce operating friction",
      "Snack pairings and cold brews improve ticket size",
    ],
    support: [
      "Compact outlet blueprint and front counter workflow",
      "Brew training with speed, quality, and consistency focus",
      "Sampling-led local launch support",
      "Seasonal SKU refresh and pricing guidance",
    ],
    formats: [
      "Road-facing takeaway chai point",
      "Campus or corporate kiosk",
      "Compact tea cafe with premium snacks",
    ],
    audience: [
      "First-time franchise operators",
      "Young founders entering F&B",
      "High footfall micro-market investors",
    ],
  },
};
