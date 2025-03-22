// // components/Header.jsx
// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Header = () => {
//   const router = useRouter()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const menu = [
//     { id: 1, name: "Home", slug: "/" },
//     { id: 1, name: "About", slug: "/about" },
//     { id: 1, name: "Blogs", slug: "/blogs" },
//     { id: 1, name: "Mission", slug: "/mission" },
//     { id: 1, name: "Career", slug: "/career" },
//     { id: 1, name: "Contact", slug: "/contact" },
//   ]

//   return (
//     <header className="w-full py-5 absolute top-0 z-50">
//       <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="w-[185px]">
//           <Link href="/">
//             <img src="/images/logo.svg" alt="Logo" className="w-full h-auto" />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex flex-1 justify-center">
//           <ul className="flex space-x-8">
//             {menu.map((item, i) => (
//               <li>
//                 <Link
//                   href={item.slug}
//                   className={`${router.pathname === item?.slug ? "text-[#02E0B8]" : "text-white"} text-[18px] hover:text-[#02E0B8] transition-colors duration-300`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile Navigation Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Button */}
//         <div className="hidden md:block">
//           <Link
//             href="#"
//             className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-900 px-4 py-4">
//           <ul className="space-y-4">
//             {menu.map((item, i) => (
//               <li>
//                 <Link
//                   href={item.slug}
//                   className={`${router.pathname === item?.slug ? "text-[#02E0B8]" : "text-white"} text-[18px] hover:text-[#02E0B8]`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <Link
//                 href="#"
//                 className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] inline-block"
//               >
//                 Get Started
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menu = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "About", slug: "/about" },
    { id: 3, name: "Blogs", slug: "/blogs" },
    // { id: 4, name: "Mission", slug: "/mission" },
    { id: 5, name: "Career", slug: "/career" },
    { id: 6, name: "Contact", slug: "/contact" },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <header className="w-full py-5 absolute top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[185px]"
        >
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" className="w-full h-auto" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex flex-1 justify-center"
        >
          <ul className="flex space-x-8">
            {menu.map((item) => (
              <motion.li key={item.id} variants={itemVariants} whileHover="hover">
                <Link
                  href={item.slug}
                  className={`${router.pathname === item.slug ? "text-[#02E0B8]" : "text-white"} text-[18px] hover:text-[#02E0B8] transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Desktop Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="#"
              className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] hover:bg-[#02c9a0] transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-900 px-4 py-4"
          >
            <motion.ul variants={navVariants} className="space-y-4">
              {menu.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <Link
                    href={item.slug}
                    className={`${router.pathname === item.slug ? "text-[#02E0B8]" : "text-white"} text-[18px] hover:text-[#02E0B8]`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link
                    href="#"
                    className="bg-[#02E0B8] text-black px-6 py-2 rounded-[30px] inline-block"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;