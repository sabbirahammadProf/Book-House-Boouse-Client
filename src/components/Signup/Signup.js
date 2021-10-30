import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className="w-11/12 flex flex-col items-center py-12">
            <h2 className="text-3xl font-bold text-center py-4">Create an account</h2>
            <button className="border-0 shadow-2xl border-2 border-blue-300 px-10 py-3 rounded-full mx-auto flex justify-center items-center text-blue-500 font-bold mt-6"><i class="fab fa-google text-2xl pr-3"></i> Continue with goole</button>
            <p className="mt-12">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
        </div>
    );
};

export default Signup;