import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE = "+919719850000";
const PHONE_DISPLAY = "+91 97198 50000";
const ADDRESS = "Ground Floor House, 2, Satya Niketan Rd, Moti Bagh II, Satya Niketan, New Delhi, 110021";
const MAPS_LINK = "https://goo.gl/maps/placeholder-for-cafe-mittro";

const Footer = () => (
  <footer className="bg-foreground text-background relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    
    <div className="container py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4 text-white">
            <span className="text-primary">Cafe</span> Mittro
          </h3>
          <p className="text-background/60 text-sm leading-relaxed mb-6">
            A vibrant hangout in Satya Niketan serving global comfort food, from thick shakes to cheesy pizzas and local favorites.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/cafemittro" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Navigate</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-background/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Must Try</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>Mittro Special Shakes</li>
            <li>White Sauce Pasta</li>
            <li>Crispy Spring Rolls</li>
            <li>Peri Peri Pizza</li>
            <li>Honey Chili Potato</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Visit Us</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {ADDRESS}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Cafe Mittro. All rights reserved.
        </p>
        <p className="text-xs text-background/40">
          Mon – Sun: 11:30 AM – 11:00 PM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;