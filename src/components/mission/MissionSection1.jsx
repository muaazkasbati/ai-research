import { motion } from 'framer-motion';

const MissionSection1 = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6, // Faster than typical 0.8
                when: 'beforeChildren',
                staggerChildren: 0.15, // Faster stagger than typical 0.2
            },
        },
    };

    // Image variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5, // Fast entrance
                ease: 'easeOut',
            },
        },
    };

    // Text content variants
    const textVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5, // Fast slide-in
                ease: 'easeOut',
            },
        },
    };

    // List item variants
    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4, // Even faster for list items
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="py-8 md:py-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 md:gap-8 items-center"
            >
                {/* Image */}
                <motion.div variants={imageVariants}>
                    <img
                        className="w-full rounded-[14px] object-cover"
                        src="/images/mission-image.jpg"
                        alt="Our Mission"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div variants={textVariants} className="text-white">
                    <motion.p
                        variants={textVariants}
                        className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat"
                    >
                        Our Mission
                    </motion.p>
                    <motion.h2
                        variants={textVariants}
                        className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
                    >
                        Why it matters and who it benefits
                    </motion.h2>
                    <motion.p
                        variants={textVariants}
                        className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </motion.p>
                    <motion.ul
                        variants={containerVariants}
                        className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat space-y-2"
                    >
                        {[
                            "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                            "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                            "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                            "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={listItemVariants}
                                className="flex items-start"
                            >
                                <span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MissionSection1;