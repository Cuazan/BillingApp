import { createSlice } from "@reduxjs/toolkit";

export const updateEmployeeSlice = createSlice({
    name: 'updateEmployeeHandler',
    initialState: { employee: '  '},
    reducers:{
        setEmployees: (state, action) =>{
            state.employee = action.payload;
        },

        clearSelectedEmployee: (state) => {
            state.employee = null;
        }
    }
})

export const {setEmployees, clearSelectedEmployee} = updateEmployeeSlice.actions;