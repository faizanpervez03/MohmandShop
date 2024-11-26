import axios from "axios";

const path = "http://localhost:3000/api/product"
export const GetAllProducts = async () => {
    try {
        const response = await axios.get(`${path}/products`);
        return response.data.data; // Assuming that the products array is inside the `data` property
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};


export const productDetail = async (id) => {
    try {
        const response = await axios.get(`${path}/product-details/${id}`);
        console.log("this is response", response);
        
        return response; // Assuming that the products array is inside the `data` property
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
