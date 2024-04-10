import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


interface Item {
    key: String,
    value: String
}


interface StorageState{
    getItem : any,
    length : Number,
    setItem :  Item,
    clear: Number,
    removeItem: String

}


const initialState : StorageState = {

    getItem : " ",
    length : 0,
    setItem :  { key : " ", value : " "},
    clear : 0,
    removeItem : ""
}

const StorageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        
        getItem: (state , action:PayloadAction<string>) => { 
                 state.getItem = localStorage.getItem(action.payload ) 
        },

        getLength: (state) => {
            state.length = localStorage.length
        },

        setItem: (state , action:PayloadAction<Item>) => { 
             state.setItem = action.payload
             localStorage.setItem(action.payload.key.toString() , action.payload.value.toString())
             },

        clear : (state) => {
            localStorage.clear()
            state.clear = localStorage.length
            },

        removeItem: (state , action:PayloadAction<String>) =>{

            localStorage.removeItem(action.payload.toString())
            state.removeItem = action.payload + "removed" 
            
        },




       
    }
}
);

export const {
    getItem,
    getLength,
    setItem,
    clear,
    removeItem 
   } = StorageSlice.actions;

export default StorageSlice;