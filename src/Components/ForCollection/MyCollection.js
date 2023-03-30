import IndividualCollection from "./ACollection/IndividualCollection"
import { useSelector } from "react-redux"

export default function MyCollection() {
  const collection = useSelector(state => state.collection.collection)

  return (
    <div className="myCollection">
      {collection.length > 0 && collection.map(x => (
        <IndividualCollection key={x.id} cover={x.cover} title={x.title} info={x.info} full={x} />
      ))}
    </div>
  )
}
