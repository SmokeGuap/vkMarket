import { FixedLayout, Group, Header, Spacing, Text } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';

import { useAppSelector } from 'src/hooks';
import { ProductType } from 'src/types';

import styles from './Cart.module.scss';

const Cart: FC = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    setCartTotal(
      products.reduce((totalCount: number, current: ProductType) => {
        return totalCount + current.quantity * current.price;
      }, 0)
    );
  }, [products]);

  return (
    <FixedLayout vertical='top'>
      <Spacing size={16} />
      <Group header={<Header mode='secondary'>Корзина</Header>}>
        <Text className={styles.text}>Итого: {cartTotal} руб.</Text>
      </Group>
    </FixedLayout>
  );
};

export default Cart;
