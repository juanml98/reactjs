import React, { useEffect, useState } from "react"
import { getProductosById } from "../../utils/productos";
import ItemDetail from "../itemDetail/itemDetail";



const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);
   
    useEffect(() => {
        getProductosById().then(response => {
            setProductos(response)
        })
    }, []);

    console.log('prueba')
    
    return (
        <div className='itemDetailContainer'>
            <ItemDetail title={productos?.descripcion} />
            </div>
    )
}


export default ItemDetailContainer;