import Res from "./Res"

export default function Results(props) {
  return (
    <div className='Results'>
        {props.results.map(res => (
            <Res key={res.song.id} results={res} />
        ))}
    </div>
  )
}
