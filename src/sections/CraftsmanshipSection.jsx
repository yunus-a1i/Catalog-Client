import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Award, Users, Truck } from 'lucide-react';

const CraftsmanshipSection = () => {
  const features = [
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      description: "Each piece is handcrafted by skilled artisans with decades of experience in traditional equestrian equipment making.",
      stats: "25+ years average experience"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We source only the finest leathers, textiles, and hardware, ensuring durability and superior performance.",
      stats: "100% quality guarantee"
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Work directly with our team to create bespoke products tailored to your specific needs and requirements.",
      stats: "Full customization available"
    },
    {
      icon: Truck,
      title: "Global Delivery",
      description: "We ship worldwide with reliable partners, ensuring your orders arrive safely and on time.",
      stats: "50+ countries served"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your specific needs and requirements"
    },
    {
      step: "02",
      title: "Design",
      description: "Create custom designs and material selections"
    },
    {
      step: "03",
      title: "Crafting",
      description: "Handcraft your products with precision and care"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Quality check and secure worldwide shipping"
    }
  ];

  return (
    <section className="py-20 bg-card dark:bg-darkCard border-y border-border dark:border-darkBorder">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-GtSuper text-3xl text-mainHeading dark:text-darkMainHeading mb-4">
            Excellence in Craftsmanship
          </h2>
          <p className="font-Manrope text-lg text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            For over three generations, we've maintained the highest standards of quality and attention to detail in every piece we create.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-mainHeading dark:bg-darkMainHeading rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-Manrope text-xl font-semibold text-mainHeading dark:text-darkMainHeading mb-3">
                {feature.title}
              </h3>
              <p className="font-Manrope text-textContent dark:text-darkTextContent mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block bg-body dark:bg-darkBody border border-border dark:border-darkBorder px-3 py-1 rounded-full">
                <span className="font-Manrope text-xs text-mainHeading dark:text-darkMainHeading font-medium">
                  {feature.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading">
              Our Process
            </h3>
            <p className="font-Manrope text-textContent dark:text-darkTextContent leading-relaxed">
              From initial consultation to final delivery, we maintain transparent communication and meticulous attention to detail at every stage of production.
            </p>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg border border-border dark:border-darkBorder hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-mainHeading dark:bg-darkMainHeading rounded-full flex items-center justify-center">
                    <span className="font-Manrope text-white font-semibold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading mb-1">
                      {step.title}
                    </h4>
                    <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 grid-rows-2 gap-6 h-full place-content-center"
          >
            {[
              { number: "500+", label: "Custom Projects" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Countries Served" },
              { number: "3-6", label: "Weeks Delivery" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-body dark:bg-darkBody border border-border dark:border-darkBorder rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <p className="font-Manrope text-3xl font-semibold text-mainHeading dark:text-darkMainHeading mb-2">
                  {stat.number}
                </p>
                <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-border dark:border-darkBorder"
        >
          <h3 className="font-GtSuper text-2xl text-mainHeading dark:text-darkMainHeading mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="font-Manrope text-textContent dark:text-darkTextContent mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mainHeading dark:bg-darkMainHeading text-white px-8 py-3 rounded-lg font-Manrope font-semibold hover:shadow-lg transition-all"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-mainHeading dark:border-darkMainHeading text-mainHeading dark:text-darkMainHeading px-8 py-3 rounded-lg font-Manrope font-semibold hover:bg-mainHeading dark:hover:bg-darkMainHeading hover:text-white transition-all"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;