import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../types';

function* getProducts(params) {
  const response = yield fetch('http://localhost:3000/product');
  const data = yield response.json();
  console.log('data >>>>>>>>>>>>>', data);
  yield put({ type: SET_PRODUCT_LIST, payload: data })
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;