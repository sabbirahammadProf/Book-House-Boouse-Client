import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://hidden-anchorage-13253.herokuapp.com/rooms', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess("A new room added");
                    reset();
                }
            })
            .catch(err => setError(err.message))
    };
    return (
        <div className="w-11/12 mx-auto mb-12">
            <div>
                <h2 className="text-3xl py-8 font-bold text-center">Add new service</h2>
                {success && <p className="text-white bg-green-500 py-2 px-3 mb-6 xl:w-6/12 md:w-8/12 w-12/12 mx-auto rounded">{success}</p>}
                {error && <p className="text-white bg-red-500 py-2 px-3 mb-6 xl:w-6/12 md:w-8/12 w-12/12 mx-auto rounded">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col xl:w-6/12 md:w-8/12 w-12/12  mx-auto">
                    <input className="form-input" {...register("roomName", { required: true })} placeholder="Enter room name" />
                    {errors.roomName && <span className="text-red-500 py-1">** This field is required</span>}
                    <input className="form-input" {...register("per_day_cost", { required: true })} placeholder="Enter cost per day" />
                    {errors.cost && <span className="text-red-500 py-1">** This field is required</span>}
                    <input className="form-input" {...register("countries", { required: true })} placeholder="Available countries" />
                    {errors.countries && <span className="text-red-500 py-1">** This field is required</span>}
                    <textarea className="form-input" {...register("description", { required: true })} placeholder="Description"></textarea>
                    {errors.description && <span className="text-red-500 py-1">** This field is required</span>}
                    <input type="url" className="form-input" {...register("room_image", { required: true })} placeholder="Room image" />
                    {errors.image && <span className="text-red-500 py-1">** This field is required</span>}
                    <input type="submit" className="primary-button w-full cursor-pointer mt-2" value="Add service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;