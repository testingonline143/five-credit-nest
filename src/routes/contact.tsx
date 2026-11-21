import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ADDRESS, BRAND, IMG, PHONE_DISPLAY, PHONE_TEL, SERVICES, WA_LINK, buildWhatsAppUrl } from "@/lib/site";
import { PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | VAARADHI INNOVATIONS, Whitefield Bengaluru" },
      { name: "description", content: "Call or WhatsApp VAARADHI INNOVATIONS on +91 9620914914 for home interiors in Bengaluru." },
      { property: "og:title", content: "Contact VAARADHI INNOVATIONS" },
      { property: "og:description", content: "Let's create a home that feels like you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "mt-2 w-full rounded border bg-background px-4 py-3 text-sm outline-none focus:border-gold";

function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: SERVICES[0]?.name ?? "", message: "" });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(f), "_blank");
  };
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's Create a Home That Feels Like You." img={IMG.dining} />
      <section className="wrap grid gap-12 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 text-4xl">{BRAND}</h2>
          <div className="gold-rule mt-5" />
          <dl className="mt-8 space-y-6 text-sm">
            <div><dt className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">Phone</dt><dd className="mt-1 text-lg"><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></dd></div>
            <div><dt className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">Location</dt><dd className="mt-1 text-lg">Whitefield, Bengaluru, Karnataka</dd></div>
            <div><dt className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">Registered Address</dt><dd className="mt-1 leading-relaxed">{ADDRESS}</dd></div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="btn btn-gold">Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-line">WhatsApp</a>
          </div>
        </div>
        <form onSubmit={submit} className="rounded bg-card p-8 md:p-10">
          <h3 className="text-3xl">Send an Enquiry</h3>
          <p className="mt-2 text-sm text-muted-foreground">Your details open in WhatsApp, ready to send.</p>
          <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.16em]">Name<input required value={f.name} onChange={set("name")} className={field} /></label>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em]">Phone Number<input required type="tel" value={f.phone} onChange={set("phone")} className={field} /></label>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em]">Preferred Service
            <select value={f.service} onChange={set("service")} className={field}>
              {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
          </label>
          <label className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em]">Message<textarea rows={4} value={f.message} onChange={set("message")} className={field} /></label>
          <button type="submit" className="btn btn-gold mt-7 w-full">Send Enquiry</button>
        </form>
      </section>
    </>
  );
}
