export type HotelFranchiseInquiryValues = {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  city: string;
  preferredLocation: string;
  investmentBudget: string;
  spaceSize: string;
  experience: string;
  message: string;
};

export type TeaFranchiseInquiryValues = {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  city: string;
  preferredLocation: string;
  investmentBudget: string;
  spaceType: string;
  startTimeline: string;
  message: string;
};

export const buildWhatsAppLink = (phoneNumber: string, message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const buildHotelFranchiseInquiryMessage = (
  values: HotelFranchiseInquiryValues,
) =>
  [
    "Hotel Franchise Inquiry",
    "",
    `Name: ${values.fullName}`,
    `Mobile: ${values.mobileNumber}`,
    `WhatsApp Number: ${values.whatsappNumber}`,
    `City: ${values.city}`,
    `Preferred Location: ${values.preferredLocation}`,
    `Investment Budget: ${values.investmentBudget}`,
    `Space Size: ${values.spaceSize}`,
    `Experience: ${values.experience}`,
    `Message: ${values.message || "Please share the next steps for Hotel Matoshree franchise."}`,
  ].join("\n");

export const buildTeaFranchiseInquiryMessage = (values: TeaFranchiseInquiryValues) =>
  [
    "Tea Franchise Inquiry",
    "",
    `Name: ${values.fullName}`,
    `Mobile: ${values.mobileNumber}`,
    `WhatsApp Number: ${values.whatsappNumber}`,
    `City: ${values.city}`,
    `Preferred Location: ${values.preferredLocation}`,
    `Investment Budget: ${values.investmentBudget}`,
    `Space Type: ${values.spaceType}`,
    `Start Timeline: ${values.startTimeline}`,
    `Message: ${values.message || "Please share the next steps for Matoshree Tea franchise."}`,
  ].join("\n");
