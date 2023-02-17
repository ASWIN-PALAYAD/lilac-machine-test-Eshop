import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Redux/features/cartSlice'
import productReducer from '../Redux/features/productSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    }
});