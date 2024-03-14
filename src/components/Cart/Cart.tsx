import { Group, Header, Text } from '@vkontakte/vkui';

import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <Group header={<Header mode='secondary'>Корзина</Header>}>
      <Text className={styles.text}>Итого: 50 руб.</Text>
    </Group>
  );
};

export default Cart;
