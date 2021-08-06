import { ADD_TO_CART, RemoveFromCart, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initualValues/cartItems";

const initialState={
    cartItem: cartItems
}
export default function cartReducer(state=initialState,{type,payload} ){

    switch (type) {
        case ADD_TO_CART:
         let grantorTypes =state.cartItem.find(c=>c.grantorTypes.grantorTypeId===payload.id)

         if (grantorTypes) {
             grantorTypes.quantity++;
             return {
                 ...state
             }
         } else {
             return{
                 ...state,
                 cartItems: [...state.cartItem,payload,{quantity:1,grantorTypes:payload}]
             }

         }
         case REMOVE_FROM_CART:
             return{
                 ...state,
                 cartItems:state.cartItem.filter(c=>c.grantorTypes.grantorTypeId!==payload.id)
             }
         break;
    
        default:
            return state;
            break;
    }
}