import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "../../Store/uiSlice"

export default function Message() {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(uiActions.hideMessage())
        }, 1500)
    })
  return (
    <p className="message">Playlist successfully added to collection!</p>
  )
}
