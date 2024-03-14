import {
  Icon24AddOutline,
  Icon24DeleteOutline,
  Icon24MinusOutline,
} from '@vkontakte/icons';
import { Button, ButtonGroup, Div, Spacing, Text } from '@vkontakte/vkui';
import { FC } from 'react';

import { useAppDispatch } from 'src/hooks';
import {
  addCount,
  deleteProduct,
  reduceCount,
} from 'src/store/slices/productsSlice';

import styles from './Product.module.scss';
import { ProductProps } from './Product.types';

const Product: FC<ProductProps> = (props) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleAddCount = () => {
    dispatch(addCount(product.id));
  };

  const handleReduceCount = () => {
    dispatch(reduceCount(product.id));
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
      <ButtonGroup className={styles.buttons}>
        <Button onClick={handleDelete}>
          <Icon24DeleteOutline />
        </Button>
        <ButtonGroup>
          <Button disabled={product.quantity <= 1} onClick={handleReduceCount}>
            <Icon24MinusOutline />
          </Button>
          <Button disabled={product.quantity >= 10} onClick={handleAddCount}>
            <Icon24AddOutline />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Div>
  );
};

export default Product;
