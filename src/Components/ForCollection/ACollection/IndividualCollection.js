import { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { exChartActions } from "../../../Store/ExpandedPlaylist"

export default function IndividualCollection(props) {
    const [x, setX] = useState(40)

    const dispatch = useDispatch()

    const hover = () => {
        setX(props.info.length)
    }

    const defaultHover = () => {
        setX(40)
    }

    const expandPlaylist = () => {
        dispatch(exChartActions.setCurrPlaylist(props.full))
    }


  return (
    <div onClick={expandPlaylist} className='ind-collection'>
        <Link to='/musica/expanded'>
        <img src={props.cover} alt='collection image' className='col-an' />
        <div className="collection-details">
            <h4>{props.title}</h4>
            <p onMouseLeave={defaultHover} onMouseOver={hover}>{props.info.slice(0, x)}{x === 40 ? '...' : null}</p>
        </div>

        <div className='play-btn'>
                {true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M7 6v12l10-6z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>}
            </div>
        </Link>
    </div>
  )
}
