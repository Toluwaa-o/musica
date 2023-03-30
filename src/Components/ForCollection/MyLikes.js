import IndLike from "./ALike/IndividualLike"
import { useSelector } from "react-redux"

export default function MyLikes() {
  const likes = useSelector(state => state.collection.likes)

  return (
    <div className="mylikes">
      {likes.length > 0 && likes.map(x => (
        <IndLike key={x.id} cover={x.cover} title={x.title} artist={x.artist} src={x.audio} />
      ))}
    </div>
  )
}
