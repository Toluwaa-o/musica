import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        show: false,
        showSearch: false
    },
    reducers: {
        hideShow (state) {
            state.show = false
        },

        showNav (state) {
            state.show = true
        },
        searchShow (state) {
            state.showSearch = !state.showSearch
        }
    }
})

export const navActions = navSlice.actions
export default navSlice