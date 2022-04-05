import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/reduxHooks';
import { getTotalProductQuantityInCart } from '../../store/reducers/cartReducer/cartSelectors';



export function NavBar(): JSX.Element {
  const quantity = useAppSelector(getTotalProductQuantityInCart);

  return (
    <AppBar
      sx={{
        borderBottom: '1px solid #E7EBF0',
        backdropFilter: 'blur(20px)',
        boxShadow: 'none',
        backgroundColor: 'rgba(255,255,255,0.7)',
      }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          noWrap
          color="inherit"
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
          }}
        >EShop</Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            component={Link}
            to="/cart"
            size="large"
            aria-label="move to cart"
            color="primary"
          >
            <Badge badgeContent={quantity} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
