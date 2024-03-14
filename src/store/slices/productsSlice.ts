import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload.sort((a, b) => a.id - b.id);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const findProduct = state.products.find(
        (item) => item.id == action.payload
      );

      if (findProduct) {
        state.products = [
          ...state.products.filter(
            (item: ProductType) => item.id !== action.payload
          ),
        ];
      }
    },
    addCount: (state, action: PayloadAction<number>) => {
      const findProduct = state.products.find(
        (item: ProductType) => item.id == action.payload
      );

      if (findProduct) {
        state.products = state.products.map((item: ProductType) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return { ...findProduct, quantity: findProduct.quantity + 1 };
          }
        });
      }
    },
    reduceCount: (state, action: PayloadAction<number>) => {
      const findProduct = state.products.find(
        (item: ProductType) => item.id == action.payload
      );

      if (findProduct) {
        state.products = state.products.map((item: ProductType) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return { ...findProduct, quantity: findProduct.quantity - 1 };
          }
        });
      }
    },
  },
});

const { clearProducts, setProducts, deleteProduct, addCount, reduceCount } =
  productsSlice.actions;

export { clearProducts, setProducts, deleteProduct, addCount, reduceCount };

export default productsSlice.reducer;
