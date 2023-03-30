import { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collectionActions } from '../../Store/CollectionSlice'
import { uiActions } from '../../Store/uiSlice'

function Expanded(props) {
    const dispatch = useDispatch()

    const hideEx = () => {
        dispatch(uiActions.dontexpand())
    }

    const currSong = useSelector(state => state.play.audio.src)

    const likes = useSelector(state => state.collection.likes)

    const [ liked, setLiked ] = useState(false)

    const addLike = () => {
        dispatch(collectionActions.updateLikes(songdeets))
        setLiked(prev => !prev)
    }

    useEffect(() => {
        if(likes.length > 0){
            for(let i = 0; i < likes.length; i++){
                if(likes[i].title === songdeets.title){
                    setLiked(true)
                    return
                }else {
                    setLiked(false)
                }
            }
        }else {
            setLiked(false)
        }
    }, [likes.length, currSong])

    const expand = useSelector(state => state.ui.expanded)

    const songdeets = useSelector(state => state.play.audio)
    
  return (
    <div className={`expanded ${expand ? 'in' : 'out'}`}>
        <div className='expanded-top'>
            <svg onClick={hideEx} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </div>

        <img src={songdeets.cover} />
        <div className='all-controls'>
            <div className='expanded-details'>
                <div>
                    <h5>{songdeets.title}</h5>
                    <p>{songdeets.artist}</p>
                </div>
                
                {!liked ? <svg onClick={addLike} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: ' #FACD66'}}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg> : <svg onClick={addLike} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: ' #FACD66'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>}
            </div>

            <div className='song-range'>
                <input aria-label='song-range' type='range' min='0' max='100' value={props.songDetails.value ? props.songDetails.value : 0}  onChange={props.adjust} />
                <p>0:00</p>
                <p>{songdeets.duration}</p>
            </div>
            <div className='expanded-controls'>
                <svg onClick={props.shuffle} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style={{fill: !props.songDetails.shuffle ? 'rgba(255, 255, 255, 1)': '#FACD66'}}><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>

                <svg onClick={props.prev} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg>

                <div onClick={props.player} className='play-btn'>
                    {!props.isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M7 6v12l10-6z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>}
                </div>

                <svg onClick={props.next} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{fill: 'rgb(255, 255, 255)'}}><path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg>

                <svg onClick={props.repeat} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style={{fill: !props.songDetails.repeat ? 'rgba(255, 255, 255, 1)' : '#FACD66'}}><path d="M16.242 17.242a6.04 6.04 0 0 1-1.37 1.027l.961 1.754a8.068 8.068 0 0 0 2.569-2.225l-1.6-1.201a5.938 5.938 0 0 1-.56.645zm1.743-4.671a5.975 5.975 0 0 1-.362 2.528l1.873.701a7.977 7.977 0 0 0 .483-3.371l-1.994.142zm1.512-2.368a8.048 8.048 0 0 0-1.841-2.859l-1.414 1.414a6.071 6.071 0 0 1 1.382 2.146l1.873-.701zm-8.128 8.763c-.047-.005-.094-.015-.141-.021a6.701 6.701 0 0 1-.468-.075 5.923 5.923 0 0 1-2.421-1.122 5.954 5.954 0 0 1-.583-.506 6.138 6.138 0 0 1-.516-.597 5.91 5.91 0 0 1-.891-1.634 6.086 6.086 0 0 1-.247-.902c-.008-.043-.012-.088-.019-.131A6.332 6.332 0 0 1 6 13.002V13c0-1.603.624-3.109 1.758-4.242A5.944 5.944 0 0 1 11 7.089V10l5-4-5-4v3.069a7.917 7.917 0 0 0-4.656 2.275A7.936 7.936 0 0 0 4 12.999v.009c0 .253.014.504.037.753.007.076.021.15.03.227.021.172.044.345.076.516.019.1.044.196.066.295.032.142.065.283.105.423.032.112.07.223.107.333.026.079.047.159.076.237l.008-.003A7.948 7.948 0 0 0 5.6 17.785l-.007.005c.021.028.049.053.07.081.211.272.433.538.681.785a8.236 8.236 0 0 0 .966.816c.265.192.537.372.821.529l.028.019.001-.001a7.877 7.877 0 0 0 2.136.795l-.001.005.053.009c.201.042.405.071.61.098.069.009.138.023.207.03a8.038 8.038 0 0 0 2.532-.137l-.424-1.955a6.11 6.11 0 0 1-1.904.102z"></path></svg>

                <div className='volume'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: ' #fff'}}><path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path><path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"></path></svg>

                    <input type='range' name='volume' min='0' max='10' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Expanded)