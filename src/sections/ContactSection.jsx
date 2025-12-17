import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@equestrian.com",
      description: "We reply within 24 hours",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Workshop",
      details: "123 Craftsmanship Lane",
      description: "By appointment only",
      action: "Get Directions"
    }
  ];

  const interests = [
    "Custom Saddles",
    "Bridles & Tack",
    "Grooming Equipment",
    "Stable Supplies",
    "Bulk Orders",
    "Custom Manufacturing",
    "Partnership",
    "Other"
  ];

  return (
    <section className="py-20 bg-card dark:bg-darkCard border-t border-border dark:border-darkBorder">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-GtSuper text-3xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-4">
            Start Your Project
          </h2>
          <p className="font-Manrope text-lg text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            Ready to discuss your equestrian equipment needs? Let's schedule a consultation to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 border border-border dark:border-darkBorder rounded-lg hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-mainHeading dark:bg-darkMainHeading rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-1">
                        {method.title}
                      </h4>
                      <p className="font-Manrope text-lg text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading font-medium mb-1">
                        {method.details}
                      </p>
                      <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent mb-2">
                        {method.description}
                      </p>
                      <button className="font-Manrope text-sm text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading font-medium hover:text-subHeading dark:hover:text-darkSubHeading transition-colors">
                        {method.action} →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading" />
                <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
                  { day: "Sunday", hours: "By appointment only" }
                ].map((schedule, index) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="font-Manrope text-sm text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                      {schedule.day}
                    </span>
                    <span className="font-Manrope text-sm text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-mainHeading dark:bg-darkMainHeading text-white rounded-xl p-6"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <div>
                  <h4 className="font-Manrope font-semibold mb-1">24-Hour Response</h4>
                  <p className="font-Manrope text-sm text-white/80">
                    We guarantee to respond to all inquiries within one business day
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl p-8"
          >
            <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-6">
              Schedule Consultation
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-Manrope text-xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2">
                  Thank You!
                </h4>
                <p className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                  We've received your inquiry and will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                    I'm interested in *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                  >
                    <option value="">Select an option</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-Manrope text-sm font-medium text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2 block">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-lg px-4 py-3 font-Manrope text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading resize-none"
                    placeholder="Tell us about your project, quantities needed, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-mainHeading dark:bg-darkMainHeading text-white py-4 rounded-lg font-Manrope font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Request Consultation</span>
                </motion.button>

                <p className="font-Manrope text-xs text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent text-center">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;