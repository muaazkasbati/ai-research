// components/CallToAction.jsx
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="pt-24 px-3 md:px-0">
      <div 
        className="max-w-[1300px] mx-auto -mb-30 px-4 md:px-[52px] py-[32px] flex flex-col md:flex-row gap-8 md:gap-10 rounded-[10px] relative z-10"
        style={{
          background: 'linear-gradient(102deg, #0A89FF 0%, #FF3BF6 100%)',
        }}
      >
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-white text-[24px] sm:text-[30px] md:text-[36px] font-bold mb-6 font-montserrat">
            Exploring machine learning or have a specific use case? Let’s talk.
          </h2>
          <div className="w-[50px] h-[3px] bg-[#02E0B8]"></div>
        </div>

        {/* Column Divider - visible only on md and up */}
        <div className="hidden md:block w-[1px] bg-white/20"></div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-white text-[16px] sm:text-[17px] md:text-[18px] mb-6 font-montserrat">
            We’d love to hear from you! Whether you have questions, collaboration opportunities, or need more information about our AI research, our team is here to help.
          </p>
          <Link 
            href="#"
            className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300 text-[18px] inline-block font-montserrat self-start"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;