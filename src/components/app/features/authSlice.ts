import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    Auth: (state, action: PayloadAction<AuthState>) => {}
}
});


export const { Auth } = authSlice.actions
export default authSlice

