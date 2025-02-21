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
          className="product-item mt-10 ml-3 sm:max-w-[250px] mx-auto"
          to={`/ProductDetail/${ProductDetails._id}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            // border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "200px",
          }}
        >
          <img
            src={ProductDetails.imageUrl}
            className="img-fluid mx-auto product-thumbnail sm:w-[180px] sm:h-[180px]"
            alt={ProductDetails.title}
            style={{
              width: "170px", // Fixed width for all images
              height: "170px", // Fixed height for all images
              objectFit: "cover", // Crop images to fit without distortion
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
          <h3 className="product-title sm:text-lg mb-2" style={{ fontSize: "16px", marginBottom: "5px" }}>
            {ProductDetails.title}
          </h3>
          <strong className="product-price sm:text-base" style={{ fontSize: "14px", color: "#333" }}>
            Rs. {ProductDetails.price}
          </strong>
          <br />
          <strong className='sm:text-sm px-2'
            style={{
              // backgroundColor: "#208f89",
              border:"2px solid #208f89",
              color: "#208f89",
              fontSize: "12px",
              padding: "3px",
              borderRadius: "15px",
              
            }}
          >
            Stock: {ProductDetails.stock}
          </strong>
          <span className="icon-cross" style={{ marginTop: "10px" }}>
            <img
              src="../../images/cross.svg"
              className="img-fluid"
              alt="cross"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
        </Link>
        
        )}
      </div>
    );
  };

  export default Product;
