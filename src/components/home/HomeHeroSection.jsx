import Link from 'next/link';
import { motion } from 'framer-motion';

const HomeHeroSection = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                when: 'beforeChildren',
                staggerChildren: 0.3,
            },
        },
    };

    // Child animation variants
    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    // Button animation variants
    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
        // rest: { scale: 1 },
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

    // Video fade-in variant
    const videoVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative h-[600px] sm:h-[780px] md:h-[980px] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                variants={videoVariants}
                initial="hidden"
                animate="visible"
            >
                <source src="/images/home-bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            {/* Gradient Overlay */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: `
            linear-gradient(180deg, rgba(7, 7, 28, 0.00) 0%, #07071C 100%),
            linear-gradient(0deg, rgba(7, 7, 28, 0.41) 0%, rgba(7, 7, 28, 0.41) 100%)
          `,
                    opacity: 0.5,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            ></motion.div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative text-center text-white max-w-[1300px] px-4 sm:px-6 md:px-8 z-10"
            >
                <motion.h1
                    variants={childVariants}
                    className="text-[36px] sm:text-[48px] md:text-[60px] font-bold mb-4 sm:mb-6 font-montserrat leading-tight"
                >
                    Where Artificial Intelligence Meets Human Ingenuity
                </motion.h1>
                <motion.p
                    variants={childVariants}
                    className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 font-montserrat max-w-[90%] sm:max-w-[80%] mx-auto"
                >
                    Blending technology and human creativity to push the limits of innovation.
                </motion.p>
                {/* <motion.div
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <Link
                        href="#"
                        className="bg-[#02E0B8] text-black px-4 sm:px-6 py-2 rounded-[30px] text-[16px] sm:text-[18px] inline-block font-montserrat"
                    >
                        Get Started
                    </Link>
                </motion.div> */}
            </motion.div>
        </section>
    );
};

export default HomeHeroSection;