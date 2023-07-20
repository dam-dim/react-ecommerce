import { MouseEventHandler } from "react";
import "./bottom_product.css";

type bottomProductProps = {
    productType: string
    productName: string
    productPrice: number
    buttonClickHandler: MouseEventHandler
}

function BottomProduct(props : bottomProductProps) {
    return (
        <div className="bottom-products">
            <div className="first-row">
                <h4>{props.productName}</h4>
                <button onClick={props.buttonClickHandler}>Add</button>
            </div>

            <div className="second-row">
                <p>{props.productType}</p>
                
                <p id="price">${props.productPrice}</p>
            </div>
            
        </div>
    );
}

export default BottomProduct;