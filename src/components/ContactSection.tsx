import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We will get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 234 567 890", href: "tel:+1234567890" },
    { icon: Mail, label: "Email", value: "info@bioresonance.com", href: "mailto:info@bioresonance.com" },
    { icon: MapPin, label: "Location", value: "123 Wellness Center, Medical District", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Begin Your
            <br />
            <span className="text-gradient">Wellness Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation to discover how bioresonance therapy 
            can support your health and fertility goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Schedule a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    required
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full h-11 px-3 rounded-lg bg-muted/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  <option value="fertility">Fertility & IVF Support</option>
                  <option value="pregnancy">Pregnancy Monitoring</option>
                  <option value="gynecological">Gynecological Health</option>
                  <option value="psychological">Psychological Support</option>
                  <option value="general">General Wellness Assessment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your health goals and any questions you have..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to take the first step towards better health? Reach out to schedule 
                your initial consultation. We offer both in-person and online appointments.
              </p>

              <div className="space-y-4 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sage-100 group-hover:bg-sage-200 flex items-center justify-center transition-colors">
                      <item.icon className="w-5 h-5 text-sage-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-rose-50 to-sage-50 rounded-2xl p-6 border border-rose-100">
              <h4 className="font-serif font-semibold text-foreground mb-2">
                Professional Training & Certification
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trained and certified through the ISHA Apprentice Masters Classes of NLS, 
                backed by the Institute of Practical Psychophysics. Ongoing support and 
                consultation available for complex cases.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
