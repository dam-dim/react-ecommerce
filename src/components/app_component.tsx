import "./app_component.css";
import Cart from "./cart/cart";
import Footer from "./footer/footer";
import GridProducts from "./grid-products/grid_products";
import Header from "./header/header";

function AppComponent() {
    return (
        <div className="app-component">
            {Header()}
            {GridProducts()}
            {Footer()}
            {Cart()}
        </div>
    );
}

export default AppComponent;