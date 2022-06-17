import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartContext, {useCartContext} from '../../context/CartContext'

const CartWidget = () => {

    const {totalQuantity} = useCartContext(CartContext)
    
    return(
        <Link to="/cart" className={`widget ${totalQuantity() === 0 ? 'widget-hidden' : ''}`}>
            <BsFillCartPlusFill/>
            <span>{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget
