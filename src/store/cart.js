
//set initial state
const initialState = {
  cartProducts: [],
}

//set reducers
function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART triggered: ',payload);
      return {
        cartProducts:[...state.cartProducts,payload]
      }
    case 'REMOVE_FROM_CART':
      console.log('Remove from cart triggered',payload);
      return {
      cartProducts:state.cartProducts.filter(product=> product.name !== payload.name)
      }
    default: {
      return state;
    }
  }
}

export default cartReducer;

// set dispatches(or found in actions.js)





