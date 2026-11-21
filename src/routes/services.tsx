import { createFileRoute } from "@tanstack/react-router";
import { IMG, SERVICES, WA_LINK } from "@/lib/site";
import { PageHero, WhatsAppCta } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Interior Design Services | VAARADHI INNOVATIONS" },
      { name: "description", content: "Modular kitchens, living rooms, bedrooms, dining, bathrooms, foyer panelling and home offices in Bengaluru." },
      { property: "og:title", content: "Services | VAARADHI INNOVATIONS" },
      { property: "og:description", content: "Thoughtfully designed. Beautifully brought to life." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Thoughtfully Designed. Beautifully Brought to Life." img={IMG.kitchen} />
      <section className="wrap space-y-20 py-24">
        {SERVICES.map((s, i) => (
          <article key={s.name} className="reveal grid items-center gap-10 md:grid-cols-2">
            <img src={s.img} alt={s.name} className={`aspect-[3/2] w-full rounded object-cover ${i % 2 ? "md:order-2" : ""}`} loading="lazy" />
            <div>
              <p className="font-display text-5xl text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-3xl md:text-4xl">{s.name}</h2>
              <div className="gold-rule mt-5" />
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
              <a href={`${WA_LINK}?text=${encodeURIComponent(`Hello VAARADHI INNOVATIONS, I would like to enquire about ${s.name}.`)}`} target="_blank" rel="noreferrer" className="btn btn-gold mt-7">Enquire Now</a>
            </div>
          </article>
        ))}
      </section>
      <WhatsAppCta />
    </>
  );
}
