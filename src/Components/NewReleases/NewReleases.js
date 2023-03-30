import { memo, useState, useEffect } from 'react'
import New from './New'

function NewReleases() {
    const [newSong, setNewSong] = useState(null)

    useEffect(() => {
        fetch('https://musica-api.up.railway.app/new')
        .then(res => res.json())
        .then(res => setNewSong(res))
    }, [])

  return (
    <>
    {newSong ? <div className='new-releases'>
        <h2>New releases</h2>
        <div className='new-releases-slide'>
            {newSong.map(song => <New key={song.id} artist={song.artist} title={song.title} cover={song.cover} duration={song.duration} src={song.audio} array={newSong} />)}
        </div>
    </div> : <div className="loader"></div>}
    </>
  )
}

export default memo(NewReleases)