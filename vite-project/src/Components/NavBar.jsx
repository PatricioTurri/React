import { Bike, Car, Home, LibraryBig } from "lucide-react"
import { Link } from "react-router-dom"
Bike

function NavBar () {
    return (
            <nav className="flex items-center gap-4 text-xs text-current truncate">
                <Link className="flex gap-1 text-xl text-center"to="/">Home {<Home/>}</Link>
                <Link to="/catalogo" className="flex gap-1 text-xl text-center">Catalogo {<LibraryBig/>}</Link>
                <Link to="/category/motorcycle"className="flex gap-1 text-xl text-center">Motos {<Bike/>}</Link>
                <Link to="/category/vehicle" className="flex gap-1 text-xl text-center">Vehículos {<Car/>}</Link>
            </nav>
    )
}

export default NavBar
