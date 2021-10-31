import React, { useState, useEffect } from 'react';
import roomA from '../../images/room2.jpg';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuth();
    // useEffect(() => {
    //     fetch('http://localhost:5000/booking')
    //     .then(res => res.json())
    //     .then(data => console.log(data.filter((item) => item.booked_email === "a")))
    // }, []);
    return (
    <>
    {/* Loading start */}
    <div className={isLoading ? "w-11/12 mx-auto my-12 visible" : "w-11/12 mx-auto my-12 hidden"}>
        <div className="bg-gray-300 animate-pulse h-10 w-1/3 mx-auto mb-12"></div>
        <div className="grid grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded px-3 py-4">
                    <div className="animate-pulse bg-gray-300 h-60 w-full"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-2/3 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-20 w-11/12 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-full mt-3"></div>
            </div>
            <div className="border-2 border-gray-200 rounded px-3 py-4">
                    <div className="animate-pulse bg-gray-300 h-60 w-full"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-2/3 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-20 w-11/12 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-full mt-3"></div>
            </div>
            <div className="border-2 border-gray-200 rounded px-3 py-4">
                    <div className="animate-pulse bg-gray-300 h-60 w-full"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-2/3 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-20 w-11/12 mt-3"></div>
                    <div className="animate-pulse bg-gray-300 h-10 w-full mt-3"></div>
            </div>
        </div>
    </div>
    {/* Loading end */}
    
    <div className={isLoading ? "w-11/12 mx-auto py-12 hidden" : "w-11/12 mx-auto py-12 visible"}>
            <h2 className="text-3xl font-bold text-center mb-6">What is booked by you</h2>
            <div className="grid grid-cols-3 gap-8 rounded">
                <div className="rounded shadow-2xl px-4 py-6">
                    <img src={roomA} alt="" className="w-full"/>
                    <h2 className="text-2xl font-bold pt-3 pb-2">Best room for non AC lover</h2>
                    <p>Proccessing: <span className="text-red-500 font-bold">pending</span></p>
                    <h3 className="text-xl font-bold pt-3">Per Day Cost: $49</h3>
                    <button className="primary-button mt-6">Cancel</button>
                </div>
            </div>
    </div>
        </>
    );
};

export default MyOrders;