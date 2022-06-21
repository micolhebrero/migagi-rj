import { Link } from "react-router-dom";

const EmptyCart= () => {

    return(
        <div className="container my-5">
            <h2>Tu carrito está vació</h2>

            <Link to="/" className="btn btn-secondary">Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart