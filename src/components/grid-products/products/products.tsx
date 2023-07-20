import { ReactNode } from "react";
import Card from "./card/card";
import { items } from "./items";
import "./products.css";
import { getState } from "../top-section-products/category/category";

function Products() {
    const result : ReactNode[] = [];

    const current = getState();
    console.log(current);
    

    items.forEach((item) => {
        if (current == "All Products") {
            result.push(
                <Card 
                    productImage = {item.productImage}
                    productName={item.productName} 
                    productType = {item.productType} 
                    productPrice = {item.productPrice}
                />
            );
            return;
        }

        if (item.productType == current) {
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