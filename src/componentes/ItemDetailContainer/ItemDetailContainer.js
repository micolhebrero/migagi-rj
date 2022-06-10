
import {useEffect, useState} from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { pedirDatos } from "../Mock/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    console.log(itemId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((resp) => {
            setItems( resp.find((item) => item.id === Number(itemId)))
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

                : <ItemDetail/>

            }
        </section>
    )
}