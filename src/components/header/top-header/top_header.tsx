import "./top_header.css";

function TopHeader() {
    return (
        <div className="top-header">
                <a href="#"><img src="src\assets\icon\search.png" alt="" /></a>
       
                <a href="#">
                    <img src="src\assets\icon\squares.png" alt="" />
                    <h1><a href="#">CORAL</a></h1>
                    <img src="src\assets\icon\squares.png" alt="" />
                </a>
          

            <div>
                <a href="#">
                    <img src="src\assets\icon\profile.png" alt="" />
                    <p>Account</p>
                </a>

                <a href="#">
                    <img src="src\assets\icon\cart.png" alt="" />
                    <p>Shopping</p>
                </a>
            </div>

        </div>
    );
}

export default TopHeader;