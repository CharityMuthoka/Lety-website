import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import letylogo from './../assets/images/lety logo.jpeg'

export function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.06_275)] text-white/80 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
          <img src={letylogo} alt="lety logo" className="h-auto w-5"/>
          <span className="font-display font-bold text-lg text-white">LetyTech Consultancy</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Your trusted partner for technology, accounting and compliance solutions in Kenya. Empowering businesses to grow with confidence since 2022.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> +254 720 510 167</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> letytechconsultancy@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} LetyTech Consultancy. All rights reserved.</span>
          <span>Built with care in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}
