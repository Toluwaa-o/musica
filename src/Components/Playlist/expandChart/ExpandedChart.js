import { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { collectionActions } from '../../../Store/CollectionSlice'
import Back from '../../Back to home/Back'
import IndChart from './IndChart'
import PlayLi from '../../../images/playlisthov.svg'
import { uiActions } from '../../../Store/uiSlice'
import { playActions } from '../../../Store/playSlice'

function ExpandedChart() {
    const currPlaylist = useSelector(state => state.expanded.currentPlaylist)

    const collection = useSelector(state => state.collection.collection)

    const [ liked, setLiked ] = useState(false)

    useEffect(() => {
        if(collection.length > 0){
            for(let i = 0; i < collection.length; i++){
                if(collection[i].title === currPlaylist.title){
                    setLiked(true)
                    return
                }else {
                    setLiked(false)
                }
            }
        }else {
            setLiked(false)
        }
    }, [collection])

    const dispatch = useDispatch()

    const addToCollection = () => {
        dispatch(collectionActions.updateCollection({...currPlaylist}))
        setLiked(prev => !prev)
        {!liked && dispatch(uiActions.showTheMessage())}
    }

    const playAll = () => {
        dispatch(playActions.playAudio({
            title: currPlaylist.files[0].title, 
            artist: currPlaylist.files[0].artist, 
            cover: currPlaylist.files[0].cover, 
            src: currPlaylist.files[0].audio, 
            duration: currPlaylist.files[0].duration, 
            array: currPlaylist.files}))
      }

  return (
    <>
    <Back />
    {currPlaylist && <div className='ExpandedChart'>
        <img src={currPlaylist.cover} alt='cover photo' />

        <div className='chartDetails'>
            <h2>{currPlaylist.title}</h2>
            <p>{currPlaylist.info}</p>
            <p>{currPlaylist.files.length} songs</p>

            <div className='rounded-buttons'>
                <div>
                    <div onClick={playAll}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 0.7)'}}><path d="M7 6v12l10-6z"></path></svg>
                    </div>
                    <p>Play all</p>
                </div>

                <div onClick={addToCollection}>
                <img src={PlayLi} alt='collection' />
                <p>{liked ? 'Added to collection' : 'Add to collection'}</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: 'red'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                    <p>Like</p>
                </div>
            </div>
        </div>

        <div className='chart-songs'>
            {currPlaylist.files.map(file => {
                return (
                    <IndChart 
                        key={file.id} 
                        title={file.title} 
                        artist={file.artist} 
                        cover={file.cover} 
                        src={file.audio} 
                        duration={file.duration}
                        array={currPlaylist.files} />
                )
            })}      
        </div>
    </div>}
    </>
  )
}

export default memo(ExpandedChart)