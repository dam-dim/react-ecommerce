import { getIsClicked } from "../header/top-header/top_header";
import "./cart.css";

function Cart() {

    if (getIsClicked()) {
        return (
            <div className="cart">
    
            </div>
        );
    }
}

export default Cart;