import { PersonStanding } from "lucide-react";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

function Header () {
    return (
        <header className="flex items-center gap-10 text-xs text-current truncate">
            <h1 className="text-3xl font-bold ">Mi sitio web</h1>
            <PersonStanding />
            <NavBar/>
            <CartWidget/>
        </header>        
    )
}

export default Header ;