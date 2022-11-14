import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart:cartReducer,
  // more reducers could be present as key: value pairs
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}