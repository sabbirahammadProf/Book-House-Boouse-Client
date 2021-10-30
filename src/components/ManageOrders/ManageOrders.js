import React from 'react';

const ManageOrders = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl pt-12 font-bold text-center">Manage All Users</h2>
            <div className="mt-10 mb-12 flex flex-col items-center">
            <table className="table-auto border-collapse block overflow-auto">
            <thead>
                <tr>
                    <th className="border border-2 border-red-600 py-1 px-3">User ID</th>
                    <th className="border border-2 border-red-600 py-1 px-3">User Name</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Email address</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Tour date</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Paid By</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Processing</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Activity</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-2 border-red-600 py-1 px-3">0hdj84hf93h83h9483hehe4h3i43</td>
                    <td className="border border-2 border-red-600 py-1 px-3">Room without AC in London</td>
                    <td className="border border-2 border-red-600 py-1 px-3">sabbirahammad212@gmail.com</td>
                    <td className="border border-2 border-red-600 py-1 px-3">01/05/2021</td>
                    <td className="border border-2 border-red-600 py-1 px-3">Bkash</td>
                    <td className="border border-2 border-red-600 py-1 px-3">pending</td>
                    <td className="border border-2 border-red-600 py-1 px-3 text-center"><button className="bg-green-500 text-white rounded py-1 px-2">Approve</button></td>
                    <td className="border border-2 border-red-600 py-1 px-3 text-center"><i className="fas fa-trash bg-red-600 text-white p-3 rounded cursor-pointer"></i></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageOrders;