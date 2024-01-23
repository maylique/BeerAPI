import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
    const id = useParams()

    const [product, setProduct] = useState(true)

    let apiLinkProduct = `https://ih-beers-api2.herokuapp.com/beers/${id.id}`


    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(apiLinkProduct)
            setProduct(resp.data)
        }
        apiFetch()
    }, [])

    return ( 
        <>
        <img src={product.image_url} alt="" />
        <h1>{product.name}</h1>
        <h2>{product.tagline}</h2>
        <h5>First Brewed: {product.first_brewed}</h5>
        <h5>Attenuation Level: {product.attenuation_level}</h5>
        <p>{product.description}</p>
        <Link to='/allebiere'><button>🔙</button></Link>
        </>
     );
    }
export default ProductDetail;