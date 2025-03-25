// components/AboutSection.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
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

  const videoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-8 md:py-16 bg-[#121228]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Column - Text Content */}
        <motion.div className="text-white" variants={textVariants}>
          <motion.p
            className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat"
            variants={textChildVariants}
          >
            About Us
          </motion.p>
          <motion.h2
            className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
            variants={textChildVariants}
          >
            A brief intro about your AI research firm
          </motion.h2>
          <motion.p
            className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
            variants={textChildVariants}
          >
            At [Company Name], we are dedicated to pushing the boundaries of artificial intelligence through cutting-edge research and innovation. As a pioneering AI research firm, we specialize in developing intelligent systems that enhance decision-making, automate complex processes, and drive meaningful advancements across industries.
          </motion.p>
          <motion.div variants={textChildVariants}>
            <Link href="/about" className="bg-[#02E0B8] text-black px-4 sm:px-6 py-2 rounded-[30px] inline-block font-montserrat">
              {/* <motion.span
                whileHover={{ scale: 1.05, backgroundColor: '#02c9a0' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="block px-4 sm:px-6 py-2 rounded-[30px] text-[16px] sm:text-[18px]"
              > */}
                Learn More
              {/* </motion.span> */}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Video */}
        <motion.div
          variants={videoVariants}
          whileHover={{ scale: 1.02, boxShadow: '0px 0px 15px rgba(2, 224, 184, 0.3)' }}
          transition={{ duration: 0.3 }}
          className="rounded-[14px]"
        >
          <img src="/images/about-image-home.jpg" alt="About Home" className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[14px] object-cover" />
          {/* <video
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[14px] object-cover"
            controls
            poster="/images/about-image-home.jpg"
          >
            <source
              src="https://v.ftcdn.net/05/73/65/06/700_F_573650607_wgtTCOTwUODIPqu4ruB2F6dwOidu3kP0_ST.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;