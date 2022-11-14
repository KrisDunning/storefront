import cartReducer from './cart';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import {addToCart, removeFromCart} from './actions';



describe(' Cart Reducer ',()=>{
const reducers=combineReducers({cart:cartReducer});
const store = createStore(reducers);

it( 'Provides an intial store state for cart',()=>{
  let cartState = store.getState();
  expect(cartState.cart.cartProducts.length).toEqual(0);
  expect(cartState.cart.cartProducts).toBeTruthy();
});

it ('Can add an item to the cart store state',()=>{
  let productTV = {name:'TV'};
  let productFood = {name:'Food'};
  store.dispatch(addToCart(productTV));
  store.dispatch(addToCart(productFood));
  let cartState = store.getState();
  expect(cartState.cart.cartProducts.length).toEqual(2);
  expect(cartState.cart.cartProducts[0].name).toEqual('TV');
  expect(cartState.cart.cartProducts[1].name).toEqual('Food');
});

it('Can remove products from the cart store state',()=>{
  let productA = {name:'Computer'};
  let productB = {name:'Soda'};
  store.dispatch(addToCart(productA));
  store.dispatch(addToCart(productB));
  store.dispatch(removeFromCart(productA));
  let cartState = store.getState();
  expect(cartState.cart.cartProducts.length).toEqual(3);
  expect(cartState.cart.cartProducts[2].name).toEqual('Soda');

});



});

