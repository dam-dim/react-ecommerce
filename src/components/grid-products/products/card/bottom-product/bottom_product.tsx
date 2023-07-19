import "./bottom_product.css";

type bottomProductProps = {
    productType: string
    productName: string
    productPrice: number
}

function BottomProduct(props : bottomProductProps) {
    return (
        <div className="bottom-products">
            <h3>{props.productName}</h3>
            <p>Add To Cart</p>
            <p>{props.productType}</p>
            <p id="price">{props.productPrice}</p>
        </div>
    );
}

export default BottomProduct;