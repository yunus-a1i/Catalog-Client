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
  const catalogCategories = [
    {
      id: 1,
      name: "Riding Equipment",
      count: "245 Items",
      image:
        "https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?w=400&h=300&fit=crop",
      description: "Premium saddles, bridles, and riding gear",
    },
    {
      id: 2,
      name: "Stable Supplies",
      count: "189 Items",
      image:
        "https://images.unsplash.com/photo-1513276031496-68e6d88129d9?w=400&h=300&fit=crop",
      description: "Everything for stable management",
    },
    {
      id: 3,
      name: "Horse Care",
      count: "156 Items",
      image:
        "https://images.unsplash.com/photo-1553284965-83b6d5e8b6d3?w=400&h=300&fit=crop",
      description: "Grooming, health, and wellness products",
    },
    {
      id: 4,
      name: "Equestrian Apparel",
      count: "312 Items",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Riding wear and accessories",
    },
  ];

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
    <div className="min-h-screen bg-body dark:bg-darkBody transition-colors duration-300">
      {/* Main Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Heading */}
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
                className="font-GtSuper text-5xl lg:text-7xl font-light text-mainHeading dark:text-darkMainHeading leading-tight"
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

            {/* Search Bar */}
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

            {/* Quick Stats */}
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

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-mainHeading to-subHeading dark:from-darkMainHeading dark:to-darkSubHeading" />
        </div>
      </section>

      {/* Catalog Categories */}
      <section className="py-20 bg-card dark:bg-darkCard border-y border-border dark:border-darkBorder">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-GtSuper text-4xl text-mainHeading dark:text-darkMainHeading mb-4">
              Browse Categories
            </h2>
            <p className="font-Manrope text-xl text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
              Explore our meticulously organized product categories to find
              exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {catalogCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="rounded-2xl p-1 h-full">
                  <div className="h-80 rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="">
                    <div className="flex items-center justify-between">
                      <h3 className="font-Manrope text-xl font-semibold text-mainHeading dark:text-darkMainHeading group-hover:text-subHeading dark:group-hover:text-darkSubHeading transition-colors">
                        {category.name}
                      </h3>
                      <span className="font-Manrope text-sm text-textContent dark:text-darkTextContent bg-border dark:bg-darkBorder px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>

                    <p className="font-Manrope text-textContent dark:text-darkTextContent text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-1 text-mainHeading dark:text-darkMainHeading font-Manrope text-sm"
                    >
                      <span>Explore Category</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="font-GtSuper text-4xl text-mainHeading dark:text-darkMainHeading mb-4">
              Curated Collections
            </h2>
            <p className="font-Manrope text-xl text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
              Handpicked selections from industry experts and professional equestrians
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-card to-body dark:from-darkCard dark:to-darkBody border border-border dark:border-darkBorder rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-mainHeading dark:bg-darkMainHeading rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-GtSuper text-2xl text-mainHeading dark:text-darkMainHeading">
                    {collection.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="font-Manrope text-textContent dark:text-darkTextContent">
                      {collection.items}
                    </p>
                    <p className="font-Manrope text-sm text-subHeading dark:text-darkSubHeading">
                      Curated by {collection.curator}
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-2 text-mainHeading dark:text-darkMainHeading font-Manrope text-sm group-hover:text-subHeading dark:group-hover:text-darkSubHeading transition-colors"
                  >
                    <span>View Collection</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Catalog Features */}
      {/* <section className="py-20 bg-card dark:bg-darkCard border-y border-border dark:border-darkBorder">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Expert Verified",
                description: "Every product is reviewed and verified by equestrian professionals"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Collections curated by top riders, trainers, and stable managers"
              },
              {
                icon: Calendar,
                title: "Regularly Updated",
                description: "New products and brands added weekly to keep you informed"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-mainHeading dark:bg-darkMainHeading rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-GtSuper text-xl text-mainHeading dark:text-darkMainHeading">
                  {feature.title}
                </h3>
                <p className="font-Manrope text-textContent dark:text-darkTextContent leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
