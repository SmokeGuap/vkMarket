import { Div, Group, Header } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';

import { getCart } from 'src/API/requests';
import { Product } from 'src/components';
import { ProductType } from 'src/types';

import styles from './Products.module.scss';

const Products: FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getCart(1).then((data) => setProducts(data.products));
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
