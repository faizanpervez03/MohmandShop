import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>

      <footer class="footer-section">
        <div class="container relative">

          <div class="sofa-img">
            <img src="images/sofa.png" alt="Image" class="img-fluid" />
          </div>

          {/* <div class="row">
            <div class="col-lg-8">
              <div class="subscription-form">
                <h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                <form action="#" class="row g-3">
                  <div class="col-auto">
                    <input type="text" class="form-control" placeholder="Enter your name" />
                  </div>
                  <div class="col-auto">
                    <input type="email" class="form-control" placeholder="Enter your email" />
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-primary">
                      <span class="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div> */}

          <div class="row g-5 mb-5">
            <div class="col-lg-6">
              <div class="mb-4 mt-5 footer-logo-wrap"><a href="#" class="footer-logo">Mohmand Shop<span>.</span></a></div>
              <p class="mb-4">We pride ourselves on a track record of unmatched quality, reliability, and customer satisfaction. Our commitment to innovation and customer-centric solutions sets us apart, making us the ideal choice for your needs. When you choose us, you're choosing a partner dedicated to your success.</p>

              <ul class="list-unstyled custom-social">
              
                <li><Link to="/#"><span class="fa fa-brands fa-facebook-f"></span></Link></li>
                <li><Link to="/#"><span class="fa fa-brands fa-twitter"></span></Link></li>
                <li><Link to="/#"><span class="fa fa-brands fa-instagram"></span></Link></li>
                <li><Link to="/#"><span class="fa fa-brands fa-twitter"></span></Link></li>
                <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
                
              </ul>
            </div>

            <div class="col-lg-6">
              <div class="row links-wrap">
                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li><Link to="/About">About</Link></li>
                    <li> <Link to="/#">Services</Link> </li>
                    <li> <Link to="/#">Blog</Link></li>
                    <li> <Link to="/#">Contac t Us</Link></li>
                  </ul>
                </div>

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li> <Link to="/#">Support</Link> </li>
                    <li> <Link to="/#">Knowledge base</Link></li>
                    <li> <Link to="/#">Live chat</Link></li>
                  </ul>
                </div>

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li> <Link to="/#">Job</Link> </li>
                    <li> <Link to="/#">Our team</Link></li>
                    <li> <Link to="/#">Leadership</Link></li>
                    <li><Link to="/#">Privacy Policy</Link></li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

          <div class="border-top copyright">
            <div class="row pt-4">
              <div class="col-lg-6">
                <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Mohmand Shop <br /> Design And Develped by <Link to="https://faizanpervez.netlify.app/" target='_blank'>Faizan Pervez</Link>
                </p>
              </div>

              <div class="col-lg-6 text-center text-lg-end">
                <ul class="list-unstyled d-inline-flex ms-auto">
                  <li class="me-4">
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
  )
}

export default Footer
