// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   // Sample data structure for products in the cart
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Product 1',
//       price: 20000,
//       quantity: 1,
//       image: 'images/product-1.png',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       price: 3400,
//       quantity: 1,
//       image: 'images/product-2.png',
//     },
//   ]);

//   // Handle increasing quantity
//   const increaseQuantity = (id) => {
//     const updatedItems = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartItems(updatedItems);
//   };

//   // Handle decreasing quantity
//   const decreaseQuantity = (id) => {
//     const updatedItems = cartItems.map(item =>
//       item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     setCartItems(updatedItems);
//   };

//   // Remove product from cart
//   const removeProduct = (id) => {
//     const updatedItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedItems);
//   };

//   // Calculate the subtotal and total
//   const getTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <>
//       <div className="hero mt-4">
//         <div className="container">
//           <div className="row justify-content-end">
//             <div className="col-lg-5">
//               <div className="intro-excerpt">
//                 <h1 style={{ fontSize: "30px" }}>Cart</h1>
//               </div>
//             </div>
//             <div className='col-lg-7'>

//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="untree_co-section before-footer-section">
//         <div className="container">
//           <div className="row">
//             <form className="col-md-12" method="post">
//               <div className="site-blocks-table">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th className="product-thumbnail">Image</th>
//                       <th className="product-name">Product</th>
//                       <th className="product-price">Price</th>
//                       <th className="product-quantity">Quantity</th>
//                       <th className="product-total">Total</th>
//                       <th className="product-remove">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map(item => (
//                       <tr key={item.id}>
//                         <td className="product-thumbnail">
//                           <img src={item.image} alt="Image" className="img-fluid" />
//                         </td>
//                         <td className="product-name">
//                           <h2 className="h5 text-black">{item.name}</h2>
//                         </td>
//                         <td>Rs.{item.price}</td>
//                         <td>
//                           <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
//                             <div className="input-group-prepend">
//                               <button className="btn btn-outline-black decrease" type="button" onClick={() => decreaseQuantity(item.id)}>&minus;</button>
//                             </div>
//                             <input type="text" className="form-control text-center quantity-amount" value={item.quantity} readOnly />
//                             <div className="input-group-append">
//                               <button className="btn btn-outline-black increase" type="button" onClick={() => increaseQuantity(item.id)}>&#43;</button>
//                             </div>
//                           </div>
//                         </td>
//                         <td>Rs.{item.price * item.quantity}</td>
//                         <td>
//                           <button className="btn btn-black btn-sm" onClick={() => removeProduct(item.id)}>&#10540;</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </form>
//           </div>

//           <div className="row">
//             <div className="col-md-6">
//               <div className="row mb-5">
//                 <div className="col-md-6 mb-3 mb-md-0">
//                   <button className="btn btn-sm btn-block">Update Cart</button>
//                 </div>
//                 <div className="col-md-6">
//                   <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <label className="text-black h4" htmlFor="coupon">Coupon</label>
//                   <p>Enter your coupon code if you have one.</p>
//                 </div>
//                 <div className="col-md-8 mb-3 mb-md-0">
//                   <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
//                 </div>
//                 <div className="col-md-4">
//                   <button className="btn btn-black">Apply Coupon</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 pl-5">
//               <div className="row justify-content-end">
//                 <div className="col-md-7">
//                   <div className="row">
//                     <div className="col-md-12 text-right border-bottom mb-5">
//                       <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <span className="text-black">Subtotal</span>
//                     </div>
//                     <div className="col-md-6 text-right">
//                       <strong className="text-black">Rs.{getTotal()}</strong>
//                     </div>
//                   </div>
//                   <div className="row mb-5">
//                     <div className="col-md-6">
//                       <span className="text-black">Total</span>
//                     </div>
//                     <div className="col-md-6 text-right">
//                       <strong className="text-black">Rs.{getTotal()}</strong>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-12">
//                       <Link to="/Checkout">
//                         <button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons

const Cart = () => {
    // Initialize cartItems from localStorage if available
    const getStoredCartItems = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getStoredCartItems);

    // Update localStorage whenever cartItems change
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cart'); // Clear cart from localStorage if empty
        }
    }, [cartItems]);

    // Add product to the cart if not already exists, or update quantity if exists
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            // If product exists in cart, just update the quantity
            const updatedItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            // If it's a new product, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Handle increasing quantity
    const increaseQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

    // Handle decreasing quantity
    const decreaseQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedItems);
    };

    // Remove product from cart
    const removeProduct = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
    };

    // Calculate the subtotal and total
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mt-40">
            <h2 className='text-lg font-bold'>Shopping Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.title} className="img-fluid" style={{ width: '100px' }} />
                            </td>
                            <td>{item.title}</td>
                            <td>Rs. {item.price}</td>
                            <td className="d-flex align-items-center">
                                <button
                                    className="btn btn-warning btn-sm rounded-circle p-1"
                                    onClick={() => decreaseQuantity(item.id)}
                                    aria-label="Decrease quantity"
                                    style={{ width: '30px', height: '30px', padding: '5px', fontSize: '14px' }}
                                >
                                    <FaMinus />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    className="btn btn-success btn-sm rounded-circle p-1"
                                    onClick={() => increaseQuantity(item.id)}
                                    aria-label="Increase quantity"
                                    style={{ width: '30px', height: '30px', padding: '5px', fontSize: '14px' }}
                                >
                                    <FaPlus />
                                </button>
                            </td>
                            <td>Rs. {item.price * item.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeProduct(item.id)}
                                    aria-label="Remove product"
                                >
                                    <FaTimes />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-footer d-flex justify-content-between align-items-center">
                {/* Cart Total with a border on top */}
                <div className="total border-top pt-2">
                    <h4>Total: Rs. {getTotal()}</h4>
                </div>

                {/* Checkout Button aligned to bottom-right */}
                <Link to="/checkout">
                    <button className="btn btn-primary mt-3" style={{ position: 'absolute', top: '200px', right: '20px' }}>
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
