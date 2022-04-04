import { combineReducers } from '@reduxjs/toolkit';
import { all, fork } from 'redux-saga/effects';

import productsReducer from './productsReducer/productsReducer';
import { productsSaga } from './productsReducer/productsSaga';


export const rootReducer = combineReducers({
  products: productsReducer,
});


export function* rootSaga() {
  yield all([
    fork(productsSaga)
  ]);
}
