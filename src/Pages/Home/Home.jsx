import React from 'react'
import './Style.css'


import { Link } from 'react-router-dom'
// import Hero from '../../components/Hero/Hero.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel.jsx'



function Home() {
  return (
    <>

    {/* <Hero /> */}

<Carousel />

      {/* <!-- Start Product Section --> */}
      <div class="product-section">
        <div class="container">
          <div class="row">

            {/* <!-- Start Column 1 --> */}
            <div class="col-md-12 col-lg-4 mb-5 mb-lg-0 mt-5">
              <div class="intro-excerpt">
                <h1 style={{ fontSize: '38px' }}>The Famous <span clsas="d-block">Shop is now online </span></h1>
                <p class="mb-4">The most unique imported items is now at your doorstep.</p>
                <p>

                  <Link to="/Shop" class="btn btn-secondary me-2">Shop Now</Link>
                  <Link to="/About" class="btn btn-white-outline">Explore</Link>


                </p>
              </div>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div  className="col-lg-4"> 

            </div>
            <div className="col-lg-4">
              <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/product-1.png" alt="Product 1" className="d-block w-75"   />
                  </div>
                  <div className="carousel-item">
                    <img src="images/product-2.png" alt="Product 2" className="d-block w-75"  />
                  </div>
                  <div className="carousel-item">
                    <img src="images/product-3.png" alt="Product 3" className="d-block w-75" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
            {/* <!-- End Column 4 --> */}

          </div>
        </div>
      </div>
      {/* <!-- End Product Section --> */}
      <hr />
      <ProductCarousel />
      <hr />
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
