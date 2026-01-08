import { motion } from "framer-motion";
import { 
  Activity, 
  Brain, 
  Heart, 
  Leaf, 
  Shield, 
  Sparkles, 
  Timer, 
  Zap 
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "100% Non-Invasive",
    description: "No radiation, no blood tests, no invasive procedures. Completely safe for pregnant women and everyone.",
  },
  {
    icon: Timer,
    title: "Quick Assessment",
    description: "Comprehensive body scanning in a single session, providing immediate insights into your health status.",
  },
  {
    icon: Activity,
    title: "Early Detection",
    description: "Identify potential health issues at the cellular level before they manifest as symptoms.",
  },
  {
    icon: Zap,
    title: "Effective Therapy",
    description: "Meta-therapy stimulates natural healing by restoring proper cellular frequencies.",
  },
  {
    icon: Leaf,
    title: "Natural Approach",
    description: "Supports the body's innate healing abilities without pharmaceutical intervention.",
  },
  {
    icon: Brain,
    title: "Mind-Body Balance",
    description: "Address both physical and psychological factors affecting your health and fertility.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment plan is tailored to your unique biological profile and health goals.",
  },
  {
    icon: Sparkles,
    title: "Comprehensive Analysis",
    description: "From allergies to hormones, get a complete picture of your body's functional state.",
  },
];

const conditions = [
  "Fertility challenges",
  "Hormonal imbalances",
  "Menstrual irregularities",
  "Pregnancy support",
  "Stress & anxiety",
  "Allergies & sensitivities",
  "Metabolic disorders",
  "Immune system issues",
  "Digestive problems",
  "Chronic fatigue",
  "Skin conditions",
  "Weight management",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Why Choose
            <br />
            <span className="text-gradient">Bioresonance Therapy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of non-invasive bioresonance technology 
            for your health and wellness journey.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="text-center p-6 rounded-2xl bg-muted/30 hover:bg-card hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-sage-600" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Conditions We Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-500 to-sage-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-sage-50 mb-2 text-center">
            Conditions We Address
          </h3>
          <p className="text-sage-200 text-center mb-8 max-w-xl mx-auto">
            Bioresonance therapy can help with a wide range of health conditions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map((condition, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-sage-50/20 text-sage-50 text-sm font-medium backdrop-blur-sm"
              >
                {condition}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
