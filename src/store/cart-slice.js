import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    }, 
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload; 
            //to check if the item is already available 
            const existingItem = state.itemsList.find((item)=> item.id === newItem.id);

            if(existingItem) {
                existingItem.totalQuantity++;
                existingItem.totalPrice += newItem.price;
            }else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                    state.totalQuantity++;
            }
        },
        removeFromCart() {}, 
        setShowCart(state) {
            state.showCart = true
        }
    }
})

export const cartActions = cartSlice.actions; 

export default cartSlice