import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl } from "@/lib/site";

describe("WhatsApp enquiry", () => {
  it("opens the business WhatsApp number with the visitor's details", () => {
    const url = buildWhatsAppUrl({ name: "Ravi", phone: "98765", service: "Modular Kitchens", message: "Hi" });
    expect(url.startsWith("https://wa.me/919620914914?text=")).toBe(true);
    expect(decodeURIComponent(url)).toContain("Name: Ravi");
    expect(decodeURIComponent(url)).toContain("Service: Modular Kitchens");
  });
});
