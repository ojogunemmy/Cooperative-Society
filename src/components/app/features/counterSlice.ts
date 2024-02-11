import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
}

const initialState : CounterState = {
    value : 0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        //Increment
        increment: (state) => {state.value++},
        //Decrement
        decrement: (state) => {state.value--}
        
    }
}
);

export const { increment } = counterSlice.actions;
export default counterSlice;