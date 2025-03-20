// components/AboutSection.jsx
import Link from 'next/link';

const AboutSection1 = () => {
    return (
        <section className="py-8 md:py-16">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 md:gap-8 items-center">
                {/* Left Column - Text Content */}
                <div className="text-white">
                    <p className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat">
                        Overview
                    </p>
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        A brief intro about your AI research firm
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                        <br /><br />
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        <br /><br />
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    </p>
                </div>

                <div className="flex flex-wrap gap-10">
                    <img
                        className="w-full rounded-[14px] object-cover"
                        src="/images/about-image-1.jpg"
                    />
                    <img
                        className="w-auto rounded-[14px] object-cover"
                        src="/images/about-image-2.jpg"
                    />
                    <img
                        className="w-auto rounded-[14px] object-cover"
                        src="/images/about-image-3.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection1;