import { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import { exChartActions } from '../../../Store/ExpandedPlaylist'

function CurrentPlaylist() {
  const currPlaylist = useSelector(state => state.expanded.currentPlaylist)
  const dispatch = useDispatch()

  useEffect(() => {
    if(currPlaylist){
      localStorage.setItem('currPlaylist', JSON.stringify(currPlaylist))
    }
  }, [currPlaylist])

  useEffect(() => {
    if(localStorage.getItem('currPlaylist') !== null){
      dispatch(exChartActions.setCurrPlaylist(JSON.parse(localStorage.getItem('currPlaylist'))))
    }
  }, [])
  
  return (
    <>
    {currPlaylist && <div className='current-playlist' style={{background: `url(${currPlaylist.cover})`, backgroundSize: 'cover', 
    '@media (min-width: 768px)': {backgroundSize: 'cover'},
    backgroundColor: '#A4C7C6'
    }}>
    <Link to='expanded'>
        <p>Current playlist</p>
        <div className='playist-description'>
            <h1>{currPlaylist.title}</h1>
            <p>
              {currPlaylist.info}
            </p>
        </div>
        <div className='current-playlist-bottom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>

            <p>30k+ Likes</p>
        </div>
        </Link>
    </div>}
    </>
  )
}

export default memo(Radium(CurrentPlaylist))