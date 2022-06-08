import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"
import './Item.scss'

const Item = ({item}) => {
    let [contador, setContador] = useState(0)


    const incrementar = () => {

        setContador(contador + 1)
    }
    const disminuir = () => {

        setContador(contador - 1)
    }
        return(
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" key={item.id}>
              <div class="card h-100">
                <img src={item.img} class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">{item.nombre}</h4>
                  <p class="card-text">{item.desc}</p>
                  <h5>Precio: ${item.precio}</h5>
                  <Button variant="secondary" onClick={incrementar}>+</Button>{' '}<i className='container'>0</i><Button variant="secondary" onClick={disminuir}>-</Button>{' '}
                </div>
              </div>
            </div>
            <div class="col" key={item.id}>
              <div class="card h-100">
                <img src={item.img} class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">{item.nombre}</h4>
                  <p class="card-text">{item.desc}</p>
                  <h5>Precio: ${item.precio}</h5>
                  <Button variant="secondary" onClick={incrementar}>+</Button><i className='container'>0</i><Button variant="secondary" onClick={disminuir}>-</Button>
                </div>
              </div>
            </div>
            <div class="col" key={item.id}>
              <div class="card h-100">
                <img src={item.img} class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">{item.nombre}</h4>
                  <p class="card-text">{item.desc}</p>
                  <h5>Precio: ${item.precio}</h5>
                  <Button variant="secondary" onClick={incrementar}>+</Button><i className='container'>0</i><Button variant="secondary" onClick={disminuir}>-</Button>
                </div>
              </div>
            </div>
          </div>
        )
}

export default Item