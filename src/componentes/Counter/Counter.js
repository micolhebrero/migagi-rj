import { useState } from "react"
import Button from 'react-bootstrap/Button'


const Counter = ( {max, setContador, contador, handleAgregar} ) => {


    const incrementar = () => {

      contador < max && setContador(contador + 1)
    }

    const disminuir = () => {

        contador > 1 && setContador(contador - 1)
    }
    const btnRestarConfig = {
        onClick: disminuir,
        className: `btn mx-1 ${contador === 0 ? "btn-outline-danger" : "btn-outline-primery"} ${contador === 1 ? "min-value" : ''}`,
        disabled: contador === 0
    }
    if(max === 0){
        return(
            <div className="my-3">
                <p>No Hay Stock de Este Producto</p>
            </div>
        )
    }

    return (
        <div className="container my-5">
        {/*  <Button onClick={disminuir}  variant="secondary">-</Button> */}
         <Button {...btnRestarConfig}>
            -
         </Button>
         <span> {contador} </span>
         <Button
          onClick={incrementar}
          className={contador === max ? "btn mx-1 btn-danger" : "btn mx-1 btn-primary"}
          disabled={contador === max}
         >
         +
         </Button>
         {/* <Button onClick={incrementar}  variant="secondary">+</Button> */}
         
         <hr/>

         {/* <Button onClick={handleAgregar} className="btn btn-success">Agregar al carrito</Button> */}
         <Button disabled={contador === 0} onClick={handleAgregar} className="btn btn-success">Agregar al carrito</Button>

        </div>
    )
}

export default Counter