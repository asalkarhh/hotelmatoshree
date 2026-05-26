import { hotelBranches as hotelBranchesData } from "./hotelBranches.js";
import { teaBranches as teaBranchesData } from "./teaBranches.js";

import imgBiryani from "../assets/new/Special_Biryani.png";
import imgSpecialChickenThali from "../assets/new/Special_Chicken.png";
import imgTandoori from "../assets/new/Chicken.png";
import imgSpecialChaha from "../assets/new/Tea-Banner.png";
import imgBasundiChaha from "../assets/new/Tea-Banner.png";
import imgCoffee from "../assets/new/Tea-Banner.png";
import imgHotelInquiry from "../assets/new/Franchieses_Req.jpg";
import imgTeaInquiry from "../assets/new/Franchieses_Tea_Requirement.jpg";
import imgHotelRequirement1 from "../assets/new/Franchieses_Requirement1.jpg";
import imgHotelRequirement2 from "../assets/new/Franchieses_Requirement2.jpg";
import imgHotelRequirement3 from "../assets/new/Franchieses_Requirement3.jpg";
import imgHotelRequirement4 from "../assets/new/Franchieses_Requirement4.jpg";
import imgHotelRules from "../assets/new/Franchieses_rules.jpg";
import imgHotelRules2 from "../assets/new/Franchieses_rules2.jpg";
import imgAgreement from "../assets/new/Aggriment.png";
import imgAgreement2 from "../assets/new/Frenchieses_aggriment.jpg";
import imgAgreement3 from "../assets/new/Frenchieses_aggriment2.jpg";
import imgAgreement4 from "../assets/new/Frenchieses_aggriment3.jpg";
import imgDamBiryaniLogo from "../assets/new/Dam_Biryani_Logo.png";
import imgDhavaraSpecial from "../assets/new/Dhavara_Special.png";
import imgVegThali from "../assets/new/Special_Thali.png";
import imgMuttonThali from "../assets/new/Mutton.png";
import imgMasalaChaha from "../assets/new/Tea-Banner.png";
import imgColdCoffee from "../assets/new/Tea-Banner.png";
import imgGallery2 from "../assets/new/Screenshot 2026-05-25 152919.png";
import imgGallery3 from "../assets/new/Owner.png";
import imgGalleryOwner1 from "../assets/new/Owner1.png";
import imgGalleryBanner from "../assets/new/Banner.png";
import imgGalleryDish from "../assets/new/Dish.png";

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

export type MenuImageCollection = {
  id: string;
  vertical: FranchiseType;
  title: string;
  description: string;
  images: MenuImage[];
};

export type MenuImage = {
  label: string;
  image: string;
};

export type GalleryItem = {
  id: string;
  label: string;
  title: string;
  caption: string;
  image: string;
  layout?: "strip" | "card";
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
  documents: FranchiseDocument[];
};

export type FranchiseDocument = {
  id: string;
  label: string;
  description: string;
  previewImage: string;
  pageImages: string[];
  viewUrl: string;
  downloadUrl: string;
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
  brand: "Hotel Dharashiv Che Matoshree",
  tagline: "एकदा यायलाच लागत - धाराशिवचा अस्सल स्वाद आणि विश्वासार्ह फ्रेंचाईजी मॉडेल.",
  owner: "प्रो. मनोज सुरवसे",
  phone: "+91 91753 79695",
  alternatePhones: ["+91 73705 03858", "+91 86682 50149", "+91 93595 29327"],
  whatsappNumber: "919175379695",
  email: "hello@hotelmatoshree.in",
  address: "मुख्य शाखा: जिजाऊ चौक, बार्शी नाका, धाराशिव, महाराष्ट्र",
  mapLink: "https://maps.google.com/?q=Jijau+Chowk+Barshi+Naka+Dharashiv+Maharashtra",
  hours: "Daily | 8:00 AM to 11:00 PM",
  instagram: "https://instagram.com/matoshreegroup",
};

