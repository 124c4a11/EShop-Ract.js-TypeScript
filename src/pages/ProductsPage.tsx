import { Typography } from '@mui/material';
import { ProductList } from '../components';

import { useAppSelector } from '../hooks/reduxHooks';


export function ProductsPage(): JSX.Element {
  const { products, pending, error } = useAppSelector((store) => store.products);

  if (pending) {
    return <Typography variant="h5" component="h2" >Loading...</Typography>
  }

  if (error) {
    return <Typography variant="h5" component="h2" >{error}</Typography>
  }

  return (
    <>
      {
        products
          ?
          <ProductList items={products} />
          :
          <Typography variant="h5" component="h2">List is empty!</Typography>
      }
    </>
  );
}
