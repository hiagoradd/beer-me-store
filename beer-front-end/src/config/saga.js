import { all, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';

function* handleFetchProductsList(action) {
  // fetch('http://localhost:3001/products')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   });
}

function* watchFeTchProductsList() {
  yield takeLatest(ACTION_TYPES.FETCH_PRODUCTS_LIST, handleFetchProductsList);
}

export function* saga() {
  yield all([
    watchFeTchProductsList()
  ]);
}