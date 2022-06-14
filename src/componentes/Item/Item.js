import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.scss'
import { Link } from 'react-router-dom';

const Item = ({item}) => {

        return(
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col' key={item.id}>
              <div className='card mx-4 my-4'>
                <img src={item.img} className='card-img-top' alt="" />
                <div className='card-body'>
                  <h4 className='card-title'>{item.nombre}</h4>
                  <h5>Precio: ${item.precio}</h5>
                  <Link to={`/item/${item.id}`}>
                    <button className='btn btn-secundary my-2'>Ver más</button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
        )
}

export default Item









/* 
<div className='row row-cols-1 row-cols-md-3 g-4'>
<div className='col' key={item.id}>
  <div className='card mx-4 my-4'>
    <img src={item.img} className='card-img-top' alt="" />
    <div className='card-body'>
      <h4 className='card-title'>{item.nombre}</h4>
      <p className='card-text'>{item.desc}</p>
      <h5>Precio: ${item.precio}</h5>
      <Counter/>
    </div>
  </div>
</div>
</div> */