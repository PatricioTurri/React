import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer (){
    
    const [productos , setProductos] = useState ([])
    const parametro = useParams ()
    
    useEffect (()=>{
        if (parametro.id) {
            fetch ("https://dummyjson.com/products/category/" + parametro.id)
            .then ((res) =>{
                return res.json ()
            })
            .then ((data)=>{
                setProductos (data.products)
            })
        } else {
            fetch ("https://dummyjson.com/products")
            .then ((res) =>{
                return res.json ()
                })
            .then ((data)=>{
                setProductos (data.products)
            })}
    } , [parametro.id] )

    return (
        <ItemList productos={productos}/>
    )
}

export default ItemListContainer

