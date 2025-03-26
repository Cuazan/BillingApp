import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: { isAddProductModalOpen: false },
    reducers: {
        onOpenAddProductModal: (state)=>{
            state.isAddProductModalOpen = true
        },
        onCloseModalOpen: (state) =>{
            state.isAddProductModalOpen = false
        }
    }
});

export const updateProduct = createSlice({
    name: 'updateModal',
    initialState: { isUpdateProductModalOpen: false },
    reducers: {
        onOpenUpdateProductModal: (state)=>{
            state.isUpdateProductModalOpen = true
        },
        onCloseUpdateModalOpen: (state) =>{
            state.isUpdateProductModalOpen = false
        }
    }
});

export const deleteProduct = createSlice({
    name: 'deleteModal',
    initialState: { isDeleteProductModalOpen: false},
    reducers: {
        onOpenDeleteProductModal: (state) =>{
            state.isDeleteProductModalOpen = true;
        },
        onCloseDeleteModalOpen: (state) =>{
            state.isDeleteProductModalOpen = false;
        }
    }    
})

export const { onOpenAddProductModal, onCloseModalOpen} = uiSlice.actions;
export const {onOpenUpdateProductModal, onCloseUpdateModalOpen}= updateProduct.actions;
export const { onOpenDeleteProductModal, onCloseDeleteModalOpen} = deleteProduct.actions;