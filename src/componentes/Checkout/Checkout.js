import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import EmptyCart from "../Cart/EmptyCart"



const Checkout = () => {

    const { cart, totalPrice } = useCartContext()

    const [orderId, setOrderID] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("nombre no valido")
            return
        }
        if (values.email.length < 5) {
            alert("El email es inválido")
            return
        }
        if (values.direccion.length < 5) {
            alert("la dirección es incorrecta")
            return
        }

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalPrice()
        }
        const batch = writeBatch(db)
        const productosRef = collection(db, "producto")
        const ordersRef = collection(db, "orders")
        const q = query(productosRef, where(documentId (), 'in', cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })

            } else {
                outOfStock.push(itemToUpdate)
            }

        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
              .then((doc) => {
                batch.commit()
                setOrderID(doc.id)
                EmptyCart()
               })
        } else {
            console.log(outOfStock)
            alert("hay items sin stock")
        }


    }

    if (orderId) {
        return(
            <div className="container my-5">
            <h2>Gracias por su compra!</h2>

            <p>Su número de orden es: {orderId}</p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return(
        <div className="container my-5">
         <h2>Checkout</h2>

         <form onSubmit={handleSubmit}>
         <input
            value={values.nombre}
            name="nombre"
            onChange={handleInputChange}
            type={"text"}
            placeholder= "Nombre"
            className="form-control my-2"
         />
          <input
            value={values.email}
            name="email"
            onChange={handleInputChange}
            type={"text"}
            placeholder= "email@example.com"
            className="form-control my-2"
         />
          <input
            value={values.direccion}
            name="direccion"
            onChange={handleInputChange}
            type={"text"}
            placeholder= "Tu dirección"
            className="form-control my-2"
         />

         <button type="submit" className="btn btn-secondary">Enviar</button>
         </form>

        </div>
    )
}

export default Checkout