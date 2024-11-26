// import React from 'react'
// import { Link } from 'react-router-dom'


// const Product = ({ ProductDetails }) => {
// 	 console.log(`http://localhost:3000${ProductDetails.imageUrl}`)

// 	console.log(ProductDetails);
	
// 	return (
// 		<div>


// 			<Link class="product-item mt-10 ml-3" to= {`/ProductDetail/${ProductDetails._id}`}>
				
				
// 				{/* <img src={`../../../../MohmandShop Backend/${ProductDetails.imageUrl}`}  className='img-fluid product-thumbnail' alt="" /> */}

// 				<img src={ProductDetails.imageUrl} class="img-fluid mx-auto product-thumbnail" />
// 				<h3 class="product-title">{ProductDetails.title}</h3> 
// 				<strong class="product-price">Rs. {ProductDetails.price}</strong> <br />
// 				<strong class="product-price">Stock: {ProductDetails.stock}</strong>


// 				<span class="icon-cross">
// 					<img src="../../images/cross.svg" class="img-fluid" />
// 				</span>

// 			</Link>



// 		</div>
// 	)
// }

// export default Product



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"

const Product = ({ ProductDetails }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short delay for loading
    const timer = setTimeout(() => {
      if (ProductDetails) {
        setLoading(false);
      }
    }, 500); // Adjust delay if needed

    return () => clearTimeout(timer); // Cleanup timer
  }, [ProductDetails]);


  console.log(`http://localhost:3000${ProductDetails.imageUrl}`)

	console.log(ProductDetails);

  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <Link
          className="product-item mt-10 ml-3"
          to={`/ProductDetail/${ProductDetails._id}`}
        >
          <img
            src={ProductDetails.imageUrl}  
            className="img-fluid mx-auto product-thumbnail"
            alt={ProductDetails.title}
          />
          <h3 className="product-title">{ProductDetails.title}</h3>
          <strong className="product-price">Rs. {ProductDetails.price}</strong>
          <br />
          <strong className="product-price">Stock: {ProductDetails.stock}</strong>
          <span className="icon-cross">
            <img
              src="../../images/cross.svg"
              className="img-fluid"
              alt="cross"
            />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Product;
