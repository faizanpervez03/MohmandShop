import React from 'react'
import { Link } from 'react-router-dom'







const About = () => {
	return (
		<>



		



				<div class="hero">
					<div class="container">
						<div class="row justify-content-between">
							<div class="col-lg-5">
								<div class="intro-excerpt">
									<h1 className='text-2xl'>About Us</h1>
									<p style={{ fontSize: "17px" }} class="mb-4">Welcome to Mohmand Shop, your premier destination for online shopping! At Mohmand Shop, we pride ourselves on providing a seamless and convenient shopping experience for our valued customers. As an online store, we offer a diverse range of high-quality products to meet your every need.</p>
									<p>
										<Link to="/Shop" class="btn btn-secondary me-2">Shop Now</Link>
										<Link to="/About" class="btn btn-white-outline">Explore</Link>
									</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				{/* <!-- End Hero Section --> */}



				{/* <!-- Start Why Choose Us Section --> */}
				<div class="why-choose-section">
					<div class="container">
						<div class="row justify-content-between align-items-center">
							<div class="col-lg-12">
								<h1 class="section-title text-xl font-bold " >Why Choose Us</h1>
								<p>Choose Mohmand Shop for an unparalleled online shopping journey, where satisfaction is our priority. Trust us to provide a secure, convenient, and enjoyable shopping environment. Happy shopping!.</p>

								<div class="row my-5">
									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="feature">
											<div class="icon">
												<img src="images/truck.svg" alt="Image" class="imf-fluid w-16" />
											</div>
											<h3>Fast &amp; Free Shipping</h3>
											<p>Enjoy lightning-fast and complimentary shipping on all your orders! Get your items delivered swiftly and at no extra cost.</p>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12 ">
										<div class="feature">
											<div class="icon">
												<img src="images/bag.svg" alt="Image" class="imf-fluid w-16" />
											</div>
											<h3>Easy to Shop</h3>
											<p>Simplify your shopping experience with our user-friendly platform. Enjoy easy browsing, selection, and checkout for a hassle-free shopping journey.</p>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="feature">
											<div class="icon">
												<img src="images/support.svg" alt="Image" class="imf-fluid w-16" />
											</div>
											<h3>24/7 Support</h3>
											<p>We're here for you around the clock! Our dedicated support team is available 24/7 to assist you with any questions or concerns, ensuring you have the help you need when you need it.</p>
										</div>
									</div>

									<div class="col-lg-6 col-md-6 col-sm-12">
										<div class="feature">
											<div class="icon">
												<img src="images/return.svg" alt="Image" class="imf-fluid w-16" />
											</div>
											<h3>Hassle Free Returns</h3>
											<p>Shop with confidence knowing that returns are on us. Our hassle-free, no-cost return policy ensures your satisfaction is our top priority</p>
										</div>
									</div>

								</div>
							</div>

							{/* <div class="col-lg-5">
							<div class="img-wrap">
								<img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid" />
							</div>
						</div> */}

						</div>
					</div>


					{/* da ma add ko */}






				</div>
				{/* <!-- End Why Choose Us Section --> */}

				{/* <!-- Start Team Section --> */}
				<div class="untree_co-section">
					<div class="container">

						<div class="row mb-5">
							<div class="col-lg-5 mx-auto text-center">
								<h2 class="section-title">Our Team</h2>
							</div>
						</div>

						<div class="row">

							{/* <!-- Start Column 1 --> */}
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src="images/murtaza.jpg" width="75%" class="img-fluid mb-5" />
								<h3 class>
									<Link to="/#"><span>Ahmad</span> Murtaza</Link>
								</h3>
								<span class="d-block position mb-4">CEO, Founder, Atty.</span>
								<p>Separated they live in.
									Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p class="mb-0">

									<Link to="/#" className='more dark'>Learn More <span class="icon-arrow_forward"></span></Link>
								</p>
							</div>
							{/* <!-- End Column 1 --> */}

							{/* <!-- Start Column 2 --> */}
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src="images/shahid.JPG" width="75%" class="img-fluid mb-5" />

								<h3 class><Link to="/#"><span>Shahid</span> Khan</Link></h3>
								<span class="d-block position mb-4">CEO, Founder, Atty.</span>
								<p>Separated they live in.
									Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p class="mb-0"><Link to="/#" className='more dark'>Learn More <span class="icon-arrow_forward"></span></Link></p>

							</div>
							{/* <!-- End Column 2 --> */}

							{/* <!-- Start Column 3 --> */}
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src="images/person_3.jpg" class="img-fluid mb-5" />
								<h3 clas><Link to="/#"><span>Patrik</span> White</Link></h3>
								<span class="d-block position mb-4">CEO, Founder, Atty.</span>
								<p>Separated they live in.
									Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p class="mb-0"><Link to="/#" className='more dark'>Learn More <span class="icon-arrow_forward"></span></Link></p>
							</div>
							{/* <!-- End Column 3 --> */}

							{/* <!-- Start Column 4 --> */}
							<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
								<img src="images/person_4.jpg" class="img-fluid mb-5" />

								<h3 clas><Link to="/#"><span>Kathryn</span> Ryan</Link></h3>
								<span class="d-block position mb-4">CEO, Founder, Atty.</span>
								<p>Separated they live in.
									Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<p class="mb-0"><Link to="/#" className='more dark'>Learn More <span class="icon-arrow_forward"></span></Link></p>


							</div>
							{/* <!-- End Column 4 --> */}



						</div>
					</div>
				</div>
				{/* <!-- End Team Section --> */}



				{/* <!-- Start Testimonial Slider --> */}
				<div class="testimonial-section before-footer-section">
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
															<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
														</blockquote>

														<div class="author-info">
															<div class="author-pic">
																<img src="images/person-1.png" alt="Maria Jones" class="img-fluid" />
															</div>
															<h3 class="font-weight-bold">Maria Jones</h3>
															<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
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
															<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
														</blockquote>

														<div class="author-info">
															<div class="author-pic">
																<img src="images/person-1.png" alt="Maria Jones" class="img-fluid" />
															</div>
															<h3 class="font-weight-bold">Maria Jones</h3>
															<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
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
															<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
														</blockquote>

														<div class="author-info">
															<div class="author-pic">
																<img src="images/person-1.png" alt="Maria Jones" class="img-fluid" />
															</div>
															<h3 class="font-weight-bold">Maria Jones</h3>
															<span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
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




			</>


			)
}

			export default About
