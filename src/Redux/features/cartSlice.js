import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    cartItems : [],
    amount : 0,
    total :0,


}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,{payload})=>{
            state.cartItems = [...state.cartItems,payload];
            state.total = state.total+1
        },
        removeFromCart:(state,{payload})=>{
            state.cartItems = state.cartItems.filter((item)=> item.id !== payload)
            state.total = state.total -1
        },
        calculateTotal:(state)=>{
            let amount = 0
            state.cartItems.forEach((item)=>{
                amount += item.price
            })
            state.amount= amount;
        },
        clearCart:(state)=>{
            state.cartItems= []
            state.amount=0
            state.total=0
        }
        
        
    }
})


export const {addToCart,removeFromCart,calculateTotal,clearCart} = cartSlice.actions;

export default cartSlice.reducer;