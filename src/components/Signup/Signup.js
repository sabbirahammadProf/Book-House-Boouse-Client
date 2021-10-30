import React from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const {signInUserBygoogle, setUser, setError, setLoading} = useAuth();
    const signUpUser = () => {
        signInUserBygoogle()
        .then(result => setUser(result.user))
        .catch(error => setError(error.message))
        .finally(() => setLoading(true));
    }
    return (
        <div className="w-11/12 mx-auto flex flex-col items-center py-12">
            <h2 className="text-3xl font-bold text-center py-4">Create a new account</h2>
            <button className="border-0 shadow-2xl px-16 py-2 rounded-full mx-auto flex justify-center items-center text-white mt-6 bg-blue-400" onClick={signUpUser}><i className="fab fa-google text-2xl pr-6 text-white"></i> Continue with Google</button>
            <p className="mt-12">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
        </div>
    );
};

export default Signup;