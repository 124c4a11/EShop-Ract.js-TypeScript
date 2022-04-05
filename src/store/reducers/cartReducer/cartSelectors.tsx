import { createSelector } from '@reduxjs/toolkit';
import { RootReducer } from '../..';


export const getCart = (state: RootReducer) => state.cart;


export const getProductsFromCart = (state: RootReducer) => state.cart.cartProducts;


export const getProductFromCartById = (id: number) => createSelector(
  getProductsFromCart,
  (products) => products.find((product) => product.id === id)
);


export const getProductQuantityInCartById = (id: number) => createSelector(
  getProductFromCartById(id),
  (product) => product ? product.quantity : 0
);


export const getTotalProductQuantityInCart = (state: RootReducer) => state.cart.totalQuantity;
