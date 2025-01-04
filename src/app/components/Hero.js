'use client'
import Link from 'next/link';
import {useState} from 'react';

export default function Hero() {
    const [city,setCity] = useState("");

    const searchHotelByCity =(city)=>
    {
        window.open("https://helpkeywebapp.vercel.app/?city=" +city,"_self"); //replace react app's link here than deploy
    }

    return (
        <>
            <section className='container my-7'>
                <div className="flex items-center justify-evenly px-4 py-2">
                    <img src="logo.png" alt="Logo" className="w-12 h-12" />
                    <ul className="flex space-x-10 text-xl">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/features">Features</Link></li>
                        <li><Link href="/recruitment">Recruitment</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/app-download">Application Download</Link></li>
                    </ul>
                </div>
                {/* Search bar */}
                <div className="flex justify-center mt-5">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-6xl">
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="w-full sm:w-1/4">
                                <div className="mb-2">Location</div>
                                <input
                                    type="text"
                                    placeholder="Enter Your City..."
                                    className="p-2 border rounded "
                                    onChange={(e)=>setCity(e.target.value)}
                                />
                            </div>
                            <div className="w-full sm:w-1/4">
                                <div className="mb-2">Check in</div>
                                <input
                                    type="date"
                                    placeholder="Check in"
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="w-full sm:w-1/4">
                                <div className='mb-2'>Check out</div>

                                <input
                                    type="date"
                                    placeholder="Check out"
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="w-full sm:w-1/6">
                                <div className='mb-2'>Guest</div>
                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Guests"
                                    className="p-2 border rounded"
                                />
                            </div>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full sm:w-auto" onClick={
                                ()=>searchHotelByCity(city)
                            }>
                                Search
                            </button>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="flex justify-center">
                    <img
                        src="keycard.png"
                        alt="HelpKey Card"
                        className="w-3/4 shadow-lg rounded-lg"
                    />
                </div >
            </section >
            <section className="grid grid-cols-2 lg:grid lg:grid-cols-3 text-center text-red-500 py-10">
                <div className="col-span-1 p-10">
                    <h2 className="text-xl mb-1">
                        24/7 Customer Support</h2>
                    <h2 className="text-l mb-1 font-bold text-black">24/7 support means customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.

                    </h2>
                </div>
                <div className="col-span-1 p-10">
                    <h2 className="text-xl mb-1">100 Client Satisfaction</h2>
                    <h2 className="text-l mb-1 font-bold text-black">Customer satisfaction is a central goal for most businesses, but it is a myth that it is possible to achieve 100% customer satisfaction.

                    </h2>
                </div>

                <div className="col-span-1 p-10">
                    <h2 className="text-xl mb-1">100% Money Back</h2>
                    <h2 className="text-l mb-1 font-bold text-black">you will refund the full price of the product or service the customer is returning

                    </h2>
                </div>
            </section >
        </>
    );
}
