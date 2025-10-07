import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
  name: 'allCartValues',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.cartItems=[{},{}] 
    },
    decrement: (state) => {
        state.cartItems=[{}] 
    },
    incrementByAmount: (state, action) => {
      state.cartItems += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer