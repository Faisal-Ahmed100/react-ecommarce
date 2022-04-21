import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlice";
import productSlice from "./productSlice";


const store=configureStore({
    reducer:{
        cart:cartSlices,
        product:productSlice


    }
});

export default store;