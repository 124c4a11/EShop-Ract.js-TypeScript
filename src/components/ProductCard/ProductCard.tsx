import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IProduct } from '../../interfaces/IProduct';
import { Badge, IconButton, Rating } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


interface ProductCardProps {
  product: IProduct,
  component?: 'div' | 'li'
}


export function ProductCard({ product, component = 'div' }: ProductCardProps) {
  const {
    image,
    title,
    price,
    rating,
  } = product;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
      }}
      component={component}
    >
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          component="h3"
          variant="body1"
          fontWeight={500}
        >{title}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Rating name="read-only" value={rating.rate} readOnly />
        <Typography
          variant="h6"
          fontWeight={600}
        >{price} $</Typography>
        <IconButton color="primary" aria-label="add to shopping cart">
          <Badge badgeContent={1} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
