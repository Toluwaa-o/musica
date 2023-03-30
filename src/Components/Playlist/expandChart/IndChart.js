import { useDispatch } from 'react-redux'
import { playActions } from '../../../Store/playSlice'

export default function IndChart({title, artist, cover, src, duration, array}) {
    const dispatch = useDispatch()
    const newSong = () => {
        dispatch(playActions.playAudio({title, artist, cover, src, duration, array}))
      }

  return (
    <div onClick={newSong} className='song'>
                <img src={cover} />
                <div className='song-middle'>
                    <p>{title}</p>
                    <p>{artist}</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: '#FACD66'}}><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    <p>{duration}</p>
                </div>
            </div>
  )
}
