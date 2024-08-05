import { all, takeLatest, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';
import axios from './axios.config'

function* handleFetchProductsList() {
  const { data } = yield call(() => axios.get('api/products'));
  yield put({
    type: ACTION_TYPES.SET_PRODUCTS_LIST,
    payload: {
      data
    }
  });
}

function* watchFeTchProductsList() {
  yield takeLatest(ACTION_TYPES.FETCH_PRODUCTS_LIST, handleFetchProductsList);
}

export function* saga() {
  yield all([
    watchFeTchProductsList()
  ]);
}