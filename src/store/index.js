import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  // more reducers could be present as key: value pairs
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}