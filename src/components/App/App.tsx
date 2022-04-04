import { Container } from '@mui/material';
import { useEffect } from 'react';

import { AppRouter } from '../../router/AppRouter';
import { NavBar } from '..';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { productsFetchRequest } from '../../store/reducers/productsReducer/productsReducer';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsFetchRequest());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar productsAmout={0} />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}


export default App;
