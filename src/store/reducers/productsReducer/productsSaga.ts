import { all, call, put, takeLeading } from 'redux-saga/effects';

import { getProducts } from '../../../API/getProducts';
import { IProduct } from '../../../interfaces/IProduct';
import { productsFetchError, productsFetchSuccess } from './productsReducer';


function* fetchProducts() {
  try {
    const products: IProduct[] = yield call(getProducts);

    yield put(productsFetchSuccess(products));
  } catch (err) {
    if (err instanceof Error) {
      yield put(productsFetchError(err.message));
    } else {
      yield put(productsFetchError('Something went wrong!'));
    }
  }
}


export function* productsSaga() {
  yield all([
    takeLeading('products/productsFetchRequest', fetchProducts)
  ]);
}
