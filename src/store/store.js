import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slices/cartSlice'
import  {orderApi}  from './services/orderService'

export const store = configureStore({
  reducer: { cartSlice, [orderApi.reducerPath]: orderApi.reducer },
  middleware: (defaultMiddleware) =>{
    return defaultMiddleware().concat([
      orderApi.middleware
    ])
  }

})