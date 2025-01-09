"use client"

export default function Footer() {
    return (
        <footer className="container mx-auto bg-gradient text-white py-7 relative">
  <div className="flex flex-col lg:flex-row justify-between items-center px-5 space-y-4 lg:space-y-0">
    {/* Copyright */}
    <p className="text-sm text-center lg:text-left">Copyright © 2023 | Helpkey</p>

    {/* Social Media Icons */}
    <div className="flex justify-center lg:justify-end space-x-4">
      <a href="#" aria-label="Facebook" className="hover:opacity-75 text-lg">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" aria-label="Twitter" className="hover:opacity-75 text-lg">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" aria-label="Instagram" className="hover:opacity-75 text-lg">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" aria-label="YouTube" className="hover:opacity-75 text-lg">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="#" aria-label="Telegram" className="hover:opacity-75 text-lg">
        <i className="fab fa-telegram-plane"></i>
      </a>
    </div>
  </div>

  {/* Scroll to Top Button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg"
    aria-label="Scroll to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</footer>

    );
}
