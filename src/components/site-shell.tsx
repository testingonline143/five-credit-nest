import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ADDRESS, BRAND, LOGO, NAV, PHONE_DISPLAY, PHONE_TEL, SERVICES, WA_LINK } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} aria-label={BRAND}>
          <img src={LOGO} alt={`${BRAND} logo`} className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-gold !py-3">WhatsApp</a>
        </nav>
        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block h-px w-6 bg-foreground" />
          <span className="mt-2 block h-px w-6 bg-foreground" />
          <span className="mt-2 block h-px w-4 bg-foreground" />
        </button>
      </div>
      {open && (
        <nav className="border-t bg-card lg:hidden">
          <div className="wrap flex flex-col py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 text-sm font-semibold uppercase tracking-[0.16em]" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-gold mt-4">WhatsApp Us</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="wrap grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={LOGO} alt={`${BRAND} logo`} className="h-16 w-auto rounded bg-card p-2" />
          <p className="mt-4 font-display text-xl">{BRAND}</p>
          <p className="mt-3 text-sm text-ink-foreground/70">Residential interior design and home interiors in Whitefield, Bengaluru.</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            {SERVICES.map((s) => <li key={s.name}><Link to="/services" className="hover:text-gold">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li><a href={PHONE_TEL} className="hover:text-gold">{PHONE_DISPLAY}</a></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp Us</a></li>
            <li>Whitefield, Bengaluru, Karnataka</li>
            <li className="text-xs text-ink-foreground/60">{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="wrap py-6 text-xs text-ink-foreground/50">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, img }: { eyebrow: string; title: string; img: string }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden">
      <img src={img} alt="" className="ken-burns absolute inset-0 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0" />
      <div className="wrap relative pb-14 pt-32 text-ink-foreground fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl">{title}</h2>
      <div className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {text && <p className="mt-5 leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function WhatsAppCta() {
  return (
    <section className="bg-ink-soft text-ink-foreground">
      <div className="wrap flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <div className="reveal max-w-xl">
          <p className="eyebrow">Start Your Journey</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Let's design a home that feels like you.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn btn-gold">Enquire on WhatsApp</a>
          <a href={PHONE_TEL} className="btn btn-line">Call Now</a>
        </div>
      </div>
    </section>
  );
}

export function useReveal() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const show = (el: Element) => el.classList.add("is-visible");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    const scan = () => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    scan();
    // Pages load in pieces; watch for new sections so nothing stays hidden.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    // Safety net: never leave content invisible.
    const t = window.setTimeout(() => document.querySelectorAll(".reveal:not(.is-visible)").forEach(show), 2500);
    return () => { io.disconnect(); mo.disconnect(); window.clearTimeout(t); };
  }, [path]);
}

export function FloatingWhatsApp() {
  return (
    <a href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="float-wa btn btn-gold !rounded-full !px-5 !py-4">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
