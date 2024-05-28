import React from 'react'
import './Style.css'
import './Tiny.css'
import './Tiny-slider.jsx'
function Home() {
  return (
    <>
      <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">



<div class="container">
  <a class="navbar-brand" href="index.html">Mohmand Shop Here is new changes<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle=	"collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarsFurni">
    
    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">Home</a>
      </li>
      
      <li><a className="nav-link" href="shop.html">Shop</a></li>
      <li><a class="nav-link" href="about.html">About us</a></li>
      <li><a class="nav-link" href="services.html">Services</a></li>
      <li><a class="nav-link" href="blog.html">Blog</a></li>
      <li><a class="nav-link" href="contact.html">Contact us</a></li>
    </ul>

    <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a class="nav-link" href="#"><img src="images/user.svg"/></a></li>
      <li><a class="nav-link" href="cart.html"><img src="images/cart.svg"/></a></li>
    </ul>
  </div>
</div>
  
</nav>
{/* <!-- End Header/Navigation --> */}

{/* <!-- Start Hero Section --> */}
<div class="hero">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-7">
        <div class="intro-excerpt">
          <h1 style={{fontSize: '38px'}}>The Famous <span clsas="d-block">Shop is now online </span></h1>
          <p class="mb-4">The most unique imported items is now at your doorstep.</p>
          <p><a href="shop.html" class="btn btn-secondary me-2">Shop Now</a>
            <a href="about.html" class="btn btn-white-outline">Explore</a></p>
        </div>
      </div>
      <div class="col-lg-5">
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

          {/* <!-- Indicators/dots --> */}
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>
          
          {/* <!-- The slideshow/carousel --> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="images/product-1.png" alt="" class="d-block w-75"/>
            </div>
            <div class="carousel-item">
            <img src="images/product-2.png" alt="" class="d-block w-75"/>
            </div>
            <div class="carousel-item">
            <img src="images/product-3.png" alt="" class="d-block w-75"/>
            </div>

            <div class="carousel-item">
            <img src="images/newImg/img-1.png" alt="" class="d-block w-75"/>
            </div>

            
          </div>
          
          {/* <!-- Left and right controls/icons --> */}
           {/* <!-- <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button> --> */}
          </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- End Hero Section --> */}

{/* <!-- Start Product Section --> */}
<div class="product-section">
<div class="container">
  <div class="row">

    {/* <!-- Start Column 1 --> */}
    <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
      <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
      <p class="mb-4">Exquisitely crafted with premium materials, this product is a testament to quality and attention to detail.. </p>
      <p><a href="shop.html" class="btn">Explore</a></p>
    </div> 
    {/* <!-- End Column 1 --> */}

    {/* <!-- Start Column 2 --> */}
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="images/product-1.png" class="img-fluid product-thumbnail"/>
        <h3 class="product-title">Nordic Chair</h3>
        <strong class="product-price">Rs18,500.00</strong>

        <span class="icon-cross">
          <img src="images/cross.svg" class="img-fluid"/>
        </span>
      </a>
    </div> 
    {/* <!-- End Column 2 --> */}

    {/* <!-- Start Column 3 --> */}
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="images/product-2.png" class="img-fluid product-thumbnail"/>
        <h3 class="product-title">Kruzo Aero Chair</h3>
        <strong class="product-price">Rs14,000.00</strong>

        <span class="icon-cross">
          <img src="images/cross.svg" class="img-fluid"/>
        </span>
      </a>
    </div>
    {/* <!-- End Column 3 --> */}

    {/* <!-- Start Column 4 --> */}
    <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <a class="product-item" href="cart.html">
        <img src="images/newImg/img-2.png" width="80%" class="img-fluid product-thumbnail"/>
        <h3 class="product-title">Sport Cycle</h3>
        <strong class="product-price">Rs80,000.00</strong>

        <span class="icon-cross">
          <img src="images/cross.svg" class="img-fluid"/>
        </span>
      </a>
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
      <h2 class="section-title">Why Choose Us</h2>
      <p>We pride ourselves on a track record of unmatched quality, reliability, and customer satisfaction. Our commitment to innovation and customer-centric solutions sets us apart, making us the ideal choice for your needs. When you choose us, you're choosing a partner dedicated to your success..</p>

      <div class="row my-5">
        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="images/truck.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>
              Enjoy lightning-fast and complimentary shipping on all your orders! Get your items delivered swiftly and at no extra cost.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="images/bag.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>Easy to Shop</h3>
            <p>Simplify your shopping experience with our user-friendly platform. Enjoy easy browsing, selection, and checkout for a hassle-free shopping journey.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="images/support.svg" alt="Image" class="imf-fluid"/>
            </div>
            <h3>24/7 Support</h3>
            <p>We're here for you around the clock! Our dedicated support team is available 24/7 to assist you with any questions or concerns, ensuring you have the help you need when you need it.</p>
          </div>
        </div>

        <div class="col-6 col-md-6">
          <div class="feature">
            <div class="icon">
              <img src="images/return.svg" alt="Image" class="imf-fluid" />
            </div>
            <h3>Hassle Free Returns</h3>
            <p>Shop with confidence knowing that returns are on us. Our hassle-free, no-cost return policy ensures your satisfaction is our top priority.</p>
          </div>
        </div>

      </div>
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
      <p><a herf="#" class="btn">Explore</a></p>
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
          <img src="images/product-1.png" alt="Image" class="img-fluid" />
        </div>
        <div class="pt-3">
          <h3>Nordic Chair</h3>
          <p>Elegantly minimalist Nordic chair: simple, functional, and irresistibly stylish comfort. </p>
          <p><a href="#">Read More</a></p>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
      <div class="product-item-sm d-flex">
        <div class="thumbnail">
          <img src="images/product-2.png" alt="Image" class="img-fluid"/>
        </div>
        <div class="pt-3">
          <h3>Kruzo Aero Chair</h3>
          <p>Kruzo Aero Chair: Cutting-edge design, ultimate comfort, and contemporary elegance. </p>
          <p><a href="#">Read More</a></p>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
      <div class="product-item-sm d-flex">
        <div class="thumbnail">
          <img src="images/product-3.png" alt="Image" class="img-fluid" />
        </div>
        <div class="pt-3">
          <h3>Ergonomic Chair</h3>
          <p>Ergonomic chair: Supportive comfort, health-conscious design, and productivity-enhancing style. </p>
          <p><a href="#">Read More</a></p>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
{/* <!-- End Popular Product --> */}

{/* <!-- Start Testimonial Slider --> */}
<div class="testimonial-section">
<div class="container">
  <div class="row">
    <div class="col-lg-7 mx-auto text-center">
      <h2 class="section-title">Testimonials</h2>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-lg-12">
      <div class="testimonial-slider-wrap text-center">

        <div id="testimonial-nav">
          <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
          <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
        </div>

        <div class="testimonial-slider">
          
          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;I'm thrilled with the seamless shipping and the quality of products! The items arrived promptly, well-packaged, and exceeded my expectations. Your commitment to excellence truly shines through. Thank you for transforming my space with such exquisite pieces!.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="images/person-1.png" alt="Maria Jones" class="img-fluid" />
                    </div>
                    <h3 class="font-weight-bold">Maria</h3>
                    <span class="position d-block mb-3">CEO, Co-Founder, Infos Inc.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* <!-- END item --> */}

          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;I'm thrilled with the seamless shipping and the quality of products! The items arrived promptly, well-packaged, and exceeded my expectations. Your commitment to excellence truly shines through. Thank you for transforming my space with such exquisite pieces!.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="images/shahid.JPG" alt="" class="img-fluid" />
                    </div>
                    <h3 class="font-weight-bold">Shahid Khan</h3>
                    <span class="position d-block mb-3">CEO, Shahid Digitals.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* <!-- END item --> */}

          <div class="item">
            <div class="row justify-content-center">
              <div class="col-lg-8 mx-auto">

                <div class="testimonial-block text-center">
                  <blockquote class="mb-5">
                    <p>&ldquo;I'm thrilled with the seamless shipping and the quality of products! The items arrived promptly, well-packaged, and exceeded my expectations. Your commitment to excellence truly shines through. Thank you for transforming my space with such exquisite pieces!.&rdquo;</p>
                  </blockquote>

                  <div class="author-info">
                    <div class="author-pic">
                      <img src="images/murtaza.jpg" height="2px" width="70px" alt="Maria Jones" class="img-fluid" />
                    </div>
                    <h3 class="font-weight-bold">Ahmad Murtaza</h3>
                    <span class="position d-block mb-3">CEO, Co-Founder, Digital World.</span>
                  </div>
                </div>

              </div>
            </div>
          </div> 
          {/* <!-- END item --> */}

        </div>

      </div>
    </div>
  </div>
