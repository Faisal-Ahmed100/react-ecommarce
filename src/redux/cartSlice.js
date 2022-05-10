import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList:[],

    totalQuantity:0,
    showCart: false,
  },

  reducers: {
    addCart(state, action) {
      const newItem = action.payload;
      const existemItem = state.itemList.find((item) => item.id === newItem.id);
      if (existemItem) {
        existemItem.quantity++;
        existemItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.brand,
          imgUrl: newItem.images[2],
        });
        state.totalQuantity++;
      }
      // localStorage.setItem("itemList", JSON.stringify(state.itemList));
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      // localStorage.setItem("itemList", JSON.stringify(state.itemList));
    },
    removeItems(state, action) {
      const id = action.payload;
      state.itemList = state.itemList.filter((item) => item.id !== id);
      state.totalQuantity--;
      // localStorage.setItem("itemList", JSON.stringify(state.itemList));
    },
 
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    
  },
});

export const { addCart, removeCart, setShowCart, removeItems} =
  cartSlice.actions;
export default cartSlice.reducer;
