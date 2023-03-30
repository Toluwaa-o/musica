import { playActions } from "../../Store/playSlice"
import { useDispatch } from "react-redux"

export default function Res(props) {
  const dispatch = useDispatch()

  const clicked = () => {
    dispatch(playActions.playAudio({
      title: props.results.song.title,
      artist: props.results.song.artist,
      cover: props.results.song.cover,
      src: props.results.song.audio,
      duration: props.results.song.duration,
      array: props.results.array}))
  }
  return (
    <div onClick={clicked} className='Result-bar'>
            <img src={props.results.song.cover} alt='song' />

            <div>
                <h4>{props.results.song.title}</h4>
                <p>{props.results.song.artist}</p>
            </div>

            <p>{props.results.song.duration}</p>
        </div>
  )
}
