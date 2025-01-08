import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './ProductsSlice/ProductsSlice'
import basketSlice  from "./BasketSlice/BasketSlice";
import authSlice from "./AuthSlice/AuthSlice"



export const store = configureStore({
    reducer: {
        productsSlice,
        basketSlice,
        authSlice
    }
})