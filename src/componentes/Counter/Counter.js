import { useState } from "react"
import Button from 'react-bootstrap/Button'


const Counter = ( {max, setContador, contador, handleAgregar} ) => {


    const incrementar = () => {

        contador < max && setContador(contador + 1)
    }
    
    const disminuir = () => {

        contador > 1 && setContador(contador - 1)
    }

    return (
        <div className="container my-5">
        <Button onClick={disminuir}  variant="secondary">-</Button>
        <span> {contador} </span>
        <Button onClick={incrementar}  variant="secondary">+</Button>

        <hr/>

        <Button onClick={handleAgregar} className="btn btn-success">Agregar al carrito</Button>

        </div>
    )
}

export default Counter