import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Code2, Calculator, ArrowRight, Sparkles, ShieldCheck, Zap, Users, ChevronDown, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LetyTech Consultancy — Tech & Accounting Solutions in Kenya" },
      { name: "description", content: "Empowering Kenyan businesses with web development, accounting, KRA iTax, NTSA and compliance services." },
      { property: "og:title", content: "LetyTech Consultancy" },
      { property: "og:description", content: "Your trusted tech & accounting partner in Kenya." },
    ],
  }),
  component: Home,
});

const FAQS = [
  {
    q: "What services does LetyTech Consultancy offer?",
    a: "We focus on two core pillars — Technology (web development, software, computer training) and Accounting (bookkeeping, payroll, KRA iTax). We also handle business registration, NTSA and compliance services. See the Services page for the full list.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical small-business website takes 1–3 weeks depending on scope. E-commerce and custom web apps take 4–8 weeks. We share a clear timeline and milestones during the proposal stage.",
  },
  {
    q: "Can you handle my company's monthly KRA returns?",
    a: "Yes. We file VAT, PAYE, withholding tax, NSSF and SHA returns on a monthly retainer so you never miss a deadline.",
  },
  {
    q: "Do you serve clients outside Nairobi?",
    a: "Absolutely. Most of our work is delivered remotely — we have clients across Kenya and the wider East African region.",
  },
  {
    q: "How do I get started?",
    a: "Click Get Started, send us a message via the Contact page, or chat with our assistant in the bottom-right corner. We'll get back within a few hours.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.22_0.12_275)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/15">
              <Sparkles className="h-3.5 w-3.5" /> Your Trusted Tech & Finance Partner
            </span>
            <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-[1.05]">
              Technology and Accounting,<br />
              <span className="bg-gradient-to-r from-[oklch(0.85_0.15_270)] to-[oklch(0.78_0.18_310)] bg-clip-text text-transparent">
                done right.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              We help Kenyan businesses ship modern websites, stay tax-compliant and run their finances cleanly — all under one roof.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.22_0.12_275)] px-6 py-3 font-semibold hover:bg-white/90 transition">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 backdrop-blur px-6 py-3 font-semibold hover:bg-white/10 transition">
                <PlayCircle className="h-4 w-4" /> Explore Services
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              {[
                { n: "200+", l: "Happy Clients" },
                { n: "4+", l: "Years Experience" },
                { n: "99%", l: "Satisfaction" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-bold">{s.n}</div>
                  <div className="text-xs text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="var(--background)" />
        </svg>
      </section>

      {/* TWO PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our Core Pillars</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Two practices. One partner.</h2>
          <p className="mt-4 text-muted-foreground">
            We've structured our firm around the two things growing businesses need most: brilliant technology and rock-solid accounting.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <PillarCard
            icon={<Code2 className="h-7 w-7" />}
            title="Technology"
            blurb="Modern websites, web apps and digital tools that move your business forward."
            points={["Web & App Development", "E-commerce Solutions", "Computer Training & Support"]}
          />
          <PillarCard
            icon={<Calculator className="h-7 w-7" />}
            title="Accounting"
            blurb="Clean books, accurate reports and full tax compliance — handled monthly, on time."
            points={["Bookkeeping & Payroll", "KRA iTax & Returns Filing", "Financial Reporting"]}
          />
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, t: "Compliance First", d: "We keep you on the right side of KRA, NSSF and SHA — always." },
              { icon: <Zap className="h-6 w-6" />, t: "Fast Turnaround", d: "Most engagements kick off within 48 hours of approval." },
              { icon: <Users className="h-6 w-6" />, t: "Personal Service", d: "You get a dedicated lead — not a ticket queue." },
            ].map((f) => (
              <div key={f.t} className="bg-card p-8 rounded-2xl shadow-card">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white grid place-items-center">{f.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{f.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">See us in action</span>
            <h2 className="mt-3 text-4xl font-display font-bold">Modern tools, traditional discipline.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Watch how we combine modern web technologies with disciplined accounting practices to give Kenyan businesses an edge — from startup MVPs to mid-size companies preparing for audit.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
              Learn about our approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-brand bg-gradient-hero">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={heroImg}
            >
              <source src="https://cdn.pixabay.com/video/2024/03/15/204306-924698132_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Frequently asked questions</h2>
            <p className="mt-4 text-muted-foreground">Quick answers. If you need more detail, the chat assistant in the corner is always on.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-12 md:p-16 text-center shadow-brand relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[oklch(0.55_0.25_300)] opacity-30 blur-3xl" />
          <h2 className="relative text-4xl md:text-5xl font-display font-bold">Ready to grow with confidence?</h2>
          <p className="relative mt-4 text-white/80 max-w-xl mx-auto">Talk to our team today and let's map out your next move.</p>
          <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.22_0.12_275)] px-7 py-3.5 font-semibold">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function PillarCard({ icon, title, blurb, points }: { icon: React.ReactNode; title: string; blurb: string; points: string[] }) {
  return (
    <div className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card hover:shadow-brand transition-shadow overflow-hidden">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-20 transition" />
      <div className="relative h-14 w-14 rounded-2xl bg-gradient-brand text-white grid place-items-center shadow-brand">{icon}</div>
      <h3 className="relative mt-6 text-2xl font-display font-bold">{title}</h3>
      <p className="relative mt-2 text-muted-foreground">{blurb}</p>
      <ul className="relative mt-5 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-5 flex items-center justify-between text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
