import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => {
            setRooms(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <section className="w-11/12 mx-auto py-16">
            <h2 className="text-3xl font-bold">Our available rooms</h2>
            <p className="pt-3 mb-8">Find a perfect room for you which is available</p>
            {/* Loader start */}
            <div className={isLoading ? "grid grid-cols-3 gap-8 visible" : "hidden"}>
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
            {/* Loader end */}
            {/* Show rooms */}
            <div className="grid grid-cols-3 gap-8">
                {
                    rooms.map((room) => <div key={room._id} className="shadow-2xl py-8 px-5 rounded group hover:bg-red-700 transition-all duration-500">
                    <div className="overflow-hidden rounded">
                     <img src={room.room_image} alt="" className="rounded w-full"/>
                    </div>
                    <h3 className="text-3xl font-bold py-4 group-hover:text-white transition-all duration-500">{room.title}</h3>
                    <p className="pb-4 group-hover:text-white transition-all duration-500">{room.description}</p>
                    <h3 className="text-xl font-bold group-hover:text-white transition-all duration-500">Per Day Cost: ${room.per_day_cost}</h3>
                    <Link to={`/bookroom/${room._id}`}><button className="primary-button w-full group-hover:bg-white group-hover:text-black transition-all duration-500 mt-6">Book Now</button></Link>
                </div>)
                }
            </div>
            {/* Show rooms end */}
            {/* Show rooms end */}
        </section>
        
    );
};

export default AllRooms;