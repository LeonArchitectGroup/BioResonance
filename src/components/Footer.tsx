import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Technology", href: "#technology" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Fertility & IVF Support",
    "Pregnancy Monitoring",
    "Gynecological Health",
    "Psychological Support",
    "Weight Management",
    "Wellness & Beauty",
  ];

  return (
    <footer className="bg-sage-700 text-sage-100">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center">
                <span className="text-sage-700 font-serif text-xl font-semibold">B</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-sage-50">BioResonance</h3>
                <p className="text-xs text-sage-300">Fertility & Wellness</p>
              </div>
            </div>
            <p className="text-sage-300 text-sm leading-relaxed mb-6">
              Advanced bioresonance diagnostics and therapy for fertility, 
              pregnancy, and overall wellness. 25+ years of professional excellence.
            </p>
            <div className="flex items-center gap-2 text-sm text-sage-300">
              <Heart className="w-4 h-4 text-rose-300" />
              <span>Supporting your journey to parenthood</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sage-50 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sage-300 hover:text-sage-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sage-50 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sage-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sage-50 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage-400" />
                <a href="tel:+1234567890" className="text-sage-300 hover:text-sage-50 transition-colors text-sm">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage-400" />
                <a href="mailto:info@bioresonance.com" className="text-sage-300 hover:text-sage-50 transition-colors text-sm">
                  info@bioresonance.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage-400 mt-0.5" />
                <span className="text-sage-300 text-sm">
                  123 Wellness Center,<br />Medical District
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage-400 text-sm">
            © {currentYear} BioResonance Fertility & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sage-400 hover:text-sage-50 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sage-400 hover:text-sage-50 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
