import { ADD_TO_CART } from "./constant"

export const reducer = (state, action) =>{
    switch (action.type) {
      case ADD_TO_CART:
        const headerItem = state.cart.find(item=>item.id === action.paylod.id)

        // check if item exicets then increse item value 
        if(headerItem){
            
        }else{
            return {...state, cart:[...state.cart, action.paylod]}
        }
        // if not then push into cart
        default:
          return state
    }
  }