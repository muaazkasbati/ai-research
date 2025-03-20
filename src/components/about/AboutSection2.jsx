// components/AboutSection.jsx
import Link from 'next/link';

const AboutSection2 = () => {
    return (
        <section className="py-8 md:py-16">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 md:gap-8 items-center">
            <div className="flex flex-wrap gap-10">
                    <img
                        className="w-full rounded-[14px] object-cover"
                        src="/images/about-image-4.jpg"
                    />
                    <img
                        className="w-auto rounded-[14px] object-cover"
                        src="/images/about-image-5.jpg"
                    />
                    <img
                        className="w-auto rounded-[14px] object-cover"
                        src="/images/about-image-6.jpg"
                    />
                </div>
                {/* Left Column - Text Content */}
                <div className="text-white">
                    <p className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat">
                        Our Value
                    </p>
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        Values We Believe In
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <ul className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat space-y-2">
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</li>
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</li>
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</li>
                        <li className="flex items-start"><span className="w-2 h-2 max-h-2 rounded-full bg-white mr-2 mt-2"></span>
                        Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default AboutSection2;