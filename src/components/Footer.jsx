// components/Footer.jsx
import Link from 'next/link';

const Footer = () => {
    const firstColumnItems = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
            icon: (
                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.1113C11.337 15.1113 10.7011 14.8479 10.2322 14.3791C9.76339 13.9103 9.5 13.2744 9.5 12.6113C9.5 11.9483 9.76339 11.3124 10.2322 10.8436C10.7011 10.3747 11.337 10.1113 12 10.1113C12.663 10.1113 13.2989 10.3747 13.7678 10.8436C14.2366 11.3124 14.5 11.9483 14.5 12.6113C14.5 12.9396 14.4353 13.2647 14.3097 13.568C14.1841 13.8714 13.9999 14.1469 13.7678 14.3791C13.5356 14.6112 13.26 14.7954 12.9567 14.921C12.6534 15.0467 12.3283 15.1113 12 15.1113ZM12 5.61133C10.1435 5.61133 8.36301 6.34883 7.05025 7.66158C5.7375 8.97434 5 10.7548 5 12.6113C5 17.8613 12 25.6113 12 25.6113C12 25.6113 19 17.8613 19 12.6113C19 10.7548 18.2625 8.97434 16.9497 7.66158C15.637 6.34883 13.8565 5.61133 12 5.61133Z" fill="white" />
                </svg>
            )
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
            icon: (
                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.1113C11.337 15.1113 10.7011 14.8479 10.2322 14.3791C9.76339 13.9103 9.5 13.2744 9.5 12.6113C9.5 11.9483 9.76339 11.3124 10.2322 10.8436C10.7011 10.3747 11.337 10.1113 12 10.1113C12.663 10.1113 13.2989 10.3747 13.7678 10.8436C14.2366 11.3124 14.5 11.9483 14.5 12.6113C14.5 12.9396 14.4353 13.2647 14.3097 13.568C14.1841 13.8714 13.9999 14.1469 13.7678 14.3791C13.5356 14.6112 13.26 14.7954 12.9567 14.921C12.6534 15.0467 12.3283 15.1113 12 15.1113ZM12 5.61133C10.1435 5.61133 8.36301 6.34883 7.05025 7.66158C5.7375 8.97434 5 10.7548 5 12.6113C5 17.8613 12 25.6113 12 25.6113C12 25.6113 19 17.8613 19 12.6113C19 10.7548 18.2625 8.97434 16.9497 7.66158C15.637 6.34883 13.8565 5.61133 12 5.61133Z" fill="white" />
                </svg>
            )
        }
    ];

    return (
        <footer
            className="pt-42 md:pt-50 pb-6 text-white bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/footer-bg.png')`,
            }}
        >
            <div className="max-w-[1300px] mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-8">
                    {/* First Column - Logo and Social Icons */}
                    <div>
                        <img
                            src="/images/white-logo.svg"
                            alt="Company Logo"
                            className="w-[150px] sm:w-[185px] mb-6"
                        />
                        <ul className="space-y-4">
                            {firstColumnItems.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 mt-1">{item.icon}</span>
                                    <p className="text-white text-[14px] sm:text-[16px] font-montserrat">
                                        {item.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Second Column - Services */}
                    <div>
                        <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-4 font-montserrat">
                            Service
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Machine Learning & Deep Learning",
                                "Natural Language Processing (NLP)",
                                "AI-Powered Automation",
                                "Ethical AI & Responsible Innovation",
                                "Computer Vision & Data Science"
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-white text-[14px] sm:text-[16px] font-montserrat flex items-center">
                                        <span className="w-2 h-2 max-h-2 rounded-full bg-[#02E0B8] mr-2"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Company */}
                    <div>
                        <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-4 font-montserrat">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {["Home", "About us", "Blog", "Mission", "Contact Us", "Career"].map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-white text-[14px] sm:text-[16px] font-montserrat flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#02E0B8] mr-2"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fourth Column - Newsletter */}
                    <div>
                        <h3 className="text-white text-[20px] sm:text-[24px] font-bold mb-4 font-montserrat">
                            Newsletter
                        </h3>
                        <p className="text-white text-[12px] sm:text-[14px] mb-4 font-montserrat">
                            Signup our newsletter to get update information, news or insight.
                        </p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 sm:p-3 rounded-[30px] border border-[#121228] bg-[#161630] text-[#54595F] text-[14px] sm:text-[16px] font-montserrat focus:outline-none"
                            />
                            <button
                                className="w-full bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[16px] sm:text-[18px] font-montserrat"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 md:mt-12 text-center pt-4">
                    <p className="text-gray-100 text-[12px] sm:text-[14px] font-montserrat">
                        © 2022 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;