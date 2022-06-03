import Item from "../Item/Item"

const ItemList = ({items}) => {

    return(
         <div>
            <h2>Nuestros Productos</h2>
            <hr/>

             {
                items.map((item) => <Item item={item}/>)
             }
         </div>
    )
}

export default ItemList