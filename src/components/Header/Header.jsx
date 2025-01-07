import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import '../Header/styles.css';
import { useSelector } from 'react-redux';


const Header = ({ cartItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setShowDropdown(false); // Reset dropdown when menu is toggled
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // ----------------------------------
    const {cart} =  useSelector( (store)=> store.cartSlice  )
    console.log(cart);
    

    return (
        <>
            <div
                style={{ backgroundColor: "rgb(26, 51, 48)" }}
                className="upper-line text-white p-2 text-center fixed top-0 w-full left-0 z-50 hidden md:flex justify-around"
            >
                <div className="flex items-center">
                    <FaEnvelope className="mr-1" />
                    <span>mohmandshop@gmail.com</span>
                </div>
                <div className="flex items-center">
                    <FaPhone className="mr-1" />
                    <span>Call us: 03045417033</span>
                </div>
                <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>Opening time: 8am to 9pm</span>
                </div>
            </div>

            <nav className="fixed top-0 sm:top-0 md:top-9 lg:top-9 left-0 w-full z-50 p-4" style={{ background: 'linear-gradient(to right, #0f4c47, #238c83, #49b7aa, #14c9b7)' }}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/"><span className="text-white font-bold text-3xl">Mohmand Shop.</span></Link>
                    </div>
                    <div className="hidden md:flex space-x-8" style={{ alignItems: "center" }}>
                        <Link to="/" className="zamaLink text-white text-lg">Home</Link>
                        <Link to="/About" className="zamaLink text-white text-lg">About</Link>
                        <div className="relative group">
                            <Link to="/Shop" className="zamaLink text-white text-lg flex items-center">
                                Shop
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link> 
                            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 w-40">
                                <Link to="/Categories" className="block px-4 py-2 hover:bg-gray-100">Categories</Link>
                                <Link to="/AllProducts" className="block px-4 py-2 hover:bg-gray-100">All Products</Link>
                            </div>
                        </div>
                        <Link to="/ContactUs" className="zamaLink text-white text-lg">Contact Us</Link>
                        <Link to="/Cart" className="zamaLink text-white text-lg relative">
                            <img src="images/cart.svg" alt="Cart" />
                            
                                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

           {/* Mobile Menu */}
           {isOpen && (
                    <div className="md:hidden mt-4 flex flex-col space-y-4 transition-all duration-500 ease-in-out">
                        <Link to="/" className="zamaLink text-white text-lg" onClick={closeMenu}>Home</Link>
                        <Link to="/About" className="zamaLink text-white text-lg" onClick={closeMenu}>About</Link>
                        <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="relative">
                            <Link to="/Shop" className="zamaLink text-white text-lg flex items-center" onClick={closeMenu}>
                                Shop
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            {showDropdown && (
                                <div className="pl-4 flex flex-col space-y-2 bg-white text-black shadow-md mt-2 transition-all duration-300">
                                    <Link to="/Categories" className="block px-4 py-2" onClick={closeMenu}>Categories</Link>
                                    <Link to="/AllProducts" className="block px-4 py-2" onClick={closeMenu}>All Products</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/ContactUs" className="zamaLink text-white text-lg" onClick={closeMenu}>Contact Us</Link>
                        <Link to="/Cart" className="zamaLink text-white text-lg relative flex items-center" onClick={closeMenu}>
                        
                            <img src="images/cart.svg" alt="Cart" className="mr-2"   />
                            {cartItems > 0 && (
                                <span className="bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                                    {cartItems}
                                </span>
                            )}
                        </Link>
                    </div>
                )}

            </nav>
        </>
    );
};

export default Header