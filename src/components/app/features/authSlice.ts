import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UseAppSelector } from "../hooks";
import { RootState } from "../store";
import { entries } from "../../Signup";
import { randomInt, randomUUID } from "crypto";

interface AuthState{

    token:string,
    authorization:[]
}



const initialState : AuthState  = {

    token:"",
    authorization:[]

}

const authSlice = createSlice({
name:"Auth",
initialState,
reducers:{
    Auth: (state, action: PayloadAction<AuthState>) => {
        const data = UseAppSelector((state:RootState) => state.storage.getItem)
        const dataMap:entries = JSON.parse(data)
        
        state.token = dataMap.name+ dataMap.token
        
    }
}
});


export const { Auth } = authSlice.actions
export default authSlice

