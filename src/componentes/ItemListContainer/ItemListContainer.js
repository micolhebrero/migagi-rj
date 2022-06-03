import {useEffect, useState} from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { pedirDatos } from "../Mock/pedirDatos"


export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((resp) => {
            setItems( resp )
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <section>
            {
                loading
                ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>

                : <ItemList items={items}/>

            }
        </section>
    )
}