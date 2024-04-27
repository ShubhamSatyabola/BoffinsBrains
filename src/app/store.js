import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/Products/productSlice'
import cartReducer from '../features/Cart/CartSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
});
