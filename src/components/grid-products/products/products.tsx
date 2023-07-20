import { ReactNode } from "react";
import Card from "./card/card";
import { items } from "./items";
import "./products.css";

function Products() {
    const result : ReactNode[] = [];

    const current = document.getElementById("current")?.innerHTML;

    items.forEach((item) => {
        // TODO
        // if current filter equals type then render
        if (item.productType === current) {
            result.push(
                <Card 
                    productImage = {item.productImage}
                    productName={item.productName} 
                    productType = {item.productType} 
                    productPrice = {item.productPrice}
                />
            );
        } 
    });

    return (
        <div className="products">
            {result}
        </div>
    );
}

export default Products;