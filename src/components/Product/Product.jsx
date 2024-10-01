import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ ProductDetails }) => {
	 console.log(`http://localhost:3000${ProductDetails.imageUrl}`)


	return (
		<div>


			<Link class="product-item mt-10 ml-3" to="/ProductDetail">
				{/* <img src={ProductDetails.imageUrl} class="img-fluid product-thumbnail" /> */}

				<img src={`http://localhost:3000/${ProductDetails.imageUrl}`}  className='img-fluid product-thumbnail' alt="" />
				 
				<h3 class="product-title">{ProductDetails.title}</h3> 
				<strong class="product-price">Rs. {ProductDetails.price}</strong> <br />
				<strong class="product-price">Stock: {ProductDetails.stock}</strong>


				<span class="icon-cross">
					<img src="../../images/cross.svg" class="img-fluid" />
				</span>

			</Link>



		</div>
	)
}

export default Product




