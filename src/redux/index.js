import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMidleware);

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMidleware.run(rootSaga);

export { store, persistor };
