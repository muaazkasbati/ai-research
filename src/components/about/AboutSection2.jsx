// components/AboutSection2.jsx
import { motion } from 'framer-motion';

const AboutSection2 = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const imagesVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-8 md:py-16 bg-[#121228] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 md:gap-8 items-center">
        {/* Left Column - Images */}
        <motion.div
          className="flex flex-wrap gap-5 md:gap-10 justify-between"
          variants={imagesVariants}
        >
          <motion.img
            className="w-full rounded-[14px] object-cover"
            src="/images/about-image-4.jpg"
            alt="About Image 4"
            variants={imageVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(2, 224, 184, 0.3)' }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="w-[46%] md:w-auto rounded-[14px] object-cover"
            src="/images/about-image-5.jpg"
            alt="About Image 5"
            variants={imageVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(2, 224, 184, 0.3)' }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="w-[46%] md:w-auto rounded-[14px] object-cover"
            src="/images/about-image-6.jpg"
            alt="About Image 6"
            variants={imageVariants}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(2, 224, 184, 0.3)' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div className="text-white" variants={textVariants}>
          <motion.p
            className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat"
            variants={textChildVariants}
          >
            Our Value
          </motion.p>
          <motion.h2
            className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
            variants={textChildVariants}
          >
            Values We Believe In
          </motion.h2>
          <motion.p
            className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
            variants={textChildVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </motion.p>
          <motion.ul
            className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat space-y-2"
            variants={textVariants}
          >
            <motion.li className="flex items-start" variants={textChildVariants}>
              <span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
              Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </motion.li>
            <motion.li className="flex items-start" variants={textChildVariants}>
              <span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
              Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </motion.li>
            <motion.li className="flex items-start" variants={textChildVariants}>
              <span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
              Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </motion.li>
            <motion.li className="flex items-start" variants={textChildVariants}>
              <span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
              Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection2;