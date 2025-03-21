// components/OurVision.jsx
import { motion } from 'framer-motion';

const OurVision = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-8 sm:py-16 md:py-42 px-3 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="bg-[#121228] p-4 sm:p-8 md:p-12 max-w-[1300px] mx-auto rounded-[10px]">
        <motion.div
          className="text-white text-center"
          variants={contentVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <motion.p
            className="text-[#02E0B8] text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-4 font-montserrat"
            variants={childVariants}
          >
            Vision
          </motion.p>
          <motion.h2
            className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
            variants={childVariants}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
            variants={childVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurVision;