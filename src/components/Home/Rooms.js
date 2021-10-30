import React from 'react';
import roomA from '../../images/room1.jpg';

const Rooms = () => {
    return (
        <section className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold">Our available rooms</h2>
            <p className="pt-3 mb-8">Find a perfect room for you which is available</p>
            {/* <div className="grid grid-cols-3 gap-8">
                <div className="border-2 border-gray-200 rounded px-3 py-4">
                        <div className="animate-pulse bg-gray-300 h-60 w-full"></div>
                        <div className="animate-pulse bg-gray-300 h-10 w-2/3 mt-3"></div>
                        <div className="animate-pulse bg-gray-300 h-20 w-11/12 mt-3"></div>
                        <div className="animate-pulse bg-gray-300 h-10 w-full mt-3"></div>
                </div>
            </div> */}
            <div className="grid grid-cols-3 gap-8">
                <div className="shadow-2xl py-8 px-5 rounded group hover:bg-red-700 transition-all duration-500">
                    <div className="overflow-hidden rounded">
                     <img src={roomA} alt="" className="rounded"/>
                    </div>
                    <h3 className="text-3xl font-bold py-4 group-hover:text-white transition-all duration-500">Room with AC</h3>
                    <p className="pb-4 group-hover:text-white transition-all duration-500">The room is best for someone who loves a AC room.</p>
                    <h3 className="text-xl font-bold group-hover:text-white transition-all duration-500">Per Day Cost: $49</h3>
                    <button className="primary-button w-full group-hover:bg-white group-hover:text-black transition-all duration-500 mt-6">Book now</button>
                </div>
            </div>
        </section>
    );
};

export default Rooms;