import { createSlice } from "@reduxjs/toolkit";

const exChartSlice = createSlice({
    name: 'expanded',
    initialState: {
        currentPlaylist: null
    },
    reducers: {
        setCurrPlaylist (state, action){
            state.currentPlaylist = action.payload
        }
    }
})

export const exChartActions = exChartSlice.actions

export default exChartSlice