export const ADD_TO_CART ="ADD_TO_CART"
export const REMOVE_FROM_CART ="REMOVE_FROM_CART"


export function addToCart(grantorTypes){
    return{
        type :ADD_TO_CART,
        payload : grantorTypes
    }
}
export function RemoveFromCart(grantorTypes){
    return{
        type :REMOVE_FROM_CART,
        payload : grantorTypes
}
}