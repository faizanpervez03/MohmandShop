import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { decQuantity, deleteProduct, incQuantity } from '../../store/slices/cartSlice';

const Cart = () => {
    
    const getStoredCartItems = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getStoredCartItems);

    // --------------------------------------------

    const { cart } = useSelector((state)=> state.cartSlice )
    
    

    // ----------------------------------------------

    const dispatch = useDispatch()

    
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
        // const updatedItems = cartItems.map(item =>
        //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        // );
        // setCartItems(updatedItems);
        dispatch(incQuantity(id))
    };

   
    const decreaseQuantity = (id) => {
        // const updatedItems = cartItems.map(item =>
        //     item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        // );
        // setCartItems(updatedItems);

        dispatch(decQuantity(id))


    };

    
    const removeProduct = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        console.log(cartItems);
        

        

    };

    
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto px-4 lg:px-20 mt-40">
        <h2 className="text-lg font-bold mb-6 text-center lg:text-left">Shopping Cart</h2>
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2 text-left">Image</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Product</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Price</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Quantity</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Total</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover"
                                />
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{item.title}</td>
                            <td className="border border-gray-200 px-4 py-2">Rs. {item.price}</td>
                            <td className="px-4 py-2 flex  items-center h-32 space-x-2">
                                <button
                                    className="bg-yellow-400 hover:bg-yellow-500   text-white font-bold py-1 px-2 rounded-full focus:outline-none"
                                    onClick={() => decreaseQuantity(item._id)}
                                    aria-label="Decrease quantity"
                                >
                                    <FaMinus />
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-2 rounded-full focus:outline-none"
                                    onClick={() => increaseQuantity(item._id)}
                                    aria-label="Increase quantity"
                                >
                                    <FaPlus />
                                </button>
                            </td>
                            <td className="border border-gray-200 px-4 py-2">
                                Rs. {item.price * item.quantity}
                            </td>
                            <td className="border border-gray-200 px-4 py-2">
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none"
                                    onClick={()=> dispatch(deleteProduct(item._id))}
                                    aria-label="Remove product"
                                >
                                    <FaTimes />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    
        <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-lg font-bold">
                <h4>Total: Rs. {getTotal()}</h4>
            </div>
            <Link to="/checkout">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 lg:mt-0 focus:outline-none" >
                    Proceed to Checkout
                </button>
            </Link>
        </div>
    </div>
    
    );
};

export default Cart;
