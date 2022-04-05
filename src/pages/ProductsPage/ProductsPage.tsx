import { Typography } from '@mui/material';
import { ProductList } from '../../components';

import { useAppSelector } from '../../hooks/reduxHooks';


export function ProductsPage(): JSX.Element {
  const { products, pending, error } = useAppSelector((store) => store.products);

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 4 }}
      >Catalog</Typography>
      {
        pending
          ?
          <Typography
            variant="h5"
            component="h3"
            textAlign="center"
          >Loading...</Typography>
          :
          <>
            {
              error
                ?
                <Typography
                  variant="h5"
                  component="h3"
                  textAlign="center"
                  color="error"
                >{error}</Typography>
                :
                <>
                  {
                    products.length
                      ?
                      <ProductList items={products} />
                      :
                      <Typography variant="h5" component="h3">List is empty!</Typography>
                  }
                </>
            }
          </>
      }
    </>
  );
}
