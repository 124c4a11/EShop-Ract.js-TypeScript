import { IProduct } from '../../interfaces/IProduct';
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addProductToCart } from '../../store/reducers/cartReducer/cartReducer';
import { getCart, getProductQuantityInCartById } from '../../store/reducers/cartReducer/cartSelectors';
import { IOrderProduct } from '../../interfaces/IOrderProduct';
import { useEffect } from 'react';
import { saveCartToLocalStorage } from '../../helpers/cartLocalStorage';


interface ProductCardProps {
  product: IProduct,
  component?: 'div' | 'li'
}


export function ProductCard({
  product,
  component = 'div'
}: ProductCardProps): JSX.Element {
  const {
    id,
    image,
    title,
    price,
    rating,
  } = product;
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(getProductQuantityInCartById(id));
  const cart = useAppSelector(getCart);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  function addToCart() {
    const cartProduct: IOrderProduct = {
      id,
      title,
      image,
      price,
      quantity: 1
    }

    dispatch(addProductToCart(cartProduct));
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
      }}
      component={component}
    >
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          component="h2"
          variant="body1"
          fontWeight={500}
        >{title}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Rating name="read-only" value={rating.rate} readOnly />
        <Typography
          variant="h6"
          fontWeight={600}
        >{price} $</Typography>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={addToCart}
        >
          <Badge badgeContent={quantity} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
