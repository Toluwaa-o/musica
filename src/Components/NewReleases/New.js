import {useDispatch} from 'react-redux'
import { playActions } from '../../Store/playSlice'

export default function New({title, artist, cover, src, duration, array}) {
  const dispatch = useDispatch()

  const newSong = () => {
    dispatch(playActions.playAudio({title, artist, cover, src, duration, array}))
  }

  return (
    <div onClick={newSong} className='new-release'>
            <img src={cover} />
            <h3>
                {title}
            </h3>
            <p>
                {artist}
            </p>
        </div>
  )
}
