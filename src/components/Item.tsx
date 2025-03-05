import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../state"
import { ItemType } from "../state/actions"

const Item = ({ item }: {item: ItemType}) => {
  const dispatch = useDispatch()
  const { addProduct, removeProduct } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="item">
      <div>{item.nombre}</div>
      <div><button onClick={() => addProduct(item)}>Add to cart</button></div>
      <div><button onClick={() => removeProduct(item)}>Remove from cart</button></div>
    </div>
  )
}

export default Item