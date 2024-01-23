import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
        <Nav />
        <Link to='/allebiere/random'>random</Link>
        </>
     );
}
 
export default Home;