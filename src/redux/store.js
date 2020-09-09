import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; // allows browser to cache store
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

// If the node environment variables
// is "development", we will put logger into our app
// SO we are using app in PRODUCTION - people cannot see our logs
// good for security
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// export root reducer and middleware for storage
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//export default store;

export const persistor = persistStore(store);
//export default { store, persistor };