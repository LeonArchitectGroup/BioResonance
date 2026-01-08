import { motion } from "framer-motion";
import { 
  Brain, 
  Heart, 
  Bone, 
  Droplets, 
  Dna, 
  Pill, 
  Stethoscope, 
  Microscope,
  Activity,
  Scan,
  Waves,
  Target
} from "lucide-react";

const scanningCapabilities = [
  {
    icon: Brain,
    title: "Nervous System",
    areas: ["Brain tissues", "Spinal cord", "Peripheral nerves", "Autonomic system"],
  },
  {
    icon: Heart,
    title: "Cardiovascular",
    areas: ["Heart chambers", "Blood vessels", "Lymphatic system", "Blood composition"],
  },
  {
    icon: Bone,
    title: "Musculoskeletal",
    areas: ["Bones & joints", "Muscles & tendons", "Cartilage", "Connective tissue"],
  },
  {
    icon: Droplets,
    title: "Digestive System",
    areas: ["Stomach & intestines", "Liver & gallbladder", "Pancreas", "Microbiome"],
  },
  {
    icon: Dna,
    title: "Genetic Analysis",
    areas: ["Chromosomal markers", "Hereditary predispositions", "Epigenetic factors", "DNA integrity"],
  },
  {
    icon: Activity,
    title: "Endocrine System",
    areas: ["Thyroid function", "Adrenal glands", "Hormonal balance", "Metabolic rate"],
  },
];

const analysisFeatures = [
  {
    icon: Scan,
    title: "4025 Analysis Channels",
    description: "Simultaneous multi-channel scanning for comprehensive body assessment in a single session.",
  },
  {
    icon: Microscope,
    title: "10,000+ Spectral Etalons",
    description: "Extensive reference database for precise identification of pathological processes and conditions.",
  },
  {
    icon: Waves,
    title: "Frequency Harmonization",
    description: "Meta-therapy delivers corrective frequencies to restore cellular resonance and promote healing.",
  },
  {
    icon: Target,
    title: "Real-Time Comparison",
    description: "Instant comparison with healthy tissue patterns to identify deviations and imbalances.",
  },
];

const treatmentApplications = [
  { icon: Stethoscope, label: "Diagnostic Assessment" },
  { icon: Pill, label: "Medication Compatibility" },
  { icon: Dna, label: "Supplement Testing" },
  { icon: Activity, label: "Allergen Detection" },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
            Machine Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Comprehensive Body
            <br />
            <span className="text-gradient">Scanning & Analysis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The ISHA Metatron Hunter 4025 performs virtual scanning at tissue, cellular, chromosomal, 
            and molecular levels—providing unprecedented insight into your body's functional state.
          </p>
        </motion.div>

        {/* Scanning Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {scanningCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center mb-4">
                <capability.icon className="w-7 h-7 text-sage-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <ul className="space-y-2">
                {capability.areas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Analysis Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white text-center mb-10">
            Advanced Analysis Technology
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analysisFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-sage-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Treatment Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Beyond Diagnosis: <span className="text-gradient">Treatment Applications</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                The system not only identifies imbalances but also tests the compatibility of various 
                remedies with your unique biochemistry, ensuring personalized treatment recommendations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {treatmentApplications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-sage-50">
                    <app.icon className="w-5 h-5 text-sage-600" />
                    <span className="text-sm font-medium text-foreground">{app.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sage-50 rounded-2xl p-6">
              <h4 className="font-serif font-semibold text-foreground mb-4">What Can Be Tested:</h4>
              <ul className="space-y-3">
                {[
                  "Homeopathic remedies & potencies",
                  "Nutritional supplements & vitamins",
                  "Pharmaceutical medications",
                  "Food sensitivities & allergens",
                  "Environmental toxins & pathogens",
                  "Bach flower remedies & essences",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-sage-600" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
