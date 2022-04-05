import {
  TableRow,
  TableCell,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


import { IOrderProduct } from '../../interfaces/IOrderProduct';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  addProductToCart,
  removeProductFromCart,
  decreaseProductQuantityInCart,
} from '../../store/reducers/cartReducer/cartReducer';
import { Counter } from '..';
import { getCart } from '../../store/reducers/cartReducer/cartSelectors';
import { saveCartToLocalStorage } from '../../helpers/cartLocalStorage';
import { useEffect } from 'react';


interface CartTableItemProps {
  product: IOrderProduct;
}


export function CartTableItem({ product }: CartTableItemProps): JSX.Element {
  const {
    title,
    image,
    price,
    quantity,
  } = product;
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  function addToCart() {
    dispatch(addProductToCart(product));
  }

  function decreaseProductQuantity() {
    dispatch(decreaseProductQuantityInCart(product));
  }

  function removeProduct() {
    const isAgree = window.confirm(`Do you realy want to remove ${title} from the shopping cart?`);

    if (isAgree) dispatch(removeProductFromCart(product));
  }

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="center" width="130px">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      </TableCell>

      <TableCell component="th" scope="row">
        <Typography
          variant="body1"
          component="h2"
          sx={{ fontWeight: '500' }}
        >{title}</Typography>
      </TableCell>

      <TableCell align="right">
        <Counter
          value={quantity}
          increment={addToCart}
          decrement={decreaseProductQuantity}
          incrementAriaLabel={`Add ${title} to the shopping cart?`}
          decrementAriaLabel={`Decrease ${title} quantity in the shopping cart?`}
        />
      </TableCell>

      <TableCell align="center">
        <Typography variant="h6" component="p">
          {Number((price * quantity).toFixed(2))}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <IconButton
          color="error"
          aria-label={`Remove ${title} from cart`}
          onClick={removeProduct}
        >
          <RemoveShoppingCartIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
