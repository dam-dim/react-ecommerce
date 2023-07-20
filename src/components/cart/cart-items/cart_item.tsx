import "./cart_item.css";
import { MouseEventHandler } from "react";

type cartItemProps = {
    itemImage: number
    itemName: string
    itemPrice: number
    handleDelete: MouseEventHandler
}

function CartItem(props: cartItemProps) {
    return (
        <div className="cart-item">
            <div className="first-col">
                <img src={`src\\assets\\img\\${props.itemImage}.png`} alt="" />
            </div>

            <div className="second-col">
                <p>{props.itemName}</p>
            </div>

            <div className="third-col">
                <p>${props.itemPrice}</p>
            </div>

            <button onClick={props.handleDelete}>Delete</button>
        </div>
    );
}

export default CartItem;