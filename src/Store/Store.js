import { configureStore } from "@reduxjs/toolkit";
import { updateProduct, uiSlice, deleteProduct } from "./";
import { updateProductSlice } from "./";
import { updateEmployeeSlice } from "./";

export const Store =configureStore({
    reducer: {
        ui: uiSlice.reducer,
        updateModal: updateProduct.reducer,
        deleteModal: deleteProduct.reducer,
        updateHandler: updateProductSlice.reducer,
        updateEmployeeHandler: updateEmployeeSlice.reducer 
    }
})