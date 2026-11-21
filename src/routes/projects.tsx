import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { PageHero, WhatsAppCta } from "@/components/site-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Interior Inspiration Gallery | VAARADHI INNOVATIONS" },
      { name: "description", content: "Browse kitchens, bedrooms, living rooms and complete home interior inspiration." },
      { property: "og:title", content: "Projects | VAARADHI INNOVATIONS" },
      { property: "og:description", content: "A collection of thoughtfully designed spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const GALLERY = [
  { src: IMG.home, label: "Complete Home" },
  { src: IMG.kitchen, label: "Kitchen" },
  { src: IMG.bedroom, label: "Bedroom" },
  { src: IMG.living, label: "Living Room" },
  { src: IMG.dining, label: "Dining" },
  { src: IMG.foyer, label: "Foyer" },
  { src: IMG.bathroom, label: "Bathroom" },
  { src: IMG.office, label: "Home Office" },
];

function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title="A Collection of Thoughtfully Designed Spaces." img={IMG.bedroom} />
      <section className="wrap py-24">
        <p className="max-w-2xl text-sm text-muted-foreground">The images below are illustrative design inspiration showing the style and quality of interiors we create.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <figure key={g.label} className={`group relative overflow-hidden rounded ${i === 0 ? "sm:col-span-2" : ""}`}>
              <img src={g.src} alt={`${g.label} interior inspiration`} className="img-zoom aspect-[3/2] h-full w-full object-cover" loading="lazy" />
              <figcaption className="absolute bottom-0 left-0 bg-ink/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground">{g.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <WhatsAppCta />
    </>
  );
}
