'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [city, setCity] = useState(""); // State to track user input for city
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current carousel image index
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
    };
    // Array holding image URLs for the carousel
    const images = [
        "keycard.png",
        "helpkeycard.jpg",
    ];

    // Function to search for hotels by city
    const searchHotelByCity = (city) => {
        window.open("https://helpkeywebapp.vercel.app/?city=" + city, "_self"); // Replace with your deployed app's URL
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className='container mx-auto '>
                <section className='bg-custom-gradient lg:h-[500px] h-[520px] mb-10 pt-8'>
                    <div>
                        <div className="flex lg:justify-evenly  justify-between items-center px-4 py-2">
                            {/* Logo */}
                            <img src="logo.png" alt="Logo" className="w-12 h-12" />

                            {/* Navbar links for large screens */}
                            <ul className="hidden md:flex space-x-10 text-xl text-white font-medium">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/features">Features</Link></li>
                                <li><Link href="/recruitment">Recruitment</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/app-download">Application Download</Link></li>
                            </ul>

                            {/* Hamburger Menu for small screens */}
                            <div className="md:hidden z-50">
                                <button onClick={toggleMenu} className="text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu (hidden by default, displayed when toggled) */}
                        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 absolute z-50 w-full bg-custom-gradient py-12`}>
                            <ul className="space-y-3 text-white text-xl font-medium pl-5">
                                <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                                <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                                <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                                <li><Link href="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
                                <li><Link href="/recruitment" onClick={() => setIsMenuOpen(false)}>Recruitment</Link></li>
                                <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                                <li><Link href="/app-download" onClick={() => setIsMenuOpen(false)}>Application Download</Link></li>
                            </ul>
                        </div>


                        <div className="flex justify-center lg:my-28 my-5">
                            <div className="bg-gray-200 px-4 lg:rounded-full shadow-lg lg:w-full w-[400px] lg:h-[105px] lg:max-w-6xl">
                                {/* Form for searching hotels */}
                                <div className="flex items-center grid grid-cols-1 xl:grid xl:grid-cols-12">
                                    <div className="col-span-3 lg:ml-10">
                                        <div className="mt-2 text-l font-bold">Location</div>
                                        <input
                                            type="text"
                                            placeholder="Enter Your City..."
                                            className="px-4 py-1 lg:mt-2 mt-1 mb-3 border rounded-xl placeholder-gray-600"
                                            onChange={(e) => setCity(e.target.value)} // Update city state
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="lg:mt-2 mt-1 text-l font-bold">Check in</div>
                                        <input
                                            type="date"
                                            placeholder="Check in"
                                            className="lg:px-4 px-12 py-1 lg:mt-2 mt-1 mb-3 border rounded-xl"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className='lg:mt-2 mt-1 text-l font-bold'>Check out</div>
                                        <input
                                            type="date"
                                            placeholder="Check out"
                                            className="lg:px-4 px-12 py-1 lg:mt-2 mt-1 mb-3 border rounded-xl"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className='lg:mt-2 mt-1 text-l font-bold'>Guest</div>
                                        <input
                                            type="number"
                                            min="1"
                                            placeholder="Guests"
                                            className="px-4 py-1 lg:mt-2 mt-1 mb-3 border rounded-xl placeholder-gray-600"
                                        />
                                    </div>
                                    <div className='col-span-2 pb-4'>
                                        <button
                                            className="bg-purple-500 lg:ml-28  text-white font-bold lg:rounded-full w-full sm:w-auto xl:w-full lg:h-[105px] h-10"
                                            onClick={() => searchHotelByCity(city)}
                                        >
                                            Search
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section>
                <section>
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Display current image */}
                        <img
                            src={images[currentImageIndex]}
                            alt={`Carousel Image ${currentImageIndex + 1}`}
                            className="w-auto shadow-lg transition-all duration-500 ease-in-out w-[1300px]"
                        />
                        {/* Bullet Navigation */}
                        <div className="flex space-x-1 mt-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => selectImage(index)} // Set current image on bullet click
                                    className={`w-2 h-2 rounded-full ${currentImageIndex === index
                                        ? "bg-black"
                                        : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center text-red-500 py-10">
                    {/* Additional sections */}
                    <div className="col-span-1 p-6 sm:p-8 lg:p-10">
                        <h2 className="text-xl sm:text-2xl mb-2 font-semibold">24/7 Customer Support</h2>
                        <h2 className="text-sm sm:text-base mb-2 text-black">
                            24/7 support means customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.
                        </h2>
                    </div>
                    <div className="col-span-1 p-6 sm:p-8 lg:p-10">
                        <h2 className="text-xl sm:text-2xl mb-2 font-semibold">100 Client Satisfaction</h2>
                        <h2 className="text-sm sm:text-base mb-2 text-black">
                            Customer satisfaction is a central goal for most businesses, but it is a myth that it is possible to achieve 100% customer satisfaction.
                        </h2>
                    </div>
                    <div className="col-span-1 p-6 sm:p-8 lg:p-10">
                        <h2 className="text-xl sm:text-2xl mb-2 font-semibold">100% Money Back</h2>
                        <h2 className="text-sm sm:text-base mb-2 text-black">
                            You will refund the full price of the product or service the customer is returning.
                        </h2>
                    </div>
                </section>

            </div>
        </>
    );
}
