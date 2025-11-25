import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, Users, ArrowRight } from 'lucide-react';

const TopProductsSection = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Dressage Saddle",
      category: "Riding Equipment",
      image: "https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?w=400&h=300&fit=crop",
      description: "Sample of our premium leather craftsmanship"
    },
    {
      id: 2,
      name: "Bridle Set",
      category: "Riding Equipment", 
      image: "https://images.unsplash.com/photo-1513276031496-68e6d88129d9?w=400&h=300&fit=crop",
      description: "Example of custom tooling and finishing"
    },
    {
      id: 3,
      name: "Stable Blanket",
      category: "Horse Care",
      image: "https://images.unsplash.com/photo-1578321272177-56bda6e2b2dc?w=400&h=300&fit=crop",
      description: "Sample textile work and material quality"
    },
    {
      id: 4,
      name: "Grooming Kit",
      category: "Horse Care",
      image: "https://images.unsplash.com/photo-1553284965-83b6d5e8b6d3?w=400&h=300&fit=crop",
      description: "Complete set sample presentation"
    },
    {
      id: 5,
      name: "Riding Boots",
      category: "Apparel",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      description: "Professional equestrian footwear"
    },
    {
      id: 6,
      name: "Saddle Pad",
      category: "Riding Equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Premium comfort and fit"
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
          <h2 className="font-GtSuper text-3xl text-mainHeading dark:text-darkMainHeading mb-4">
            Product Catalog
          </h2>
          <p className="font-Manrope text-lg text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            Explore our product samples and get in touch for business inquiries
          </p>
        </motion.div>

        {/* Side-by-side Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mx-auto">
          {/* Left Column - Inquiry Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="sticky top-8">
              <div className="mb-8">
                <h3 className="font-Manrope text-2xl font-semibold text-mainHeading dark:text-darkMainHeading mb-3">
                  Business Inquiries
                </h3>
                <p className="font-Manrope text-textContent dark:text-darkTextContent text-sm">
                  Contact us for bulk orders, custom manufacturing, and pricing details
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Calendar,
                    title: "Schedule Meeting",
                    description: "Book a call with our team",
                    action: "Book Now",
                    highlight: true
                  },
                  {
                    icon: Phone,
                    title: "Direct Call", 
                    description: "Speak with us directly",
                    action: "+1 (555) 123-4567"
                  },
                  {
                    icon: Mail,
                    title: "Email Inquiry",
                    description: "Send your requirements",
                    action: "contact@equestrian.com"
                  },
                  {
                    icon: Users,
                    title: "Bulk Pricing",
                    description: "Get quotes for large orders",
                    action: "Request Quote"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      item.highlight 
                        ? 'bg-mainHeading dark:bg-darkMainHeading text-white border-mainHeading dark:border-darkMainHeading' 
                        : 'bg-card dark:bg-darkCard border-border dark:border-darkBorder hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded flex items-center justify-center ${
                          item.highlight 
                            ? 'bg-white/20 text-white' 
                            : 'bg-body dark:bg-darkBody border border-border dark:border-darkBorder text-mainHeading dark:text-darkMainHeading'
                        }`}>
                          <item.icon className="w-4 h-4" strokeWidth={1.5}/>
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-Manrope font-semibold text-sm ${
                            item.highlight ? 'text-white' : 'text-mainHeading dark:text-darkMainHeading'
                          }`}>
                            {item.title}
                          </h4>
                          <p className={`font-Manrope text-xs ${
                            item.highlight ? 'text-white/80' : 'text-textContent dark:text-darkTextContent'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${
                        item.highlight ? 'text-white' : 'text-mainHeading dark:text-darkMainHeading'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-card dark:bg-darkCard rounded-lg border border-border dark:border-darkBorder">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className='p-3'>
                    <p className="font-Manrope text-lg font-semibold text-mainHeading dark:text-darkMainHeading">50+</p>
                    <p className="font-Manrope text-xs text-textContent dark:text-darkTextContent">Business Clients</p>
                  </div>
                  <div className='p-3'>
                    <p className="font-Manrope text-lg font-semibold text-mainHeading dark:text-darkMainHeading">24h</p>
                    <p className="font-Manrope text-xs text-textContent dark:text-darkTextContent">Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Products Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 col-span-2"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group cursor-pointer"
                >
                  <div className="">
                    {/* Product Image */}
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Product Info */}
                    <div className="py-2 space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-Manrope text-lg font-semibold text-mainHeading dark:text-darkMainHeading pr-2">
                          {product.name}
                        </h3>
                        <span className="font-Manrope text-xs text-textContent dark:text-darkTextContent bg-border dark:bg-darkBorder px-2 py-1 rounded flex-shrink-0">
                          {product.category}
                        </span>
                      </div>
                      
                      <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 border border-mainHeading dark:border-darkMainHeading text-mainHeading dark:text-darkMainHeading rounded-lg font-Manrope font-medium hover:bg-mainHeading dark:hover:bg-darkMainHeading hover:text-white transition-all"
              >
                View Complete Catalog
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-border dark:border-darkBorder"
        >
          <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            This is a sample catalog for demonstration purposes. All products shown are examples of our craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TopProductsSection;