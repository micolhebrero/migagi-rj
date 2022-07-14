import './Navbar.scss'
import '../Cart/Cart'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {


    return <header className="header">
     <div className="header__container">
     <img src="../imagenes/logo.png" alt='logo' className='header__logo'/>
        <nav className="header__navbar">
            <Link to={"/categorias/indumentaria"} className="header__navlink">Indumentaria</Link>
            <Link to={"/categorias/accesorios"} className="header__navlink">Accesorios</Link>
            <Link to={"/categorias/deco"} className="header__navlink">Deco</Link>
            <Link to={"/nosotros"} className="header__navlink">Nosotros</Link>
            <Link to={"/contacto"} className="header__navlink">Contacto</Link>
            </nav>

            <CartWidget/>

     </div>
    </header>
}