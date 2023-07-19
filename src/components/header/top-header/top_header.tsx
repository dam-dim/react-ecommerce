import "./top_header.css";

function TopHeader() {
    return (
        <div className="top-header">
            <span>
                <a href="#"><img src="src\assets\icon\search.png" alt="" /></a>
            </span>

            <span>
                <img src="src\assets\icon\squares.png" alt="" />
                <h1>CORAL</h1>
                <img src="src\assets\icon\squares.png" alt="" />
            </span>

            <span>
                <img src="src\assets\icon\profile.png" alt="" />
                <p>Account</p>
                <img src="src\assets\icon\cart.png" alt="" />
                <p>Shopping</p>
            </span>

        </div>
    );
}

export default TopHeader;