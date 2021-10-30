import React from 'react';
import roomA from '../../images/room2.jpg';

const MyOrders = () => {
    return (
        <div className="w-11/12 mx-auto py-12">
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
    );
};

export default MyOrders;