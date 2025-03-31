import { createSlice } from "@reduxjs/toolkit";

export const updateProductSlice = createSlice({
    name: 'updateHandler',
    initialState: { product: '  '},
    reducers:{
        setProducts: (state, action) =>{
            state.product = action.payload;
        },

        clearSelectedProducts: (state) => {
            state.product = null;
        }
    }
})

export const {setProducts, clearSelectedProducts} = updateProductSlice.actions;