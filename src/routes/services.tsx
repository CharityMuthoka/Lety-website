import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Calculator, GraduationCap, Building2, Receipt, Car, ShieldCheck, LineChart, ArrowRight,
} from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, Accounting, KRA, NTSA & Compliance | LetyTech" },
      { name: "description", content: "Complete service catalog: web development, accounting, computer training, business registration, KRA iTax, NTSA, and compliance services." },
      { property: "og:title", content: "Our Services — LetyTech Consultancy" },
      { property: "og:description", content: "Tech, accounting and compliance services for Kenyan businesses." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom websites, e-commerce stores and web applications built on modern frameworks.",
    items: ["Responsive Websites", "E-commerce Stores", "Custom Web Apps", "Hosting & Maintenance"],
  },
  {
    icon: Calculator,
    title: "Accounting Services",
    desc: "Keep your books clean, your payroll smooth and your reports board-ready.",
    items: ["Bookkeeping", "Payroll Management", "Financial Reporting", "Audit Prep"],
  },
  {
    icon: Receipt,
    title: "KRA iTax Services",
    desc: "Full KRA compliance — registrations, monthly and annual returns filed on time.",
    items: ["KRA PIN Registration", "VAT, PAYE & WHT Returns", "Annual Returns", "Tax Advisory"],
  },
  {
    icon: Building2,
    title: "Business Registration",
    desc: "Get your company off the ground with a fully compliant setup from day one.",
    items: ["Company Registration", "Name Search", "Business Permits", "BRS Filings"],
  },
  {
    icon: GraduationCap,
    title: "Computer Training",
    desc: "Practical computer packages and software training for individuals and teams.",
    items: ["Intro to Computers", "Microsoft Word & Excel", "PowerPoint", "Internet & Email"],
  },
  {
    icon: Car,
    title: "NTSA Services",
    desc: "Skip the queues. We handle all NTSA TIMS transactions on your behalf.",
    items: ["Vehicle Registration", "Logbook Transfers", "Driving License Renewal", "TIMS Account Setup"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Services",
    desc: "Stay compliant with statutory bodies — never miss a deadline again.",
    items: ["NSSF Registration & Returns", "SHA (NHIF) Registration", "Annual Returns", "Statutory Filings"],
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    desc: "Strategic advisory to sharpen operations, processes and growth planning.",
    items: ["Business Strategy", "Process Optimization", "Growth Planning", "Financial Modelling"],
  },
];

function Services() {
  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.22_0.12_275)]/60 via-transparent to-[oklch(0.22_0.12_275)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Our Services</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold max-w-3xl">
            Everything you need, <br />under <span className="bg-gradient-to-r from-white to-[oklch(0.85_0.15_290)] bg-clip-text text-transparent">one roof</span>.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Eight focused service lines covering technology, finance, compliance and consulting — delivered by one team, with one point of contact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group relative bg-card p-7 rounded-2xl border border-border shadow-card hover:shadow-brand hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-10 blur-2xl transition" />
                <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white grid place-items-center shadow-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-display font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-gradient-brand" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-display font-bold">Not sure what you need?</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your business and we'll recommend the right mix of services.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-brand">
            Request a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
