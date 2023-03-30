import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { exChartActions } from "../../../Store/ExpandedPlaylist"
import { Link } from 'react-router-dom'

export default function Slide(props) {
  const dispatch = useDispatch()

  const collection = useSelector(state => state.collection.collection)

    const [ liked, setLiked ] = useState(false)

    useEffect(() => {
        if(collection.length > 0){
            for(let i = 0; i < collection.length; i++){
                if(collection[i].title === props.title){
                    setLiked(true)
                    return
                }else {
                    setLiked(false)
                }
            }
        }else {
            setLiked(false)
        }
    }, [collection.length])

  const selPlaylist = () => {
    dispatch(exChartActions.setCurrPlaylist({...props.full}))
  }

  return (
    <Link to='expanded'>
      <div className='chart' onClick={selPlaylist}>
              <div className='left'>
                  <img src={props.cover} alt='chart' />
                  <h3>{props.title}</h3>
              </div>
              <div className='right'>
                  {liked ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{fill: '#FACD66'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{fill: '#FACD66'}}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>}
              </div>
      </div>
    </Link>
  )
}
