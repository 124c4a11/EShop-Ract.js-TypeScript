import {
  TableContainer,
  Paper,
  Table,
  TableBody
} from '@mui/material';

import { IOrderProduct } from '../../interfaces/IOrderProduct';
import { CartTableItem } from '../CartTableItem/CartTableItem';


interface CartTableProps {
  products: IOrderProduct[];
}


export function CartTable({ products }: CartTableProps): JSX.Element {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {products.map((product) => <CartTableItem key={product.id} product={product} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
