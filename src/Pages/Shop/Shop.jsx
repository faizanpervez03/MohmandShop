import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product.jsx'
import { Products } from '../../Models/Products.js'
import { GetAllProducts } from '../../https/products.http.js'
import { Link } from 'react-router-dom'

// import axios from 'axios'

function Shop({ ProductName, ProductPrice }) {

    // -------------------------------------------------
    // for backend product
    const [product, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const products = await GetAllProducts();
            setProducts(products);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    // -----------------------------------------------------

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
                        {/* <div class="col-lg-7">

                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}



            <div class="untree_co-section product-section before-footer-section">
                <div class="container">

                    <h2 class="mb-5 text-4xl">Usefull Items</h2>

                    {/* --------------------------------------------------------------- */}
                    {/* Back End Products */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b text-left">Index</th>
                                    <th className="py-2 px-4 border-b text-left">Name</th>
                                    <th className="py-2 px-4 border-b text-left">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((prod, index) => (
                                    <tr>
                                        <td className="py-2 px-4 border-b">{index + 1}</td>
                                        <td className="py-2 px-4 border-b">{prod.name}</td>
                                        <td className="py-2 px-4 border-b">{prod.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* ---------------------------------------------------------------------- */}


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
