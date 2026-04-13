import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Pizza, Truck, Star, ArrowRight, Clock, MapPin, Phone, Coffee, Wind } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import momosImg from "@/assets/momos.jpg";

// EXACT NAP DATA FOR SEO
const NAME = "Cafe Mittro";
const PHONE = "+919719850000";
const PHONE_DISPLAY = "+91 97198 50000";
const ADDRESS = "Ground Floor House, 2, Satya Niketan Rd, Moti Bagh II, Satya Niketan, Moti Bagh, New Delhi, Delhi 110021";
const MAPS_LINK = "https://maps.google.com/?cid=4213344669528745340";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.111456321262!2d77.1676399!3d28.5878643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1da28206b467%3A0x3ad8ddb5f0d1657c!2sCafe%20Mittro!5e0!3m2!1sen!2sin!4v1713060000000!5m2!1sen!2sin";

// Dynamic content based on real cafe data
const specialties = [
  { name: "Mittro Special Shakes", desc: "Our signature thick shakes, chilled to perfection.", tag: "Bestseller", img: momosImg },
  { name: "White Sauce Pasta", desc: "Creamy, cheesy, and loaded with authentic flavors.", tag: "Must Try", img: momosImg },
  { name: "Crispy Spring Rolls", desc: "Golden fried and served with our spicy house dip.", tag: "Popular", img: momosImg },
  { name: "Peri Peri Pizza", desc: "Fresh dough topped with premium ingredients and a spicy kick.", tag: "Classic", img: momosImg },
];

const reviews = [
  { name: "S. Bhardwaj", text: "Visited twice at Mittro Cafe. The staff is perfect and the food is good. We ordered chaap, butter chicken pasta, and shakes. Excellent experience!", rating: 5, avatar: "S" },
  { name: "Guddu K.", text: "They serve the best food and are very friendly. Spring rolls are the best. Always a good time at Cafe Mittro.", rating: 5, avatar: "G" },
  { name: "Anil M.", text: "Absolutely finger-licking taste! It has been my go-to place for 4 years to relax and enjoy.", rating: 5, avatar: "A" },
];

const stats = [
  { value: "10k+", label: "Happy Guests" },
  { value: "80+", label: "Global Dishes" },
  { value: "3.5", label: "Google Rating" },
  { value: "4+", label: "Years of Service" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Using momosImg for all slides as requested
  const heroSlides = [momosImg, momosImg, momosImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-neutral-900"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img src={slide} alt={NAME} className="w-full h-full object-cover" />
          </motion.div>
        ))}

        <div className="relative z-20 container">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-primary" />
                The Ultimate Satya Niketan Hangout
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {NAME}
            </motion.h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 font-display italic">
              Global Flavors. Chilled Vibes. Great Memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white hover:scale-105 transition-transform">
                View Menu <ArrowRight size={18} />
              </Link>
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors">
                <Phone size={18} /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Stats */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">Why Visit {NAME}?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Pizza className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Cuisines</h3>
              <p className="text-muted-foreground">From Italian Pizzas to Indian Chaap, we serve the best of global comfort food.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Relaxed Ambiance</h3>
              <p className="text-muted-foreground">The perfect easygoing hangout spot for students and groups in the heart of Satya.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">Craving us at home? Find us on Zomato and Swiggy for lightning-fast delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-display font-bold mt-2">What Our Mittros Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-neutral-700 italic mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">{r.avatar}</div>
                  <span className="font-bold text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Locate Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Opening Hours</h4>
                    <p className="text-muted-foreground">Mon – Sun: 11:30 AM – 11:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Call for Reservations</h4>
                    <p className="text-muted-foreground">{PHONE_DISPLAY}</p>
                  </div>
                </div>
              </div>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="mt-8 inline-block text-primary font-bold hover:underline">
                Open in Google Maps →
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={NAME}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready for a Chilled Out Meal?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Join us at {NAME} for the best shakes and snacks in Satya Niketan.
          </p>
          <div className="flex justify-center gap-4">
             <a href={`tel:${PHONE}`} className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:shadow-xl transition-shadow">
               Call Now
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;