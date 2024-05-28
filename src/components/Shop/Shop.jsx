import React from 'react'

const Shop = () => {
  return (
    <>

{/* <!-- Start Header/Navigation --> */}
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div class="container">
				<a class="navbar-brand" href="index.html">Mohmand Shop<span>.</span></a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item ">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li class="active"><a class="nav-link" href="shop.html">Shop</a></li>
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
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		

		<div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">
				<h2 class="mb-5">Usefull Items</h2>
		      		{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Nordic-chair-1/checkout.html">
							<img src="images/product-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">Rs.20,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Nordic-chair-2/checkout.html">
							<img src="images/product-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">Rs.15,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Kruzo-chair-3/checkout.html">
							<img src="images/product-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">Rs.10,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5 mt-4">
						<a class="product-item" href="products-detail-page/Nordic-chair-4/checkout.html	">
							<img src="images/sofa.png"  class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">Rs.22,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}


					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Cycle-5/checkout.html">
							<img src="images/newImg/img-4.png" class="img-fluid product-thumbnail"/>
                            							<h3 class="product-title">CF Bike Kids Cycle</h3>
							<strong class="product-price">Rs.14,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Cycle-6/checkout.html">
							<img src="images/newImg/img-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">CF Bike Kids Cycle Red</h3>
							<strong class="product-price">Rs.15,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Cycle-7/checkout.html">
							<img src="images/newImg/img-5.png" width="90%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Fuji Nevada 1.9</h3>
							<strong class="product-price">Rs.173,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Cycle-8/checkout.html">
							<img src="images/newImg/img-1.png" width="90%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Eagle Cycle</h3>
							<strong class="product-price">Rs.47,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}


					
					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Laptop-9/checkout.html">
							<img src="images/newImg/leptop.jpg" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Hp Laptop</h3>
							<strong class="product-price">Rs 127,000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5 ">
						<a class="product-item " href="products-detail-page/Wifi-10/checkout.html">
							<img src="images/newImg/DIR-612_side2.png" width="72%" class="img-fluid product-thumbnail "/>
							<h3 class="product-title">PTCL Wifi Device</h3>
							<strong class="product-price">Rs.3000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/SSD-11/checkout.html">
							<img src="images/newImg/product6.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">SSD</h3>
							<strong class="product-price">Rs.5000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Ram-12/checkout.html">
							<img src="images/newImg/product7.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">DDR 4GB RAM</h3>
							<strong class="product-price">$Rs.4000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}

					
					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/shoes-13/checkout.html">
							<img src="images/newImg/shoes-1.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Horn Jungle Shoes</h3>
							<strong class="product-price">Rs.6400</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/shoes-14/checkout.html">
							<img src="images/newImg/shoes-2.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Steel Toe</h3>
							<strong class="product-price">Rs.8400</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Shoes-15/checkout.html">
							<img src="images/newImg/shoes-3.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Leather Soft Sole</h3>
							<strong class="product-price">Rs.4400</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/shoes-16/checkout.html">
							<img src="images/newImg/shoes-4.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Yitu Men</h3>
							<strong class="product-price">Rs.6000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}

					
					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/Maphie-powerbank/checkout.html">
							<img src="images/newImg/powerbank.webp" width="80%"  class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Maphie Super PowerBank</h3>
							<strong class="product-price">Rs.5999</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot product-17/checkout.html">
							<img src="images/newImg/ElectricInsert.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Electric Insect</h3>
							<strong class="product-price">Rs.1199</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot product-18/checkout.html">
							<img src="images/newImg/suncharge.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Sun Charge Pro</h3>
							<strong class="product-price">Rs.2000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-19/checkout.html">
							<img src="images/newImg/shimmerLite.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Shimmer Lite Luxe</h3>
							<strong class="product-price">Rs.2129</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}



					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-20/checkout.html">
							<img src="images/newImg/massage gun.jpg" width="80%"  class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Sylphim Massage Gun</h3>
							<strong class="product-price">Rs.6000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-21/checkout.html">
							<img src="images/newImg/remintin.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Reminton 4800W</h3>
							<strong class="product-price">Rs.3000</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-22/checkout.html">
							<img src="images/newImg/flyci.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Flyco Hair Straightner</h3>
							<strong class="product-price">Rs.3199</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-23/checkout.html">
							<img src="images/newImg/hair machine.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Lot Hair Clipper</h3>
							<strong class="product-price">Rs.3200</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}



					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-24/checkout.html">
							<img src="images/newImg/airpod.jpg" width="80%"  class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Apple Airpod Pro 2</h3>
							<strong class="product-price">Rs.4500</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-25/checkout.html">
							<img src="images/newImg/green laser.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">VerdeScop Green Laser</h3>
							<strong class="product-price">Rs.2080</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-26/checkout.html">
							<img src="images/newImg/watch.png" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Adventure Pro Watch</h3>
							<strong class="product-price">Rs.4999</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="products-detail-page/hot-product-27/checkout.html">
							<img src="images/newImg/solar sensor.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Solar Sensor Light</h3>
							<strong class="product-price">Rs.2499</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}



		      	</div>
					{/* <!-- Solar Rechargible section --> */}
				
				  <div class="container">
					<div class="row">
						<h2 class="mb-5">Solar Rechargeable</h2>

						{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="products-detail-page/solar-rechargeable-28/checkout.html">
							<img src="images/newImg/solar Rechargable/solarLuxe.jpg" width="80%"  class="img-fluid product-thumbnail"/>
							<h3 class="product-title">SolarLuxe BeamBank</h3>
							<strong class="product-price">Rs.2999</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="products-detail-page/solar-rechargeable-29/checkout.html">
							<img src="images/newImg/solar Rechargable/solarGlow.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">SolarGlow PowerBeam</h3>
							<strong class="product-price">Rs.3399</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="products-detail-page/solar-rechargeable-30/checkout.html">
							<img src="images/newImg/solar Rechargable/illumicharge.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">IllumiCharge SolarBeam</h3>
							<strong class="product-price">Rs.3599</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="products-detail-page/solar-rechargeable-31/checkout.html">
							<img src="images/newImg/solar Rechargable/solarbeam.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Solar Sensor Light</h3>
							<strong class="product-price">Rs.3499</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}
					{/* <!-- Start Column 5 --> */}
					<div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="products-detail-page/solar-rechargeable-32/checkout.html">
							<img src="images/newImg/solar Rechargable/ultimate.jpg" width="80%" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ultimate 100W Solar Light</h3>
							<strong class="product-price">Rs.4999</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 5 --> */}

					{/* <!-- Start Column 6 --> */}
					{/* <!-- <div class="col-12 col-md-2 col-lg-2 mb-5">
						<a class="product-item" href="#">
							<img src="images/newImg/solar sensor.jpg" width="80%" class="img-fluid product-thumbnail">
							<h3 class="product-title">Solar Sensor Light</h3>
							<strong class="product-price">Rs.2499</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid">
							</span>
						</a>
					</div> --> */}
					{/* <!-- End Column 6 --> */}


					</div>
				</div>
				
		    </div>
		</div>


		{/* <!-- Start Footer Section --> */}
		<footer class="footer-section">
			<div class="container relative">

				<div class="sofa-img">
					<img src="images/sofa.png" alt="Image" class="img-fluid"/>
				</div>

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
							<h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" class="row g-3">
								<div class="col-auto">
									<input type="text" class="form-control" placeholder="Enter your name"/>
								</div>
								<div class="col-auto">
									<input type="email" class="form-control" placeholder="Enter your email"/>
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
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Mohmand Shop<span>.</span></a></div>
						<p class="mb-4">We pride ourselves on a track record of unmatched quality, reliability, and customer satisfaction. Our commitment to innovation and customer-centric solutions sets us apart, making us the ideal choice for your needs. When you choose us, you're choosing a partner dedicated to your success.</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div class="col-lg-8">
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

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
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
		{/* <!-- End Footer Section -->	 */}


    </>
  )
}

export default Shop
