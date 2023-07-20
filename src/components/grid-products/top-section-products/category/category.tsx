import "./category.css";
import { useState, MouseEvent, ReactNode } from "react";

let current: string = "All Products";

export function getCategoryState() {
    return current;
}

function Category() {
    const categories: string[] = ["All Products", "Scarf", "Dress", "Bag", "Shoe", "Glasses"];
    const result: ReactNode[] = [];

    const [state, setState] = useState("All Products");

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        current = event.currentTarget.firstChild?.textContent == null ? "" : event.currentTarget.firstChild?.textContent;
        setState(() => current);
    }

    categories.forEach((category: string) => {
        if (category == state) {
            result.push(
                <li onClick={handleClick}><a href="#" id = "current" style={{fontWeight: "bold"}}>{category}</a></li>
            );
        } else {
            result.push(
                <li onClick={handleClick}><a href="#" style={{fontWeight: "normal"}}>{category}</a></li>
            );
        }
    });

    return (
        <div className="category">
            <ul>
                {result}
            </ul>
        </div>
    );
}

export default Category;