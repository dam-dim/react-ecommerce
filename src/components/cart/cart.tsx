import { getIsClicked } from "../header/top-header/top_header";
import "./cart.css";
import { getCartItems, getCartSize } from "../grid-products/products/card/card";

function Cart() {
    return getIsClicked() ? (
        <div className="cart">
                <div className="inner-cart">
                    <h1>{`Cart Items - ${getCartSize()}`}</h1>
                    <ul>
                        {getCartItems()}
                    </ul>
                </div>
            </div>
    ) : (null);
}

export default Cart;