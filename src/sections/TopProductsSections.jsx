import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, Users, ArrowRight } from "lucide-react";
import { useTopProducts } from "../api/queries/analytics";
import { useNavigate } from "react-router";

const TopProductsSection = () => {
  const { data, isLoading, isError } = useTopProducts();
  const navigate = useNavigate();
  

  return (
    <section className="py-20 bg-body dark:bg-darkBody">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-GtSuper text-7xl text-mainHeading dark:text-darkMainHeading mb-4 tracking-tighter">
            Top Products
          </h2>
          <p className="font-Manrope text-lg text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            Explore our product samples and get in touch for business inquiries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 col-span-2"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.map((product, index) => (
              <motion.div
                key={product.id ?? product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => navigate(`/product/${product.slug}`)}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-square rounded-tl-[40px] rounded-br-[40px] bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg">
                    {product.images?.length ? (
                      <img
                        src={product.images[0]?.url}
                        alt={product.images[0]?.alt || product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>

                  <div className="py-2 space-y-2">
                    <h3 className="font-GtSuper text-4xl text-mainHeading dark:text-darkMainHeading pr-2 tracking-tighter">
                      {product.name}
                    </h3>

                  </div>
                  {typeof product.view_count === "number" && (
                    <p className="absolute top-4 left-4 rounded-full bg-white px-4 py-2 font-Manrope text-lg text-gray-500 dark:text-gray-400">
                      {product.view_count} views
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

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
    </section>
  );
};

export default TopProductsSection;
