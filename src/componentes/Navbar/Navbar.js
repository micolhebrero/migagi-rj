import './Navbar.scss'
import '../Cart/Cart'
import { Cart } from '../Cart/Cart'

export const Navbar = () => {


    return <header className="header">
     <div className="header__container">
        <h1 className="header__logo">MIGAGI TEJIDOS</h1>

        <nav className="header__navbar">
            <p className="header__navlink">Accesorios</p>
            <p className="header__navlink">Accesorios</p>
            <p className="header__navlink">Indumentaria</p>
            <p className="header__navlink">Deco</p>
            <Cart/>
            </nav>

     </div>
    </header>
}