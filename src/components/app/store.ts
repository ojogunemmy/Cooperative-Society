import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/counterSlice"
import PageReducer from "./features/pageSlice";
import signupReducer from "./features/signupSlice";
import signinReducer from "./features/signinSlice"
import authReducer from "./features/authSlice";


const store = configureStore({
    reducer: {
       counter: counterReducer.reducer,
       page: PageReducer.reducer,
       signup: signupReducer.reducer,
       signin: signinReducer.reducer,
       authenticated: authReducer.reducer,
       
    }
  });


  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;