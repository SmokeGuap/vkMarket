import { Div, Spacing, Text } from '@vkontakte/vkui';
import { FC } from 'react';

import styles from './Product.module.scss';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = (props) => {
  const { product } = props;
  return (
    <Div>
      <img
        className={styles.image}
        alt={product.title}
        src={product.thumbnail}
      />
      <Text className={styles.title}>{product.title}</Text>
      <Spacing size={16} />
      <Text>В корзине: {product.quantity}</Text>
      <Text>Цена: {product.price} руб.</Text>
    </Div>
  );
};

export default Product;
