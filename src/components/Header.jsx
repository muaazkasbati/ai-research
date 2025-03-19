// components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 absolute top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="w-[185px]">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" className="w-full h-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-[#02E0B8] text-[18px] hover:text-[#02E0B8] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-white text-[18px] hover:text-[#02E0B8] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-white text-[18px] hover:text-[#02E0B8] transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-white text-[18px] hover:text-[#02E0B8] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link 
            href="#"
            className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-[#02E0B8] text-[18px] hover:text-[#02E0B8]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-[18px] hover:text-[#02E0B8]">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-[18px] hover:text-[#02E0B8]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-[18px] hover:text-[#02E0B8]">
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="#"
                className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] inline-block"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;