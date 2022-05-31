import React, { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import productos from "../../utils/productos";
import ItemList from "../itemList/itemList";
import style from '../itemListContainer.module.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, productos)
        .then(resultado => setItems(resultado))
    }, [items]);

    console.log(items)
    
    return (
        <div className={style.container}>
            <ItemList productos={items}/>
            </div>
    )
}

export default ItemListContainer