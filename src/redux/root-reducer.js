import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'
import shoptReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart'] // the only reduce we want to persist with redux-persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shoptReducer
})

export default persistReducer(persistConfig, rootReducer);

/** 
combineReducers({
    user: userReducer,
    cart: cartReducer
}); 
*/