import { motion } from "framer-motion";
import { Scale, Target, Users, Search, Building } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      icon: Scale,
      title: "SCALING",
      description: "Scaling teams – engineering, product management, product design, and Go-to-Market",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "DEVELOPING",
      description: "Developing hiring plans/strategies for winning talent in a competitive market",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "CREATING",
      description: "Creating interview plans/processes",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "SOURCING AND CLOSING",
      description: "Sourcing and closing passive talent",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "BUILDING AND IMPLEMENTING",
      description: "Building and implementing modern recruitment infrastructure",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="overflow-hidden min-h-screen bg-body dark:bg-darkBody flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="expertise">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-4 py-2 mb-6"
          >
            <Target className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
            <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
              Core Competencies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading mb-4"
          >
            EXPERTISE
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-mainHeading to-mainHeading mx-auto rounded-full"
          />
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-mainHeading/20">
                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg`}
                >
                  <item.icon className="w-6 h-6 text-card dark:text-darkCard" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="font-Cal font-bold text-xl text-mainHeading dark:text-darkMainHeading mb-3"
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="font-Manrope text-textContent dark:text-darkTextContent leading-relaxed"
                >
                  {item.description}
                </motion.p>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-4`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="font-Manrope text-lg text-textContent dark:text-darkTextContent mb-6 max-w-2xl mx-auto"
          >
            Ready to leverage this expertise for your hiring success?
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard px-8 py-4 rounded-lg font-Manrope font-medium transition-all duration-300 hover:shadow-lg"
          >
            Start Building Your Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;