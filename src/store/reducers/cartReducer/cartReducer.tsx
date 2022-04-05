import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart } from '../../../interfaces/ICart';
import { IOrderProduct } from '../../../interfaces/IOrderProduct';


const initialState: ICart = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
}


function findProductById(products: IOrderProduct[], id: number) {
  return products.find((item) => item.id === id);
}


function increaseTotalQuantityAnPrice(
  state: ICart,
  price: number,
  quantity: number
) {
  state.totalQuantity += quantity;
  state.totalPrice = Number((state.totalPrice + price).toFixed(2));
}


function decreaseTotalQuantityAnPrice(
  state: ICart,
  price: number,
  quantity: number
) {
  state.totalQuantity -= quantity;
  state.totalPrice = Number((state.totalPrice - quantity * price).toFixed(2));
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<ICart>) {
      return action.payload;
    },

    addProductToCart(state, action: PayloadAction<IOrderProduct>) {
      const { cartProducts } = state;
      const { id, price } = action.payload;

      const findedProduct = findProductById(cartProducts, id);

      if (!findedProduct) cartProducts.push(action.payload);
      else findedProduct.quantity += 1;

      increaseTotalQuantityAnPrice(state, price, 1);
    },

    decreaseProductQuantityInCart(state, action: PayloadAction<IOrderProduct>) {
      const { cartProducts } = state;
      const { id, quantity, price } = action.payload;

      if (quantity === 1) return;

      const findedProduct = findProductById(cartProducts, id);

      if (!findedProduct) return;

      findedProduct.quantity -= 1;

      decreaseTotalQuantityAnPrice(state, price, 1);
    },

    removeProductFromCart(state, action: PayloadAction<IOrderProduct>) {
      const { cartProducts } = state;
      const { id, quantity, price } = action.payload;

      const filteredProducts = cartProducts.filter((product) => {
        return product.id !== id;
      });

      state.cartProducts = filteredProducts;

      decreaseTotalQuantityAnPrice(state, price, quantity);
    },

    clearCart(state) {
      return initialState;
    }
  }
});


export const {
  setCart,
  addProductToCart,
  removeProductFromCart,
  decreaseProductQuantityInCart,
  clearCart,
} = cartSlice.actions;


export default cartSlice.reducer;
