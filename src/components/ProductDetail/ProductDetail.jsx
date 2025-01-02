import React, { useState, useEffect } from 'react';
import './productDetail.css';
import { Link, useParams } from 'react-router-dom';
import { productDetail } from '../../https/products.http';
import axios from 'axios';

const productData = {
    id: 1,  
    title: 'WaterProof Watch',
    price: 2400,
    description: 'Waterproof watch: reliable in any weather condition.',
    mainImage: 'img-1.png',
    images: [
        'img-1.png',
        'img-2.jpg',
        'img-3.jpg',
        'img-2.jpg'
    ]
};



const ProductDetail = ({ setCartItems }) => {
    const [selectedImage, setSelectedImage] = useState(productData.mainImage);
    const [cart, setCart] = useState([]);
    const path = "http://localhost:3000/api/product"
    
    //loader me dlta wagsta 
    const [loader, setLoader] = useState(true)
   
    const [productdetails, setProductdetails] = useState(null)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);  // Set the cart with localStorage data
    }, []);

    // Function to update the cart in localStorage
    const updateCartInLocalStorage = (cartItems) => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    // Function to add product to the cart
    const addToCart = () => {
        let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        

        // Check if product already exists in cart
        const existingProductIndex = currentCart.findIndex(item => item.id === productData.id);

        if (existingProductIndex > -1) {
            // If the product exists, increment its quantity
            currentCart[existingProductIndex].quantity += 1;
        } else {
            // Otherwise, add a new product to the cart
            const newProduct = {
                id: productData.id,
                title: productData.title,
                price: productData.price,
                quantity: 1,
                image: productData.mainImage
            };
            currentCart.push(newProduct);
        }

        // Save the updated cart to localStorage
        updateCartInLocalStorage(currentCart);

        // Update the cart state to reflect the change
        setCart(currentCart);
        setCartItems(currentCart.reduce((total, item) => total + item.quantity, 0));
        




    };


    const {id} =  useParams() 
    console.log("da params de",  id);

    

    useEffect  (  () =>  {
        const fetchProductDetail = async () => {
            
            try {
                const response = await axios.get(`${path}/product-details/${id}`);
                console.log("this is response", response);
                setLoader(false)
                setProductdetails(response.data)
                // return response; // Assuming that the products array is inside the `data` property
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoader(false)

                
            } 
            
            
        }
        fetchProductDetail()
    }, [id])
    



    return (
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36 firstDiv">
            {loader ? (
                <div className='flex item-center justify-center'>
                    <img 
                src="../../ms-logo.png" 
                alt="Loading..." 
                className="animate-spin  "
            />
                </div>
            ) : <div className="flex flex-col md:flex-row -mx-4">
                
                <div className="md:flex-1 px-4">
                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <img src={productdetails.imageUrl} alt="Selected Product" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4" />
                    </div>
                    <div className="flex -mx-2 mb-4">
                        {productData.images.map((image, index) => (
                            <div className="flex-1 px-2" key={index}>
                                <button
                                    onClick={() => setSelectedImage(image)}
                                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${selectedImage === image ? 'ring-2 ring-indigo-300 ring-inset' : ''}`}
                                >
                                    <img src={productdetails.imageUrl} alt={`Thumbnail ${index + 1}`} className="h-24 md:h-32 rounded-lg" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{productdetails.title}</h2>
                    <p className="text-gray-500 text-sm">By <Link href="#" style={{ color: "#208F89" }} className="hover:underline">Mohmand Shop</Link></p>

                    <div className="flex items-center space-x-4 my-4">
                        <div>
                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                <span className="text-indigo-400 mr-1 mt-1">Rs</span>
                                <span style={{ color: "#208F89" }} className="font-bold text-3xl">{productdetails.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                        </div>
                    </div>

                    <p className="text-gray-500">{productdetails.description}</p>

                    <div className="flex py-4 space-x-4">
                        
                        <Link to="/Cart">
                            <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl text-white zamaBtn" onClick={addToCart}> Add to Cart ({cart.length})</button>
                        </Link>
                    </div>
                </div>
            </div> }
        </div>
    );
};

export default ProductDetail;