</div>
</div>
{/* <!-- End Testimonial Slider --> */}

{/* <!-- Start Blog Section --> */}
<div class="blog-section">
<div class="container">
  <div class="row mb-5">
    <div class="col-md-6">
      <h2 class="section-title">Recent Blog</h2>
    </div>
    <div class="col-md-6 text-start text-md-end">
      <a href="blog.html" class="more">View All Posts</a>
    </div>
  </div>

  <div class="row">

    <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
      <div class="post-entry">
        <a href="#" class="post-thumbnail"><img src="images/post-1.jpg" alt="Image" class="img-fluid" /></a>
        <div class="post-content-entry">
          <h3><a href="#">First Time Home Owner Ideas</a></h3>
          <div class="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
      <div class="post-entry">
        <a href="#" class="post-thumbnail"><img src="images/post-2.jpg" alt="Image" class="img-fluid" /></a>
        <div class="post-content-entry">
          <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
          <div class="meta">
            <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
      <div class="post-entry">
        <a href="#" class="post-thumbnail"><img src="images/post-3.jpg" alt="Image" class="img-fluid" /></a>
        <div class="post-content-entry">
          <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
          <div class="meta">
            <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
{/* <!-- End Blog Section -->	 */}

{/* <!-- Start Footer Section --> */}
<footer class="footer-section">
<div class="container relative">

  <div class="sofa-img">
    <img src="images/sofa.png" alt="Image" class="img-fluid" />
  </div>

  <div class="row">
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
  </div>

  <div class="row g-5 mb-5">
    <div class="col-lg-6">
      <div class="mb-4 mt-5 footer-logo-wrap"><a href="#" class="footer-logo">Mohmand Shop<span>.</span></a></div>
       <p class="mb-4">We pride ourselves on a track record of unmatched quality, reliability, and customer satisfaction. Our commitment to innovation and customer-centric solutions sets us apart, making us the ideal choice for your needs. When you choose us, you're choosing a partner dedicated to your success.</p>

      <ul class="list-unstyled custom-social">
        <li><a target="_blank" href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
      </ul>
    </div>

    <div class="col-lg-6">
      <div class="row links-wrap">
        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact us</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Support</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </div>

  </div>

  <div class="border-top copyright">
    <div class="row pt-4">
      <div class="col-lg-6">
        <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Mohmand Shop <br /> Design And Develped by <a href="https://faizanpervez.netlify.app/" target="_blank">Faizan Pervez</a>
      </p>
      </div>

      <div class="col-lg-6 text-center text-lg-end">
        <ul class="list-unstyled d-inline-flex ms-auto">
          <li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

    </div>
  </div>

</div>
</footer>

    </>
  )
}

export default Home
