import { configureStore } from "@reduxjs/toolkit";
import { updateProduct, uiSlice } from "./";

export const Store =configureStore({
    reducer: {
        ui: uiSlice.reducer,
        updateModal: updateProduct.reducer
    }
})