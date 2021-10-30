import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-11/12 mx-auto mb-12">
            <div>
            <h2 className="text-3xl py-8 font-bold text-center">Add new service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-6/12 mx-auto">
                <input className="form-input" {...register("roomName", { required: true})} placeholder="Enter room name"/>
                {errors.roomName && <span className="text-red-500 py-1">** This field is required</span>}
                <input className="form-input" {...register("cost", { required: true})} placeholder="Enter cost per day"/>
                {errors.cost && <span className="text-red-500 py-1">** This field is required</span>}
                <input className="form-input" {...register("countries", { required: true})} placeholder="Available countries"/>
                {errors.countries && <span className="text-red-500 py-1">** This field is required</span>}
                <textarea className="form-input" {...register("description", { required: true})} placeholder="Description"></textarea>
                {errors.description && <span className="text-red-500 py-1">** This field is required</span>}
                <input type="url" className="form-input" {...register("image", { required: true})} placeholder="Room image"/>
                {errors.image && <span className="text-red-500 py-1">** This field is required</span>}
                <input type="submit" className="primary-button w-full cursor-pointer mt-2" value="Add service"/>
            </form>
            </div>
        </div>
    );
};

export default AddService;