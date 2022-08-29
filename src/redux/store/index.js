import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import productSaga from '../sagas/productSaga';
import rootReducer from '../reducers'

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer, middleware: () => [sagaMiddleWare] });

sagaMiddleWare.run(productSaga)
export default store;