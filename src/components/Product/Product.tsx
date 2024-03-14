import { Button, Div, Spacing, Text } from '@vkontakte/vkui';
import { Icon24DeleteOutline } from '@vkontakte/icons';
import { FC } from 'react';

import { useAppDispatch } from 'src/hooks';
import { deleteProduct } from 'src/store/slices/productsSlice';

import styles from './Product.module.scss';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = (props) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

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
      <Spacing size={16} />
      <Button onClick={handleDelete}>
        <Icon24DeleteOutline />
      </Button>
    </Div>
  );
};

export default Product;
