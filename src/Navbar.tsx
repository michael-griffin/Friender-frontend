import { NavLink, Link } from "react-router-dom"
import './Navbar.css'

function Navbar({user, logout}) {


    return(<nav className='Navbar text-accent'>
        <Link to="/"><h1 className='Navbar-logo'>Friender</h1></Link>
        <div className='Navbar-links'>
            {!user && <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </>}
            {user &&
            <>
                <NavLink to="/people">Possible Friends</NavLink>
                <NavLink to="/matches">Matches</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <button onClick={logout}>Logout</button>
            </>
            }
        </div>
    </nav>)
}

export default Navbar;