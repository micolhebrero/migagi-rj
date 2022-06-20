import { BsFillTrashFill } from 'react-icons/bs'
import {useCartContext} from "../../context/CartContext"

const Cart = () => {
    
    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()


   return(
       <div className='icon-container'>
           
           <h2>Tu compra</h2>
           {
            cart.map((item) => (
                <div key={item.id}>
                    <h5>{item.nombre}</h5>
                    <p>Cantidad: {item.cantidad}</p>
                    <h6>Precio: ${item.precio * item.cantidad}</h6>
                    <img src={item.img} alt={item.nombre} className="tarjeta__dos"/>
                    <button onClick={() => removeItem(item.id)} className="btn btn-secundary"><BsFillTrashFill/></button>
                </div>
            ))
           }

           <h4>TOTAL: ${totalPrice()}</h4>

           <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

       </div>
   )
}

export default Cart