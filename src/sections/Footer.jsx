import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUp, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Technology Recruitment",
    "Go-to-Market Hiring",
    "Team Scaling",
    "Hiring Strategy",
    "Executive Search",
  ];

  return (
    <footer className="bg-card dark:bg-darkCard border-t border-border dark:border-darkBorder">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-baseline">
              <span className="font-Cal font-bold text-3xl text-mainHeading dark:text-darkMainHeading">
                Shipped
              </span>
              <span className="font-Cal font-bold text-3xl text-subHeading dark:text-darkSubHeading ml-1">
                Talent
              </span>
            </div>

            <p className="font-Manrope text-textContent dark:text-darkTextContent leading-relaxed max-w-md">
              Boutique recruiting firm specializing in hiring top technology and
              Go-to-Market talent for growth companies.
            </p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-mainHeading hover:dark:bg-darkMainHeading hover:border-mainHeading hover:dark:border-darkMainHeading group"
              >
                <Linkedin className="w-4 h-4 text-textContent dark:text-darkTextContent group-hover:text-card group-hover:dark:text-darkCard" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-mainHeading hover:dark:bg-darkMainHeading hover:border-mainHeading hover:dark:border-darkMainHeading group"
              >
                <Twitter className="w-4 h-4 text-textContent dark:text-darkTextContent group-hover:text-card group-hover:dark:text-darkCard" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-mainHeading hover:dark:bg-darkMainHeading hover:border-mainHeading hover:dark:border-darkMainHeading group"
              >
                <Instagram className="w-4 h-4 text-textContent dark:text-darkTextContent group-hover:text-card group-hover:dark:text-darkCard" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-Cal font-bold text-lg text-mainHeading dark:text-darkMainHeading mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="font-Manrope text-textContent dark:text-darkTextContent hover:text-mainHeading hover:dark:text-darkMainHeading transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-border dark:bg-darkBorder rounded-full group-hover:bg-mainHeading group-hover:dark:bg-darkMainHeading transition-colors duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-Cal font-bold text-lg text-mainHeading dark:text-darkMainHeading mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-Manrope text-textContent dark:text-darkTextContent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-border dark:bg-darkBorder rounded-full" />
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="font-Cal font-bold text-lg text-mainHeading dark:text-darkMainHeading mb-6">
              Get In Touch
            </h3>

            {/* Email */}
            <motion.a
              href="mailto:hiring@shippedtalent.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center group-hover:bg-mainHeading group-hover:dark:bg-darkMainHeading group-hover:border-mainHeading transition-colors duration-300">
                <Mail className="w-4 h-4 text-textContent dark:text-darkTextContent group-hover:text-card group-hover:dark:text-darkCard" />
              </div>
              <div>
                <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  Email
                </p>
                <p className="font-Manrope font-medium text-subHeading dark:text-darkSubHeading group-hover:text-mainHeading group-hover:dark:text-darkMainHeading transition-colors duration-300">
                  hiring@shippedtalent.com
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+1234567890"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center group-hover:bg-mainHeading group-hover:dark:bg-darkMainHeading group-hover:border-mainHeading transition-colors duration-300">
                <Phone className="w-4 h-4 text-textContent dark:text-darkTextContent group-hover:text-card dark:group-hover:text-darkCard" />
              </div>
              <div>
                <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  Phone
                </p>
                <p className="font-Manrope font-medium text-subHeading dark:text-darkSubHeading group-hover:text-mainHeading group-hover:dark:text-darkMainHeading transition-colors duration-300">
                  +1 (234) 567-890
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-textContent dark:text-darkTextContent" />
              </div>
              <div>
                <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  Location
                </p>
                <p className="font-Manrope font-medium text-subHeading dark:text-darkSubHeading ">
                  Global Remote
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border dark:border-darkBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-Manrope text-textContent dark:text-darkTextContent text-sm order-2 md:order-1"
            >
              © {new Date().getFullYear()} Shipped Talent. All rights reserved.
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg order-1 md:order-2"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
