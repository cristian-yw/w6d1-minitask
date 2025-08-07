import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form: []
}

const formSlice = createSlice({
    initialState,
    name: "form",
    reducers: {
    addData: (state, action) => {
      state.form.push(action.payload);
      
    },
    removeData: (state, action) => {
       state.form = state.form.filter(item => item.id !== action.payload);
    },
  },
})

export const { addData, removeData } = formSlice.actions;
export default formSlice.reducer;