import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        expanded: false,
        showMessage: false
    },
    reducers: {
        expand(state) {
            state.expanded = true
        },
        dontexpand(state) {
            state.expanded = false
        },
        showTheMessage(state) {
            state.showMessage = true
        },
        hideMessage(state) {
            state.showMessage = false
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice