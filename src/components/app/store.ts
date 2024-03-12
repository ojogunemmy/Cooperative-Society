import { configureStore } from "@reduxjs/toolkit";
import sideReducer from "./features/sideSlice"
import PageReducer from "./features/pageSlice";
import signupReducer from "./features/signupSlice";
import signinReducer from "./features/signinSlice"
import authReducer from "./features/authSlice";


const store = configureStore({
    reducer: {
       sidebar: sideReducer.reducer,
       page: PageReducer.reducer,
       signup: signupReducer.reducer,
       signin: signinReducer.reducer,
       authenticated: authReducer.reducer,
       
    }
  });


  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;