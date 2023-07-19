import "./app_component.css";
import Footer from "./footer/footer";
import GridProducts from "./grid-products/grid_products";
import Header from "./header/header";

function AppComponent() {
    return (
        <div className="app-component">
            {Header()}
            {GridProducts()}
            {Footer()}
        </div>
    );
}

export default AppComponent;