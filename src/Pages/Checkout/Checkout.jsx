import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <div class="hero mt-5">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1 className='text-3xl'>Checkout</h1>
                            </div>
                        </div>
                        <div class="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div class="untree_co-section">
                <div class="container">
                    {/* <div class="row mb-5">
                        <div class="col-md-12">
                            <div class="border p-4 rounded" role="alert">
                                Returning customer? <a href="#">Click here</a> to login
                            </div>
                        </div>
                    </div> */}
                    <div class="row">
                        <div class="col-md-6 mb-5 mb-md-0">
                            <h2 class="h3 mb-3 text-black"  >Billing Details</h2>
                            <div class="p-3 p-lg-5 border bg-white">
                                
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                                        <input type="text" required class="form-control" id="c_fname" name="c_fname" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                                        <input type="text" required class="form-control" id="c_lname" name="c_lname" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label for="c_address" class="text-black">Address <span class="text-danger">*</span></label>
                                        <input type="text" required className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="c_state_country" class="text-black">State / City <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="c_state_country" name="c_state_country" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="c_postal_zip" class="text-black">Postal / Zip <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="c_postal_zip" name="c_postal_zip" />
                                    </div>
                                </div>

                                <div class="form-group row mb-5">
                                    <div class="col-md-6">
                                        <label for="c_email_address" class="text-black">Email Address <span class="text-danger">*</span></label>
                                        <input type="text"  class="form-control" id="c_email_address" name="c_email_address" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="c_phone" class="text-black">Phone <span class="text-danger">*</span></label>
                                        <input type="text" required class="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                        <div class="col-md-6">

                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <h2 class="h3 mb-3 text-black">Coupon Code</h2>
                                    <div class="p-3 p-lg-5 border bg-white">

                                        <label for="c_code" class="text-black mb-3">Enter your coupon code if you have one</label>
                                        <div class="input-group w-75 couponcode-wrap">
                                            <input type="text" class="form-control me-2" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn btn-black btn-sm" type="button" id="button-addon2">Apply</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <h2 class="h3 mb-3 text-black">Your Order</h2>
                                    <div class="p-3 p-lg-5 border bg-white">
                                        <table class="table site-block-order-table mb-5">
                                            <thead>
                                                <th>Product</th>
                                                <th>Total</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Top Up Chair Nordic <strong class="mx-2">x</strong> 1</td>
                                                    <td>Rs.2000</td>
                                                </tr>
                                                <tr>
                                                    <td>New chair <strong class="mx-2">x</strong>   1</td>
                                                    <td>Rs.3400</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                    <td class="text-black">Rs.2000</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                    <td class="text-black font-weight-bold"><strong>Rs.3400</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="border p-3 mb-3">
                                            <h3 class="h6 mb-0">
                                                <Link class="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</Link>
                                            </h3>

                                            <div class="collapse" id="collapsebank">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-3 mb-3">
                                            <h3 class="h6 mb-0">
                                                <Link class="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</Link>
                                            </h3>


                                            <div class="collapse" id="collapsecheque">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-3 mb-5">
                                            <h3 class="h6 mb-0">
                                                <Link class="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</Link>


                                            </h3>

                                            <div class="collapse" id="collapsepaypal">
                                                <div class="py-2">
                                                    <p class="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <Link to="/Thankyou">
                                            <button class="btn btn-black btn-lg py-3 btn-block" onclick="window.location='thankyou.html'">Place Order</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- </form> --> */}
                </div>
            </div>
        </>
    )
}

export default Checkout
