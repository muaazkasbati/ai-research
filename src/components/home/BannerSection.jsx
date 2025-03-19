// components/Hero.jsx
import Link from 'next/link';

const BannerSection = () => {
  return (
    <section 
      className="h-[500px] sm:h-[660px] md:h-[860px] bg-black bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/banner-section-bg.jpg')`,
      }}
    >
      <div className="text-center text-white max-w-[1300px] px-4 sm:px-6 md:px-8">
        <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-bold mb-4 sm:mb-6 font-montserrat leading-tight sm:leading-snug">
          Cutting-Edge AI Solutions for a Better Future
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 font-montserrat">
          Redefining possibilities with groundbreaking AI research and development.
        </p>
        <Link 
          href="/get-started"
          className="bg-[#02E0B8] text-black px-4 sm:px-5 md:px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[14px] sm:text-[16px] md:text-[18px] inline-block font-montserrat"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default BannerSection;