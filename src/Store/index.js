import {configureStore} from '@reduxjs/toolkit'
import collectionSlice from './CollectionSlice'
import exChartSlice from './ExpandedPlaylist'
import navSlice from './navBarSlice'
import playSlice from './playSlice'
import uiSlice from './uiSlice'


const store = configureStore({
    reducer: {
        nav: navSlice.reducer,
        ui: uiSlice.reducer,
        play: playSlice.reducer,
        expanded: exChartSlice.reducer,
        collection: collectionSlice.reducer
    }
})

export default store