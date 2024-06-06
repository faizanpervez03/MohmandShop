import React from 'react'

import Product from '../../components/Product/Product.jsx'
import { Products } from '../../Models/Products.js'



const Shop = ({ ProductName, ProductPrice }) => {

    return (
        <>


            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1 style={{ fontSize: "30px" }}>Shop</h1>
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

                    <h2 class="mb-5 text-2xl">Usefull Items</h2>

                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5'>

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
