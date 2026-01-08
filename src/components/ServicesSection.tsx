import { motion } from "framer-motion";
import { 
  Baby, 
  HeartPulse, 
  Brain, 
  Pill, 
  Weight, 
  Sparkles, 
  Stethoscope,
  Users
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Fertility & IVF Support",
    description: "Comprehensive support for couples undergoing IVF treatment. We help optimize conditions for successful embryo transfer and implantation.",
    features: ["Pre-conception assessment", "Embryo transfer support", "Implantation optimization"],
  },
  {
    icon: HeartPulse,
    title: "Pregnancy Monitoring",
    description: "Non-invasive monitoring throughout pregnancy to support healthy fetal development and maternal wellbeing.",
    features: ["Prenatal wellness", "Nutritional guidance", "Health optimization"],
  },
  {
    icon: Stethoscope,
    title: "Gynecological Health",
    description: "Diagnostic and therapeutic support for various gynecological conditions, from hormonal balance to menstrual health.",
    features: ["Hormonal assessment", "Menstrual health", "Early detection"],
  },
  {
    icon: Pill,
    title: "Medication Compatibility",
    description: "Determine which medications, vitamins, and supplements are best recognized and absorbed by your unique body.",
    features: ["Drug compatibility", "Supplement testing", "Optimal absorption"],
  },
  {
    icon: Brain,
    title: "Psychological Support",
    description: "Bioresonance therapy to address stress, anxiety, and emotional challenges that couples face during fertility treatments.",
    features: ["Stress reduction", "Emotional balance", "Couple therapy"],
  },
  {
    icon: Users,
    title: "Lactation Support",
    description: "Support for new mothers to improve milk production and quality for optimal infant nutrition.",
    features: ["Milk production", "Nutritional optimization", "Postpartum care"],
  },
  {
    icon: Weight,
    title: "Weight Management",
    description: "Personalized programs for healthy weight management, whether gaining or losing weight for optimal fertility.",
    features: ["Metabolic analysis", "Diet optimization", "Body composition"],
  },
  {
    icon: Sparkles,
    title: "Wellness & Beauty",
    description: "Holistic treatments to help women feel their best, supporting both internal health and external radiance.",
    features: ["Cellular regeneration", "Skin health", "Anti-aging"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Comprehensive Care for
            <br />
            <span className="text-gradient">Every Stage of Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fertility support to postnatal care, we offer a full spectrum of 
            bioresonance services tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-100 group-hover:bg-sage-200 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-sage-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-sage-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
