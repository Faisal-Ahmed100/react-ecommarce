import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

export const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fatchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fatchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fatchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
         
    },
})

export default productSlice.reducer;

export const fatchProducts=createAsyncThunk('products/fatch',async()=>{
    const res = await fetch('https://dummyjson.com/products/');
    const data = await res.json();
    // console.log(data.products)
    return data.products;
});


