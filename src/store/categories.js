//set initial state

const initialState = {
  categories:[
    {name:'electronics',displayName:'Electronics',description:'Computers, Home Entertainment, Home Security'},
    {name:'food',
    displayName:'Food',description:'Delicious Delectables'},
  ],
  activeCategory:'',
}

//reducers

function categoriesReducer(state=initialState,action){
  const{type,payload}=action;

  switch(type){
    case 'MAKEACTIVE':
      return {
        ...state,activeCategory:payload.name,
      }
    default:
      return state;
  }

}


//dispatches

export const makeActive = (category)=>{
  return{
    type:'MAKEACTIVE',
    payload:category,
  }
}

// if needed in future to rest to initial state
// export const reset = ()=>{
//   return{
//     type:'Reset'
//   }
//}
