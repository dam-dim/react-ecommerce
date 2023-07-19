import Products from "./products/products";
import TopSectionProducts from "./top-section-products/top_section_products";

function GridProducts() {
    return (
        <div className="grid-products">
            {TopSectionProducts()}
            {Products()}
        </div>
         
    );
}

export default GridProducts;