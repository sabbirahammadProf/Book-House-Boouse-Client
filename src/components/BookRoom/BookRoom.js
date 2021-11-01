import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const BookRoom = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [room, setRoom] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        // getting the room details
        fetch(`https://hidden-anchorage-13253.herokuapp.com/room/${id}`)
            .then(res => res.json())
            .then(data => {
                setRoom(data[0]);
                setLoading(false);
            })
            .catch(error => setError(error.message));
    }, []);

    const onSubmit = data => {
        // Clearing the success alert
        setSuccess('');
        data.pending = "pending";
        data.booked = room.title;
        data.image = room.room_image;
        data.cost = room.per_day_cost;
        fetch('https://hidden-anchorage-13253.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess("Your room is booked. Please wait for approval");
                    reset();
                }
            })
            .catch(error => setError(error.message));
    };
    return (
        <div className="w-11/12 mx-auto mb-12">
            {/* Spinner */}
            <div className={loading ? "grid xl:grid-cols-2 grid-cols-1 gap-8 mt-12 visible" : "hidden"}>
                <div className="bg-gray-300 animate-pulse"></div>
                <div>
                    <div className="bg-gray-300 animate-pulse h-10 w-9/12"></div>
                    <div className="bg-gray-300 animate-pulse h-28 w-full mt-8"></div>
                    <div className="bg-gray-300 animate-pulse h-16 w-full mt-8"></div>
                    <div className="bg-gray-300 animate-pulse h-12 w-6/12 mt-8"></div>
                </div>
            </div>
            {/* Show the details of room */}
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-12">
                <div>
                    <img src={room.room_image} alt="" className="w-full rounded" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{room.title}</h2>
                    <p className="mt-6">{room.description}</p>
                    <p className="mt-4">Available countries: <span className="font-bold text-red-700">{room.available_countries}</span></p>
                    <h2 className="text-2xl font-bold mt-4">Per day cost: <span className="text-green-800">${room.per_day_cost}</span></h2>
                </div>
            </div>
            {/* The input form to book the room */}
            <div>
                <h2 className="text-3xl py-8 font-bold text-center mt-8">Book the room by providing your information</h2>
                {success && <p className="text-white bg-green-500 py-2 px-3 mb-6 xl:w-6/12 md:w-8/12 w-12/12 mx-auto rounded">{success}</p>}
                {error && <p className="text-white bg-red-500 py-2 px-3 mb-6 xl:w-6/12 md:w-8/12 w-12/12 mx-auto rounded">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col xl:w-6/12 md:w-8/12 w-12/12 mx-auto">
                    <input className="form-input" {...register("name", { required: true })} placeholder="Enter your name" />
                    <input className="form-input" {...register("email", { required: true })} value={user.email} readOnly />
                    <p className="text-xs py-1">(***You can't change this email property)</p>
                    <input className="form-input" {...register("address", { required: true })} placeholder="Enter you delivery location" />
                    <input className="form-input" {...register("paymentMethod", { required: true })} placeholder="Payment system" />
                    <input className="form-input" {...register("time", { required: true })} placeholder="Number of days to stay" />
                    <input type="date" className="form-input" {...register("date", { required: true })} />
                    <input type="submit" className="primary-button w-full cursor-pointer mt-2" />
                </form>
            </div>
        </div>
    );
};

export default BookRoom;