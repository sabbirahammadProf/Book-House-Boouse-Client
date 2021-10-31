import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom'

const BookRoom = () => {
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const [room, setRoom] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/room/${id}`)
        .then(res => res.json())
        .then(data => setRoom(data[0]))
    }, []);

    console.log(room)

    const onSubmit = data => {
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => console.log("Done"))
    };
    return (
        <div className="w-11/12 mx-auto mb-12">
        <div className="grid">
            
        </div>
            <div>
            <h2 className="text-3xl py-8 font-bold text-center">Add new service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-6/12 mx-auto">
                <input className="form-input" {...register("name", { required: true})} placeholder="Enter your name"/>
                <input className="form-input" {...register("email", { required: true})} placeholder="Enter your email"/>
                <input className="form-input" {...register("address", { required: true})} placeholder="Address"/>
                <input className="form-input" {...register("paymentMethod", { required: true})} placeholder="Payment system"/>
                <input className="form-input" {...register("time", { required: true})} placeholder="Number of days to stay"/>
                <input type="date" className="form-input" {...register("date", { required: true})} />
                <input type="submit" className="primary-button w-full cursor-pointer mt-2"/>
            </form>
            </div>
        </div>
    );
};

export default BookRoom;