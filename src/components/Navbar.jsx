import { Link } from "react-router-dom";
import './Navbar.css'
import { FaList} from "react-icons/fa"


const Navbar = () =>{

    return (
        <div className="container">
            
            <div className="logo">
                <FaList/>
            </div>
            <div className="menu">
                <Link to='/'id='links' ><h1>BUSCA CEP</h1></Link>
                <Link to="/timer" id='links'><h1>TIMER</h1></Link>
            </div>
        </div>
    )
}

export default Navbar;