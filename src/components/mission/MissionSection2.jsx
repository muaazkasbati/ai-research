import { motion } from 'framer-motion';

const MissionSection2 = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                when: 'beforeChildren',
                staggerChildren: 0.15,
            },
        },
    };

    // Heading variants
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    // Line variants
    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: [30, 40, 50], // Matches responsive sizes
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    // Paragraph variants
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    // List item variants
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            className="bg-black bg-cover bg-center py-12"
            style={{
                backgroundImage: `url('/images/mission-section-bg.jpg')`,
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="text-white max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8"
            >
                {/* Qui sommes-nous */}
                <motion.h2
                    variants={headingVariants}
                    className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
                >
                    Qui sommes-nous
                </motion.h2>
                <motion.div
                    variants={lineVariants}
                    className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"
                />
                <motion.p
                    variants={paragraphVariants}
                    className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
                >
                    Depuis notre création, nous nous sommes engagés à révolutionner la téléprospection et le développement commercial. Notre histoire est celle d'une équipe passionnée travaillant main dans la main avec nos clients pour atteindre leurs objectifs.
                </motion.p>

                {/* Notre Mission */}
                <motion.h2
                    variants={headingVariants}
                    className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
                >
                    Notre Mission
                </motion.h2>
                <motion.div
                    variants={lineVariants}
                    className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"
                />
                <motion.p
                    variants={paragraphVariants}
                    className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
                >
                    Chez CRO, notre mission est simple : alléger le fardeau de vos équipes de vente et propulser votre croissance grâce à des services de téléprospection exceptionnels et une stratégie personnalisée.
                </motion.p>

                {/* Pourquoi nous */}
                <motion.h2
                    variants={headingVariants}
                    className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight"
                >
                    Pourquoi nous
                </motion.h2>
                <motion.div
                    variants={lineVariants}
                    className="w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-white mb-4"
                />
                <motion.p
                    variants={paragraphVariants}
                    className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat"
                >
                    Nous sommes bien plus qu'une agence de téléprospection ; nous sommes votre partenaire de croissance. Explorez notre univers et découvrez comment Bizdev.store peut stimuler votre activité commerciale. Approche humaine dans la prospection B2B.
                </motion.p>

                {/* List */}
                <motion.ul
                    variants={containerVariants}
                    className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat space-y-2"
                >
                    {[
                        "Expertise inégalée dans le développement commercial.",
                        "Résultats concrets et mesurables.",
                        "Engagement envers la satisfaction client.",
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
        </section>
    );
};

export default MissionSection2;