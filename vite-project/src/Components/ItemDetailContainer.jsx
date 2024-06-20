import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
   
    const [detalle , setDetalle] = useState ({})
    const parametr = useParams ()
    
    useEffect(() => {
        fetch("https://dummyjson.com/products/" + parametr.id)
        .then ((res)=>{
            return res.json()
        })
        .then ((data)=>{
            setDetalle (data)
        })
    } , [parametr.id])

   
   
    return (
        <ItemDetail datalle={detalle}/>
    )
}  

export default ItemDetailContainer;