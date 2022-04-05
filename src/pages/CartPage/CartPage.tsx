import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import { CartTable } from '../../components/CartTable/CartTable';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { clearCart } from '../../store/reducers/cartReducer/cartReducer';
import { IOrder } from '../../interfaces/IOrder';
import { getCart } from '../../store/reducers/cartReducer/cartSelectors';
import { removeCartFromLocalStorage } from '../../helpers/cartLocalStorage';


export function CartPage(): JSX.Element {
  const {
    cartProducts,
    totalPrice,
    totalQuantity
  } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  function onClearCart() {
    const isAgree = window.confirm('Do you really want to clear the cart?');

    if (!isAgree) return;

    dispatch(clearCart());
    removeCartFromLocalStorage();
  }

  function makeOrder() {
    const order: IOrder = {
      cartProducts,
      totalPrice,
      totalQuantity,
      createdAt: Date.now(),
    }

    window.alert(`Your order is: ${JSON.stringify(order)}`);

    dispatch(clearCart());
    removeCartFromLocalStorage();
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4 }}
      >Cart</Typography>
      {
        cartProducts.length
          ?
          <>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Button
                component={Link}
                to="/"
                startIcon={<ArrowBackIcon />}
              >Go to the catalog</Button>
              <Button
                color="error"
                onClick={onClearCart}
              >Clear the Cart</Button>
            </Box>
            <CartTable products={cartProducts} />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                py: '1rem'
              }}
            >
              <Typography
                fontSize="1.1rem"
                fontWeight="400"
              >Total Quantity: <b>{totalQuantity}</b></Typography>

              <Typography
                fontSize="1.1rem"
                fontWeight="400"
                ml={2}
              >Total Price: <b>{totalPrice}</b></Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={makeOrder}
              >Order</Button>
            </Box>
          </>
          :
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h3">The Cart is empty!</Typography>
            <Button
              component={Link}
              to="/"
              size="large"
              startIcon={<ArrowBackIcon />}
            >Go to the catalog</Button>
          </Box>
      }
    </>
  );
}
