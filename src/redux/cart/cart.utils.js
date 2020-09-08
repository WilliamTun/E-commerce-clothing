export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            // if cart item already exists in array - add quanity count
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            // else - return normal item as it is
            : cartItem 
            )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};



export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    // if quantity is 1, we will REMOVE the cart item completely. 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }

    return cartItems.map(
        cartItem => 
        // condition, if cartItem.id is equal to cartItemToRemove, we want to DECREASE the quantity of that item by 1
        cartItem.id === cartItemToRemove.id ? 
        { ... cartItem, quantity: cartItem.quantity -1 }
        : 
        // else, return the cart item as it is. 
        cartItem
    )

}