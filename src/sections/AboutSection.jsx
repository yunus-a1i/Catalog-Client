import { motion } from "framer-motion";
import { Mail, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="overflow-hidden min-h-screen bg-body dark:bg-darkBody flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full px-4 py-2"
            >
              <Award className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
              <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
                Founder Profile
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading leading-tight"
            >
              MEET{" "}
              <motion.span
                initial={{ backgroundSize: "0% 40%", color: "#242424" }}
                animate={{ backgroundSize: "100% 90%", color: "#ffffff" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-mainHeading to-mainHeading bg-no-repeat bg-center bg-[length:100%_40%]"
              >
                HAYLI THORNHILL
              </motion.span>
            </motion.h1>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-textContent dark:text-darkTextContent font-Manrope leading-relaxed">
                After spending many years recruiting and leading teams for large
                global companies, Hayli joined her first technology startup in
                2019. She found she loves building diverse technology teams from
                scratch.
              </p>

              <p className="text-lg text-textContent dark:text-darkTextContent font-Manrope leading-relaxed">
                Hayli has had the privilege of being the founding recruiter/lead
                for three different early stage tech companies. She loves the
                pace and the unique challenge of finding and attracting top
                technology and GTM talent. She enjoys working closely with
                founders and other members of the leadership team to gain a much
                deeper understanding of the business and hiring goals.
              </p>

              <p className="text-lg text-textContent dark:text-darkTextContent font-Manrope leading-relaxed">
                By understanding the bigger picture, she's able to design and
                implement a hiring strategy that will deliver quality talent as
                well as meet ambitious timelines.
              </p>

              {/* Superpower Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-mainHeading dark:text-darkMainHeading mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-Cal font-bold text-subHeading dark:text-darkSubHeading text-lg mb-2">
                      Hayli's Superpower
                    </h3>
                    <p className="text-textContent dark:text-darkTextContent font-Manrope leading-relaxed">
                      Building strong relationships with her clients and
                      candidates. She is dedicated to operating as an extension
                      of her client's internal team.
                    </p>
                  </div>
                </div>
              </motion.div>

              <p className="text-lg text-textContent dark:text-darkTextContent font-Manrope leading-relaxed">
                What sets her apart is that she's had an opportunity (x3) to sit
                in that internal seat. Hayli has been the one leading the
                recruitment charge and selecting an external partner when the
                time is right. She understands how to be a valued partner and
                the ROI impact for a growing company.
              </p>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 pt-4"
              >
                <Mail className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
                <div>
                  <p className="font-Manrope font-semibold text-subHeading dark:text-darkSubHeading">
                    Contact Hayli:
                  </p>
                  <a
                    href="mailto:hiring@shippedtalent.com"
                    className="font-Manrope text-textContent dark:text-darkTextContent hover:text-mainHeading dark:text-darkMainHeading transition-colors duration-300"
                  >
                    hiring@shippedtalent.com
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-6 text-center"
              >
                <Users className="w-8 h-8 text-mainHeading dark:text-darkMainHeading mx-auto mb-3" />
                <div className="font-Cal font-bold text-3xl text-mainHeading dark:text-darkMainHeading mb-1">
                  3x
                </div>
                <div className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  Founding Recruiter
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-6 text-center"
              >
                <Award className="w-8 h-8 text-mainHeading dark:text-darkMainHeading mx-auto mb-3" />
                <div className="font-Cal font-bold text-3xl text-mainHeading dark:text-darkMainHeading mb-1">
                  2019
                </div>
                <div className="font-Manrope text-sm text-textContent dark:text-darkTextContent">
                  Tech Startup Journey
                </div>
              </motion.div>
            </div>

            {/* Experience Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-2xl p-8"
            >
              <h3 className="font-Cal font-bold text-xl text-mainHeading dark:text-darkMainHeading mb-4">
                Unique Perspective
              </h3>
              <p className="font-Manrope text-textContent dark:text-darkTextContent leading-relaxed">
                Having been both an internal hiring lead and external partner,
                Hayli brings unparalleled insight into building effective
                recruitment strategies that drive real business impact.
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
