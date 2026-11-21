import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { PageHero, SectionTitle, WhatsAppCta } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | VAARADHI INNOVATIONS" },
      { name: "description", content: "Learn about VAARADHI INNOVATIONS, a customer-focused home interior design studio in Whitefield, Bengaluru." },
      { property: "og:title", content: "About VAARADHI INNOVATIONS" },
      { property: "og:description", content: "More than interiors. A reflection of you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = ["Thoughtful Design", "Functionality", "Transparency", "Craftsmanship", "Attention to Detail"];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="More Than Interiors. A Reflection of You." img={IMG.home} />
      <section className="wrap grid items-center gap-12 py-24 md:grid-cols-2">
        <img src={IMG.dining} alt="Dining space interior" className="aspect-[4/3] w-full rounded object-cover" loading="lazy" />
        <SectionTitle eyebrow="Who We Are" title="A home interior studio in Whitefield, Bengaluru." text="VAARADHI INNOVATIONS, led by K Ashok Kumar, designs residential interiors that balance beauty with everyday practicality. We take time to understand your routines, preferences and budget, then shape spaces that feel genuinely yours." />
      </section>
      <section className="bg-secondary py-24">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <div className="rounded bg-card p-10">
            <p className="eyebrow">Our Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">To create homes that inspire, comfort and truly reflect the people who live in them.</p>
          </div>
          <div className="rounded bg-card p-10">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">To deliver thoughtful, functional interiors through honest communication and careful craftsmanship.</p>
          </div>
        </div>
      </section>
      <section className="wrap py-24">
        <SectionTitle eyebrow="Our Values" title="What guides every project." center text="Our approach is customer-focused: you are involved at every stage, decisions are explained clearly, and details are never an afterthought." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {VALUES.map((v) => <span key={v} className="rounded border px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em]">{v}</span>)}
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
