import React from 'react';
import { useForm } from "react-hook-form";

const BookRoom = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-11/12 mx-auto mb-12">
            <div>
            <h2 className="text-3xl py-8 font-bold text-center">Add new service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-6/12 mx-auto">
                <input className="form-input" {...register("firstName", { required: true, maxLength: 20 })} placeholder="Enter your name"/>
                <input className="form-input" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Enter your email"/>
                <input className="form-input" {...register("age", { min: 18, max: 99 })} placeholder="Address"/>
                <input className="form-input" {...register("age", { min: 18, max: 99 })} placeholder="Payment system"/>
                <input className="form-input" {...register("age", { min: 18, max: 99 })} placeholder="Tour time"/>
                <input type="date" className="form-input" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" className="primary-button w-full cursor-pointer mt-2"/>
            </form>
            </div>
        </div>
    );
};

export default BookRoom;