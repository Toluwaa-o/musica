import { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { collectionActions } from '../Store/CollectionSlice'

function Collection() {
  const loc = useLocation()
  const collectionLikes = useSelector(state => state.collection)
  const dispatch = useDispatch()

  useEffect(() => {
    if(collectionLikes.collection.length > 0){
      localStorage.setItem('collection', JSON.stringify(collectionLikes.collection))
    }

    if(collectionLikes.likes.length > 0){
      localStorage.setItem('likes', JSON.stringify(collectionLikes.likes))
    }
    
  }, [collectionLikes.collection, collectionLikes.likes])

  useEffect(() => {
    if(localStorage.getItem('collection') !== null){
      dispatch(collectionActions.updateCollectionLoad(JSON.parse(localStorage.getItem('collection'))))
    }

    if(localStorage.getItem('likes') !== null){
      dispatch(collectionActions.updateLikesLoad(JSON.parse(localStorage.getItem('likes'))))
    }

  },[])

  return (
    <div className='collection'>
      <nav>
        <Link className={!loc.pathname.includes('likes') ? 'active' : null} to=''>My Collection</Link>
        <Link className={loc.pathname.includes('likes') ? 'active' : null} to='likes'>Likes</Link>
      </nav>
      <Outlet />
    </div>
  )
}
export default memo(Collection)