import React from 'react'
import './Style.css'


import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero.jsx'



function Home() {
  return (
    <>

    <Hero />

    
      {/* <!-- Start Product Section --> */}
      <div class="product-section">
        <div class="container">
          <div class="row">

            {/* <!-- Start Column 1 --> */}
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
              <p class="mb-4">Exquisitely crafted with premium materials, this product is a testament to quality and attention to detail.. </p>

              <p><Link to="/Shop" className='btn'>Explore</Link>
              </p>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">

              {/* De product la ba cart page jorao kha */}
                <Link class="product-item" to="/Shop">
                <img src="images/product-1.png" class="img-fluid product-thumbnail" />
                <h3 class="product-title">Nordic Chair</h3>
                <strong class="product-price">Rs18,500.00</strong>

                <span class="icon-cross">
                  <img src="images/cross.svg" class="img-fluid" />
                </span>
                </Link>
            </div>
            {/* <!-- End Column 2 --> */}

            {/* <!-- Start Column 3 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              
              <Link class="product-item" to="/Shop">
                <img src="images/product-2.png" class="img-fluid product-thumbnail" />
                <h3 class="product-title">Kruzo Aero Chair</h3>
                <strong class="product-price">Rs14,000.00</strong>

                <span class="icon-cross">
                  <img src="images/cross.svg" class="img-fluid" />
                </span>
              
              </Link>
            </div>
            {/* <!-- End Column 3 --> */}

            {/* <!-- Start Column 4 --> */}
            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">

              <Link class="product-item" to="/Shop">
                <img src="images/newImg/img-2.png" width="80%" class="img-fluid product-thumbnail" />
                <h3 class="product-title">Sport Cycle</h3>
                <strong class="product-price">Rs80,000.00</strong>

                <span class="icon-cross">
                  <img src="images/cross.svg" class="img-fluid" />
                </span>
            
              </Link>
            </div>
            {/* <!-- End Column 4 --> */}

          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}

      {/* <!-- Start Why Choose Us Section --> */}
      <div class="why-choose-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6">
              

             
              <img src="../images/newImg/img-2.png" alt="" />

            </div>

            <div class="col-lg-5">
              <div class="img-wrap">
                <img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- End Why Choose Us Section --> */}

      {/* <!-- Start We Help Section --> */}
      <div class="we-help-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="imgs-grid">
                <div class="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
                <div class="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
                <div class="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
              </div>
            </div>
            <div class="col-lg-5 ps-lg-5">
              <h2 class="section-title mb-4">We Help You Make Modern Interior Design</h2>
              <p>Shine up your space with our modern interior design services! Our team blends style and practicality to create trendy, comfy homes that match your taste. Let us enhance your place with personalized solutions, making every room chic and cozy.</p>

              <ul class="list-unstyled custom-list my-4">
                <li>Infuse your space with the latest design trends for a modern and stylish look.</li>
                <li>Our designs prioritize both aesthetics and comfort, ensuring a practical yet inviting atmosphere.</li>
                <li>Tailored solutions that reflect your unique preferences, making your home a true reflection of your personality.</li>
                <li>From living spaces to bedrooms, we specialize in transforming each area into a statement of modern elegance and relaxation.</li>
              </ul>
              <p>
                
                <Link className='btn' to="/About">Explore</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End We Help Section --> */}

      {/* <!-- Start Popular Product --> */}
      <div class="popular-product">
        <div class="container">
          <div class="row">

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src="images/newImg/DIR-612_side2.png" alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Flash Fiber</h3>
                  <p>Flash Fiber Wifi: simple, functional, and irresistibly stylish comfort. </p>
                  <p>
                  
                    <Link to="/Shop">Read More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src="images/newImg/airpod-rb.png" alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Airpod</h3>
                  <p>Airpod: Cutting-edge design, ultimate comfort, and contemporary elegance. </p>
                  <p><Link to="/#">Read More</Link></p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img src="images/newImg/watch-rb.png" alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                  <h3>Black Watch</h3>
                  <p>Watch: Supportive comfort, health-conscious design, and productivity-enhancing style. </p>
                  <p><Link to="/#">Read More</Link></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- End Popular Product --> */}
    </>
  )
}

export default Home
