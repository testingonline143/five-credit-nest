import { createFileRoute } from "@tanstack/react-router";
import { IMG, STEPS } from "@/lib/site";
import { PageHero, WhatsAppCta } from "@/components/site-shell";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | VAARADHI INNOVATIONS" },
      { name: "description", content: "Consultation, 3D design, manufacturing and installation: how we bring your home interiors to life." },
      { property: "og:title", content: "Our Process | VAARADHI INNOVATIONS" },
      { property: "og:description", content: "From first conversation to finished home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero eyebrow="Our Process" title="From First Conversation to Finished Home." img={IMG.office} />
      <section className="wrap grid gap-8 py-24 md:grid-cols-2">
        {STEPS.map((s) => (
          <article key={s.n} className="overflow-hidden rounded bg-card">
            <img src={s.img} alt={s.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
            <div className="p-8">
              <p className="eyebrow">Step {s.n}</p>
              <h2 className="mt-2 text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </div>
          </article>
        ))}
      </section>
      <WhatsAppCta />
    </>
  );
}
