import CartItem from "../../../cart/cart-items/cart_item";
import BottomProduct from "./bottom-product/bottom_product";
import "./card.css";
import TopProduct from "./top-product/top_product";
import { ReactNode, MouseEventHandler } from 'react';

type itemObj = {
    id: string
    item: ReactNode
}

let cartItems: itemObj[] = [];

export function getCartItems() {
    const items: ReactNode[] = [];

    cartItems.map((element)=> {
        items.push(element.item)
    });

    return items;
}

export function getCartSize() {
    return cartItems.length;
}

type productProps = {
    productImage: number
    productName: string
    productType: string
    productPrice: number
}

const handleDelete: MouseEventHandler = (e) => {
    const name = e.currentTarget.parentElement?.parentElement?.id;

    if (name != null) {
        const element = document.getElementById(name);
        element?.parentNode?.removeChild(element);
    }
};

function Card(props: productProps) {
    function handleClick() {

        const cartItem =<li id={props.productName}>
                            <CartItem
                                itemImage={props.productImage}
                                itemName={props.productName}
                                itemPrice={props.productPrice}
                                handleDelete={handleDelete}
                            />
                        </li>;

        cartItems.push({id:props.productName, item:cartItem});
    }

    return (
        <div className="card">
            <TopProduct
                productImage={props.productImage}
            />
            <BottomProduct
               productType={props.productType} 
               productName={props.productName} 
               productPrice={props.productPrice}
               buttonClickHandler={handleClick}
            />
        </div>
    );
}

export default Card;