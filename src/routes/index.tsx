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

function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img src={IMG.living} alt="Elegant living room interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="wrap relative pb-20 pt-40 text-ink-foreground fade-up">
          <p className="eyebrow">Home Interiors · Bengaluru</p>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">Spaces That Inspire. Homes That Feel Like You.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 md:text-lg">
            Thoughtfully designed home interiors, brought to life through creativity, craftsmanship and a commitment to your vision.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-line">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="wrap grid items-center gap-12 py-24 md:grid-cols-2">
        <SectionTitle eyebrow="Welcome" title="Interiors designed around the way you live." text="VAARADHI INNOVATIONS is a residential interior design studio in Whitefield, Bengaluru. We create homes that are beautiful, practical and personal, guiding you from the first idea to the finished space." />
        <img src={IMG.home} alt="Complete home interior" className="aspect-[4/3] w-full rounded object-cover" loading="lazy" />
      </section>

      <section className="bg-secondary py-24">
        <div className="wrap">
          <SectionTitle eyebrow="What We Do" title="Interior Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.name} to="/services" className="group block overflow-hidden rounded bg-card">
                <div className="overflow-hidden"><img src={s.img} alt={s.name} className="img-zoom aspect-[3/2] w-full object-cover" loading="lazy" /></div>
                <div className="p-6">
                  <h3 className="text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/services" className="btn btn-line mt-10">View All Services</Link>
        </div>
      </section>

      <section className="wrap py-24">
        <SectionTitle eyebrow="Inspiration" title="Selected Interior Inspiration" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[IMG.kitchen, IMG.bedroom, IMG.dining, IMG.foyer].map((src, i) => (
            <img key={i} src={src} alt="Interior inspiration" className={`w-full rounded object-cover ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`} loading="lazy" />
          ))}
        </div>
        <Link to="/projects" className="btn btn-line mt-10">View Gallery</Link>
      </section>

      <section className="bg-ink py-24 text-ink-foreground">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Designed Around You. Crafted With Care. Driven by Commitment.</h2>
          </div>
          <p className="self-end leading-relaxed text-ink-foreground/75">
            Good design is more than appearance. It is how a space works, how it feels and how well it reflects the people who live in it. We combine thoughtful planning, functional detailing and careful craftsmanship so every corner of your home has a purpose.
          </p>
        </div>
      </section>

      <section className="wrap py-24">
        <SectionTitle eyebrow="How We Work" title="Four Simple Steps" center />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t pt-6">
              <p className="font-display text-4xl text-gold">{s.n}</p>
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
              <div key={c.title} className="rounded bg-card p-7">
                <div className="gold-rule" />
                <h3 className="mt-5 text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
