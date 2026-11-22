import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle, WhatsAppCta } from "@/components/site-shell";

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
      <section className="wrap pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-6xl">More Than Interiors. <em className="text-gold">A Reflection of You.</em></h1>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            VAARADHI INNOVATIONS is a home interior studio in Whitefield, Bengaluru, led by K Ashok Kumar. We design residential interiors that balance beauty with everyday practicality, taking time to understand your routines, preferences and budget before shaping spaces that feel genuinely yours.
          </p>
        </div>
      </section>
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12">
          <div className="flex items-center gap-5 md:block">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold font-display text-3xl text-gold md:h-28 md:w-28 md:text-4xl">KA</div>
            <div className="md:mt-6">
              <p className="eyebrow">Meet the Founder</p>
              <h2 className="mt-2 text-3xl md:text-5xl">K Ashok Kumar</h2>
              <p className="mt-2 font-display text-lg italic text-gold md:text-2xl">Founder, VAARADHI INNOVATIONS</p>
            </div>
          </div>
          <div className="space-y-5 leading-relaxed text-ink-foreground/80">
            <p>
              Ashok founded VAARADHI INNOVATIONS with a simple belief: a home should be designed around the people who live in it. He leads every project personally, from the first conversation to the final installation, so nothing gets lost between idea and execution.
            </p>
            <p>
              His expertise spans space planning, modular kitchen design, material and finish selection, and end-to-end project coordination. Homeowners value his straightforward approach: honest guidance on what works, clear explanations of options and costs, and a steady hand through every stage of the journey.
            </p>
            <p className="text-ink-foreground/60">
              Based in Whitefield, Bengaluru, he works closely with each family to turn their vision into a home that is beautiful, practical and unmistakably theirs.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16 md:py-24">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <div className="reveal card-lift rounded bg-card p-10">
            <p className="eyebrow">Our Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">To create homes that inspire, comfort and truly reflect the people who live in them.</p>
          </div>
          <div className="reveal card-lift rounded bg-card p-10">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">To deliver thoughtful, functional interiors through honest communication and careful craftsmanship.</p>
          </div>
        </div>
      </section>
      <section className="wrap py-16 md:py-24">
        <SectionTitle eyebrow="Our Values" title="What guides every project." center text="Our approach is customer-focused: you are involved at every stage, decisions are explained clearly, and details are never an afterthought." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {VALUES.map((v) => <span key={v} className="rounded border px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em]">{v}</span>)}
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
