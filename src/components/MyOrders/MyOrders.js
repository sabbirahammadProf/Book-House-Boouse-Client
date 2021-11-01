import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuth();
    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => {
            setCurrentUser(data.filter((item) => item.email == user.email));
            setIsLoading(false);
        });
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you want to delete this item?")
            if (confirmation) {
                fetch(`http://localhost:5000/books/${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const newBookings = currentUser.filter((booking) => booking._id != id);
                    setCurrentUser(newBookings)
                }
            })
        }
    }

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
                {
                    currentUser.map((user) => <div key={user._id} className="rounded shadow-2xl px-4 py-6">
                    <img src={user.image} alt="" className="w-full"/>
                    <h2 className="text-2xl font-bold pt-3 pb-2">{user.booked}</h2>
                    <p>Proccessing: <span className="text-red-500 font-bold">{user.pending == "pending" ? <><span className="text-red-500">pending</span></> : <><span className="text-green-600">approved</span></>}</span></p>
                    <h3 className="text-xl font-bold pt-3">Per Day Cost: ${user.cost}</h3>
                    <button className="primary-button mt-6" onClick={() => handleDelete(user._id)}>Cancel</button>
                </div>)
                }
            </div>
    </div>
        </>
    );
};

export default MyOrders;