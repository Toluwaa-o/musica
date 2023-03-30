import { memo, useEffect, useState } from 'react'
import Slide from './Slide'

function ChartSlide() {
  
    const [playlist, setPlaylist] = useState(null)
    useEffect(() => {
        fetch('https://musica-api.up.railway.app/playlist')
        .then(res => res.json())
        .then(res => {
            setPlaylist(res)
        })
    }, [])
  return (
    <>
    {playlist ? <div className='top-charts'>
        <h2>Top charts</h2>
        <div className='ChartSlide'>
        {playlist.map(el => (
            <Slide full={el} key={el.id} cover={el.cover} title={el.title} />
            ))}
        </div>
    </div> : <div className="loader"></div>}
    </>
  )
}

export default memo(ChartSlide)