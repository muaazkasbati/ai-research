// components/Hero.jsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      className="h-[600px] sm:h-[780px] md:h-[980px] bg-black bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bg-image.jpg')`,
      }}
    >
      <div className="text-center text-white max-w-[1300px] px-4 sm:px-6 md:px-8">
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
          Where Artificial Intelligence Meets Human Ingenuity
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[24px] mb-6 sm:mb-8 font-montserrat max-w-[90%] sm:max-w-[80%] mx-auto">
          Blending technology and human creativity to push the limits of innovation.
        </p>
        <Link 
          href="#"
          className="bg-[#02E0B8] text-black px-4 sm:px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[16px] sm:text-[18px] inline-block font-montserrat"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;