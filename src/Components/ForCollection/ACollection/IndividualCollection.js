import { useState } from "react"

export default function IndividualCollection(props) {
    const [x, setX] = useState(40)

    const hover = () => {
        setX(props.info.length)
    }

    const defaultHover = () => {
        setX(40)
    }


  return (
    <div className='ind-collection'>
        <img src={props.cover} alt='collection image' className='col-an' />
        <div className="collection-details">
            <h4>{props.title}</h4>
            <p onMouseLeave={defaultHover} onMouseOver={hover}>{props.info.slice(0, x)}{x === 40 ? '...' : null}</p>
        </div>

        <div className='play-btn'>
                {true ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M7 6v12l10-6z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>}
            </div>
    </div>
  )
}
