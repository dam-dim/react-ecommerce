import { ReactNode } from "react";
import Card from "./card/card";
import { items } from "./items";
import "./products.css";

function Products() {
    const result : ReactNode[] = [];

    items.forEach((item) => {
        // TODO
        // if current filter equals type then render

        result.push(
            <Card 
                productImage = {item.productImage}
                productName={item.productName} 
                productType = {item.productType} 
                productPrice = {item.productPrice}
            />
        );
        
    });

    return (
        <div className="products">
            {result}
        </div>
    );
}

export default Products;