import { motion } from "framer-motion";
import { Mail, Phone, Building, User, ArrowRight, Shield } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const reasons = [
    "Hiring Technology Talent",
    "Hiring Go-to-Market Talent",
    "Building Recruitment Strategy",
    "Scaling Team Quickly",
    "General Inquiry",
    "Other",
  ];

  return (
    <section className="overflow-hidden min-h-screen bg-body dark:bg-darkBody flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="contact">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-4 py-2"
              >
                <Mail className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
                <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading leading-tight"
              >
                Shipped{" "}
                <motion.span
                  initial={{ backgroundSize: "0% 40%", color: "#242424" }}
                  animate={{ backgroundSize: "100% 90%", color: "#ffffff" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-mainHeading to-mainHeading bg-no-repeat bg-center bg-[length:100%_40%]"
                >
                  Talent
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-Cal font-bold text-subHeading dark:text-darkSubHeading leading-relaxed"
              >
                Growing your team? Let's connect!
              </motion.p>
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.a
                href="mailto:hiring@shippedtalent.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-mainHeading dark:bg-darkMainHeading rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-card dark:text-darkCard" />
                </div>
                <div>
                  <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">Email</p>
                  <p className="font-Cal font-bold text-lg text-subHeading dark:text-darkSubHeading group-hover:text-mainHeading group-hover:dark:text-darkMainHeading transition-colors duration-300">
                    hiring@shippedtalent.com
                  </p>
                </div>
              </motion.a>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-border to-transparent"
              />

              {/* Process Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-6"
              >
                <h3 className="font-Cal font-bold text-lg text-mainHeading dark:text-darkMainHeading mb-3">
                  What to Expect
                </h3>
                <ul className="font-Manrope text-textContent dark:text-darkTextContent space-y-2 text-sm">
                  <li>• Initial consultation within 24 hours</li>
                  <li>• Customized hiring strategy</li>
                  <li>• Direct access to top talent</li>
                  <li>• Ongoing partnership support</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-3xl p-8 sm:p-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-Cal font-bold text-3xl text-mainHeading dark:text-darkMainHeading mb-8"
            >
              Contact Shipped Talent
            </motion.h2>

            <form className="space-y-6">
              {/* Name & Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl px-4 py-3 font-Manrope text-subHeading dark:text-darkSubHeading placeholder-textContent focus:outline-none focus:border-mainHeading transition-colors duration-300"
                    placeholder="Your full name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl px-4 py-3 font-Manrope text-subHeading dark:text-darkSubHeading placeholder-textContent focus:outline-none focus:border-mainHeading transition-colors duration-300"
                    placeholder="Your company"
                  />
                </motion.div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl px-4 py-3 font-Manrope text-subHeading dark:text-darkSubHeading placeholder-textContent focus:outline-none focus:border-mainHeading transition-colors duration-300"
                    placeholder="your.email@company.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl px-4 py-3 font-Manrope text-subHeading dark:text-darkSubHeading placeholder-textContent focus:outline-none focus:border-mainHeading transition-colors duration-300"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </motion.div>
              </div>

              {/* Reason Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <label className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading">
                  What brings you to Shipped Talent?
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl px-4 py-3 font-Manrope text-subHeading dark:text-darkSubHeading focus:outline-none focus:border-mainHeading transition-colors duration-300 appearance-none"
                >
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard py-4 rounded-xl font-Manrope font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Privacy Notice */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs text-textContent dark:text-darkTextContent font-Manrope"
              >
                <Shield className="w-4 h-4" />
                <span>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </span>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
