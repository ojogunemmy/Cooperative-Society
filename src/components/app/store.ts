import { configureStore } from "@reduxjs/toolkit";
import sideReducer from "./features/sideSlice"
import PageReducer from "./features/pageSlice";
import authReducer from "./features/authSlice";
import StorageSlice from "./features/localstorageSlice";


const store = configureStore({
    reducer: {
       sidebar: sideReducer.reducer,
       storage: StorageSlice.reducer,
       page: PageReducer.reducer,
       authenticated: authReducer.reducer,
       
    }
  });


  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;