export const addToCart=(product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// for item to be delete from cart
export const DeleteFromCart=(product)=>{
    return {
        type:"DELETEITEM",
        payload:product
    }
}