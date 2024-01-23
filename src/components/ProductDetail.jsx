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
        <section className="detailPage">
            <img className="detailImg" src={product.image_url} alt="" />
            <h1>{product.name}</h1>
            <h2>{product.tagline}</h2>
            <article>
                <div className="space">
                    <h5>First Brewed: </h5>
                    <h5>{product.first_brewed}</h5>
                </div>
               <div className="space">
                    <h5>Attenuation Level: </h5>
                    <h5>{product.attenuation_level}</h5>
           </div>
            </article>
            <p>{product.description}</p>
            <Link className="btn" to='/allebiere'><button className="btn">🔙</button></Link>
        </section>
        </>
     );
    }
export default ProductDetail;