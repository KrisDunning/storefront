//set initial state

const initialState = {
  categories:[
    {name:'electronics',
    displayName:'Electronics',description:'Computers, Home Entertainment, Home Security'},
    {name:'food',
    displayName:'Food',description:'Delicious Delectables'},
  ],
  activeCategory:""
}

//reducers

function categoriesReducer(state=initialState,action){
  const{type,payload}=action;
  switch(type){
    case 'SELECT_CATEGORY':
      console.log('Select Category Triggered : ',payload);
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