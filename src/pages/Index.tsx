import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Coffee, Truck, Star, ArrowRight, Clock, MapPin, Phone, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// You will need to update these image imports with your actual assets
import heroSlide1 from "@/assets/hero 1.webp";
import heroSlide2 from "@/assets/hero 2.webp";
import heroSlide3 from "@/assets/hero 3.webp";
import heroSlide4 from "@/assets/hero 4.webp";
import pastaImg from "@/assets/pasta.webp";
import sandwichImg from "@/assets/spring rolls.webp";
import coffeeImg from "@/assets/shakes.webp";
import cakeImg from "@/assets/peri peri.webp";
import gallery1 from "@/assets/home 1.webp";
import gallery2 from "@/assets/home 2.webp";

// NAP Data directly from Google Maps for Cafe Mittro
const PHONE = "+919719850000";
const PHONE_DISPLAY = "+91 97198 50000";
const ADDRESS = "Ground Floor House, 2, Satya Niketan Rd, Moti Bagh II, Satya Niketan, Moti Bagh, New Delhi, Delhi 110021";
const MAPS_LINK = "https://www.google.com/maps/place/cafe+mitro+satya+niketan/data=!4m2!3m1!1s0x390d1dda8206b467:0x8ad8ddb5f0d1657c?sa=X&ved=1t:242&ictx=111";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.397012315242!2d77.16763990000001!3d28.5878643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dda8206b467%3A0x8ad8ddb5f0d1657c!2sCafe%20Mittro!5e0!3m2!1sen!2sin!4v1776152778121!5m2!1sen!2sin";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

// Updated based on actual Cafe Mittro menu highlights
const specialties = [
  { name: "Mittro Special Shakes", desc: "Our signature thick shakes, perfectly chilled and loaded.", img: coffeeImg, price: "₹150", tag: "Bestseller" },
  { name: "White Sauce Pasta", desc: "Creamy, cheesy, and packed with an impeccable balance of flavors.", img: pastaImg, price: "₹220", tag: "Highly Recommended" },
  { name: "Crispy Spring Rolls", desc: "Golden fried to perfection and served with our spicy house dip.", img: sandwichImg, price: "₹180", tag: "Must Try" },
  { name: "Peri Peri Pizza", desc: "Fresh dough topped with premium ingredients and a fiery kick.", img: cakeImg, price: "₹240", tag: "Classic" },
];

// Extracted from real 5-star Google Maps reviews for Mittro
const reviews = [
  { name: "S. Bhardwaj", text: "Visited twice at Mittro Cafe. The staff is perfect and the food is good. We ordered chaap, butter chicken pasta, and shakes. Excellent experience!", rating: 5, avatar: "S" },
  { name: "Guddu K.", text: "They serve the best food and are very friendly. Spring rolls are the best. Always a good time at Cafe Mittro with the amazing ambiance.", rating: 5, avatar: "G" },
  { name: "Anil M.", text: "Absolutely finger-licking taste! It has been my go-to place for 4 years to relax, enjoy, and catch up with my friends.", rating: 5, avatar: "A" },
];

const stats = [
  { value: "11:30", label: "AM to 11 PM" },
  { value: "80+", label: "Global Dishes" },
  { value: "5.0", label: "Google Rating" },
  { value: "10k+", label: "Happy Friends" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="Cafe Mittro Ambiance"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10 bg-black/60" />

        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-rose-500/10 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6 text-orange-400">
                <span className="w-8 h-px bg-orange-400" />
                The Ultimate Hangout Spot
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cafe Mittro
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Global Flavors. Chilled Vibes. Great Memories.
            </motion.p>

            <motion.p
              className="text-white/60 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              From our signature thick shakes to creamy pastas and crispy spring rolls, experience the best comfort food in Satya Niketan.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-8" : "bg-white/40"}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient text-orange-500">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase text-orange-500">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The Mittro Experience</h2>
              <div className="section-divider max-w-xs mx-auto mt-4 bg-orange-500" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: UtensilsCrossed, title: "Global Cuisines", desc: "From Italian Pizzas to Indian Chaap, we serve the best of comforting global street food." },
              { icon: Coffee, title: "Relaxed Ambiance", desc: "The perfect easygoing hangout spot for students, dates, and groups in the heart of Satya." },
              { icon: Truck, title: "Quick Delivery", desc: "Craving us at home? Find us on Zomato and Swiggy for lightning-fast, piping hot delivery." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-500/20 transition-colors">
                    <f.icon size={28} className="text-orange-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase text-orange-500">Our Menu</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Signature Bites & Drinks</h2>
              <div className="section-divider max-w-xs mx-auto mt-4 bg-orange-500" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/menu" className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
                View Full Menu <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ambiance split */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={gallery1} alt="Cafe Mittro Ambiance" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
                <img src={gallery2} alt="Cafe Mittro Food" className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase text-orange-500">Our Space</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Warm, Welcoming,<br />and Simply Delicious
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located right in the bustling heart of the Satya Niketan market, Cafe Mittro is your perfect cozy escape. Whether you are catching up with old friends, bringing a date, or just craving the best spring rolls in South Campus, our warm ambiance makes every single visit special.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
                  Read Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase text-orange-500">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What Our Mittros Say</h2>
              <div className="section-divider max-w-xs mx-auto mt-4 bg-orange-500" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-orange-500/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase text-orange-500">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Locate Your Next Hangout</h2>
                <div className="space-y-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-orange-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday – Sunday: 11:30 AM – 11:00 PM</p>
                    </div>
                  </div>
                  {PHONE && (
                    <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-orange-500/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Call for Reservations</h4>
                        <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cafe Mittro Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Ready for a Chilled Out Meal?
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-lg mx-auto">
              Join us at Cafe Mittro for the best thick shakes and hot snacks in Satya Niketan. Bring your friends!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-8 py-4 font-semibold hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;