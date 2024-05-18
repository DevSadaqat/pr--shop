import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //DEV NOTE: The item to add to the cart
      const item = action.payload;
      //DEV NOTE: Update the cart state using the updateCart function
      return updateCart(state, item);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

//DEV NOTE: any function that we create in reducer needs to be exported as well.
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
