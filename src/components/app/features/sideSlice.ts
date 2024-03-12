import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SideState{
    side: boolean;
}

const initialState : SideState = {
    side : false,
}

const SideSlice = createSlice({
    name:"SideBar",
    initialState,
    reducers:{
        setSide: (state) => {
            if(state.side === true){
                state.side = false
            }else{
                state.side = true
            }
        }
        
        
    }
});

export const { setSide } = SideSlice.actions;
export default SideSlice;