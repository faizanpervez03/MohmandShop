import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container relative">
          

          <div className="row g-5 mb-5">
            <div className="col-lg-6">
              <div className="mb-4 mt-5 footer-logo-wrap">
                <Link to="/" className="footer-logo">Mohmand Shop<span>.</span></Link>
              </div>
              <p className="mb-4">We pride ourselves on a track record of unmatched quality, reliability, and customer satisfaction. Our commitment to innovation and customer-centric solutions sets us apart, making us the ideal choice for your needs. When you choose us, you're choosing a partner dedicated to your success.</p>

              <ul className="list-unstyled custom-social">
                <li><Link to="/#"><span className="fa fa-brands fa-facebook-f"></span></Link></li>
                <li><Link to="/#"><span className="fa fa-brands fa-twitter"></span></Link></li>
                <li><Link to="/#"><span className="fa fa-brands fa-instagram"></span></Link></li>
                <li><Link to="/#"><span className="fa fa-brands fa-twitter"></span></Link></li>
                <li><Link to="#"><span className="fa fa-brands fa-linkedin"></span></Link></li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/#">Services</Link></li>
                    <li><Link to="/#">Blog</Link></li>
                    <li><Link to="/#">Contact Us</Link></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><Link to="/#">Support</Link></li>
                    <li><Link to="/#">Knowledge base</Link></li>
                    <li><Link to="/#">Live chat</Link></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><Link to="/#">Job</Link></li>
                    <li><Link to="/#">Our team</Link></li>
                    <li><Link to="/#">Leadership</Link></li>
                    <li><Link to="/#">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Mohmand Shop <br /> 
                  Design And Developed by <a href="https://faizanpervez.netlify.app/" target="_blank" rel="noopener noreferrer">Faizan Pervez</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <Link to="/#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
