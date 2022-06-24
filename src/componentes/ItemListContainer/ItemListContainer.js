import {useEffect, useState} from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams ()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("categoria", "==", categoryId))

        getDocs(q)
         .then((resp) => {
            const newItems = resp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log(newItems)
            setItems( newItems)
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




/* pedirDatos()
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
}) */