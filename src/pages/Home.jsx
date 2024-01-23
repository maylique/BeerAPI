import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <Link to='/allebiere'>
            <div className="home">
                <img src="https://media.istockphoto.com/id/1287217096/de/foto/leckeres-craft-bier-auf-dem-bartisch.jpg?s=612x612&w=0&k=20&c=F1KBcwL8RzuIR5JryM8GpXF2HkVYede4uL5nNoP4IQw=" alt="" />
                <p>All Beers</p>
            </div>
        </Link>
                <p className="hans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi ullam assumenda ad cumque itaque sint praesentium omnis. Iste earum aperiam excepturi doloremque fugit eos assumenda, perspiciatis nulla quos quidem.</p>
        <Link to='/allebiere/random'>
            <div className="home">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsv6zFN-ptJo0kABYhWJ4Yld1doh9Bg1bNQ&usqp=CAU" alt="" />
                <p>Random Beer</p>
            </div>
        </Link>
                <p className="hans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere sapiente optio minus harum, consequuntur laborum inventore rem veniam quis sed possimus praesentium cum iure aliquid alias laboriosam! Hic, repellendus.</p>
        </>
     );
}
 
export default Home;