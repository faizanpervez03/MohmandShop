// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { usePlaceorderMutation } from "../../store/services/orderService";

// const Checkout = () => {

//   const { cart } = useSelector((state) => state.cartSlice);

//   const [cartProducts, setCartProducts] = useState ([])

//   const [orderData, setOrderData] = useState({
//     user: {
//       userId: 1,
//       firstName: " ",
//       lastName: "",
//       address: "",
//       city: "",
//       phone: "",
//     },
//     products: cart
//   });

//   const handInputChange = (e) => {
//     const {name, value} = e.target
//     setOrderData((prevData) => ({
//       ...prevData,
//       user: {
//         ...prevData.user,
//         [name]: value
//       },
//     }) )
//   }
//  console.log(orderData);

//  const [ placeOrderFunc, {isLoading} ] =  usePlaceorderMutation()

//   const handlePlaceOrder = () => {
//     console.log("Order Data Submitted:", orderData);
//     placeOrderFunc(cartProducts).then(res => {
//       console.log(res);

//     }).catch(error => {
//       console.log(error);

//     })

//   };

//   // ---------------------------------------------------------

//   const getTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 300);
//   };
//   // ----------------------------------------------------------

//   useEffect(() => {
//     const filterProducts = cart.map(product => (
//       {id: product._id, quantities: product.quantity}
//     ))
//     setCartProducts(filterProducts)
//   }, [cart])
//   console.log(cartProducts)

//   return (
//     <>
//       <div class="hero mt-5">
//         <div class="container">
//           <div class="row justify-content-between">
//             <div class="col-lg-5">
//               <div class="intro-excerpt">
//                 <h1 className="text-3xl">Checkout</h1>
//               </div>
//             </div>
//             <div class="col-lg-7"></div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- End Hero Section --> */}

//       <div class="untree_co-section">
//         <div class="container">
//           <div class="row">
//             <div class="col-md-6 mb-5 mb-md-0">
//               <h2 class="h3 mb-3 text-black">Billing Details</h2>
//               <div class="p-3 p-lg-5 border bg-white">
//                 <div class="form-group row">
//                   <div class="col-md-6">
//                     <label htmlFor="c_fname" class="text-black">
//                       First Name <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       class="form-control"
//                       id="c_fname"
//                       name="firstName"
//                       value={orderData.user.firstName}
//                       onChange={handInputChange}
//                     />
//                   </div>
//                   <div class="col-md-6">
//                     <label htmlFor="c_lname" class="text-black">
//                       Last Name <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       class="form-control"
//                       id="c_lname"
//                       name="lastName"
//                       value={orderData.user.lastName}
//                       onChange={handInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div class="form-group row">
//                   <div class="col-md-12">
//                     <label htmlFor="c_address" class="text-black">
//                       Address <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       className="form-control"
//                       id="c_address"
//                       name="address"
//                       placeholder="Street address"
//                       value={orderData.user.address}
//                       onChange={handInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div class="form-group row">
//                   <div class="col-md-6">
//                     <label htmlFor="c_state_country" class="text-black">
//                       State / City <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="c_state_country"
//                       name="city"
//                       value={orderData.user.city}
//                       onChange={handInputChange}
//                     />
//                   </div>
//                   <div class="col-md-6">
//                     <label htmlFor="c_postal_zip" class="text-black">
//                       Postal / Zip <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="c_postal_zip"
//                       name="c_postal_zip"
//                     />
//                   </div>
//                 </div>

//                 <div class="form-group row mb-5">
//                   <div class="col-md-6">
//                     <label htmlFor="c_email_address" class="text-black">
//                       Email Address <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="c_email_address"
//                       name="c_email_address"
//                     />
//                   </div>
//                   <div class="col-md-6">
//                     <label htmlFor="c_phone" class="text-black">
//                       Phone <span class="text-danger">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       class="form-control"
//                       id="c_phone"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={orderData.user.phone}
//                       onChange={handInputChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col-md-6">
//               <div class="row mb-5">
//                 <div class="col-md-12">
//                   <h2 class="h3 mb-3 text-black">Your Order</h2>
//                   <div class="p-3 p-lg-5 border bg-white">
//                     <table class="table site-block-order-table mb-5">
//                       <thead>
//                         <th>Products</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Total</th>
//                       </thead>
//                       <tbody>
//                         {cart.map((item) => (
//                           <tr key={item.id}>
//                             <td>
//                               <img src={item.imageUrl}
//                                alt=""
//                                className="w-16 h-16 object-cover"
//                                />
//                             </td>
//                             <td>
//                               {item.title.slice(0, 8)} {
//                                 item.title.length > 8 ? "..." : ""
//                               }
//                             </td>
//                             <td >
//                               Rs. {item.price}
//                             </td>
//                            <td className="text-center">
//                             {item.quantity}
//                            </td>
//                             <td >
//                               Rs. {item.price * item.quantity}
//                             </td>

