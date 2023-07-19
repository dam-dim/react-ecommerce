import Products from "./products/products";
import TopSectionProducts from "./top-section-products/top_section_products";

function GridProducts() {
    return (
        <>
            {TopSectionProducts()}
            {Products()}
        </>
         
    );
}

export default GridProducts;