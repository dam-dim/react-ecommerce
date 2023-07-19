import "./top_product.css";

type topProductProps = {
    productImage: number
}

function TopProduct(props: topProductProps) {
    return (
        <div className="top-products">
            <img src = {`src\\assets\\img\\${props.productImage}.png`} alt="" />
        </div>
    );
}

export default TopProduct;