import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Patients Helped" },
  { icon: Heart, value: "1000+", label: "Successful Pregnancies" },
  { icon: BookOpen, value: "Certified", label: "NLS Practitioner" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutPortrait}
                alt="Professional midwife and bioresonance practitioner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-700/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-100 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Dedicated to Your
              <br />
              <span className="text-gradient">Fertility Journey</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 25 years of experience as a midwife specializing in IVF and gynecology, 
              I have dedicated my career to helping couples achieve their dream of parenthood. 
              Working closely with gynecologists in fertility clinics, I understand the physical 
              and emotional challenges of the fertility journey.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My integration of the ISHA Metatron Hunter 4025 bioresonance technology allows 
              me to offer non-invasive diagnostics and treatments that complement traditional 
              medical care. From supporting embryo transfer to monitoring pregnancy development, 
              I provide comprehensive care tailored to each individual.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <stat.icon className="w-6 h-6 text-sage-500 mx-auto mb-2" />
                  <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
