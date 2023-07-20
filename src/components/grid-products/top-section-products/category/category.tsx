import "./category.css";
import { useState, MouseEvent, ReactNode } from "react";

function Category() {
    const categories: string[] = ["All Products", "Scarf", "Dress", "Bag", "Shoe", "Glasses"];
    const result: ReactNode[] = [];

    let [state, setState] = useState("All Products");

    const handleClick = (event: MouseEvent) => {
        event.preventDefault();
        const current: string = event.currentTarget.firstChild?.textContent == null ? "" : event.currentTarget.firstChild?.textContent;
        setState(() => current);
    }

    console.log(state);
    

    categories.forEach((category: string) => {
        const isCurrent: boolean = category == state;
        if (isCurrent) {
            result.push(
                <li onClick={handleClick}><a href="#" id = {isCurrent ? "current" : ""} style={isCurrent ? {fontWeight: "bold"} : {}}>{category}</a></li>
            );
        } else {
            result.push(
                <li onClick={handleClick}><a href="#">{category}</a></li>
            );
        }
    });

    //TODO
    //implement event listener for filtering

    return (
        <div className="category">
            <ul>
                {result}
            </ul>
        </div>
    );
}

export default Category;