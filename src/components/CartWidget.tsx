import { useSelector } from "react-redux"
import { State } from "../state"

const CartWidget = () => {
  const cart = useSelector((store: State) => store.cart)

  console.log("Debug: ", cart.items)

  return (
    <div className="cartwidget">
      <div>CartWidget</div>
      <div>Cantidad de productos en el carrito: { cart.itemQty }</div>
      {/* <div>Productos en el carrito: { JSON.stringify(cart.items) }</div> */}
    </div>
  )
}

export default CartWidget