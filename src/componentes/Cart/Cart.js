import { BsFillTrashFill } from 'react-icons/bs'
import {useCartContext} from "../../context/CartContext"
import EmptyCart from './EmptyCart'
import './Cart.scss'

const Cart = () => {
    
    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()

    if (cart.length === 0) return <EmptyCart/>


   return(
       <div className='icon-container'>
           
           <h2 className='compra'>Tu compra</h2>
           {
            cart.map((item) => (
                <div className='compra my-5' key={item.id}>
                    <h5 className='compra__nombre my-2'>{item.nombre}</h5>
                    <p className='compra__cantidad my-2'>Cantidad: {item.cantidad}</p>
                    <h6 className='compra__detalle my-2'>Precio: ${item.precio * item.cantidad}</h6>
                    <img src={item.img} alt={item.nombre} className="tarjeta__dos"/>
                    <button onClick={() => removeItem(item.id)} className="btn btn-outline-secondary my-3"><BsFillTrashFill/></button>
                </div>
            ))
           }

           <h4 className='mx-5'>Total: ${totalPrice()}</h4>

           <button onClick={emptyCart} className="btn btn-outline-danger mx-5">Vaciar carrito</button>

       </div>
   )
}

export default Cart