export const homeStats: Stat[] = [
  { label: "Main branch", value: "Dharashiv" },
  { label: "Verticals", value: "Hotel + Tea" },
  { label: "Franchise contacts", value: "3+" },
  { label: "Brand promise", value: "Premium Local" },
];

export const brandInformationCards = [
  {
    title: "हॉटेल धाराशिव चे मातोश्री",
    eyebrow: "मुख्य शाखा",
    description:
      "धाराशिव, महाराष्ट्र येथून सुरू झालेला Matoshree hospitality brand - veg, non-veg, बिर्याणी, थाळी आणि चहा फ्रेंचाईजीसाठी premium local positioning.",
    points: [
      "मुख्य शाखा: जिजाऊ चौक, बार्शी नाका, धाराशिव",
      "प्रो. मनोज सुरवसे यांच्या मार्गदर्शनाखाली brand operations",
      "हॉटेल मातोश्री चहावाला आणि मातोश्री बिर्याणी हे दोन स्पष्ट franchise formats",
    ],
  },
  {
    title: "हॉटेल मातोश्री चहावाला",
    eyebrow: "Tea Franchise",
    description:
      "चहा, वडापाव, भजे, पोहे आणि breakfast-focused compact outlet model. जुने हॉटेल असल्यास location आणि look चांगला असेल तर franchise discussion करता येईल.",
    points: [
      "फक्त चहा setup अंदाजे दीड लाखापासून सुरू होऊ शकतो",
      "चहा + वडापाव setup साठी अंदाजे दोन लाखांच्या जवळपास खर्च लागू शकतो",
      "Setup cost मध्ये POP, जागेचा advance deposit इत्यादी वेगळे असू शकतात",
    ],
  },
];

export const homeVerticalCards: HomeVerticalCard[] = [
  {
    id: "hotel",
    title: "Hotel Franchise",
    description:
      "Biryani, thali, family restaurant experience, ani multiple branches sathi ready premium hospitality format.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
    ctaLabel: "Explore Hotel Franchise",
    to: "/hotel-franchise",
    highlights: ["Biryani", "Family Dining", "Multiple Branches"],
  },
  {
    id: "tea",
    title: "Tea Franchise",
    description:
      "Tea outlet model with low investment, quick setup, and strong daily footfall for repeat local business.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
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
    image: imgBiryani,
  },
  {
    id: "featured-thali",
    name: "Special Chicken Thali",
    category: "Food",
    description: "Comfort-heavy Maharashtrian plate with premium presentation and repeat appeal.",
    price: "INR 390",
    image: imgSpecialChickenThali,
  },
  {
    id: "featured-tandoori",
    name: "Tandoori Leg Piece",
    category: "Food",
    description: "A smoky signature starter that gives the hotel menu a strong visual hook.",
    price: "INR 275",
    image: imgTandoori,
  },
  {
    id: "featured-special-chaha",
    name: "Special Chaha",
    category: "Tea",
    description: "A kadak daily repeat cup designed for quick service and local habit-building.",
    price: "INR 25",
    image: imgSpecialChaha,
  },
  {
    id: "featured-basundi-chaha",
    name: "Basundi Chaha",
    category: "Tea",
    description: "A sweeter premium tea concept that adds signature recall to the beverage line.",
    price: "INR 55",
    image: imgBasundiChaha,
  },
  {
    id: "featured-coffee",
    name: "Coffee",
    category: "Tea",
    description: "A familiar add-on beverage that supports broader daily footfall and snack pairing.",
    price: "INR 60",
    image: imgCoffee,
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
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
    to: "/hotel-franchise-inquiry",
    buttonLabel: "Apply for Hotel Franchise",
    documents: [
      {
        id: "requirements",
        label: "Requirement PDF",
        description: "Space, setup, and franchise requirement pages.",
        previewImage: imgHotelInquiry,
        pageImages: [
          imgHotelInquiry,
          imgHotelRequirement1,
          imgHotelRequirement2,
          imgHotelRequirement3,
          imgHotelRequirement4,
        ],
        viewUrl: "/assets/docs/hotel-franchise-requirements.pdf",
        downloadUrl: "/assets/docs/hotel-franchise-requirements.pdf",
      },
      {
        id: "rules",
        label: "Rules PDF",
        description: "Operating rules and partner guidelines.",
        previewImage: imgHotelRules,
        pageImages: [imgHotelRules, imgHotelRules2],
        viewUrl: "/assets/docs/hotel-franchise-rules.pdf",
        downloadUrl: "/assets/docs/hotel-franchise-rules.pdf",
      },
      {
        id: "agreement",
        label: "Agreement PDF",
        description: "Franchise agreement reference document.",
        previewImage: imgAgreement,
        pageImages: [imgAgreement, imgAgreement2, imgAgreement3, imgAgreement4],
        viewUrl: "/assets/docs/hotel-franchise-agreement.pdf",
        downloadUrl: "/assets/docs/hotel-franchise-agreement.pdf",
      },
    ],
  },
  {
    id: "tea",
    title: "Tea Franchise",
    description:
      "Low investment tea outlet business with daily footfall, quick setup, and repeat local customer potential.",
    highlights: ["Low investment", "Daily footfall", "Quick setup"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    to: "/tea-franchise-inquiry",
    buttonLabel: "Apply for Tea Franchise",
    documents: [
      {
        id: "requirements",
        label: "Requirement PDF",
        description: "Tea outlet setup and requirement pages.",
        previewImage: imgTeaInquiry,
        pageImages: [imgTeaInquiry],
        viewUrl: "/assets/docs/tea-franchise-requirements.pdf",
        downloadUrl: "/assets/docs/tea-franchise-requirements.pdf",
      },
      {
        id: "rules",
        label: "Rules PDF",
        description: "Partner rules and operating guidelines.",
        previewImage: imgHotelRules,
        pageImages: [imgHotelRules, imgHotelRules2],
        viewUrl: "/assets/docs/tea-franchise-rules.pdf",
        downloadUrl: "/assets/docs/tea-franchise-rules.pdf",
      },
      {
        id: "agreement",
        label: "Agreement PDF",
        description: "Franchise agreement reference document.",
        previewImage: imgAgreement,
        pageImages: [imgAgreement, imgAgreement2, imgAgreement3, imgAgreement4],
        viewUrl: "/assets/docs/tea-franchise-agreement.pdf",
        downloadUrl: "/assets/docs/tea-franchise-agreement.pdf",
      },
    ],
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
    image: imgBiryani,
  },
  {
    id: "hotel-dish-chicken-thali",
    name: "Special Chicken Thali",
    category: "Food",
    description: "A comfort-led signature thali that supports the Marathi family dining identity of the brand.",
    price: "INR 390",
    image: imgSpecialChickenThali,
  },
  {
    id: "hotel-dish-tandoori-thali",
    name: "Tandoori Leg Piece Thali",
    category: "Food",
    description: "A visually strong combo dish that blends tandoori appeal with a satisfying full-meal format.",
    price: "INR 425",
    image: imgTandoori,
  },
  {
    id: "hotel-dish-veg-thali",
    name: "Veg Thali",
    category: "Food",
    description: "A reliable vegetarian mainstay that broadens family appeal and lunch-time repeat business.",
    price: "INR 240",
    image: imgVegThali,
  },
  {
    id: "hotel-dish-mutton-thali",
    name: "Mutton Thali",
    category: "Food",
    description: "A premium regional favorite that helps the menu feel indulgent, rooted, and occasion-worthy.",
    price: "INR 520",
    image: imgMuttonThali,
  },
  {
    id: "hotel-dish-family-combos",
    name: "Family Combos",
    category: "Food",
    description: "Group-friendly combo meals designed to improve average billing and make ordering easier for families.",
    price: "INR 899",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1200&q=80",
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
  "Hotel franchise investment, setup, staff, kitchen, location, and agreement terms will be discussed after document review and partner call.";

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
    image: imgSpecialChaha,
  },
  {
    id: "tea-product-masala-chaha",
    name: "Masala Chaha",
    category: "Tea",
    description: "A spice-led tea option that strengthens the outlet's rooted, all-day beverage appeal.",
    price: "INR 30",
    image: imgMasalaChaha,
  },
  {
    id: "tea-product-basundi-chaha",
    name: "Basundi Chaha",
    category: "Tea",
    description: "A richer premium cup that helps the tea menu feel distinct, warm, and memorable.",
    price: "INR 55",
    image: imgBasundiChaha,
  },
  {
    id: "tea-product-coffee",
    name: "Coffee",
    category: "Tea",
    description: "A familiar secondary beverage that widens customer choice without overcomplicating the counter.",
    price: "INR 60",
    image: imgCoffee,
  },
  {
    id: "tea-product-cold-coffee",
    name: "Cold Coffee",
    category: "Tea",
    description: "A youth-friendly cold option that supports warmer weather demand and premium add-on sales.",
    price: "INR 95",
    image: imgColdCoffee,
  },
  {
    id: "tea-product-snacks-combo",
    name: "Snacks Combo",
    category: "Tea",
    description: "Easy tea pairings improve ticket size and make the outlet more useful for regular short breaks.",
    price: "INR 89",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
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
  "Tea setup can start from a compact chaha model, while chaha + vadapav/breakfast format may need higher setup cost depending on location and interiors.";

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

export const menuImageCollections: MenuImageCollection[] = [
  {
    id: "hotel-menu-images",
    vertical: "hotel",
    title: "Hotel Matoshree Full Menu Images",
    description:
      "Saved food menu visuals for biryani, thali, chicken, mutton, fish, and special meal promotions.",
    images: [
      { label: "Dhavara Special", image: imgDhavaraSpecial },
      { label: "Special Thali", image: imgVegThali },
    ],
  },
  {
    id: "tea-menu-images",
    vertical: "tea",
    title: "Matoshree Tea Menu Images",
    description:
      "Saved tea counter and brand menu visuals for the tea outlet franchise section.",
    images: [
      { label: "Tea Banner", image: imgSpecialChaha },
      { label: "Tea Outlet Visual", image: imgGallery2 },
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    label: "Brand Banner",
    title: "Matoshree brand identity",
    caption: "A full-width brand banner sets the gallery tone before the detailed visuals.",
    image: imgGalleryBanner,
    layout: "strip",
  },
  {
    id: "gallery-2",
    label: "Founder",
    title: "Owner portrait",
    caption: "Founder presence gives the brand a personal and trustworthy face.",
    image: imgGallery3,
  },
  {
    id: "gallery-3",
    label: "Brand",
    title: "Owner profile",
    caption: "A second owner visual adds warmth and credibility to the franchise story.",
    image: imgGalleryOwner1,
  },
  {
    id: "gallery-4",
    label: "Tea",
    title: "Tea outlet brand banner",
    caption: "Tea franchise branding stays visible with compact, high-repeat outlet energy.",
    image: imgSpecialChaha,
  },
  {
    id: "gallery-5",
    label: "Biryani",
    title: "Dam Biryani logo",
    caption: "A dedicated biryani identity supports food-led recall for the hotel vertical.",
    image: imgDamBiryaniLogo,
  },
  {
    id: "gallery-6",
    label: "Brand",
    title: "Outlet visual",
    caption: "A wide brand visual helps connect the gallery to real on-ground presentation.",
    image: imgGallery2,
  },
  {
    id: "gallery-7",
    label: "Food Banner",
    title: "Signature food lineup",
    caption: "A full-width food strip closes the gallery with strong menu energy.",
    image: imgGalleryDish,
    layout: "strip",
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
