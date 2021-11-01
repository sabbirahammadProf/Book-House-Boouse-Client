import React from 'react';
import {Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <header>
            <nav className="bg-primary py-4 bg-red-500">
                <div className="w-10/12 mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-3xl text-white font-bold">Boouse</Link>
                    </div>
                    <div>
                        <ul>
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/allrooms" className="nav-link">All rooms</Link></li>
                            {user?.email ? <><li className="nav-item"><Link to="/myorders" className="nav-link">My Orders</Link></li>
                            <li className="nav-item"><Link to="/manageorders" className="nav-link">Manage orders</Link></li>
                            <li className="nav-item"><Link to="/addnewservice" className="nav-link">Add new service</Link></li>
                            <li className="nav-item text-black bg-white px-2 py-1 rounded cursor-pointer" onClick={logOut}>Logout</li></> : 
                            <><li className="nav-item"><Link to="/signup" className="text-black bg-white px-2 py-1 rounded mx-2">Signup</Link></li>
                            <li className="nav-item"><Link to="/login" className="text-black bg-white px-2 py-1 rounded mx-2">Login</Link></li></>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;