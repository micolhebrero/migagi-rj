import { useNavigate } from "react-router-dom"
import Counter from "../Counter/Counter"
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
  const navigate = useNavigate()
 
  const handleVolver = () => {
    navigate(-1)
  }

    return(
        <div className="container my-5">
          <h2 className="tarjeta">{item.nombre}</h2>
          <img src={item.img} alt={item.nombre} className="tarjeta__dos"/>
          <p className="tarjeta__dos">{item.desc}</p>
          <h4 className="tarjeta__dos">Precio: ${item.precio}</h4>
          <Counter className="tarjeta__dos"
            max={item.stock}
          />
          <button onClick={handleVolver} className=" btn btn-secundary tarjeta__dos">Volver</button>
        </div>
    )

}

export default ItemDetail