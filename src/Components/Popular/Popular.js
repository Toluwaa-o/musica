import { memo, useEffect, useState } from 'react'
import PopularSlide from './PopularSlide'

function Popular() {
    const [popular, setPopular] = useState(null)

    useEffect(() => {
        fetch('https://musica-api.up.railway.app/popular')
        .then(res => res.json())
        .then(res => setPopular(res))
    }, [])
  return (
    <>
        {popular ? <div className='popular'>
            <h2>Popular in your area</h2>
            <div className='popular-slide'>
                {popular.map(pop => <PopularSlide key={pop.id} artist={pop.artist} title={pop.title} cover={pop.cover} duration={pop.duration} src={pop.audio} array={popular} /> )}
            </div>
        </div> : <div className="loader"></div>}
    </>
  )
}

export default memo(Popular)