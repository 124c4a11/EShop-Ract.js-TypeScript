import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';


export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
