import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Page from './Page'
import { memo } from 'react'
import Collection from '../Pages/Collection'
import ExpandedChart from '../Components/Playlist/expandChart/ExpandedChart'
import MyCollection from '../Components/ForCollection/MyCollection'
import MyLikes from '../Components/ForCollection/MyLikes'
import Error from '../Pages/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/musica' element={<Page />}>
      <Route index element={<Home />} />
      <Route path='expanded' element={<ExpandedChart />} />
      <Route path='mycollection' element={<Collection />}>
        <Route index element={<MyCollection />} />
        <Route path='likes' element={<MyLikes />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {
  return (
          <RouterProvider router={router} />
  )
}

export default memo(App)