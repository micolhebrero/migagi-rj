import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'


const Counter = () => {

    let [contador, setContador] = useState(0)


    const incrementar = () => {

        setContador(contador + 1)
    }
    const disminuir = () => {

        setContador(contador - 1)
    }

    return (
        <div className="container my-5">
            <h2>Counter</h2>
            <Button onClick={incrementar}  variant="secondary">+</Button>{' '}
            <p>{contador}</p>
            <Button onClick={disminuir}  variant="secondary">-</Button>{' '}

        </div>
    )
}

export default Counter