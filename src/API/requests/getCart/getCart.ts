import BASE_URL from 'src/API/BASE_URL';

import { GetCartResponse } from './getCart.types';

const getCart = async (id: number): Promise<GetCartResponse> => {
  try {
    const res = await fetch(`${BASE_URL}carts/${id}`);

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data: GetCartResponse = await res.json();
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`There was a SyntaxError: ${error}`);
    } else {
      throw new Error(`There was a error: ${error}`);
    }
  }
};

export default getCart;
