import React from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUserBygoogle, setUser, setError, setLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location?.from ? location?.from?.pathname : '/myorders';
    const signInUser = () => {
        signInUserBygoogle()
        .then(result => {
            setUser(result.user);
            history.push(url);
        })
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
    return (
        // Login to account
        <div className="w-11/12 mx-auto flex flex-col items-center py-12">
            <h2 className="text-3xl font-bold text-center py-4">Login to your account</h2>
            <button className="border-0 shadow-2xl px-16 py-2 rounded-full mx-auto flex justify-center items-center text-white mt-6 bg-blue-400" onClick={signInUser}><i className="fab fa-google text-2xl pr-6 text-white"></i> Continue with Google</button>
            <p className="mt-12">Don't have an account? <Link to="/signup" className="text-blue-600 font-bold">Signup</Link></p>
        </div>
    );
};

export default Login;