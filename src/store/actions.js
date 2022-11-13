//action creator
export const selectCategory = (category)=>{
  return{
    type:'SELECT_CATEGORY',
    payload:category,
  }
}
export const addToCart= (product)=>{
  return{
    type:'ADD_TO_CART',
    payload:product
  }
}
export const removeFromCart=(product)=>{
  return{
    type:'REMOVE_FROM_CART',
    payload:product
  }
}
