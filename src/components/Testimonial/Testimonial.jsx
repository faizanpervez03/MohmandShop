import React from 'react'
import './bootstrap.bundle.min.js'
// import './bootstrap.min.css'
import './tiny.slider.js'
import './custom.js'
const Testimonial = () => {
  return (
    <>
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
    </>
  )
}

export default Testimonial
