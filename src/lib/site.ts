import kitchen from "@/assets/modular-kitchen.jpg.asset.json";
import living from "@/assets/living-room.jpg.asset.json";
import bedroom from "@/assets/master-bedroom.jpg.asset.json";
import dining from "@/assets/dining-space.jpg.asset.json";
import bathroom from "@/assets/bathroom.jpg.asset.json";
import foyer from "@/assets/foyer-panelling.jpg.asset.json";
import office from "@/assets/home-office.jpg.asset.json";
import home from "@/assets/home-interior.jpg.asset.json";
import logo from "@/assets/vaaradhi-logo.png.asset.json";

export const BRAND = "VAARADHI INNOVATIONS";
export const PHONE_DISPLAY = "+91 9620914914";
export const PHONE_TEL = "tel:+919620914914";
export const WA_NUMBER = "919620914914";
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;
export const ADDRESS =
  "Door No. 301, Site No. 09, Krishne Gowda Compound, Hagadur, Whitefield, Bengaluru Urban, Karnataka – 560066";
export const LOGO = logo.url;
export const IMG = { kitchen: kitchen.url, living: living.url, bedroom: bedroom.url, dining: dining.url, bathroom: bathroom.url, foyer: foyer.url, office: office.url, home: home.url };

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SERVICES = [
  { name: "Modular Kitchens", img: IMG.kitchen, text: "Efficient layouts, smart storage and refined finishes that make everyday cooking a pleasure." },
  { name: "Living Rooms", img: IMG.living, text: "Warm, welcoming spaces balancing comfort, character and the way your family gathers." },
  { name: "Master Bedrooms", img: IMG.bedroom, text: "Calm, restful retreats with thoughtful wardrobes, headboards and soft lighting." },
  { name: "Dining Spaces", img: IMG.dining, text: "Elegant settings for shared meals, with crockery units and statement lighting." },
  { name: "Bathrooms", img: IMG.bathroom, text: "Clean, functional bathrooms with vanities and storage designed for daily ease." },
  { name: "Foyer & Wall Panelling", img: IMG.foyer, text: "A memorable first impression through panelling, textures and considered detailing." },
  { name: "Study & Home Office", img: IMG.office, text: "Focused, organised work zones that blend seamlessly into your home." },
];

export const STEPS = [
  { n: "01", title: "Consultation", img: IMG.home, text: "We listen to your needs, lifestyle, budget and space to understand what home means to you." },
  { n: "02", title: "3D Design", img: IMG.living, text: "Your ideas become detailed 3D visuals, refined together until every element feels right." },
  { n: "03", title: "Manufacturing", img: IMG.kitchen, text: "Approved designs are crafted with quality materials and careful attention to finish." },
  { n: "04", title: "Installation", img: IMG.bedroom, text: "Our team installs everything with care, leaving you with a space ready to live in." },
];

export const COMMITMENTS = [
  { title: "Your Vision Comes First.", text: "Every design begins with your taste, needs and the way you live." },
  { title: "Transparency at Every Step.", text: "Clear communication on design, materials and costs, from start to finish." },
  { title: "Quality in Every Detail.", text: "Careful material choices and finishing that respect your home." },
  { title: "Commitment Beyond Design.", text: "We stay engaged and responsive throughout your interior journey." },
];

export function buildWhatsAppUrl(d: { name: string; phone: string; service: string; message: string }) {
  const text = [
    `Hello ${BRAND}, I would like to enquire about home interiors.`,
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Service: ${d.service}`,
    d.message ? `Message: ${d.message}` : "",
  ].filter(Boolean).join("\n");
  return `${WA_LINK}?text=${encodeURIComponent(text)}`;
}
