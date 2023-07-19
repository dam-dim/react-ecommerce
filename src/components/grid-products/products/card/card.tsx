import BottomProduct from "./bottom-product/bottom_product";
import "./card.css";
import TopProduct from "./top-product/top_product";

function Card() {
    return (
        <div className="card">
            {TopProduct()}
            {BottomProduct()}
        </div>
    );
}

export default Card;