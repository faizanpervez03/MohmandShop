import React, { useEffect, useState } from "react";
// dlta da useEffect aw useState me product show kolo dapara kre de ka bya product akhwa k nu dam ba akhwa ko
import "./Style.css";

import { Link } from "react-router-dom";
// import Hero from '../../components/Hero/Hero.jsx'
import Carousel from "../../components/Carousel/Carousel.jsx";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";

// ------------------------------------------------------
import { GetAllProducts } from "../../https/products.http.js";
import Product from "../../components/Product/Product.jsx";
// -----------------------------------------------------

function Home() {
  // -------------------------------------------
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
// ----------------------------------------------
  return (
    <>
      {/* <Hero /> */}

      <Carousel />

      {/* <!-- Start Product Section --> */}
      <div class="product-section">
        <div class="container-fluid bg-slate-200 p-4">
          <div class="row">
            {/* <!-- Start Column 1 --> */}
            <div class="col-md-12 col-lg-4 mb-5 mb-lg-0 mt-5 ">
              <div class="intro-excerpt">
                <h1 style={{ fontSize: "38px" }}>
                  The Famous <span clsas="d-block">Shop is now online </span>
                </h1>
                <p class="mb-4">
                  The most unique imported items is now at your doorstep.
                </p>
                <p>
                  <Link to="/Shop" class="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link to="/About" class="btn btn-white-outline">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- End Column 1 --> */}

            {/* <!-- Start Column 2 --> */}
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div
                id="productCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000" /* Set interval to 1000ms (1 second) */
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images/newImg/img-5.png"
                      alt="Product 1"
                      className="block mx-auto w-3/4"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      src="images/newImg/img-5.png"
                      alt="Product 1"
                      className="block mx-auto w-3/4"
                    />
                  </div>
                </div>
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
          <div class="row justify-content-between ">
            <div class="col-lg-7">
              <img
                src="images/newImg/side-img-2.jpg"
                alt=""
                className="object-fit w-full h-100 rounded-2xl"
              />
            </div>

            <div className="col-lg-5">
              <img
                src="images/newImg/side-img-1.jpg"
                alt="Image"
                class="img-fluid"
                className="object-fit w-full h-100 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* <!-- Popular dynamic products*/}
      <div className="container">
        <div className="untree_co-section product-section before-footer-section">
          <div className="container">
            <h2 className="mb-3 text-4xl">Popular Products</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  object-fit  ">
              {products.length > 0 ? (
                products.map((item) => (
                  <Product ProductDetails={item} key={item._id} />
                )) // Use _id or another unique identifier for key
              ) : (
                <h1
                  style={{ color: "#208f89" }}
                  className="w-96 text-lg font-bold bg-red-200 border border-red-400 rounded-md p-4 shadow-md  "
                >
                  No Products Available
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
        {/* popular product end  */}
      {/* ----------------------------------------------------------------------- */}

      {/* <!-- Start We Help Section --> */}
      <div class="we-help-section">
        <div class="container"></div>
      </div>
      {/* <!-- End We Help Section --> */}

      {/* <!-- Start Popular Product --> */}
      <div class="popular-product">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/newImg/DIR-612_side2.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Flash Fiber</h3>
                  <p>
                    Flash Fiber Wifi: simple, functional, and irresistibly
                    stylish comfort.{" "}
                  </p>
                  <p>
                    <Link to="/Shop">Read More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/newImg/airpod-rb.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Airpod</h3>
                  <p>
                    Airpod: Cutting-edge design, ultimate comfort, and
                    contemporary elegance.{" "}
                  </p>
                  <p>
                    <Link to="/#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail">
                  <img
                    src="images/newImg/watch-rb.png"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
                <div class="pt-3">
                  <h3>Black Watch</h3>
                  <p>
                    Watch: Supportive comfort, health-conscious design, and
                    productivity-enhancing style.{" "}
                  </p>
                  <p>
                    <Link to="/#">Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popular Product --> */}
    </>
  );
}

export default Home;
