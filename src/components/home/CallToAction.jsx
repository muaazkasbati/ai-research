import { motion } from 'framer-motion';
import Link from 'next/link'; // Assuming you're using Next.js, adjust if needed

const CallToAction = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Child animation variants
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    rest: { scale: 1 },
    // hover: { 
    //   scale: 1.05,
    //   boxShadow: '0px 4px 15px rgba(2, 224, 184, 0.4)',
    //   transition: {
    //     duration: 0.3,
    //     ease: 'easeOut',
    //   },
    // },
    // tap: { 
    //   scale: 0.95,
    //   transition: {
    //     duration: 0.2,
    //   },
    // },
  };

  return (
    <section className="pt-24 px-3 md:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1300px] mx-auto -mb-30 px-4 md:px-[52px] py-[32px] flex flex-col md:flex-row gap-8 md:gap-10 rounded-[10px] relative z-10"
        style={{
          background: 'linear-gradient(102deg, #0A89FF 0%, #FF3BF6 100%)',
        }}
      >
        {/* Left Column */}
        <motion.div variants={childVariants} className="flex-1">
          <motion.h2
            variants={childVariants}
            className="text-white text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-6 font-montserrat"
          >
            Exploring machine learning or have a specific use case? Let’s talk.
          </motion.h2>
          <motion.div
            variants={childVariants}
            className="w-[50px] h-[3px] bg-[#02E0B8]"
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          ></motion.div>
        </motion.div>

        {/* Column Divider - visible only on md and up */}
        <motion.div
          variants={childVariants}
          className="hidden md:block w-[1px] bg-white/20"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        ></motion.div>

        {/* Right Column */}
        <motion.div variants={childVariants} className="flex-1 flex flex-col justify-between">
          <motion.p
            variants={childVariants}
            className="text-white text-[16px] sm:text-[17px] md:text-[18px] mb-6 font-montserrat"
          >
            We’d love to hear from you! Whether you have questions, collaboration opportunities, or need more information about our AI research, our team is here to help.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/contact"
              className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] text-[18px] inline-block font-montserrat self-start"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;