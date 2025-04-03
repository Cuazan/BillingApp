import { createSlice } from "@reduxjs/toolkit";

export const productsToSell = createSlice({
    name: "productHandler",
    initialState: {
        libraries: []
    },
    reducers: {
        addProd: (state, action) =>{
            state.libraries.push(action.payload);
        }
    }
})

export const { addProd } = productsToSell.actions;