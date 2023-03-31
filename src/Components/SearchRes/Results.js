import Res from "./Res"
import { useDispatch } from "react-redux"
import { navActions } from "../../Store/navBarSlice"

export default function Results(props) {
  const dispatch = useDispatch()
  
  return (
    <div className='Results'>
        {props.results.map(res => (
            <Res key={res.song.id} results={res} empty={props.empty} />
        ))}
    </div>
  )
}
