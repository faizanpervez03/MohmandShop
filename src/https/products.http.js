
import axios from "axios";

export const GetAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/product/products');
        return response.data.data; // Assuming that the products array is inside the `data` property
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};