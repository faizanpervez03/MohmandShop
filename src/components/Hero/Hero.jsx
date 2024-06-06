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
                    {/* <a href="shop.html" class="btn btn-secondary me-2">Shop Now</a> */}
                    <Link to="/Shop" class="btn btn-secondary me-2">Shop Now</Link>
                    <Link to="/About" class="btn btn-white-outline">Explore</Link>


                  </p>
                </div>
              </div>
              <div class="col-lg-5  " >
                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                  {/* <!-- Indicators/dots --> */}
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>

                  {/* <!-- The slideshow/carousel --> */}
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

                    {/* <div class="carousel-item">
                      <img src="images/newImg/img-1.png" alt="" class="d-block w-75" />
                    </div> */}


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
