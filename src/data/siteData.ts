import { hotelBranches as hotelBranchesData } from "./hotelBranches.js";
import { teaBranches as teaBranchesData } from "./teaBranches.js";

export type FranchiseType = "hotel" | "tea";

export type NavigationLink = {
  label: string;
  to: string;
  isButton?: boolean;
  children?: Omit<NavigationLink, 'children' | 'isButton'>[];
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
  managerName?: string;
  tagline?: string;
  city: string;
  locality: string;
  address: string;
  phone: string;
  mapLink: string;
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

export type HomeVerticalCard = {
  id: FranchiseType;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  to: string;
  highlights: string[];
};

export type HomeBenefit = {
  id: string;
  title: string;
  description: string;
};

export type FeaturedShowcaseItem = {
  id: string;
  name: string;
  category: "Food" | "Tea";
  description: string;
  price: string;
  image: string;
};

export type SocialProofPlaceholder = {
  title: string;
  description: string;
  reels: string[];
};

export type FranchiseInquiryOption = {
  id: FranchiseType;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  to: string;
  buttonLabel: string;
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Our Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  {
    label: "Franchises",
    to: "#",
    children: [
      { label: "Hotel Franchise", to: "/hotel-franchise" },
      { label: "Tea Franchise", to: "/tea-franchise" },
    ],
  },
  { label: "Contact", to: "/contact" },
  { label: "Franchise Inquiry", to: "/franchise-inquiry", isButton: true },
];

export const footerHotelLinks: NavigationLink[] = [
  { label: "Hotel Franchise Model", to: "/hotel-franchise" },
  { label: "Signature Menu", to: "/menu" },
  { label: "Our Locations", to: "/branches" },
];

export const footerTeaLinks: NavigationLink[] = [
  { label: "Tea Franchise Model", to: "/tea-franchise" },
  { label: "Brand Gallery", to: "/gallery" },
  { label: "Partner With Us", to: "/franchise-inquiry" },
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

export const homeVerticalCards: HomeVerticalCard[] = [
  {
    id: "hotel",
    title: "Hotel Franchise",
    description:
      "Biryani, thali, family restaurant experience, ani multiple branches sathi ready premium hospitality format.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Explore Hotel Franchise",
    to: "/hotel-franchise",
    highlights: ["Biryani", "Family Dining", "Multiple Branches"],
  },
  {
    id: "tea",
    title: "Tea Franchise",
    description:
      "Tea outlet model with low investment, quick setup, and strong daily footfall for repeat local business.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    ctaLabel: "Explore Tea Franchise",
    to: "/tea-franchise",
    highlights: ["Low Investment", "Quick Setup", "Daily Footfall"],
  },
];

export const homeBenefits: HomeBenefit[] = [
  {
    id: "regional-brand",
    title: "Strong regional brand",
    description:
      "Marathi market connect mule brand la local recall ani authentic positioning milte.",
  },
  {
    id: "multiple-branches",
    title: "Multiple branches",
    description:
      "Existing multi-branch story investor confidence build karte ani expansion more believable banavate.",
  },
  {
    id: "franchise-ready",
    title: "Franchise-ready model",
    description:
      "Format, SOP thinking, and dummy lead flow he sagle future franchise scaling sathi base tayar kartat.",
  },
  {
    id: "customer-trust",
    title: "Marathi customer trust",
    description:
      "Language, food familiarity, ani grounded service tone mule customer trust naturally build hoto.",
  },
];

export const featuredShowcaseItems: FeaturedShowcaseItem[] = [
  {
    id: "featured-biryani",
    name: "Chicken Biryani",
    category: "Food",
    description: "A rich dum-style hero dish built for family orders and strong delivery demand.",
    price: "INR 365",
    image:
      "https://images.unsplash.com/photo-1701579231373-4294197a8940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "featured-thali",
    name: "Special Chicken Thali",
    category: "Food",
    description: "Comfort-heavy Maharashtrian plate with premium presentation and repeat appeal.",
    price: "INR 390",
    image:
      "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "featured-tandoori",
    name: "Tandoori Leg Piece",
    category: "Food",
    description: "A smoky signature starter that gives the hotel menu a strong visual hook.",
    price: "INR 275",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "featured-special-chaha",
    name: "Special Chaha",
    category: "Tea",
    description: "A kadak daily repeat cup designed for quick service and local habit-building.",
    price: "INR 25",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "featured-basundi-chaha",
    name: "Basundi Chaha",
    category: "Tea",
    description: "A sweeter premium tea concept that adds signature recall to the beverage line.",
    price: "INR 55",
    image:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "featured-coffee",
    name: "Coffee",
    category: "Tea",
    description: "A familiar add-on beverage that supports broader daily footfall and snack pairing.",
    price: "INR 60",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
];

export const homeSocialProof: SocialProofPlaceholder = {
  title: "Latest Reels Coming Soon",
  description:
    "Instagram reels placeholder for branch openings, food shots, customer moments, ani brand buzz.",
  reels: ["Branch Opening Reel", "Signature Food Reel", "Tea Counter Reel"],
};

export const franchiseInquiryOptions: FranchiseInquiryOption[] = [
  {
    id: "hotel",
    title: "Hotel Franchise",
    description:
      "Bigger restaurant business with biryani, thali, and family restaurant concept across Maharashtra-style food demand.",
    highlights: ["Bigger restaurant business", "Biryani & Thali", "Family restaurant concept"],
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    to: "/hotel-franchise-inquiry",
    buttonLabel: "Apply for Hotel Franchise",
  },
  {
    id: "tea",
    title: "Tea Franchise",
    description:
      "Low investment tea outlet business with daily footfall, quick setup, and repeat local customer potential.",
    highlights: ["Low investment", "Daily footfall", "Quick setup"],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    to: "/tea-franchise-inquiry",
    buttonLabel: "Apply for Tea Franchise",
  },
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

export const hotelConceptPoints: FeatureCard[] = [
  {
    title: "Family restaurant model",
    description:
      "Hotel Matoshree is positioned as a warm family dining format that works for lunch, dinner, and group occasions.",
  },
  {
    title: "Veg + Non-Veg food",
    description:
      "Menu mix keeps the outlet relevant for wider customer groups and helps tables convert across different food preferences.",
  },
  {
    title: "Biryani and thali focused brand",
    description:
      "Biryani, thali, and hearty regional plates give the brand a strong signature story that is easy to market.",
  },
  {
    title: "Multiple branches across Maharashtra",
    description:
      "The multi-branch dummy presence helps communicate proof, regional scale, and stronger investor confidence.",
  },
];

export const hotelSignatureDishes: FeaturedShowcaseItem[] = [
  {
    id: "hotel-dish-biryani",
    name: "Chicken Dum Biryani",
    category: "Food",
    description: "Rich dum-style biryani built as a high-demand hero product for both dine-in and delivery.",
    price: "INR 365",
    image:
      "https://images.unsplash.com/photo-1701579231373-4294197a8940?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-dish-chicken-thali",
    name: "Special Chicken Thali",
    category: "Food",
    description: "A comfort-led signature thali that supports the Marathi family dining identity of the brand.",
    price: "INR 390",
    image:
      "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-dish-tandoori-thali",
    name: "Tandoori Leg Piece Thali",
    category: "Food",
    description: "A visually strong combo dish that blends tandoori appeal with a satisfying full-meal format.",
    price: "INR 425",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-dish-veg-thali",
    name: "Veg Thali",
    category: "Food",
    description: "A reliable vegetarian mainstay that broadens family appeal and lunch-time repeat business.",
    price: "INR 240",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-dish-mutton-thali",
    name: "Mutton Thali",
    category: "Food",
    description: "A premium regional favorite that helps the menu feel indulgent, rooted, and occasion-worthy.",
    price: "INR 520",
    image:
      "https://images.unsplash.com/photo-1604908554165-e710f4f28b2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hotel-dish-family-combos",
    name: "Family Combos",
    category: "Food",
    description: "Group-friendly combo meals designed to improve average billing and make ordering easier for families.",
    price: "INR 899",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const hotelFranchiseBenefits: FeatureCard[] = [
  {
    title: "Established regional brand",
    description:
      "Matoshree carries a Maharashtra-focused identity that helps the brand feel familiar and trustworthy from day one.",
  },
  {
    title: "Ready food concept",
    description:
      "The dining proposition is already clear: biryani, thali, family restaurant energy, and strong meal-led positioning.",
  },
  {
    title: "Marketing support",
    description:
      "Launch communication, local awareness, and promotional guidance help the branch start with stronger visibility.",
  },
  {
    title: "Menu guidance",
    description:
      "Signature items, mix balance, and product emphasis can be guided so the outlet stays aligned with the brand story.",
  },
  {
    title: "Branch launch support",
    description:
      "Pre-opening readiness, on-ground setup thinking, and rollout structure reduce friction during launch stage.",
  },
  {
    title: "Social media support",
    description:
      "Visual-first content support gives the franchise a better presence across local food discovery and social channels.",
  },
];

export const hotelIdealLocations = [
  "Main road",
  "Market area",
  "Highway",
  "College area",
  "Family crowd location",
];

export const hotelInvestmentPlaceholder =
  "Final investment details will be shared after discussion.";

export const teaConceptPoints: FeatureCard[] = [
  {
    title: "Tea outlet model",
    description:
      "Matoshree Tea is designed as a compact, premium tea-first outlet format that can fit multiple daily demand zones.",
  },
  {
    title: "Daily repeat customers",
    description:
      "Tea as a habit category means repeat cups, regular local traffic, and a stronger everyday sales rhythm.",
  },
  {
    title: "Small space business",
    description:
      "The format works in tighter footprints, which keeps setup lighter and helps new investors enter more confidently.",
  },
  {
    title: "Quick setup",
    description:
      "Compared to larger food outlets, the tea format can be prepared and launched faster with simpler operations.",
  },
  {
    title: "Flexible catchments",
    description:
      "Suitable for city roads, highway points, market zones, and college-led traffic pockets across Maharashtra.",
  },
];

export const teaSignatureProducts: FeaturedShowcaseItem[] = [
  {
    id: "tea-product-special-chaha",
    name: "Special Chaha",
    category: "Tea",
    description: "A signature daily cup with familiar taste and repeat-order potential for local traffic.",
    price: "INR 25",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-product-masala-chaha",
    name: "Masala Chaha",
    category: "Tea",
    description: "A spice-led tea option that strengthens the outlet's rooted, all-day beverage appeal.",
    price: "INR 30",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-product-basundi-chaha",
    name: "Basundi Chaha",
    category: "Tea",
    description: "A richer premium cup that helps the tea menu feel distinct, warm, and memorable.",
    price: "INR 55",
    image:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-product-coffee",
    name: "Coffee",
    category: "Tea",
    description: "A familiar secondary beverage that widens customer choice without overcomplicating the counter.",
    price: "INR 60",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-product-cold-coffee",
    name: "Cold Coffee",
    category: "Tea",
    description: "A youth-friendly cold option that supports warmer weather demand and premium add-on sales.",
    price: "INR 95",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tea-product-snacks-combo",
    name: "Snacks Combo",
    category: "Tea",
    description: "Easy tea pairings improve ticket size and make the outlet more useful for regular short breaks.",
    price: "INR 89",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  },
];

export const teaFranchiseBenefits: FeatureCard[] = [
  {
    title: "Low investment model",
    description:
      "Smaller setup requirements make the tea format more approachable for small and medium investors.",
  },
  {
    title: "Daily footfall",
    description:
      "Tea habit traffic can create stable all-day visits from commuters, students, shoppers, and office-goers.",
  },
  {
    title: "Easy operations",
    description:
      "Lean product flow and simpler counter rhythm help the outlet operate with lower complexity than full restaurants.",
  },
  {
    title: "Fast setup",
    description:
      "Compact format and lighter requirements make rollout faster for founders looking to move quickly.",
  },
  {
    title: "Repeat customers",
    description:
      "Chai-led business naturally encourages repeat daily usage, which supports predictable local demand.",
  },
  {
    title: "Franchise support",
    description:
      "Setup guidance, product positioning, and launch direction can help the tea outlet open with more clarity.",
  },
];

export const teaIdealLocations = [
  "Highway",
  "Bus stand",
  "Market area",
  "College area",
  "Office area",
  "Petrol pump nearby",
];

export const teaInvestmentPlaceholder =
  "Tea franchise investment details will be shared after discussion.";

export const hotelBranches: Branch[] = hotelBranchesData as Branch[];

export const teaBranches: Branch[] = teaBranchesData as Branch[];

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
