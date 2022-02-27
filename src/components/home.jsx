import './home.css'
import { Link } from 'react-router-dom';
import Catalog from './catalog';

const Home = () => {

    return(

        <div className="home">

            <h1>CrytoWorld</h1>
            <h4>Your Coins Safe With us</h4>
            <Link className="btn btn-info btn-lg" to="/catalog"> Go to the Catalog </Link>

        </div>
    );
}

export default Home;