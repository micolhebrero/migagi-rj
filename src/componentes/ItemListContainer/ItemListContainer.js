import {useEffect, useState} from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../Mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams ()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((resp) => {
            if (!categoryId) {
                setItems( resp )
            } else {
                setItems( resp.filter((item) => item.categoria === categoryId) )
            }
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

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
