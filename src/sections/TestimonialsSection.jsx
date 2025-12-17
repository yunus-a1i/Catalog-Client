import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Building, Award, MapPin } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "Royal Equestrian Center",
      role: "Head Trainer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The custom saddles we ordered have transformed our training program. The attention to detail and perfect fit for both rider and horse is exceptional.",
      rating: 5,
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      company: "Andalusian Stables",
      role: "Stable Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with their team on our bulk order of grooming kits was seamless. The quality exceeds anything we've used before, and our clients notice the difference.",
      rating: 5,
      location: "Madrid, Spain"
    },
    {
      id: 3,
      name: "Emily Watson",
      company: "Olympic Equestrian Team",
      role: "Equipment Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Their bespoke bridles have become our team's standard. The craftsmanship and durability under competitive conditions are unmatched.",
      rating: 5,
      location: "London, UK"
    }
  ];

  const partners = [
    {
      name: "Elite Riding Academy",
      type: "Training Center",
      years: "4 years",
      projects: "12 custom projects"
    },
    {
      name: "Heritage Stables",
      type: "Breeding Farm", 
      years: "6 years",
      projects: "25+ bulk orders"
    },
    {
      name: "International Equestrian Federation",
      type: "Organization",
      years: "3 years",
      projects: "Official supplier"
    },
    {
      name: "Luxury Equestrian Resorts",
      type: "Hospitality",
      years: "2 years",
      projects: "Ongoing partnership"
    }
  ];

  const awards = [
    {
      year: "2024",
      name: "Excellence in Craftsmanship",
      organization: "International Equestrian Awards"
    },
    {
      year: "2023", 
      name: "Best Custom Equipment",
      organization: "Equestrian Business Association"
    },
    {
      year: "2022",
      name: "Quality Standards Certified",
      organization: "Global Equestrian Council"
    }
  ];

  return (
    <section className="py-20 bg-body dark:bg-darkBody">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-GtSuper text-6xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-4 tracking-tighter">
            Trusted by Equestrian Professionals
          </h2>
          <p className="font-Manrope text-lg text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            Join hundreds of satisfied clients who rely on our craftsmanship for their most demanding equestrian needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-8">
              <Quote className="w-6 h-6 text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading" />
              <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                Client Stories
              </h3>
            </div>

            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card dark:bg-darkCard rounded-xl p-6 border border-border dark:border-darkBorder hover:shadow-lg transition-all"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                        {testimonial.role}
                      </span>
                      <span className="text-border dark:text-darkBorder">•</span>
                      <span className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                        {testimonial.company}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin className="w-3 h-3 text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent" />
                      <span className="font-Manrope text-xs text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partners & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Partners */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building className="w-6 h-6 text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading" />
                <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                  Our Partners
                </h3>
              </div>

              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-4 border border-border dark:border-darkBorder rounded-lg hover:shadow-md transition-all"
                  >
                    <div>
                      <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                        {partner.name}
                      </h4>
                      <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                        {partner.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-Manrope text-sm text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading font-medium">
                        {partner.years}
                      </p>
                      <p className="font-Manrope text-xs text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                        {partner.projects}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="w-6 h-6 text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading" />
                <h3 className="font-Manrope text-2xl text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading">
                  Recognition
                </h3>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 border border-border dark:border-darkBorder rounded-lg hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-Manrope font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-1">
                          {award.name}
                        </h4>
                        <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                          {award.organization}
                        </p>
                      </div>
                      <div className="bg-mainHeading dark:bg-darkMainHeading text-white px-3 py-1 rounded-full">
                        <span className="font-Manrope text-xs font-medium">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card dark:bg-darkCard rounded-2xl border border-border dark:border-darkBorder p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Happy Clients" },
              { number: "15+", label: "Countries" },
              { number: "98%", label: "Retention Rate" },
              { number: "4.9/5", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <p className="font-Manrope text-3xl font-semibold text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading mb-2">
                  {stat.number}
                </p>
                <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent mb-6">
            Ready to join our community of satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-mainHeading dark:bg-darkMainHeading text-white px-8 py-3 rounded-lg font-Manrope font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;