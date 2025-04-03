import { configureStore } from "@reduxjs/toolkit";
import { updateProduct, uiSlice, deleteProduct } from "./";
import { updateEmployeeSlice, productsToSell, updateProductSlice } from "./";

export const Store =configureStore({
    reducer: {
        ui: uiSlice.reducer,
        updateModal: updateProduct.reducer,
        deleteModal: deleteProduct.reducer,
        updateHandler: updateProductSlice.reducer,
        updateEmployeeHandler: updateEmployeeSlice.reducer, 
        productHandler: productsToSell.reducer
    }
})