import { useEffect, useState } from "react"
import Item from "../components/Item"
import { ItemType } from "../state/actions"

const ListItems = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://64481a437bb84f5a3e5270b3.mockapi.io/api/products")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className="listitems">
      <div>ListItems</div>
      {
        data.map((item: ItemType) => (
          <Item key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default ListItems