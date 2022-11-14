const initialState = 
  [
    {
      name: 'TV',
      category: 'electronics',
      description: '50" 4K HDTV',
      price: '599.00',
      inventoryCount: 5,
    },
    {
      name: '14" M1 Macbook Air',
      category: 'electronics',
      description: '8GB RAM, 512GB SSD, M1 Chip',
      price: '1599.99',
      inventoryCount: 1,
    },
    {
      name: 'Home Security Camera System',
      category:'electronics',
      description:'4 x 1080p Cameras, 48 hour video storage',
      price:'798.49',
      inventoryCount:3,
    },
    {
      name: 'Beef and Bean Burritos',
      category:'food',
      description:'18 pack of microwave burritos',
      price:'12.49',
      inventoryCount:8,
    },
    {
      name: 'Mount Rainstorm Soda',
      category:'food',
      description:'12 pack of 14 fl. oz. bottles',
      price:'13.97',
      inventoryCount:13,
    },
  ];

  // reducers
  function productsReducer(state=initialState,action){
    const{type,payload}=action;
    switch(type){
      case 'SELECT_CATEGORY':
        return initialState.filter(product=>product.category===payload);

      default:
        return state;
    }
  
  }

// if needed in future to rest to initial state
// export const reset = ()=>{
//   return{
//     type:'Reset'
//   }
//}

// dispathes


export default productsReducer;
