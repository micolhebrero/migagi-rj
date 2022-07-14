import './Contacto.scss'
import { BsFacebook, BsInstagram, BsWhatsapp  } from 'react-icons/bs'
import { Link } from "react-router-dom";



const Contacto = () => {
    return(
        <div>
            <h2></h2>

            <p className='container' >Nos podes encontrar en: </p>
            <a href="https://www.facebook.com" target="_blank" className='container__linkUno'><BsFacebook/></a>
            <a href="https://www.instagram.com/migagitejidos" target="_blank" className='container__linkDos'><BsInstagram/> </a>
            <a href="https://www.whatsapp.com" target="_blank" className='container__linkTres'><BsWhatsapp/> </a>
        </div>
    )
}

export default Contacto