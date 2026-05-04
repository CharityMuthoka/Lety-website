import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LetyTech Consultancy | Nairobi, Kenya" },
      { name: "description", content: "Get in touch with LetyTech Consultancy in Nairobi. Phone, email and contact form for tech, accounting and compliance enquiries." },
      { property: "og:title", content: "Contact LetyTech Consultancy" },
      { property: "og:description", content: "Reach our Nairobi team for tech & accounting services." },
    ],
  }),
  component: Contact,
});

const SERVICES = [
  "Web Development", "Accounting Services", "KRA iTax Services",
  "Business Registration", "Computer Training", "NTSA Services",
  "Compliance Services", "Business Consulting", "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative bg-gradient-hero text-white py-24">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.6 0.25 290), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Contact</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold">Let's talk.</h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">Reach out and we'll respond within a few hours during business days.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { i: <Phone className="h-5 w-5" />, t: "Phone", v: "+254 720 510 167", href: "tel:+254720510167" },
            { i: <Mail className="h-5 w-5" />, t: "Email", v: "letytechconsultancy@gmail.com", href: "mailto:letytechconsultancy@gmail.com" },
            { i: <MapPin className="h-5 w-5" />, t: "Location", v: "Nairobi, Kenya", href: "#map" },
          ].map((c) => (
            <a key={c.t} href={c.href} className="bg-card p-6 rounded-2xl border border-border shadow-card hover:shadow-brand transition flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white grid place-items-center shrink-0">{c.i}</div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                <div className="mt-1 font-semibold break-all">{c.v}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border shadow-card p-8 md:p-10">
            <h2 className="text-3xl font-display font-bold">Send us a message</h2>
            <p className="mt-2 text-muted-foreground text-sm">Fill in the form and our team will get back shortly.</p>
            {sent ? (
              <div className="mt-8 p-8 rounded-xl bg-gradient-soft text-center">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Message received!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within a few hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 grid gap-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email Address" name="email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Phone Number" name="phone" type="tel" />
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                    <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Select a service</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Your Message</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-brand hover:opacity-95 transition">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Hours + map intro */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-hero text-white rounded-2xl p-8 shadow-brand">
              <Clock className="h-7 w-7" />
              <h3 className="mt-4 text-xl font-bold">Working Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday – Friday</span><span>9:00 – 18:00</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span>9:00 – 14:00</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <h3 className="text-lg font-bold">Visit our office</h3>
              <p className="mt-2 text-sm text-muted-foreground">We're based in Nairobi, serving clients across Kenya and East Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl overflow-hidden shadow-card border border-border">
          <iframe
            title="LetyTech Consultancy location — Nairobi"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21921.299252774734!2d36.459373972709784!3d-1.3406822814756978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1776950413402!5m2!1sen!2ske" 
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
  );
}
