import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from './slices';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
