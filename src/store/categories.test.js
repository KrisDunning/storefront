import cartegoriesReducer from './categories';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import {selectCategory} from './actions';
import categoriesReducer from './categories';




describe ('Categories Reducer',()=>{

const reducers= combineReducers({categories:categoriesReducer});
const store = createStore(reducers);

it('Can provide initial state',()=>{
  let state = store.getState();
  expect(state.categories.categories.length).toEqual(2);
});

it('Can save the active category in store state',()=>{
  store.dispatch(selectCategory('electronics'));
  let state = store.getState();
  expect(state.categories.activeCategory).toEqual('electronics');

});

});