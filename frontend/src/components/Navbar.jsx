import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
            <Link to ="/" className="nav-Link">Home</Link>
            <Link to ="/Favorite" className="nav-Link">Favorites</Link>
            </div>
        </nav>
    )
}
export default Navbar