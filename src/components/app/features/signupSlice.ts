import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState{

        token:string,
        name:string,
        email:string,
        password:string,
        confirmPassword:string
    

}



const initialState : SignupState  = {
    
        token:"",
        name:"no name",
        email:"noname@mail.com",
        password:"Lu14ytyai!",
        confirmPassword:"Lu14ytyai!"

   
}

const createAccountSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        signup: (state, action: PayloadAction<SignupState>) => {}
    }
}
);



export const { signup } = createAccountSlice.actions;
export default createAccountSlice;