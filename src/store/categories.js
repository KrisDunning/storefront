//set initial state

const initialState = {
  categories:[
    {name:'electronics',
    displayName:'Electronics',description:'Computers, Home Entertainment, Home Security'},
    {name:'food',
    displayName:'Food',description:'Delicious Delectables'},
  ],
}

//reducers

function categoriesReducer(state=initialState,action){
  console.log('action in categoriesReducer : ',action.type,action.payload);
  const{type,payload}=action;
  switch(type){
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory:payload
      }
    default:
      return state;
  }
}
//dispatches (action creator)
// found in actions.js


// if needed in future to reset to initial state
// export const reset = ()=>{
//   return{
//     type:'Reset'
//   }
//}

export default categoriesReducer;