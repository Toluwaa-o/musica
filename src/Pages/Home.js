import CurrentPlaylist from "../Components/Playlist/CurrentPlaylist/CurrentPlaylist"
import ChartSlide from "../Components/Playlist/Charts/ChartSlide"
import NewReleases from "../Components/NewReleases/NewReleases"
import Popular from "../Components/Popular/Popular"
import { memo, useEffect } from 'react'
import { playActions } from "../Store/playSlice"
import { useSelector, useDispatch } from "react-redux"

function Home() {
  const dispatch = useDispatch()
  const currSong = useSelector(state => state.play.audio)

  useEffect(() => {
    if(currSong.src !== null){
      localStorage.setItem('currSong', JSON.stringify(currSong))
    }
  }, [currSong])

  useEffect(() => {
    if(localStorage.getItem('currSong') !== null){
      dispatch(playActions.playAudio(JSON.parse(localStorage.getItem('currSong'))))
    }
  }, [])

  return (
    <div className="home">
    <CurrentPlaylist />
    <ChartSlide />
    <NewReleases />
    <Popular />
    </div>
  )
}

export default memo(Home)