import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_NUMBER, DECREMENT_NUMBER, MULTIPLY_NUMBER } from "./constant"

export const reducer = (state, action) =>{
    switch (action.type) {
      case ADD_TO_CART:
        const headerItem = state.cart.find(item=>item.id === action.paylod.id)

        // check if item exicets then increse item value 
        if(headerItem){
              
        }else{
           // if not then push into cart
            return {...state, cart:[...state.cart, action.paylod]}
        }

        case REMOVE_FROM_CART:
          const removeItem = state.cart.filter(item=>item.id !== action.paylod)
          // console.log(action.paylod, "remove") 
          // console.log(state.cart)
          // console.log(removeItem)
        
          return {...state, cart: removeItem}
          
          case INCREMENT_NUMBER:
              let updatedCart = state.cart.map((curElem)=>{
                if(curElem.id === action.paylod){
                  return{...curElem, quantity:curElem.quantity+1}
                }
                return curElem;
              });
              return {...state, cart: updatedCart}

              case DECREMENT_NUMBER:
                let updatedDec = state.cart.map((curElem)=>{
                  if(curElem.id === action.paylod){
                    return{...curElem, quantity:curElem.quantity-1}
                  }
                  return curElem;
                  
                });
                return {...state, cart: updatedDec}
              
              case MULTIPLY_NUMBER:

        default:
          return state
    }
  }
