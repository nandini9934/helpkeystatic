// 'use client'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';


// export default function About() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
//     };
//     return (
//         <div className='container mx-auto '>
//             <section className='bg-custom-gradient lg:h-[500px] h-[520px] mb-10 pt-8'>
//                 <div className="flex lg:justify-evenly  justify-between items-center px-4 py-2">
//                     {/* Logo */}
//                     <img src="logo.png" alt="Logo" className="w-12 h-12" />

//                     {/* Navbar links for large screens */}
//                     <ul className="hidden md:flex space-x-10 text-xl text-white font-medium">
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/aboutus">About Us</Link></li>
//                         <li><Link href="/services">Services</Link></li>
//                         <li><Link href="/features">Features</Link></li>
//                         <li><Link href="/recruitment">Recruitment</Link></li>
//                         <li><Link href="/contact">Contact Us</Link></li>
//                         <li><Link href="/app-download">Application Download</Link></li>
//                     </ul>

//                     {/* Hamburger Menu for small screens */}
//                     <div className="md:hidden z-50">
//                         <button onClick={toggleMenu} className="text-white">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 className="h-6 w-6"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile menu (hidden by default, displayed when toggled) */}
//                 <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 absolute z-50 w-full bg-custom-gradient py-10`}>
//                     <ul className="space-y-3 text-white text-xl font-medium pl-5">
//                         <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//                         <li><Link href="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
//                         <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
//                         <li><Link href="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
//                         <li><Link href="/recruitment" onClick={() => setIsMenuOpen(false)}>Recruitment</Link></li>
//                         <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
//                         <li><Link href="/app-download" onClick={() => setIsMenuOpen(false)}>Application Download</Link></li>
//                     </ul>
//                 </div>
//             </section>
//         </div>
//     );
// }