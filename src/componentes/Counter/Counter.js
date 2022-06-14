import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'


const Counter = ({max}) => {

    let [contador, setContador] = useState(1)

    const incrementar = () => {

        contador < max && setContador(contador + 1)
    }
    const disminuir = () => {

        contador > 1 && setContador(contador - 1)
    }

    return (
        <div className="container my-5">
        <Button onClick={disminuir}  variant="secondary">-</Button>{' '}
        <span> {contador} </span>
        <Button onClick={incrementar}  variant="secondary">+</Button>{' '}

        </div>
    )
}

export default Counter