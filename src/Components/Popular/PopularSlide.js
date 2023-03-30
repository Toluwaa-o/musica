import {useDispatch} from 'react-redux'
import { playActions } from '../../Store/playSlice'

export default function PopularSlide({title, artist, cover, src, duration, array}) {
  const dispatch = useDispatch()

  const newSong = () => {
    dispatch(playActions.playAudio({title, artist, cover, src, duration, array}))
  }

  return (
    <div onClick={newSong} className='popular-card'>
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
