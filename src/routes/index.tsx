import { createFileRoute, Link } from "@tanstack/react-router";
import { COMMITMENTS, IMG, SERVICES, STEPS } from "@/lib/site";
import { SectionTitle, WhatsAppCta } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VAARADHI INNOVATIONS | Home Interior Designers in Whitefield, Bengaluru" },
      { name: "description", content: "Thoughtfully designed home interiors in Bengaluru: modular kitchens, living rooms, bedrooms and more by VAARADHI INNOVATIONS." },
      { property: "og:title", content: "VAARADHI INNOVATIONS | Spaces That Inspire" },
      { property: "og:description", content: "Thoughtfully designed home interiors in Whitefield, Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const EXPERTISE = [
  { title: "Space Planning", text: "Layouts that respect how you move through each room, so space feels open and nothing is wasted." },
  { title: "Kitchen Ergonomics", text: "Sensible placement of hob, sink and storage, with counter heights and drawers planned for daily cooking." },
  { title: "Storage That Fits Life", text: "Wardrobes, lofts and units sized for what you actually own, keeping every room clutter-free." },
  { title: "Material Selection", text: "We explain the options for boards, laminates, finishes and hardware, so you choose with confidence." },
  { title: "Layered Lighting", text: "Ambient, task and accent lighting planned together for comfort, function and mood." },
  { title: "Moisture-Aware Design", text: "Kitchens and bathrooms planned with suitable materials and finishes for wet, high-use areas." },
];

const FAQS = [
  { q: "How do we get started?", a: "Call or WhatsApp us. We begin with a conversation about your home, needs, style and budget, then plan the next steps together." },
  { q: "Will I see the design before work begins?", a: "Yes. We prepare 3D designs so you can visualise your space and refine it with us before anything is manufactured." },
  { q: "Can I choose materials and finishes?", a: "Absolutely. We walk you through suitable options and explain the differences so the final choice is yours." },
  { q: "How is the cost decided?", a: "Cost depends on your space, scope and material choices. We share a clear, itemised quote so you know exactly what you are paying for." },
  { q: "How long does a project take?", a: "Timelines depend on the scope of work. We discuss a realistic schedule with you once the design is finalised." },
  { q: "Do you handle full homes or single rooms?", a: "Both. We design complete home interiors as well as individual spaces like kitchens, bedrooms or living rooms." },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.living} alt="Elegant living room interior" className="ken-burns absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="wrap relative pb-20 pt-40 text-ink-foreground fade-up">
          <p className="eyebrow">Home Interiors · Bengaluru</p>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">Spaces That Inspire. <span className="text-gold-gradient italic">Homes That Feel Like You.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 md:text-lg">
            Thoughtfully designed home interiors, brought to life through creativity, craftsmanship and a commitment to your vision.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-line">Contact Us</Link>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">
            Consultation <span className="text-gold">·</span> 3D Design <span className="text-gold">·</span> Manufacturing <span className="text-gold">·</span> Installation
          </p>
        </div>
      </section>

      <div className="overflow-hidden bg-ink py-5 text-ink-foreground">
        <div className="marquee">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl italic whitespace-nowrap">
              {s.name}<span className="text-gold not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="wrap grid items-center gap-12 py-24 md:grid-cols-2">
        <SectionTitle eyebrow="Welcome" title="Interiors designed around the way you live." text="VAARADHI INNOVATIONS is a residential interior design studio in Whitefield, Bengaluru. We create homes that are beautiful, practical and personal, guiding you from the first idea to the finished space." />
        <div className="reveal relative">
          <img src={IMG.home} alt="Complete home interior" className="aspect-[4/3] w-full rounded object-cover" loading="lazy" />
          <div className="absolute -bottom-6 -left-4 hidden rounded bg-ink px-6 py-5 text-ink-foreground sm:block">
            <p className="eyebrow">Whitefield</p>
            <p className="mt-1 font-display text-xl">Bengaluru Studio</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="wrap">
          <SectionTitle eyebrow="What We Do" title="Interior Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.name} to="/services" className="reveal card-lift group block overflow-hidden rounded bg-card">
                <div className="overflow-hidden"><img src={s.img} alt={s.name} className="img-zoom aspect-[3/2] w-full object-cover" loading="lazy" /></div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl">{s.name}</h3>
                    <span className="text-gold transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/services" className="btn btn-line mt-10">View All Services</Link>
        </div>
      </section>

      <section className="wrap py-24">
        <SectionTitle eyebrow="Design Expertise" title="The details that make a home work." text="Beautiful interiors come from getting the practical decisions right. These are the things we plan carefully with every homeowner." />
        <div className="mt-12 grid gap-px overflow-hidden rounded bg-border sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((e, i) => (
            <div key={e.title} className="reveal bg-background p-8" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <p className="font-display text-3xl text-gold-gradient">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24"><div className="wrap">
        <SectionTitle eyebrow="Inspiration" title="Selected Interior Inspiration" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[IMG.kitchen, IMG.bedroom, IMG.dining, IMG.foyer].map((src, i) => (
            <div key={i} className="reveal group overflow-hidden rounded" style={{ transitionDelay: `${i * 90}ms` }}>
              <img src={src} alt="Interior inspiration" className={`img-zoom w-full object-cover ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`} loading="lazy" />
            </div>
          ))}
        </div>
        <Link to="/projects" className="btn btn-line mt-10">View Gallery</Link>
      </div></section>

      <section className="bg-ink py-24 text-ink-foreground">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Designed Around You. Crafted With Care. Driven by Commitment.</h2>
          </div>
          <p className="reveal self-end leading-relaxed text-ink-foreground/75">
            Good design is more than appearance. It is how a space works, how it feels and how well it reflects the people who live in it. We combine thoughtful planning, functional detailing and careful craftsmanship so every corner of your home has a purpose.
          </p>
        </div>
      </section>

      <section className="wrap py-24">
        <SectionTitle eyebrow="How We Work" title="Four Simple Steps" center />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="reveal border-t border-gold/40 pt-6">
              <p className="font-display text-5xl text-gold-gradient">{s.n}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="wrap">
          <SectionTitle eyebrow="Customer Commitment" title="Your Home. Your Vision. Our Commitment." center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="reveal card-lift rounded bg-card p-7">
                <div className="gold-rule" />
                <h3 className="mt-5 text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid gap-12 py-24 md:grid-cols-[1fr_1.4fr]">
        <SectionTitle eyebrow="Questions" title="What homeowners usually ask us." text="Clear answers before you begin, so you always know what to expect." />
        <div className="reveal divide-y border-y">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl md:text-2xl">
                {f.q}
                <span className="text-gold transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
