import React from 'react';
import { motion } from 'framer-motion';
import { User, Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Riding Equipment",
        "Stable Supplies", 
        "Horse Care",
        "Equestrian Apparel",
        "Custom Orders",
        "Bulk Pricing"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Craftsmanship",
        "Sustainability",
        "Press Kit",
        "Careers",
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Product Guides",
        "Size Charts",
        "Care Instructions",
        "Warranty Info",
        "Shipping Policy",
        "FAQ"
      ]
    },
    {
      title: "Business",
      links: [
        "Trade Program",
        "Dealer Login",
        "Volume Discounts",
        "Custom Manufacturing",
        "Quality Standards",
        "Partner With Us"
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "#"
    },
    {
      icon: Twitter,
      name: "Twitter", 
      url: "#"
    },
    {
      icon: Mail,
      name: "Newsletter",
      url: "#"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mainHeading dark:bg-darkMainHeading text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-mainHeading dark:text-darkMainHeading" />
              </div>
              <div>
                <h3 className="font-GtSuper text-4xl font-medium tracking-tight">Equestrian Catalog</h3>
                <p className="font-Manrope text-sm text-white/70">Master Craftsmanship Since 1985</p>
              </div>
            </div>
            
            <p className="font-Manrope text-sm text-white/80 leading-relaxed max-w-md">
              Creating exceptional equestrian equipment through traditional craftsmanship and modern innovation. 
              Trusted by professionals worldwide for quality and reliability.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-Manrope font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="font-Manrope text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-12 border-t border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-Manrope text-xl font-semibold mb-2">
                Stay Updated
              </h4>
              <p className="font-Manrope text-sm text-white/70">
                Get the latest product updates, crafting insights, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-Manrope text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading px-6 py-3 rounded-lg font-Manrope font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-Manrope text-sm text-white/70">
                © 2024 Equestrian Catalog. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="font-Manrope text-sm text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="font-Manrope text-sm text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="font-Manrope text-sm text-white/70 hover:text-white transition-colors"
                >
                  Cookies
                </motion.a>
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
              aria-label="Back to top"
            >
              <span className="font-Manrope text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quality Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white/5 py-4"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Handcrafted Quality",
              "Sustainable Materials", 
              "Lifetime Warranty",
              "Global Shipping",
              "ISO Certified",
              "Family Owned"
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="font-Manrope text-xs text-white/70">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;