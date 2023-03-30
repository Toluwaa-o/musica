import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
        <p>The page you are looking gor might have been removed, had its name changed or is temporarily unavailable!</p>

        <Link to='musica'>Home Page</Link>
        <Link to='mycollection'>My Collection</Link>
    </div>
  )
}
