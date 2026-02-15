import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import logger from 'redux-logger';
import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer
});


const middleware = [thunk];


if (typeof logger === 'function') {
  middleware.push(logger);
} else if (logger && typeof logger.default === 'function') {
  middleware.push(logger.default);
}

export const store = createStore(
  rootReducer, 
  applyMiddleware(...middleware) 
);