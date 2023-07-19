import BottomProduct from "./bottom-product/bottom_product";
import "./card.css";
import TopProduct from "./top-product/top_product";

type productProps = {
    productImage: number
    productName: string
    productType: string
    productPrice: number
}

function Card(props: productProps) {
    return (
        <div className="card">
            <TopProduct
                productImage={props.productImage}
            />
            <BottomProduct
               productType={props.productType} 
               productName={props.productName} 
               productPrice={props.productPrice} 
            />
        </div>
    );
}

export default Card;