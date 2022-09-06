import { Link } from "react-router-dom";
import './Navbar.css'



const Navbar = () =>{

    return (
        <div className="container">
            
            <div className="logo">
                <h1>MultiTarefas</h1>
            </div>
            <div className="menu">
                <Link to='/'id='links' ><h1>BUSCA CEP</h1></Link>
                <Link to="/timer" id='links'><h1>TIMER</h1></Link>
            </div>
        </div>
    )
}

export default Navbar;