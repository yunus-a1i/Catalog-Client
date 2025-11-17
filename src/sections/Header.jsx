import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) 
      document.body.style.overflow = "hidden";
    else 
      document.body.style = "auto";
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/80 dark:bg-darkCard/80 backdrop-blur-md border-border dark:border-darkBorder shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2"
            >
              <div className="flex items-baseline">
                <span className="font-Cal font-bold text-2xl text-mainHeading dark:text-darkMainHeading">
                  Shipped
                </span>
                <span className="font-Cal font-bold text-2xl text-subHeading dark:text-darkSubHeading ml-1">
                  Talent
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="font-Manrope font-medium text-subHeading dark:text-darkSubHeading hover:text-mainHeading hover:dark:text-darkMainHeading transition-all duration-300 relative group"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-mainHeading dark:bg-darkMainHeading group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}

              {/* CTA Button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard px-6 py-2.5 rounded-lg font-Manrope font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-4 h-4" />
                Get Started
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
              ) : (
                <Menu className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card dark:bg-darkCard border-l border-border dark:border-darkBorder z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border dark:border-darkBorder">
                  <div className="flex items-baseline">
                    <span className="font-Cal font-bold text-2xl text-mainHeading dark:text-darkMainHeading">
                      Shipped
                    </span>
                    <span className="font-Cal font-bold text-2xl text-subHeading dark:text-darkSubHeading ml-1">
                      Talent
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-body dark:bg-darkBody rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6 space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-Manrope font-medium text-xl text-subHeading dark:text-darkSubHeading hover:text-mainHeading hover:dark:text-darkMainHeading transition-colors duration-300 py-2 border-b border-border dark:border-darkBorder/50"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="p-6 border-t border-border dark:border-darkBorder"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard py-3 rounded-lg font-Manrope font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    Get Started
                  </motion.a>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <a
                      href="mailto:hiring@shippedtalent.com"
                      className="font-Manrope text-sm text-textContent dark:text-darkTextContent hover:text-mainHeading hover:dark:text-darkMainHeading transition-colors duration-300"
                    >
                      hiring@shippedtalent.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-16 lg:h-20 bg-card dark:bg-darkCard" />
    </>
  );
};

export default Header;
