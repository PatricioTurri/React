import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function Main (){
    return (
       <main className="pad-4 glow-2xl">
        <Routes>
            <Route path="/"element={<h2 className="gap-10 text-2xl pad-10">Bienvenido</h2>}/>
            <Route path="/catalogo" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>

       </main>
        
        
    )
}

export default Main ;