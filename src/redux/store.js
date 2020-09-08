import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // allows browser to cache store
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];


// export root reducer and middleware for storage
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//export default store;

export const persistor = persistStore(store);
//export default { store, persistor };