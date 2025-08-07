import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice';
import formReducer from './slices/formSlice';

const store = configureStore({
    reducer: {  
        todos: todoReducer,
        form: formReducer
    }
})

export default store;