//                           </tr>
//                         ))}

//                         <tr style={{borderTop:"2px solid black"}}>

//                           <td class="text-black font-weight-bold" >
//                             <strong>Order Total</strong>
//                           </td>
//                           <td class="text-black font-weight-bold">
//                             <strong>Rs.{getTotal()}</strong>
//                           </td>
//                         </tr>

//                          <tr >
//                         <td className=" w-32">
//                             <strong>COD Charges</strong>
//                         </td>

//                         <td>
//                             <strong>Rs. 300</strong>

//                         </td>
//                         </tr>

//                       </tbody>
//                     </table>

//                     <div class="border p-3 mb-3">
//                       <h3 class="h6 mb-0">
//                         <Link
//                           class="d-block"
//                           data-bs-toggle="collapse"
//                           href="#collapsebank"
//                           aria-expanded="false"
//                           aria-controls="collapsebank"
//                         >
//                           COD
//                         </Link>
//                       </h3>
//                     </div>

//                     <div class="form-group">

//                         <button
//                           class="btn btn-black btn-lg py-3 btn-block"
//                           onClick={handlePlaceOrder}
//                           disabled = {isLoading ? true : false}
//                         >
//                           {isLoading ? "Loading" : "Place Order"}
//                         </button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- </form> --> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkout;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePlaceorderMutation } from "../../store/services/orderService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  const [cartProducts, setCartProducts] = useState([]);

  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    user: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      phone: "",
      zipcode: "",
      email: "",
    },
    products: [],
  });

  const [placeOrderFunc, { isLoading }] = usePlaceorderMutation();

  // Handle input changes for user details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      user: {
        ...prevData.user,
        [name]: value,
      },
    }));
  };

  // --------------------------------
  // Handle place order button click
  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    try {
      const orderPayload = {
        ...orderData,
        products: cartProducts,
      };

      console.log("Order Data Submitted:", orderPayload);

      const response = await placeOrderFunc(orderPayload).unwrap();
      console.log("Order placed successfully:", response);

      toast.success("Order placed successfully!");

      setOrderData({
        // da form reset kolo dapara
        user: {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          phone: "",
          zipcode: "",
          email: "",
        },
      });

      // dlta ke cart hm reset she
      // setCartProducts([]);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again."); // Use toast for error as well
    }

    navigate("/Shop");
  };

  // ---------------------------------------------------

  // Calculate total price including COD charges
  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      300
    ); // 300 is COD charge
  };

  // Update cartProducts whenever the cart changes
  useEffect(() => {
    const filterProducts = cart.map((product) => ({
      productId: product._id, // Ensure this matches your backend schema
      quantity: product.quantity,
    }));
    setCartProducts(filterProducts);
  }, [cart]);

  return (
    <>
      <div className="hero mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="text-3xl">Checkout</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <form onSubmit={handlePlaceOrder}>
                <div className="p-3 p-lg-5 border bg-white">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_fname"
                        name="firstName"
                        value={orderData.user.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_lname"
                        name="lastName"
                        value={orderData.user.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_address"
                        name="address"
                        placeholder="Street address"
                        value={orderData.user.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">
                        State / City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_state_country"
                        name="city"
                        value={orderData.user.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_postal_zip" className="text-black">
                        Postal / Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_postal_zip"
                        name="zipcode"
                        value={orderData.user.zipcode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label htmlFor="c_email_address" className="text-black">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="c_email_address"
                        name="email"
                        value={orderData.user.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="c_phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={orderData.user.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>


                </div>
                <button
                        className="btn btn-black btn-lg py-3 btn-block"
                        type="submit"
                        disabled={isLoading}
                        
                        
                      >
                        {isLoading ? "Loading..." : "Place Order"}
                      </button>
              </form>
            </div>

            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img
                                src={item.imageUrl}
                                alt=""
                                className="w-16 h-16 object-cover"
                              />
                            </td>
                            <td>
                              {item.title.slice(0, 8)}
                              {item.title.length > 8 ? "..." : ""}
                            </td>
                            <td>Rs. {item.price}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td>Rs. {item.price * item.quantity}</td>
                          </tr>
                        ))}

                        <tr style={{ borderTop: "2px solid black" }}>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong>Rs. {getTotal()}</strong>
                          </td>
                        </tr>

                        <tr>
                          <td className="w-32">
                            <strong>COD Charges</strong>
                          </td>
                          <td>
                            <strong>Rs. 300</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group">
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
