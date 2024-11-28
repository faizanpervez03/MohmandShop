import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product.jsx";
import { GetAllProducts } from "../../https/products.http.js";

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
                <h1 className="text-4xl">Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <h2 className="mb-5 text-4xl">Useful Items</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5 object-fit">
            {products.length > 0 ? (
              products.map((item) => (
                <Product ProductDetails={item} key={item._id} />
              )) // Use _id or another unique identifier for key
            ) : (
              
                <h1
                style={{ color: "#208f89" }}
                className="w-screen text-lg font-bold bg-red-200 border border-red-400 rounded-md p-4 shadow-md "
              >
                No Products Available
              </h1>
              
              
              
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
