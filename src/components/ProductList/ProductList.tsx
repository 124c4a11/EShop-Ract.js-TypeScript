import { Box } from '@mui/material';

import { ProductCard } from '..';
import { IProduct } from '../../interfaces/IProduct';


interface ProductListProps {
  items: IProduct[];
}


export function ProductList({ items }: ProductListProps): JSX.Element {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 276px)"
      justifyContent="center"
      gap="15px"
      component="ul"
      pl="0"
      my="0"
    >
      {
        items.map((product) => <ProductCard
          key={product.id}
          product={product}
          component="li"
        />)
      }
    </Box>
  );
}
