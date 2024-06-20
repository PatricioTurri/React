import { Link } from "react-router-dom"


function ItemList ({productos}){
    return (
            <section className="grid grid-cols-1 gap-8 pad-8 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                {productos.map ((x,y)=>{
                    return (
                        <article key={y} className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-100">
                            <img src={x.images[0]} alt={x.title} className="object-contain object-center w-full h-auto aspect-square rounded-t-md"/>
                            <h2 className="font-bold truncate ">{x.title}</h2>
                            <p className="text-gray-500 ">{x.price} </p>
                            <Link to={"/item/"+x.id}>Ver detalles</Link>
                        </article>
                    )
                })}
            </section>
    )

}

export default ItemList