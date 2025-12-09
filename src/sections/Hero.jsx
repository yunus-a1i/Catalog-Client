import { motion } from "framer-motion";
import {
  ChevronRight,
  Search,
  Filter,
  BookOpen,
  Users,
  Award,
  Calendar,
} from "lucide-react";

const Hero = () => {
  const featuredCollections = [
    {
      name: "Professional Series",
      items: "89 products",
      curator: "Olympic Equestrian Team",
    },
    {
      name: "Heritage Collection",
      items: "64 products",
      curator: "Vintage Tack Specialists",
    },
    {
      name: "Innovation Range",
      items: "112 products",
      curator: "Modern Equestrian Tech",
    },
  ];

  return (
    <div className="min-h-full bg-body dark:bg-darkBody transition-colors duration-300">

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-GtSuper text-5xl lg:text-7xl font-light text-mainHeading dark:text-darkMainHeading leading-tight tracking-tighter"
              >
                The Ultimate{" "}
                <span className="italic font-serif">Equestrian</span>
                <br />
                Product Guide
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-Manrope text-xl lg:text-2xl text-textContent dark:text-darkTextContent leading-relaxed max-w-3xl mx-auto"
              >
                Explore the world's most comprehensive catalog of premium horse
                products, equipment, and supplies. Curated for discerning
                equestrians.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search 2,000+ equestrian products..."
                  className="w-full bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-6 py-4 pl-12 font-Manrope text-mainHeading dark:text-darkMainHeading placeholder-textContent dark:placeholder-darkTextContent focus:outline-none focus:ring-2 focus:ring-mainHeading dark:focus:ring-darkMainHeading"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textContent dark:text-darkTextContent" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-mainHeading dark:bg-darkMainHeading text-white dark:text-black px-6 py-2 rounded-full font-Manrope flex items-center space-x-2 hover:shadow-lg transition-all">
                  <span>Search</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-border dark:border-darkBorder"
            >
              {[
                { number: "2,000+", label: "Products Cataloged" },
                // { number: "150+", label: "Premium Brands" },
                { number: "25+", label: "Product Categories" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className="font-GtSuper text-3xl text-mainHeading dark:text-darkMainHeading mb-2"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-mainHeading to-subHeading dark:from-darkMainHeading dark:to-darkSubHeading" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
