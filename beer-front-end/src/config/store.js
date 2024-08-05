import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { saga } from './saga';
import { initialState } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  preloadedState: initialState
});
sagaMiddleware.run(saga);

export default store;