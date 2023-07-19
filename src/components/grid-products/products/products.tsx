import Card from "./card/card";
import "./products.css";

function Products() {
    return (
        <div className="products">
            {Card()}
            {Card()}
            {Card()}
            {Card()}
            {Card()}
            {Card()}
        </div>
       
    );
}

export default Products;