import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Checkout = () => {
  const [orderData, setOrderData] = useState({
    user: {
      userId: 1,
      firstName: " ",
      lastName: "",
      address: "",
      city: "",
      phone: "",
    },
    products: [
     {
        productId: 1,
        quantity: 4
     },
     {
        productId: 2,
        quantity: 4  

     }
    ]
  });


  const handInputChange = (e) => {
    const {name, value} = e.target
    setOrderData((prevData) => ({
      ...prevData,
      user: {
        ...prevData.user,
        [name]: value
      },
    }) )
  }
 console.log(orderData);
 
  const handlePlaceOrder = () => {
    console.log("Order Data Submitted:", orderData); 
    
  };



  // ---------------------------------------------------------
  const { cart } = useSelector((state) => state.cartSlice);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 300);
  };
  // ----------------------------------------------------------
  return (
    <>
      <div class="hero mt-5">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt">
                <h1 className="text-3xl">Checkout</h1>
              </div>
            </div>
            <div class="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <h2 class="h3 mb-3 text-black">Billing Details</h2>
              <div class="p-3 p-lg-5 border bg-white">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label htmlFor="c_fname" class="text-black">
                      First Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="c_fname"
                      name="c_fname"
                      value={orderData.user.firstName}
                      onChange={handInputChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label htmlFor="c_lname" class="text-black">
                      Last Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="c_lname"
                      name="c_lname"
                      value={orderData.user.lastName}
                      onChange={handInputChange}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label htmlFor="c_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                      value={orderData.user.address}
                      onChange={handInputChange}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6">
                    <label htmlFor="c_state_country" class="text-black">
                      State / City <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_state_country"
                      name="c_state_country"
                      value={orderData.user.city}
                      onChange={handInputChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label htmlFor="c_postal_zip" class="text-black">
                      Postal / Zip <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_postal_zip"
                      name="c_postal_zip"
                    />
                  </div>
                </div>

                <div class="form-group row mb-5">
                  <div class="col-md-6">
                    <label htmlFor="c_email_address" class="text-black">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_email_address"
                      name="c_email_address"
                    />
                  </div>
                  <div class="col-md-6">
                    <label htmlFor="c_phone" class="text-black">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      class="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                      value={orderData.user.phone}
                      onChange={handInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black">Your Order</h2>
                  <div class="p-3 p-lg-5 border bg-white">
                    <table class="table site-block-order-table mb-5">
                      <thead>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img src={item.imageUrl}
                               alt=""
                               className="w-16 h-16 object-cover"
                               />
                            </td>
                            <td>
                              {item.title}
                            </td>
                            <td >
                              Rs. {item.price}
                            </td>
                           <td className="text-center">
                            {item.quantity}
                           </td>
                            <td >
                              Rs. {item.price * item.quantity}
                            </td>
                            
                          </tr>
                        ))}

                       

                        <tr style={{borderTop:"2px solid black"}}>
                    

                          <td class="text-black font-weight-bold" >
                            <strong>Order Total</strong>
                          </td>
                          <td class="text-black font-weight-bold">
                            <strong>Rs.{getTotal()}</strong>
                          </td>
                        </tr>

                         <tr >
                        <td className=" w-32">
                            <strong>COD Charges</strong>
                        </td>

                        <td>
                            <strong>Rs. 300</strong>
                            
                        </td>
                        </tr>

                      </tbody>
                    </table>

                    <div class="border p-3 mb-3">
                      <h3 class="h6 mb-0">
                        <Link
                          class="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsebank"
                          aria-expanded="false"
                          aria-controls="collapsebank"
                        >
                          COD
                        </Link>
                      </h3>
                    </div>

                

                    <div class="form-group">
                      <Link to="/Thankyou">
                        <button
                          class="btn btn-black btn-lg py-3 btn-block"
                          onClick={handlePlaceOrder}
                        >
                          Place Order
                        </button>
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
  );
};

export default Checkout;
