import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SigninState{

    token:string,
    name:string,
    password:string,


}

const initialState : SigninState  = {

    token:"",
    name:"no name",
    password:"Lu14ytyai!",

}

const signinSlice = createSlice({
name:"Auth",
initialState,
reducers:{
    signin: (state, action: PayloadAction<SigninState>) => {}
}
}
);

export const { signin } = signinSlice.actions
export default signinSlice