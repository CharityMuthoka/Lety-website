import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Heart, Sparkles, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LetyTech Consultancy" },
      { name: "description", content: "Meet the team behind LetyTech Consultancy: a Nairobi-based firm helping businesses with technology, accounting and compliance since 2022." },
      { property: "og:title", content: "About LetyTech Consultancy" },
      { property: "og:description", content: "Your trusted tech & accounting partner in Kenya." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.6 0.25 290), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">About Us</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold max-w-3xl">
            Trusted partners for Kenya's <span className="text-gradient-brand bg-gradient-to-r from-white to-[oklch(0.85_0.15_290)] bg-clip-text text-transparent">growing businesses</span>.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Since 2022, we've helped over 200 businesses ship better technology and run cleaner books — combining the discipline of accounting with the velocity of modern software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutImg}
            alt="LetyTech consultancy team collaborating"
            className="rounded-2xl shadow-brand w-full h-auto"
            loading="lazy"
            width={1600}
            height={1200}
          />
          <div>
            <h2 className="text-4xl font-display font-bold">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              LetyTech Consultancy was founded with a simple belief: small and mid-size Kenyan businesses deserve the same quality of technology and financial advisory as the big firms — without the big-firm price tag or politics.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today our team works with clients across web development, accounting, KRA compliance, NTSA services and business registration. Our clients keep coming back because we treat their numbers and their software with equal care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-display font-bold text-center">What guides us</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { i: <Target className="h-6 w-6" />, t: "Mission", d: "Empower Kenyan businesses with reliable tech and clear financial visibility." },
              { i: <Sparkles className="h-6 w-6" />, t: "Vision", d: "To be East Africa's most trusted partner for tech-enabled accounting." },
              { i: <Heart className="h-6 w-6" />, t: "Values", d: "Integrity, transparency, craftsmanship and genuine care for client outcomes." },
            ].map((v) => (
              <div key={v.t} className="bg-card p-8 rounded-2xl shadow-card">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white grid place-items-center">{v.i}</div>
                <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { n: "200+", l: "Happy Clients" },
            { n: "4+", l: "Years Experience" },
            { n: "24/7", l: "Support Available" },
            { n: "99%", l: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.l} className="p-8 rounded-2xl bg-gradient-soft">
              <div className="text-5xl font-display font-bold text-gradient-brand">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Let's build something together.</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.22_0.12_275)] px-6 py-3 font-semibold">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
