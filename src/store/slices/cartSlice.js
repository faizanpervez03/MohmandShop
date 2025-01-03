import { createSlice } from '@reduxjs/toolkit'


let products = localStorage.getItem("cart")

const initialState = {
  cart: [],
}

if(products){
  products = JSON.parse(products)
  initialState.cart = products

}




export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, {payload}) => {
    
      console.log("Function call or product added", state);
      console.log(payload);
      
      const product = state.cart.find((product)=> product._id === payload._id )
      console.log(product);

      if(!product){
        state.cart = [...state.cart, payload]
        localStorage.setItem('cart', JSON.stringify([...state.cart]));

      }else{
        alert("Product is already exist on cart")
      }
      
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions

export default cartSlice.reducer