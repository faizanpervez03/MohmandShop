import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

const Cart = () => {
    
    const getStoredCartItems = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getStoredCartItems);

    
    useEffect(() => {   
        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cart'); 
        }
    }, [cartItems]);

   
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            
            const updatedItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };



    
    const increaseQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

   
    const decreaseQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedItems);
    };

    
    const removeProduct = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);

        

    };

    
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
               
                <div className="total border-top pt-2">
                    <h4>Total: Rs. {getTotal()}</h4>
                </div>

               
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
