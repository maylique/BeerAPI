import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

const AlleBiere = () => {


    const [products, setProducts] = useState([])

    const apiLink = 'https://ih-beers-api2.herokuapp.com/beers'

    useEffect(() => {
        const fetchApi = async () => {
            const resp = await axios.get(apiLink)
            setProducts(resp.data)
        }
        fetchApi()
    }, [])


    return ( 
        <>
        {products.map((el, index) => {
            return(
                <div key={index} className="flex">
                    <ProductCard
                    el={el}
                    />
                </div>
            )
        })} 
        </>
     );
}
 
export default AlleBiere;