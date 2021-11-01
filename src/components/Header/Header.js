import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const [mobileBar, setMobileBar] = useState("xl:block md:block hidden");
    const toggleMobileBar = () => {
        if (mobileBar === 'xl:block md:block hidden') {
            setMobileBar('xl:block md:block visible');
        } else if (mobileBar === 'xl:block md:block visible') {
            setMobileBar('xl:block md:block hidden');
        }
    }

    return (
        <header>
            <nav className="b-primary py-4 bg-red-500">
                <div className="w-10/12 mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-3xl text-white font-bold">Boouse</Link>
                    </div>
                    <div className="xl:hidden md:hidden sm:visible ml-auto mr-0">
                        <button onClick={toggleMobileBar}><i className="fa fa-bars text-white text-2xl"></i></button>
                    </div>
                    <div className={mobileBar}>
                        <ul className="xl:static md:static fixed left-0 top-16 bg-red-500 w-full xl:py-0 py-4">
                            <li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-2"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-2"><Link to="/allrooms" className="nav-link">All rooms</Link></li>
                            {user?.email ? <><li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-2"><Link to="/myorders" className="nav-link">My Orders</Link></li>
                                <li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-2"><Link to="/manageorders" className="nav-link">Manage orders</Link></li>
                                <li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-2"><Link to="/addnewservice" className="nav-link">Add new service</Link></li>
                                <li className="xl:inline-block md:inline-block text-black bg-white px-2 py-1 rounded cursor-pointer xl:m-0 md:m-0 my-2 mx-2" onClick={logOut}>Logout</li></> :
                                <><li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-4"><Link to="/signup" className="text-black bg-white px-2 py-1 rounded mx-2">Signup</Link></li>
                                    <li className="xl:inline-block md:inline-block xl:m-0 md:m-0 my-4"><Link to="/login" className="text-black bg-white px-2 py-1 rounded mx-2">Login</Link></li></>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Header;