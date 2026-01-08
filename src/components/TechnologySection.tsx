import { motion } from "framer-motion";
import { Check, Zap, Shield, Eye, Cpu } from "lucide-react";
import deviceImage from "@/assets/device.jpg";

const features = [
  {
    icon: Eye,
    title: "Multidimensional Scanning",
    description: "Virtual scanning at tissue, cellular, and DNA levels for comprehensive health assessment.",
  },
  {
    icon: Zap,
    title: "Meta-Therapy Treatment",
    description: "Stimulates healing by re-energizing cells with their appropriate resonant frequencies.",
  },
  {
    icon: Shield,
    title: "Non-Invasive Diagnostics",
    description: "Safe assessment without radiation or invasive procedures.",
  },
  {
    icon: Cpu,
    title: "Advanced NLS Technology",
    description: "Based on quantum entropy logic developed by the Institute of Practical Psychophysics.",
  },
];

const capabilities = [
  "Organ and tissue health assessment",
  "Hereditary disease detection at genome level",
  "Pathological process identification",
  "Medication and supplement compatibility testing",
  "Hormonal balance analysis",
  "Allergen and toxin detection",
  "Pre and postnatal monitoring",
  "Comparative treatment tracking",
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-padding bg-sage-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-card text-sage-700 text-sm font-medium mb-4">
            Our Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            ISHA Metatron Hunter 4025
            <br />
            <span className="text-gradient">Bioresonance System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Developed by the Institute of Practical Psychophysics, this advanced NLS diagnostic 
            system uses light wave resonance to scan and analyze the functional state of your body.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Device Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={deviceImage}
                alt="ISHA Metatron Hunter 4025 bioresonance device"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-card">
              <p className="text-sm font-medium text-sage-700">Certified NLS Technology</p>
              <p className="text-xs text-muted-foreground">Institute of Practical Psychophysics</p>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-card shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
        >
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
            Diagnostic Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-sm text-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
