'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { format } from "date-fns";

export default function Hero() {
    const [city, setCity] = useState(""); // State to track user input for city
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current carousel image index
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
    const [selectedDate, setSelectedDate] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null); // Keeps track of the open dropdown

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);// Toggle the menu open/close
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

    const handleDateChange = (e) => {
        if (e.target.value) {
            const date = new Date(e.target.value); // Convert selected value to Date
            const formattedDate = format(date, "EEE, d MMM"); // Format as 'Fri, 3 Jan'
            setSelectedDate(formattedDate);
        }
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
                                <li><Link href="/aboutus">About Us</Link></li>
                                {/* Services Dropdown */}
                                <li className="relative">
                                    <button
                                        className="flex items-center space-x-1 text-white"
                                        onClick={() => toggleDropdown("services")}
                                    >
                                        <span>Services</span>
                                        <svg
                                            className={`w-4 h-4 transform ${openDropdown === "services" ? "rotate-180" : "rotate-0"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {openDropdown === "services" && (
                                        <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-[200px]">
                                            <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                                <Link href="/helpkeypoint">Helpkey Point</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                                <Link href="/helpkeyservices">Helpkey Services</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                {/* Features Dropdown */}
                                <li className="relative">
                                    <button
                                        className="flex items-center space-x-1 text-white"
                                        onClick={() => toggleDropdown("features")}
                                    >
                                        <span>Features</span>
                                        <svg
                                            className={`w-4 h-4 transform ${openDropdown === "features" ? "rotate-180" : "rotate-0"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {openDropdown === "features" && (
                                        <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-[200px]">
                                            <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                                <Link href="/features/share-and-earn">Share & Earn</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                                <Link href="/features/help-and-support">Help & Support</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 text-gray-700">
                                                <Link href="/features/qr-code-card">Helpkey QR Code & Card</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
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
                        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 absolute z-50 w-full bg-custom-gradient py-10`}>
                            <ul className="space-y-3 text-white text-xl font-medium pl-5">
                                <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                                <li><Link href="/aboutus" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                                {/* Services Dropdown */}
                                <li className="relative">
                                    <button
                                        className="flex items-center justify-between w-full text-left"
                                        onClick={() => toggleDropdown("services")}
                                    >
                                        <span>Services</span>
                                        <svg
                                            className={`w-4 h-4 transform ${openDropdown === "services" ? "rotate-180" : "rotate-0"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {openDropdown === "services" && (
                                        <ul className="mt-2 text-white">
                                            <li className="px-4 py-2 hover:bg-gray-700">
                                                <Link href="/helpkeypoint" onClick={() => setIsMenuOpen(false)}>
                                                    Helpkey Point
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-700">
                                                <Link href="/helpkeyservices" onClick={() => setIsMenuOpen(false)}>
                                                    Helpkey Services
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                {/* Features Dropdown */}
                                <li className="relative">
                                    <button
                                        className="flex items-center justify-between w-full text-left"
                                        onClick={() => toggleDropdown("features")}
                                    >
                                        <span>Features</span>
                                        <svg
                                            className={`w-4 h-4 transform ${openDropdown === "features" ? "rotate-180" : "rotate-0"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {openDropdown === "features" && (
                                        <ul className="mt-2 text-white">
                                            <li className="px-4 py-2 hover:bg-gray-700">
                                                <Link href="/features/share-and-earn" onClick={() => setIsMenuOpen(false)}>
                                                    Share & Earn
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-700">
                                                <Link href="/features/help-and-support" onClick={() => setIsMenuOpen(false)}>
                                                    Help & Support
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-700">
                                                <Link href="/features/qr-code-card" onClick={() => setIsMenuOpen(false)}>
                                                    Helpkey QR Code & Card
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link href="/recruitment" onClick={() => setIsMenuOpen(false)}>Recruitment</Link></li>
                                <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                                <li><Link href="/app-download" onClick={() => setIsMenuOpen(false)}>Application Download</Link></li>
                            </ul>
                        </div>

                        {/* for laptop view */}
                        <div className="hidden md:flex justify-center lg:my-28 my-5 ">
                            <div className="bg-gray-200 px-4 lg:rounded-full shadow-lg lg:w-full w-[310px] lg:h-[110px] h-[290px] lg:max-w-6xl">
                                {/* Form for searching hotels */}
                                <div className="flex items-center grid grid-cols-1 xl:grid xl:grid-cols-12">
                                    <div className="col-span-3 lg:ml-10">
                                        <div className="mt-2 text-l font-bold lg:ml-2">Location</div>
                                        <input
                                            type="text"
                                            placeholder="Enter Your City..."
                                            className="lg:px-4 lg:w-[230px] w-[230px] py-1 px-2 lg:mt-2 mt-1 lg:mb-3 mb-1 border rounded-xl placeholder-gray-600"
                                            onChange={(e) => setCity(e.target.value)} // Update city state
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="lg:mt-2 mt-1 text-l font-bold lg:ml-2">Check in</div>
                                        <input
                                            type="date"
                                            placeholder="Check in"
                                            className="lg:px-4 lg:w-[180px] w-[230px] py-1 px-2 lg:mt-2 mt-1 lg:mb-3 mb-1 border rounded-xl bg-white"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className='lg:mt-2 mt-1 text-l font-bold lg:ml-3'>Check out</div>
                                        <input
                                            type="date"
                                            placeholder="Check out"
                                            className="lg:px-4 lg:w-[180px] w-[230px] py-1 px-2 lg:ml-2 lg:mt-2 mt-1 lg:mb-3 mb-1 border rounded-xl bg-white"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className='lg:mt-2 mt-1 text-l font-bold lg:ml-4'>Guest</div>
                                        <input
                                            type="number"
                                            min="1"
                                            placeholder="Guests"
                                            className="lg:px-4 lg:w-[230px] w-[230px] py-1 px-2 lg:mt-2 mt-1 lg:mb-3 mb-2 lg:ml-3 border rounded-xl placeholder-gray-600"
                                        />
                                    </div>
                                    <div className='col-span-2 pb-4'>
                                        <button
                                            className="bg-purple-500 lg:ml-28 text-white font-bold rounded-full lg:w-full w-[310px] lg:h-[110px] h-10 lg:mt-0 mt-4"
                                            onClick={() => searchHotelByCity(city)}
                                        >
                                            Search
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* for mobile view */}
                        <div className="lg:hidden flex justify-center my-24 ">
                            <div className="bg-gray-200 shadow-lg w-[345px] h-[133px] rounded-[15px]">
                                {/* Form for searching hotels */}
                                <div className="flex items-center grid grid-cols-8">
                                    <div className="col-span-8 border-b border-slate-400 flex px-3 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 11-7 7 7 7 0 017-7zM21 21l-5.2-5.2" />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Enter Your City..."
                                            className="w-full py-1 px-3 mt-1 mb-1 placeholder-black bg-transparent focus:outline-none"
                                            onChange={(e) => setCity(e.target.value)} // Update city state
                                        />
                                    </div>
                                    <div className="col-span-3 py-1 px-2">
                                        <div className="text-l font-medium text-gray-600 ">Check in</div>
                                        <div className="relative">
                                            {/* Hidden Native Date Input */}
                                            <input
                                                type="date"
                                                onChange={handleDateChange} // Event handler to update state
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            {/* Custom Display */}
                                            <div className="flex items-center w-[140px] py-2 bg-transparent ">
                                                {selectedDate ? (
                                                    <span className="text-black">{selectedDate}</span> // Show selected date
                                                ) : (
                                                    <span className="text-black">Select date</span> // Show placeholder
                                                )}
                                                {/* Custom Calendar Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 ml-2 text-black"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10m-9 4h8m-7 4h6m6-8h.01M4 4h16v16H4V4z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 border-x border-slate-400 py-1 px-2">
                                        <div className='mt-1 text-l font-medium text-gray-600'>Check out</div>
                                        <div className="relative">
                                            {/* Hidden Native Date Input */}
                                            <input
                                                type="date"
                                                onChange={handleDateChange} // Event handler to update state
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            {/* Custom Display */}
                                            <div className="flex items-center w-[140px] py-2 bg-transparent">
                                                {selectedDate ? (
                                                    <span className="text-black">{selectedDate}</span> // Show selected date
                                                ) : (
                                                    <span className="text-black">Select date</span> // Show placeholder
                                                )}
                                                {/* Custom Calendar Icon */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 ml-2 text-black"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10m-9 4h8m-7 4h6m6-8h.01M4 4h16v16H4V4z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="mt-1 text-l font-medium text-gray-600 px-1">Guests</div>

                                        <select
                                            className="mt-1 mb-2 placeholder-black bg-transparent text-black text-sm py-2 focus:outline-none"
                                            defaultValue="1" // Set default value to 1 guest
                                        >
                                            {/* Options for selecting number of guests */}
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                            <option value="6">6 Guests</option>
                                            <option value="7">7 Guests</option>
                                            <option value="8">8 Guests</option>
                                            <option value="9">9 Guests</option>
                                            <option value="10">10 Guests</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='lg:hidden col-span-2 pb-4'>
                                    <button
                                        className="bg-purple-500 text-xl text-white font-medium rounded-full w-[345px] h-10 mt-8"
                                        onClick={() => searchHotelByCity(city)}
                                    >
                                        Search
                                    </button>
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
