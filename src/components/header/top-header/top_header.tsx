import "./top_header.css";

function TopHeader() {
    return (
        <div className="top-header">
            <div className="first-col">
                <a href="#"><img src="src\assets\icon\search.png" alt="" /></a>
            </div>

            <div className="second-col">
                <a href="#">
                        <img src="src\assets\icon\squares.png" alt="" />
                        <h1>CORAL</h1>
                        <img src="src\assets\icon\squares.png" alt="" />
                </a>
            </div>

            <div className="third-col">
                <div className="profile">
                    <a href="#">
                        <img src="src\assets\icon\profile.png" alt="" />
                        <p>Profile</p>
                    </a>
                </div>

                 <div className="shopping">
                    <a href="#">
                        <img src="src\assets\icon\cart.png" alt="" />
                        <p>Shopping</p>
                    </a>
                </div> 
            </div>
        </div>
    );
}

export default TopHeader;