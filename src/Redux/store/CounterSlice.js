import { createSlice } from "@reduxjs/toolkit";



export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        counterValue:0
    },
    reducers:{
        increment:(state,action)=>{
            state.counterValue+=1
        },
        decrement:(state,action)=>{
            state.counterValue-=1
        },
        inc_amount:(state,action)=>{
            state.counterValue+=action.payload
        },
    }
})

export const {increment,decrement,inc_amount} =CounterSlice.actions;
export default CounterSlice.reducer