import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Crown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-body dark:bg-darkBody flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-hidden"
      id="home"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Luxury Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-4 py-2 mb-8"
        >
          <Crown className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
          <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
            Boutique Executive Search
          </span>
          <Sparkles className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-flex items-center gap-2 rounded-full px-[2px] py-[2px] mb-8
             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
        >
          <div className="flex items-center gap-2 bg-card dark:bg-darkCard rounded-full px-4 py-2">
            <Crown className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
            <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
              Boutique Executive Search
            </span>
            <Sparkles className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading mb-6 leading-relaxed"
        >
          Delivering for Your{" "}
          <motion.span
            initial={{ backgroundSize: "0% 40%", color: "#242424" }}
            animate={{ backgroundSize: "100% 90%", color: "#ffffff" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-gradient-to-r from-mainHeading to-mainHeading bg-no-repeat bg-center bg-[length:100%_40%]"
          >
            Hiring Needs
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-textContent dark:text-darkTextContent font-Manrope max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Shipped Talent is a boutique recruiting firm specializing in hiring
          top technology and Go-to-Market talent for growth companies.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard px-8 py-4 rounded-lg font-Manrope font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
          >
            Begin Your Search
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-border dark:border-darkBorder bg-secondary bg-white text-subHeading dark:text-darkSubHeading px-8 py-4 rounded-lg font-Manrope font-medium transition-all duration-300 hover:bg-card dark:bg-darkCard hover:shadow-lg"
          >
            View Our Process
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 max-md:hidden"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-border dark:border-darkBorder rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-textContent dark:bg-darkTextContent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="absolute inset-0 overflow-hidden"> */}
        {/* Base Layer */}
        {/* <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-amber-200/10 via-purple-300/15 to-pink-300/20"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(80px)",
          }}
        /> */}

        {/* Mid Layer */}
        

        {/* Accent Layer */}
        <motion.div
          className="absolute w-60 min-h-[1280px] rotate-[230deg] bg-gradient-to-b from-orange-100/70 via-red-300 to-purple-400/70 dark:from-orange-100/40 dark:via-red-300/50 dark:to-purple-400/40 -top-96 right-52 rounded-b-full z-50"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.01, 1],
            rotate: [230, 235, 230],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "blur(80px)",
          }}
        />
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
