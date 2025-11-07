import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Hayli is a joy to work with. She asks questions until she truly understands the role and what her client is looking for in a candidate. She’ll provide gentle coaching if she thinks a particular aspect of a hiring process is likely to yield less-than-favorable results, and her advice is usually spot-on, based on her years of recruiting experience.",
      author: "Kelsey F.",
      position: "CMO, Point One Navigation",
      rating: 5
    },
    {
      id: 2,
      quote: "Hayli is passionate about all things recruiting and the candidate experience she provides is simply the best.",
      author: "Venkat J.",
      position: "Software Engineering Leader",
      rating: 5
    },
    {
      id: 3,
      quote: "Hayli is a no nonsense, exceptional recruiter.  Working with our engineering leaders can provide some challenge in understanding what they need in their teams, and Hayli helped them gain clarity as she found top talent.  Looking forward to working with her again.",
      author: "Claudia R.",
      position: "Chief People Officer",
      rating: 5
    },
    {
      id: 4,
      quote: "What impressed me most about Hayli was her ability to truly understand both sides of the equation…This wasn’t just about matching a resume to a job description – Hayli saw the strategic fit before I did.",
      author: "Scott B.",
      position: "VP, Business Development",
      rating: 5
    },
    {
      id: 5,
      quote: "I’ve worked with Hayli at multiple companies and she’s always highly personable and efficient. She quickly grasps requirements and can seek out and present matching talent. She can flex to work with changing requirements and timelines with a smile.",
      author: "Becky H.",
      position: "COO & CoFounder @ OLarry",
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="overflow-hidden min-h-screen bg-body dark:bg-darkBody flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="testimonials">
      <div className="max-w-4xl mx-auto w-full">
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
            <Quote className="w-4 h-4 text-mainHeading dark:text-darkMainHeading" />
            <span className="text-sm text-subHeading dark:text-darkSubHeading font-Manrope font-medium">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading mb-4"
          >
            Client Praise
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-mainHeading to-mainHeading mx-auto rounded-full"
          />
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-mainHeading dark:text-darkMainHeading" />
          </motion.button>

          {/* Testimonial Content */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card dark:bg-darkCard border border-border dark:border-darkBorder rounded-3xl p-8 sm:p-12 mx-auto max-w-3xl"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 bg-mainHeading dark:bg-darkMainHeading rounded-2xl flex items-center justify-center mb-8 mx-auto"
            >
              <Quote className="w-8 h-8 text-card dark:text-darkCard" />
            </motion.div>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-1 mb-8"
            >
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-current text-yellow-400"
                />
              ))}
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-Cal font-bold text-mainHeading dark:text-darkMainHeading text-center leading-tight mb-8"
            >
              "{testimonials[currentTestimonial].quote}"
            </motion.blockquote>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center border-t border-border dark:border-darkBorder pt-8"
            >
              <p className="font-Cal font-bold text-xl text-subHeading dark:text-darkSubHeading mb-1">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="font-Manrope text-textContent dark:text-darkTextContent">
                {testimonials[currentTestimonial].position}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-mainHeading dark:bg-darkMainHeading"
                  : "bg-border dark:bg-darkBorder hover:bg-mainHeading dark:bg-darkMainHeading/50"
              }`}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
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
            Join the growing list of satisfied clients who have transformed their hiring process.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-mainHeading dark:bg-darkMainHeading text-card dark:text-darkCard px-8 py-4 rounded-lg font-Manrope font-medium transition-all duration-300 hover:shadow-lg"
          >
            Experience the Difference
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;