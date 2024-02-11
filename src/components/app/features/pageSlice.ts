import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState{
    page : string;
}

const initialState : PageState = {
    page : "Home",
}

const PageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        // Sets your current page
        setPage: (state , action:PayloadAction<string>) => { state.page = action.payload },
       
    }
}
);

export const { setPage } = PageSlice.actions;
export default PageSlice;