import "./navBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from './../store/storeContext';




function NavBar(){

    const {cart, user} = useContext(storeContext);

    return(

        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                < div className="container-fluid">
                    <a className="navbar-brand" href="#">CryptoWorld🌎 The Best Option</a>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home Page</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>       

                      <form className="d-flex">
                        <Link to="cart" className="btn btn-outline-light">
                        <span className="badge bg-primary"> {cart.length}&nbsp;</span>
                        View Cart
                        </Link>
                     </form>

                </div>
            </nav>
        </div>

    );
}

export default NavBar;