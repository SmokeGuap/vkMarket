import { Div, Group, Header } from '@vkontakte/vkui';
import { FC, useEffect } from 'react';

import { getCart } from 'src/API/requests';
import { Product } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setProducts } from 'src/store/slices/productsSlice';

import styles from './Products.module.scss';

const Products: FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCart(1).then((data) => dispatch(setProducts(data.products)));
  }, []);

  return (
    <Group header={<Header mode='secondary'>Товары</Header>}>
      <Div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Div>
    </Group>
  );
};

export default Products;
