import { createSlice } from "@reduxjs/toolkit";

export const productsToSell = createSlice({
    name: "productHandler",
    initialState: {
        libraries: []
    },
    reducers: {
        addProd: (state, action) =>{
            state.libraries.push(action.payload);
        },
        removeProd: (state, action) => {
            state.libraries = state.libraries.filter(prod => prod.id !== action.payload);
        }
    }
})

export const { addProd, removeProd } = productsToSell.actions;