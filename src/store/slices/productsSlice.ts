import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from 'src/types';

type ProductsStateType = { products: ProductType[] };

const initialState: ProductsStateType = {
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
    deleteProduct: (state, action) => {
      const findProduct = state.products.find(
        (item: ProductType) => item.id == action.payload
      );

      if (findProduct) {
        state.products = [
          ...state.products.filter(
            (item: ProductType) => item.id !== action.payload
          ),
          { ...findProduct, quantity: findProduct.quantity - 1 },
        ];
      }
    },
  },
});

const { clearProducts, setProducts,deleteProduct } = productsSlice.actions;

export { clearProducts, setProducts,deleteProduct };

export default productsSlice.reducer;
