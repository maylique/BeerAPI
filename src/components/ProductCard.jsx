import { Link, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductCard = ({el}) => {

    const id = useParams()

    return ( 
        <>
        <img src={el.image_url} alt="" />
        <h2>{el.name}</h2>
        <h3>{el.tagline}</h3>
        <p>Created by: {el.contributed_by.slice(0, el.contributed_by.indexOf('<'))}</p>
        <Link to={`/allebiere/${el._id}`}>to Details</Link>
        </>
     );
}
 
export default ProductCard;