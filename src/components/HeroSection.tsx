import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Bioresonance therapy visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              25+ Years of Professional Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-foreground leading-tight mb-6"
          >
            Advanced Bioresonance
            <br />
            <span className="text-gradient">Fertility & Wellness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Non-invasive diagnostic and therapeutic solutions powered by ISHA Metatron Hunter 4025. 
            Supporting your journey from conception to motherhood with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Schedule Your Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Heart, label: "IVF Support", desc: "Fertility optimization" },
              { icon: Shield, label: "Non-Invasive", desc: "Safe diagnostics" },
              { icon: Sparkles, label: "Personalized", desc: "Tailored treatments" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-sage-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-sage-400 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-sage-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
