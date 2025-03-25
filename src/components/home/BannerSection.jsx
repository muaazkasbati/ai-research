// components/BannerSection.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const BannerSection = () => {
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
      className="h-[500px] sm:h-[660px] md:h-[860px] bg-black bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/banner-section-bg.jpg')`,
      }}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div
        className="text-center text-white max-w-[1300px] px-4 sm:px-6 md:px-8"
        variants={contentVariants}
      >
        <motion.h1
          className="text-[32px] sm:text-[48px] md:text-[60px] font-bold mb-4 sm:mb-6 font-montserrat leading-tight sm:leading-snug"
          variants={childVariants}
        >
          Cutting-Edge AI Solutions for a Better Future
        </motion.h1>
        <motion.p
          className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 font-montserrat"
          variants={childVariants}
        >
          Redefining possibilities with groundbreaking AI research and development.
        </motion.p>
        <motion.div variants={childVariants}>
          <Link
            href="#"
            className="bg-[#02E0B8] text-black px-4 sm:px-5 md:px-6 py-2 rounded-[30px] inline-block font-montserrat"
          >
            {/* <motion.span
              whileHover={{ scale: 1.05, backgroundColor: '#02c9a0' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="block px-4 sm:px-5 md:px-6 py-2 rounded-[30px] text-[14px] sm:text-[16px] md:text-[18px]"
            > */}
              Discover More
            {/* </motion.span> */}
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BannerSection;