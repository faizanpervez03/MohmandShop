
/*
import React from 'react'
import { Link } from 'react-router-dom'
import './bootstrap.bundle.min.js'
import './tiny-slider.js'
// import './bootstrap.min.css'




const Hero = () => {
  return (
    <>

      <div>

        <div class="hero "   >
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-7">
                <div class="intro-excerpt">
                  <h1 style={{ fontSize: '38px' }}>The Famous <span clsas="d-block">Shop is now online </span></h1>
                  <p class="mb-4">The most unique imported items is now at your doorstep.</p>
                  <p>

                    <Link to="/Shop" class="btn btn-secondary me-2">Shop Now</Link>
                    <Link to="/About" class="btn btn-white-outline">Explore</Link>


                  </p>
                </div>
              </div>
              <div class="col-lg-5  " >
                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                  
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>


                  <div class="carousel-inner">
                    <div class="carousel-item active ml-5">
                      <img src="images/product-1.png" alt="" class="d-block w-75" />
                    </div>
                    <div class="carousel-item ml-5">
                      <img src="images/product-2.png" alt="" class="d-block w-75" />
                    </div>
                    <div class="carousel-item ml-5">
                      <img src="images/product-3.png" alt="" class="d-block w-75" />
                    </div>


                  </div>


                  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    

    </>
  )
}

export default Hero

*/
import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.bundle.min.js';
import './tiny-slider.js';
import "./style.css"

const Hero = () => {
  return (
    <div className="hero" style={{ padding: '10px 0', backgroundColor: '#e8edec', marginTop:"80px" }}>
      <div className="container-fluid">
        <div className="row">
          {/* Carousel on the Left (col-3) */}
          {/* <div className="col-lg-4">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/product-1.png" alt="Product 1" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <img src="images/product-2.png" alt="Product 2" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <img src="images/product-3.png" alt="Product 3" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div> */}

          {/* Carousel on the Right (col-9) */}
          <div className="col-lg-12">
      <div id="bannerCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: '400px', position: 'relative' }}>
          <div className="carousel-item active" style={{ height: '100%' }}>
            <img 
              src="images/mobile-1.webp" 
              alt="Banner 1" 
              
            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/mobile-2.webp" 
           
            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/mobile-3.webp" 
              alt="Banner 3" 
              
              
            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/bg-1.jpg" 
              alt="Banner 3" 

            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/bg-2.jpg" 
              alt="" 

            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/bg-3.jpg" 
              alt="" 

            />
          </div>
          <div className="carousel-item" style={{ height: '100%' }}>
            <img 
              src="images/Home.png" 
              alt="Banner 3" 
            
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
        </div>
      </div>
    </div >
  );
};

export default Hero;
