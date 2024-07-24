import axios from "axios"


const GetAllProducts = async () => {

    try
    {
        const res = await axios.get("http://localhost:3000/api/products")
        console.log(res)
        return res.data;
    }
    catch(error)
    {
        console.log(error)
    }
}


export { GetAllProducts }