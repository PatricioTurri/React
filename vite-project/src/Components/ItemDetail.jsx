function ItemDetail ({datalle}){
    return (
        <section className="items-center gap-10 p-4 text-center text-black transition-all bg-white rounded-md shadow-xl hover:scale-100">
            <article>
                <h1 className="text-3xl font-bold">{datalle.title}</h1>
                <p className="text-gray-500">{datalle.description}</p>
                <p className="text-gray-500">$ {datalle.price}</p>
                <p>Cantidad disponible: {datalle.stock}</p>
            </article>
        </section>
    )
}

export default ItemDetail;  