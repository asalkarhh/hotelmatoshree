export type InquiryFormValues = {
  franchiseType: string;
  fullName: string;
  phone: string;
  city: string;
  budget: string;
  message: string;
};

export const buildWhatsAppLink = (phoneNumber: string, message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const buildInquiryMessage = (values: InquiryFormValues) =>
  [
    "Namaskar Matoshree Group,",
    "",
    "Franchise Inquiry Details:",
    `Franchise Type: ${values.franchiseType}`,
    `Name: ${values.fullName}`,
    `Phone: ${values.phone}`,
    `City: ${values.city}`,
    `Budget: ${values.budget}`,
    `Message: ${values.message || "Please share franchise details and next steps."}`,
  ].join("\n");
