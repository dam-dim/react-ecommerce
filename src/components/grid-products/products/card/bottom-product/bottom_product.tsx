import "./bottom_product.css";

type bottomProductProps = {
    productType: string
    productName: string
    productPrice: number
}

function BottomProduct(props : bottomProductProps) {

    //TODO
    //implement adding to the cart

    return (
        <div className="bottom-products">
            <div className="first-row">
                <h4>{props.productName}</h4>
                <a href="#"><button>Add</button></a>
            </div>

            <div className="second-row">
                <p>{props.productType}</p>
                
                <p id="price">${props.productPrice}</p>
            </div>
            
        </div>
    );
}

export default BottomProduct;