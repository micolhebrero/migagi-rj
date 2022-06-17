import {BsMinecartLoaded} from 'react-icons/bs'
import { BsFillTrashFill } from 'react-icons/bs'
import useCartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'
import EmptyCart from "./EmptyCart"

const Cart = () => {
    
    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()

    if (cart.length === 0) return <EmptyCart/>

   return(
       <div className='icon-container'>
           <div className="cart" target="_blank">
           <BsMinecartLoaded/>
           <h2>Tu compra</h2>
           {
            cart.map((item) => (
                <div key={item.id}>
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                </div>
            ))
           }
           <h4>TOTAL: ${totalPrice()}</h4>
           <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

           </div>
       </div>
   )
}