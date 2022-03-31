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
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1 , 
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                    state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const exisitingItem = state.itemsList.find(item => item.id === id) 

            if(exisitingItem.quantity === 1){
                state.itemsList = state.itemsList.filter(item=> item.id !==id);
                state.totalQuantity--;
            }else {
                exisitingItem.quantity--;
                exisitingItem.totalPrice -= exisitingItem.price; 
            }
        }, 
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }
})

export const cartActions = cartSlice.actions; 

export default cartSlice