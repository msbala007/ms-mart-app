"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  quantity:0
};

const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart(state, action) {
      const ItemsId = action.payload;

      const existingItems = state.items.find(
        (items) => items.id === ItemsId.id
      );

      if (existingItems) {
        existingItems.quantity = 1;
      } else {
        state.items.push({ ...ItemsId, quantity: 1 });
      }

      //  const existingItems = state.items.find(
      //   (items) => items.id === action.payload.id
      // );
      // if (existingItems) {
      //    existingItems.quantity = 1;
      // } else {
      //   state.items = [...state.items, action.payload];
      // }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (itemId) => itemId.id === action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("sorry");
      }

      state.items = newBasket;
    },
    IncreaseItems(state, action) {
      const itemId = action.payload;
      const increment = state.items.find((items) => items.id === itemId);
      increment.quantity++;
    },
    DecrementItems(state, action) {
      const itemId = action.payload;
      const decrement = state.items.find((items) => items.id === itemId);

      if (decrement.quantity === 1) {
        decrement.quantity = 1;
      } else {
        decrement.quantity--;
      }
    },
    totalAmount(state) {
      let quantity = 0;
      let total = 0;
      state.items.forEach((elem) => {
        quantity += elem.quantity;
        total += elem.price * elem.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    
    },
  },
});
const totalAmount = (state) => {
  state.items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// console.log("{tgiauaiaiaiia", totalAmount);
export const cartActions = cartSlice.actions;


export default cartSlice.reducer;
