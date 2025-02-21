import React from "react";
import Wrapper from "./Wrapper";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";


const Product = () => {

  const navigate = useNavigate()

  const handleclick = () => {
    navigate('/admindashboard/create-product')
  }

  return (
    <Wrapper>
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Product Page</h1>

          <button className="flex items-center justify-between bg-[#208f89] text-white px-4 py-2 rounded-lg hover:bg-[#1a7771] transition" onClick={handleclick}>
            
            <span>Add Product</span>
            <TiPlus className="text-xl ml-2 " />
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur
          repellendus. Nostrum quam accusamus aliquam. Totam maiores sed illum
          eum ad corporis facilis? Omnis quis doloribus sequi natus repudiandae
          expedita?
        </p>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          cupiditate delectus quod voluptatum ipsum perspiciatis modi? Quaerat
          fugit debitis repellendus impedit tempore? Consequatur quis recusandae
          quaerat similique odit asperiores culpa.
        </h1>
      </div>
    </Wrapper>
  );
};

export default Product;
