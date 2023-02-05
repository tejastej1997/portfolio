import './navbar.css'
// import ReorderIcon from '@material-ui/core'
import { Link } from "react-router-dom";

    const Navbar = () => {
        return ( 

           <div className="navbar">

            <div className="togglebutton">
                {/* <button><ReorderIcon/></button> */}
            </div>
            <div className="links">
                <Link to="/"><i class="fa fa-house"></i></Link>

                <Link to="/">Home</Link>
                <Link to="/project">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/profile">Profile</Link>
            </div>
           </div>

         );
    }
     
    export default Navbar;
