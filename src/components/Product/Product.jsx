import React from 'react'


const Product = ({ ProductDetails }) => {
	return (
		<div>
			
			<a class="product-item mt-10 ml-3" href="products-detail-page/Nordic-chair-1/checkout.html">
				<img src={ProductDetails.imageUrl} class="img-fluid product-thumbnail" />
				<h3 class="product-title">{ProductDetails.name}</h3>
				<strong class="product-price">Rs. {ProductDetails.price}</strong>

				<span class="icon-cross">	
					<img src={ProductDetails.iconUrl} class="img-fluid" />
				</span>
			</a>
			


		</div>
	)
}

export default Product
