import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="bg-red-500 py-16">
                <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Boouse</h2>
                        <p className="text-white pt-4">Boouse is a platform where you can book a room for your tour in online and we will do everything that you want.</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Important Links</h2>
                        <ul className="pt-3">
                            <li className="py-1"><Link to="/" className="text-white">About Us</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Contact Us</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Privacy Policy</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Terms and condition</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Social Media</h2>
                        <ul className="pt-3">
                            <li className="py-1"><Link to="/" className="text-white">Facebook</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Twitter</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Instagram</Link></li>
                            <li className="py-1"><Link to="/" className="text-white">Linked in</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-white pt-20 text-center">
                    <p>Copyright &copy; 2021 - All right reserved by Boouse</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;