import Products from "./products/products";
import TopSectionProducts from "./top-section-products/top_section_products";
import "./grid_products.css"

function GridProducts() {

    return (

        <div className="grid-products">
            {TopSectionProducts()}
            {Products()}
        </div>
         
    );
}

export default GridProducts;