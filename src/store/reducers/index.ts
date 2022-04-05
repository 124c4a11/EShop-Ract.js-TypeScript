import { combineReducers } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';
import cartReducer from './cartReducer/cartReducer';

import productsReducer from './productsReducer/productsReducer';
import { productsSaga } from './productsReducer/productsSaga';


export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});


export function* rootSaga() {
  yield all([
    fork(productsSaga)
  ]);
}
