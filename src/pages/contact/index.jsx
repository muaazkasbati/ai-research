import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import { useState } from "react";
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const detailsVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Head>
                <title>Contact - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Contact"
                text="Blending technology and human creativity to push the limits of innovation."
                hideButton
            />
            <motion.section
                className="py-12 sm:py-16 md:py-20 bg-[#121228]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8">
                    <motion.h2
                        className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-center text-white font-montserrat mb-8 sm:mb-10 md:mb-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Get in Touch
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Side - Contact Form */}
                        <motion.div
                            className="bg-[#0B0C28] p-6 sm:p-8 md:p-10 rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.20)]"
                            variants={formVariants}
                        >
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-[16px] sm:text-[18px] text-white font-montserrat mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 rounded-[8px] bg-[#121234] text-white border border-[#A8A8A8] focus:outline-none focus:border-[#02E0B8] transition-colors duration-300"
                                        placeholder="Your Name"
                                        value={formData.name} onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[16px] sm:text-[18px] text-white font-montserrat mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 rounded-[8px] bg-[#121234] text-white border border-[#A8A8A8] focus:outline-none focus:border-[#02E0B8] transition-colors duration-300"
                                        placeholder="Your Email"
                                        value={formData.email} onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[16px] sm:text-[18px] text-white font-montserrat mb-2" htmlFor="contact">
                                        Contact
                                    </label>
                                    <input
                                        type="tel"
                                        id="contact"
                                        className="w-full p-3 rounded-[8px] bg-[#121234] text-white border border-[#A8A8A8] focus:outline-none focus:border-[#02E0B8] transition-colors duration-300"
                                        placeholder="Your Phone Number"
                                        value={formData.contact} onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[16px] sm:text-[18px] text-white font-montserrat mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full p-3 rounded-[8px] bg-[#121234] text-white border border-[#A8A8A8] focus:outline-none focus:border-[#02E0B8] transition-colors duration-300"
                                        placeholder="Your Message"
                                        value={formData.message} onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#02E0B8] text-black px-6 py-3 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[16px] sm:text-[18px] font-montserrat font-semibold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Side - Business Details */}
                        <motion.div
                            className="text-white flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10"
                            variants={detailsVariants}
                        >
                            <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[#02E0B8] flex-shrink-0"
                                >
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-[18px] sm:text-[20px] font-semibold font-montserrat">Address</h3>
                                    <p className="text-[14px] sm:text-[16px] text-[#A8A8A8] font-montserrat">
                                        123 AI Street, Tech City, TC 45678
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[#02E0B8] flex-shrink-0"
                                >
                                    <path
                                        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-[18px] sm:text-[20px] font-semibold font-montserrat">Email</h3>
                                    <p className="text-[14px] sm:text-[16px] text-[#A8A8A8] font-montserrat">
                                        contact@aiinnovate.com
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div className="flex items-start gap-4" variants={itemVariants}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-[#02E0B8] flex-shrink-0"
                                >
                                    <path
                                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div>
                                    <h3 className="text-[18px] sm:text-[20px] font-semibold font-montserrat">Phone</h3>
                                    <p className="text-[14px] sm:text-[16px] text-[#A8A8A8] font-montserrat">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}