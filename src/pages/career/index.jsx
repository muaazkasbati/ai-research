import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSection from "@/components/home/BannerSection";
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/home/HeroSection";
import Head from "next/head";
import { useState } from "react";

export default function Career() {
    const [openIndex, setOpenIndex] = useState(null);

    const jobData = [
        {
            title: "Senior AI Engineer",
            location: "San Francisco, CA",
            description: "Join our team to lead cutting-edge AI projects, focusing on machine learning and deep learning innovations.",
        },
        {
            title: "Data Scientist",
            location: "Remote",
            description: "Analyze complex datasets and develop predictive models to drive business decisions.",
        },
        {
            title: "UI/UX Designer",
            location: "New York, NY",
            description: "Design intuitive and visually stunning interfaces for our AI-driven applications.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <Head>
                <title>Career - AI Research</title>
            </Head>
            <Header />
            <HeroSection
                title="Latest Job Listing"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                hideButton
            />
            <section className="py-8 sm:py-16 md:py-42 px-3 md:px-0">
                <div className="p-4 sm:p-8 md:p-12 max-w-[1300px] mx-auto rounded-[10px]" >
                    <div className="text-white text-center">
                        <p className="text-[#02E0B8] text-[14px] sm:text-[16px] md:text-[18px] mb-3 sm:mb-4 font-montserrat">
                            Jobs
                        </p>
                        <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                            Current Job Openings
                        </h2>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        </p>
                    </div>

                </div>
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="space-y-4">
                        {jobData.map((job, index) => (
                            <div
                                key={index}
                                className="rounded-[12px] bg-[#121234] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.20)]"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left"
                                >
                                    <div>
                                        <h3 className="text-[18px] sm:text-[20px] font-semibold text-white font-montserrat">
                                            {job.title}
                                        </h3>
                                        <p className="text-[14px] sm:text-[16px] text-[#A8A8A8] font-montserrat mt-1">
                                            {job.location}
                                        </p>
                                    </div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`text-[#02E0B8] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <path
                                            d="M6 9L12 15L18 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 p-4 sm:p-5 md:p-6' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-[14px] sm:text-[16px] text-white font-montserrat">
                                        {job.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BannerSection />
            <CallToAction />
            <Footer />
        </>
    )
}