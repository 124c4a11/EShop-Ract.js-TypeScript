import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';


interface NavBarProps {
  productsAmout?: number;
}


export function NavBar({ productsAmout = 0 }: NavBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            noWrap
            sx={{
              color: "white",
              textDecoration: "none",
            }}
          >
            EShop
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              component={Link}
              to="/cart"
              size="large"
              aria-label="move to cart"
              color="inherit"
            >
              <Badge badgeContent={productsAmout} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
