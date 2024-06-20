import {ShoppingCart} from "lucide-react"

function CartWidget (){
    return (
        <div className="flex items-center gap-2 text-current truncate text-l">
            <p className="text-2xl ">0</p>
            <ShoppingCart/>
        </div>
    )
}

export default CartWidget