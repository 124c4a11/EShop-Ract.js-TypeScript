import { Box, IconButton, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementAriaLabel?: string;
  decrementAriaLabel?: string;
}


export function Counter({
  value,
  increment,
  decrement,
  incrementAriaLabel = 'increment',
  decrementAriaLabel = 'decrement'
}: CounterProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(3, auto)",
        alignItems: "center",
      }}
    >
      <IconButton
        color="error"
        aria-label={decrementAriaLabel}
        onClick={decrement}
      >
        <RemoveCircleOutlineIcon />
      </IconButton>

      <Typography
        variant="body1"
        sx={{ fontWeight: '600' }}
        aria-label={`quantity`}
        component="span"
      >{value}</Typography>

      <IconButton
        color="success"
        aria-label={incrementAriaLabel}
        onClick={increment}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  );
}
