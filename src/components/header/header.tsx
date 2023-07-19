import "./header.css";
import Menu from "./menu/menu";
import TopHeader from "./top-header/top_header";

function Header() {
    return (
        <div className="header">
            {TopHeader()}
            <hr />
            {Menu()}
        </div>
    );
}

export default Header;