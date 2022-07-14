import './Contacto.scss'
import { BsFacebook, BsInstagram, BsWhatsapp  } from 'react-icons/bs'




const Contacto = () => {
    return(
        <div>
            <h2></h2>

            <p className='cont' >Nos podes encontrar en: </p>
            <a href="https://www.facebook.com" target="_blank" className='cont__liUno'><BsFacebook/></a>
            <a href="https://www.instagram.com/migagitejidos" target="_blank" className='cont__liDos'><BsInstagram/> </a>
            <a href="https://www.whatsapp.com" target="_blank" className='cont__liTres'><BsWhatsapp/> </a>
        </div>
    )
}

export default Contacto