import { Route, Routes } from 'react-router-dom';

import { CartPage, ProductsPage } from '../pages';


export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
