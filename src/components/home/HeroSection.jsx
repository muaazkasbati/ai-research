// components/Hero.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = ({
  title = "Where Artificial Intelligence Meets Human Ingenuity",
  text = "Blending technology and human creativity to push the limits of innovation.",
  buttonText = "Get Started",
  buttonLink = "#",
  hideButton = false,
}) => {
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
      className="h-[600px] sm:h-[780px] md:h-[980px] bg-black bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bg-image.jpg')`,
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
          className="text-[36px] sm:text-[48px] md:text-[60px] font-bold mb-4 sm:mb-6 font-montserrat leading-tight"
          variants={childVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 font-montserrat max-w-[90%] sm:max-w-[80%] mx-auto"
          variants={childVariants}
        >
          {text}
        </motion.p>
        {!hideButton && (
          <motion.div variants={childVariants}>
            <Link
              href={buttonLink}
              className="bg-[#02E0B8] text-black px-4 sm:px-6 py-2 rounded-[30px] text-[16px] sm:text-[18px] inline-block font-montserrat"
            >
              <motion.span
                whileHover={{ scale: 1.05, backgroundColor: '#02c9a0' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="block px-4 sm:px-6 py-2 rounded-[30px]"
              >
                {buttonText}
              </motion.span>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;