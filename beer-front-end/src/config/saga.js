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

function* handleGetUpdatedSku(action) {
  const { code } = action.payload;
  const { data } = yield call(() => axios.get(`api/stock-price/${code}`));
  yield put({
    type: ACTION_TYPES.SET_DETAILED_PRICING,
    payload: {
      data
    }
  });
}

function* watchFeTchProductsList() {
  yield takeLatest(ACTION_TYPES.FETCH_PRODUCTS_LIST, handleFetchProductsList);
}

function* watchGetUpdatedSku() {
  yield takeLatest(ACTION_TYPES.GET_UPDATED_SKU, handleGetUpdatedSku);
}

export function* saga() {
  yield all([
    watchFeTchProductsList(),
    watchGetUpdatedSku()
  ]);
}