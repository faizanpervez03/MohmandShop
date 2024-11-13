/*
import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product.jsx'
import { Products } from '../../Models/Products.js'
import { GetAllProducts } from '../../https/products.http.js'

function Shop({ ProductName, ProductPrice }) {

return (
        <>


            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1 className='text-4xl'>Shop</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            



            <div class="untree_co-section product-section before-footer-section">
                <div class="container">

                    <h2 class="mb-5 text-4xl">Usefull Items</h2>

              
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5'  >

                        {
                            Products.map(item => <Product ProductDetails={item} key={item.name} />)
                        }

                    </div>
                </div>


            </div>



        </>
    )
}

export default Shop

*/


import React, { useEffect, useState } from 'react';
import Product from '../../components/Product/Product.jsx';
import { Products } from "../../Models/Products.js"
import { GetAllProducts } from "../../https/products.http.js"

function Shop() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const data = await GetAllProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="hero mt-10  ">
                <div className="container ">
                    <div className="row justify-content-between ">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className='text-4xl'>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <h2 className="mb-5 text-4xl">Useful Items</h2>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5'>
                        {products.length > 0 ? (
                            products.map(item => <Product ProductDetails={item} key={item._id} />) // Use _id or another unique identifier for key
                        ) : (
                            <p>No products available</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;

