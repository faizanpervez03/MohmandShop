import React, { useState, useEffect } from 'react';
import './productDetail.css';
import { Link, useParams } from 'react-router-dom';
import { productDetail } from '../../https/products.http';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../../store/slices/cartSlice';




const ProductDetail = ({ setCartItems }) => {
   
    const [cart, setCart] = useState([]);
    const path = "http://localhost:3000/api/product"
    
    const dispatch = useDispatch()

    //loader me dlta wagsta 
    const [loader, setLoader] = useState(true)
   
    const [productdetails, setProductdetails] = useState(null)


    // Function to add product to the cart
    const addToCart = (product) => {
        dispatch(addCart(product))
        // let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        


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
                        {[1,2,3,4].map((image, index) => (
                            <div className="flex-1 px-2" key={index}>
                                <button
                                   
                                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center  'ring-2 ring-indigo-300 ring-inset'`}
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
                           <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl text-white zamaBtn" onClick={()=> addToCart(productdetails)}> Add to Cart</button>
                           </Link> 

                    </div>
                </div>
            </div> }
        </div>
    );
};

export default ProductDetail;




