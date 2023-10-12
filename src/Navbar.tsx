import { NavLink, Link } from "react-router-dom"
import './Navbar.css'

function Navbar({user, logout}) {


    return(<nav className='Navbar'>
        <h1 className='Navbar-logo'>Friender</h1>
        <div className='Navbar-links'>
            {!user && <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
            </>}
            {user &&
            <>
                <NavLink to='/profile'>Profile</NavLink>
                <button onClick={logout}>Logout</button>
            </>
            }
        </div>
    </nav>)
}

export default Navbar;