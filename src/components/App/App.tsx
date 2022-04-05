import { Container } from '@mui/material';
import { useEffect } from 'react';

import { AppRouter } from '../../router/AppRouter';
import { NavBar } from '..';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { productsFetchRequest } from '../../store/reducers/productsReducer/productsReducer';
import { setCart } from '../../store/reducers/cartReducer/cartReducer';
import { getCartFromLocalStorage } from '../../helpers/cartLocalStorage';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsFetchRequest());

    const cart = getCartFromLocalStorage();

    if (cart) dispatch(setCart(cart));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Container sx={{ pt: 12, pb: 10 }}>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}


export default App;
