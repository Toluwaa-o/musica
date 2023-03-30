import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
    name: 'play',
    initialState: {
        audio: {
            src: null,
            title: null,
            artist: null,
            duration: null,
            cover: null,
            playing: false,
            array: []
        }
    },
    reducers: {
        playAudio(state, action) {
            if(action.payload){
                state.audio = action.payload
            }
            
            state.audio.playing = !state.audio.playing
        }
    }
})

export const playActions = playSlice.actions

export default playSlice