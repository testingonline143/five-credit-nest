import { createFileRoute, Link } from "@tanstack/react-router";
import { COMMITMENTS, IMG, SERVICES, STEPS, WA_LINK } from "@/lib/site";
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
  { title: "Kitchen Ergonomics", text: "Sensible placement of hob, sink and storage, with heights and drawers planned for daily cooking." },
  { title: "Storage That Fits Life", text: "Wardrobes, lofts and units sized for what you own, keeping every room clutter-free." },
  { title: "Material Selection", text: "We explain options for boards, laminates, finishes and hardware, so you choose with confidence." },
  { title: "Layered Lighting", text: "Ambient, task and accent lighting planned together for comfort, function and mood." },
  { title: "Moisture-Aware Design", text: "Kitchens and bathrooms planned with suitable materials for wet, high-use areas." },
];

const FAQS = [
  { q: "How do we get started?", a: "Call or WhatsApp us. We begin with a conversation about your home, needs, style and budget, then plan the next steps together." },
  { q: "Will I see the design before work begins?", a: "Yes. We prepare 3D designs so you can visualise your space and refine it with us before anything is manufactured." },
  { q: "Can I choose materials and finishes?", a: "Absolutely. We walk you through suitable options and explain the differences so the final choice is yours." },
  { q: "How is the cost decided?", a: "Cost depends on your space, scope and material choices. We share a clear quote so you know exactly what you are paying for." },
  { q: "How long does a project take?", a: "Timelines depend on the scope of work. We discuss a realistic schedule with you once the design is finalised." },
  { q: "Do you handle full homes or single rooms?", a: "Both. We design complete home interiors as well as individual spaces like kitchens, bedrooms or living rooms." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden">
        <img src={IMG.living} alt="Elegant living room interior" className="ken-burns absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="wrap relative pb-8 pt-36 text-ink-foreground fade-up">
          <p className="eyebrow">Home Interiors · Whitefield, Bengaluru</p>
          <h1 className="mt-5 max-w-4xl text-[2.7rem] md:text-7xl">
            Spaces That Inspire. <span className="text-gold-gradient italic">Homes That Feel Like You.</span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-foreground/85 md:text-lg">
            Thoughtfully designed home interiors, brought to life through creativity, craftsmanship and a commitment to your vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-line">Contact Us</Link>
          </div>
          <div className="glass mt-12 grid grid-cols-2 rounded md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`px-5 py-4 ${i > 0 ? "md:border-l" : ""} ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-ink-foreground/15`}>
                <p className="font-display text-xl text-gold">{s.n}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="wrap grid items-center gap-12 py-24 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Welcome to VAARADHI INNOVATIONS" title="Interiors designed around the way you live." text="We are a residential interior design studio in Whitefield, Bengaluru. Good design is more than appearance: it is how a space works, how it feels and how well it reflects the people who live in it. We guide you from the first idea to the finished home." />
          <Link to="/about" className="btn btn-line reveal mt-8">About Us</Link>
        </div>
        <div className="reveal relative">
          <img src={IMG.home} alt="Complete home interior" className="aspect-[4/5] w-full rounded object-cover md:aspect-[4/3]" loading="lazy" />
          <div className="absolute -bottom-6 left-4 rounded bg-ink px-6 py-5 text-ink-foreground">
            <p className="eyebrow">End-to-End</p>
            <p className="mt-1 font-display text-xl">Design to Installation</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="What We Do" title="Interior Services" />
            <Link to="/services" className="btn btn-line">All Services</Link>
          </div>
          <div className="snap-row mt-12 -mr-5 pr-5 md:mr-0 md:pr-0">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.name} to="/services" className="reveal group relative block overflow-hidden rounded">
                <img src={s.img} alt={s.name} className="img-zoom aspect-[4/5] w-full object-cover" loading="lazy" />
                <div className="hero-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground">
                  <h3 className="text-2xl md:text-3xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-foreground/80">{s.text}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-transform duration-500 group-hover:translate-x-1">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
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

      {/* Inspiration bento */}
      <section className="bg-secondary py-24">
        <div className="wrap">
          <SectionTitle eyebrow="Inspiration" title="Selected Interior Inspiration" />
          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            {[
              { src: IMG.kitchen, cls: "col-span-2 row-span-2" },
              { src: IMG.bedroom, cls: "" },
              { src: IMG.dining, cls: "" },
              { src: IMG.foyer, cls: "" },
              { src: IMG.bathroom, cls: "" },
            ].map((g, i) => (
              <div key={i} className={`reveal group overflow-hidden rounded ${g.cls}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={g.src} alt="Interior inspiration" className="img-zoom h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <Link to="/projects" className="btn btn-line mt-10">View Gallery</Link>
        </div>
      </section>

      {/* Process */}
      <section className="wrap py-24">
        <SectionTitle eyebrow="How We Work" title="From First Conversation to Finished Home." center />
        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gold/40 md:block" />
          {STEPS.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-gold">{s.n}</span>
              <h3 className="mt-5 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><Link to="/process" className="btn btn-line">Our Process</Link></div>
      </section>

      {/* Commitment */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="wrap">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Customer Commitment</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Your Home. Your Vision. Our Commitment.</h2>
            <p className="mt-5 font-display text-xl italic text-gold md:text-2xl">Designed Around You. Crafted With Care. Driven by Commitment.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c, i) => (
              <div key={c.title} className="reveal bg-ink p-7" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="gold-rule" />
                <h3 className="mt-5 text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-ink-foreground/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap grid gap-12 py-24 md:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionTitle eyebrow="Questions" title="What homeowners usually ask us." text="Clear answers before you begin, so you always know what to expect." />
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-gold reveal mt-8">Ask on WhatsApp</a>
        </div>
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
