import { Outlet } from "react-router"
import Header from '../Components/Header/Header'
import PlayingBar from "../Components/Playing/PlayingBar"
import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Message from "../Components/UI/Message"
import Results from "../Components/SearchRes/Results"

function Page() {
  const showMessage = useSelector(state => state.ui.showMessage)
  const sSearch = useSelector(state => state.nav.showSearch)

  const currSong = useSelector(state => state.play.audio)

  const [allSongs, setAllSongs] = useState({
    new: null,
    popular: null,
    playlists: null,
    results: [],
    value: ''
  })

  useEffect(() => {
      fetch('https://musica-api.up.railway.app/new')
        .then(res => res.json())
        .then(res => setAllSongs(prev => ({
          ...prev, new: res
        })))
  }, [])

  useEffect(() => {
    fetch('https://musica-api.up.railway.app/popular')
    .then(res => res.json())
    .then(res => setAllSongs(prev => ({
      ...prev, popular: res
    })))
}, [])

  useEffect(() => {
    fetch('https://musica-api.up.railway.app/playlist')
    .then(res => res.json())
    .then(res => setAllSongs(prev => ({
      ...prev, playlists: res
    })))
  }, [])

  const searcher = (e) => {
    setAllSongs(prev => ({
      ...prev, value: e.target.value, results: []
    }))

    allSongs.new.forEach(song => {
      if(song.title.toLowerCase().includes(String(e.target.value.toLowerCase()))){
        for(let j = 0; j < allSongs.results.length; j++){
          if(allSongs.results[j].title === song.title){
            return
          }
        }
        setAllSongs(prev => ({
          ...prev, results: [...prev.results, {song: song, array: allSongs.new}]
        }))
      }
    });

    allSongs.popular.forEach(song => {
      if(song.title.toLowerCase().includes(String(e.target.value.toLowerCase()))){
        for(let j = 0; j < allSongs.results.length; j++){
          if(allSongs.results[j].title === song.title){
            return
          }
        }
        setAllSongs(prev => ({
          ...prev, results: [...prev.results, {song: song, array: allSongs.popular}]
        }))
      }
    });

    allSongs.playlists.forEach(playlist => {
      for(let i = 0; i < playlist.files.length; i++){
        if(playlist.files[i].title.toLowerCase().includes(String(e.target.value.toLowerCase()))){
          for(let j = 0; j < allSongs.results.length; j++){
            if(allSongs.results[j].title === playlist.files[i].title){
              return
            }
          }
          setAllSongs(prev => ({
            ...prev, results: [...prev.results, {song: playlist.files[i], array: playlist.files}]
          }))
        }
      }
    });

    if(e.target.value === ''){
      setAllSongs(prev => ({
        ...prev, results: []
      }))
    }
  }

  useEffect(() => {
    if(allSongs.results.length > 1){
      let newRes = allSongs.results

    for(let i = 0; i < newRes.length; i++){
      for(let j = i+1; j < newRes.length; j++){
        if(newRes[j].song.title === newRes[i].song.title){
          newRes.splice(j, 1)
        }else {
          continue
        }
      }
    }

    if(!sSearch){
      setAllSongs(prev => ({
        ...prev, results: []
      }))
    }

    setAllSongs(prev => ({
      ...prev, results: newRes
    }))
  }
  }, [allSongs.results])

  useEffect(() => {
    if(!sSearch){
      setAllSongs(prev => ({
        ...prev, results: [], value: ''
      })
  )}
  }, [sSearch])

  const emptyRes = () => {
    setAllSongs(prev => ({
      ...prev, results: [], value: ''
    }))
  }

  return (
    <>
        <Header value={allSongs.value} searcher={searcher} />
        {allSongs.results.length > 0 && <Results 
              results={allSongs.results}
              empty={emptyRes}
              />}
        {showMessage && <Message />}

        <main>
            <Outlet />
        </main>

        {currSong.src !== null && <PlayingBar />}
    </>
  )
}

export default memo(Page)