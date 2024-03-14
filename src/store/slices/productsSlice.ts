import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from 'src/types';

type ProductStateType = { products: ProductType[] };

const initialState: ProductStateType = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = initialState.products;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const { clearProducts, setProducts } = productsSlice.actions;

export { clearProducts, setProducts };

export default productsSlice.reducer;
