import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collection: [],
        likes: []
    },
    reducers: {
        updateCollection(state, action){
            if(state.collection.length === 0){
                state.collection = [...state.collection, action.payload]
                return
            }

            for(let i = 0; i < state.collection.length; i++){
                if(state.collection[i].title === action.payload.title){
                    state.collection.splice(i, 1)
                }else {
                    state.collection = [...state.collection, action.payload]
                    return
                }
            }
        },
        updateLikes(state, action){
            if(state.likes.length === 0){
                state.likes = [...state.likes, action.payload]
                return
            }

            for(let i = 0; i < state.likes.length; i++){
                if(state.likes[i].title === action.payload.title){
                    state.likes.splice(i, 1)
                }else{
                    state.likes = [...state.likes, action.payload]
                    return
                }
            }
        },
        updateCollectionLoad(state, action){
            state.collection = action.payload
        },
        updateLikesLoad(state, action){
            state.likes = action.payload
        }
}
})

export const collectionActions = collectionSlice.actions

export default collectionSlice