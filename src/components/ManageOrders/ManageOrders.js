import React from 'react';

const ManageOrders = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl pt-12 font-bold text-center">Manage All Users</h2>
            <div className="mt-10 mb-12 flex flex-col items-center">
            <table class="table-auto border-collapse block overflow-auto">
            <thead>
                <tr>
                    <th className="border border-2 border-red-600 py-1 px-3">User ID</th>
                    <th className="border border-2 border-red-600 py-1 px-3">User Name</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Email address</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Tour date</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Paid By</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Processing</th>
                    <th className="border border-2 border-red-600 py-1 px-3">Activity</th>
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
                    <td className="border border-2 border-red-600 py-1 px-3"><button className="bg-green-500 text-white rounded py-1 px-2">Approve</button></td>
                </tr>
                <tr>
                    <td className="border border-2 border-red-600 py-1 px-3">h74hfju4jejjdju4hihr3hrhjh</td>
                    <td className="border border-2 border-red-600 py-1 px-3">Room with AC in London</td>
                    <td className="border border-2 border-red-600 py-1 px-3">me.rahim@gmail.com</td>
                    <td className="border border-2 border-red-600 py-1 px-3">31/7/2021</td>
                    <td className="border border-2 border-red-600 py-1 px-3">Paypal</td>
                    <td className="border border-2 border-red-600 py-1 px-3">Approve</td>
                    <td className="border border-2 border-red-600 py-1 px-3"><button className="bg-red-500 text-white rounded py-1 px-2">Unapprove</button></td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageOrders;