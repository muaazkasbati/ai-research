// components/AboutSection.jsx
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="py-8 md:py-16">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left Column - Text Content */}
                <div className="text-white">
                    <p className="text-[#02E0B8] text-[16px] sm:text-[18px] mb-3 sm:mb-4 font-montserrat">
                        About Us
                    </p>
                    <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-4 sm:mb-6 font-montserrat text-white leading-tight">
                        A brief intro about your AI research firm
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 font-montserrat">
                        At [Company Name], we are dedicated to pushing the boundaries of artificial intelligence through cutting-edge research and innovation. As a pioneering AI research firm, we specialize in developing intelligent systems that enhance decision-making, automate complex processes, and drive meaningful advancements across industries.
                    </p>
                    <Link
                        href="/about"
                        className="bg-[#02E0B8] text-black px-4 sm:px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[16px] sm:text-[18px] inline-block font-montserrat"
                    >
                        Learn More
                    </Link>
                </div>

                <div>
                    <video
                        className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[14px] object-cover"
                        controls
                        poster="/images/about-image-home.jpg"
                    >
                        <source
                            src="https://v.ftcdn.net/05/73/65/06/700_F_573650607_wgtTCOTwUODIPqu4ruB2F6dwOidu3kP0_ST.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;