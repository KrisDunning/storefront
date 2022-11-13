
//set initial state
const initialState = {
  cartProducts: [],
}

//set reducers
function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART triggered: ', type, payload, state.cartProducts);
      return {
        cartProducts:[...state.cartProducts,payload]
      }
    case 'REMOVE_FROM_CART':
      //filter over state.cartProducts and remove product by/id/name/etc
      return state;
    default: {
      console.log('cart default case');
      return state;
    }
  }
}

export default cartReducer;

// set dispatches(or found in actions.js)





