import { memo } from "react"
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { navActions } from "../../Store/navBarSlice"
import Modal from "../UI/Modal"
import Radium from 'radium'

function Header(props) {
  const loc = useLocation()
  const show = useSelector(state => state.nav.show)
  const sSearch = useSelector(state => state.nav.showSearch)
  const dispatch = useDispatch()

  const showNav = () => {
    dispatch(navActions.showNav())
  }

  const hideNav = () => {
    dispatch(navActions.hideShow())
  }

  const showSearch = () => {
    dispatch(navActions.searchShow())
  }

  return (
    <header>
        <div className="hamburger" onClick={showNav}>
          <div></div>
          <div></div>
        </div>

        <img src='./images/logo1.svg' alt='logo' />

        {show && <Modal hide={hideNav} />}
        <nav className={show ? 'navIn' : 'navOut'}>
        
          <ul>
            <li>
              <NavLink onClick={hideNav} to=''>
                  <img src={!loc.pathname.includes('/mycollection') ? '/images/Vectorhome.png' : './images/hover.svg'} alt='home' />
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hideNav} to='mycollection'>
                <img src={loc.pathname.includes('/mycollection') ? '/images/playlisthov.svg' : './images/playlist.svg'} alt='collection' />
                <p>My collection</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={{pointerEvents: 'none'}} to='/radio'>
                <img src='./images/Vectorradio.png' alt='radio' />
                <p>Radio</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={{pointerEvents: 'none'}} to='/video'>
                <img src='./images/videos4.svg' alt='music videos' />
                <p>Music videos</p>
              </NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <NavLink style={{pointerEvents: 'none'}} to='/profile'>
                <img src='./images/profile7.svg' alt='profile' />
                <p>Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink style={{pointerEvents: 'none'}} to='/logout'>
                <img src='./images/Logout8.svg' alt='logout' />
                <p>Log out</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="searchbar">
            <svg onClick={showSearch} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 0.25)'}}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>

            <input style={{display: sSearch ? 'block' : 'none', '@media (min-width: 768px)': {display: 'block'}}} onChange={props.searcher} value={props.value} type='text' name='search' placeholder='Search artist' />
        </div>
    </header>
  )
}

export default memo(Radium(Header))