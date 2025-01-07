import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


let products = localStorage.getItem("cart")

const initialState = {
  cart: [],
  name: "faizan"
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
        state.cart = [...state.cart, { ...payload, quantity : 1 } ]
        localStorage.setItem('cart', JSON.stringify([...state.cart]));

      }else{
         toast.error("This Product is already in Cart")
         return
      }
      
    },
    incQuantity: (state, {payload}) => {

      const updatedItems = state.cart.map(item =>
        item._id === payload ? { ...item, quantity: item.quantity + 1 } : item
    );
      state.cart = updatedItems
      localStorage.setItem('cart', JSON.stringify([...updatedItems]));


    },

    decQuantity: (state, {payload}) => {
      const updatedItems =state.cart.map(item =>
        item._id === payload
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
      )
      state.cart = updatedItems
      localStorage.setItem('cart', JSON.stringify([...updatedItems]));

    }, 
   deleteProduct:(state, {payload}) =>{
      const products = state.cart.filter(item => item._id !== payload )
      localStorage.setItem('cart', JSON.stringify([...products]));
      state.cart = products
   }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart, incQuantity, decQuantity, deleteProduct } = cartSlice.actions

export default cartSlice.reducer