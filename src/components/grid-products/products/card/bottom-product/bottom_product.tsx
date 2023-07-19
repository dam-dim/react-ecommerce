import "./bottom_product.css";

type bottomProductProps = {
    productType: string
    productName: string
    productPrice: number
}

function BottomProduct(props : bottomProductProps) {
    return (
        <div className="bottom-products">
            <h4>{props.productName}</h4>
            <div className="second-row">
                <p>{props.productType}</p>
                <button>Add</button>
                <p id="price">${props.productPrice}</p>
            </div>
            
        </div>
    );
}

export default BottomProduct;