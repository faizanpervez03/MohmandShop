// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/order' }),
  endpoints: (builder) => ({
    placeorder: builder.mutation({
      query: (data) => {
        console.log(data);
        
        return  {
            url: 'place-order', 
            method: 'POST',
            body: data
        }
      }

    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePlaceorderMutation } = orderApi