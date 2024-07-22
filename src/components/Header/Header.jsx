
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/styles.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (




        <nav className="p-4" style={{ backgroundColor: "#208f89" }}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link><span className="text-white font-bold text-3xl">Mohmand Shop.</span></Link>


                </div>
                <div className="hidden md:flex space-x-8" style={{ alignItems: "center" }}>
                    <Link to="/" className="zamaLink text-white text-lg">Home</Link>
                    <Link to="/About" className="zamaLink text-white text-lg">About</Link>
                    <Link to="/Shop" className="zamaLink text-white text-lg">Shop</Link>
                    <Link className="zamaLink text-white text-lg">Contact Us</Link>
                    {/* 
                            <Link className='nav-link'><img src="images/user.svg" /></Link>
                            
                            <Link className='nav-link'><img src="images/cart.svg" /></Link> */}
                            

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
            <div style={{ transition: "zamaTogle 2s ease-in-out" }}
                className={`md:hidden duration-${isOpen ? '1000' : '300'} ease-in-out ${isOpen ? 'h-auto' : 'h-0'} overflow-hidden`}
            >
                <div className="container mx-auto zamaTogle" >
                    <div className="flex flex-col items-center mt-4 space-y-4">
                        <Link to="/Home" className="text-white">Home</Link>
                        <Link to="/About" className="text-white">About</Link>
                        <Link to="/Shop" className="text-white">Shop</Link>
                        <Link  className="text-white">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

// -------------------------------------------------------------
// import React from 'react'
// import { Link } from 'react-router-dom'


// const Header = () => {

//     return (
//         <>

//             <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark " arial-label="Furni navigation bar">

//                 <div class="container">
//                     <a class="navbar-brand" href="index.html">Mohmand Shop<span>.</span></a>

//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>


{/* <div className="collapse navbar-collapse" id='navbarsFurni'> */ }
// <ul className='custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0'>


//     <li className='nav-item'><Link className='nav-link'>Home</Link></li>
//     <li className='nav-item'><Link className='nav-link'>About</Link></li>
//     <li className='nav-item'><Link className='nav-link'>Shop</Link></li>
//     <li className='nav-item'><Link className='nav-link'>Contact Us</Link></li>

// </ul>
// <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
//     <li><a class="nav-link" href="#"><img src="images/user.svg" /></a></li>
//     <li><a class="nav-link" href="cart.html"><img src="images/cart.svg" /></a></li>
// </ul>

{/* </div> */ }

//                 </div>

//             </nav>

//         </>
//     )
// }

// export default Header

// --------------------------------------------------------------























