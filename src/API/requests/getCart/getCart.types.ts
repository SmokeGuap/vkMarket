import { ProductType } from 'src/types';

export type GetCartResponse = {
  id: number;
  products: ProductType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};
