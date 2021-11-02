import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const loadData = () => {
        fetch('https://hidden-anchorage-13253.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        setLoading(true);
        loadData();
    }, []);

    const setBookingPending = (id, pending) => {
        setLoading(true);
        fetch(`https://hidden-anchorage-13253.herokuapp.com/books/${id}/${pending}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    loadData();
                }
            })
    };

    const handleDeleteItem = (id) => {
        const confirmation = window.confirm("Are you want to delete this item?")
        if (confirmation) {
            fetch(`https://hidden-anchorage-13253.herokuapp.com/books/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const newBookings = books.filter((booking) => booking._id != id);
                        setBooks(newBookings);
                    }
                })
        }
    }

    return (
        <>
            <div className="w-11/12 mx-auto">
                <div className={loading ? 'visible my-12' : 'hidden'}>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                    <div className="bg-gray-300 animate-pulse h-10 w-full rounded mt-2"></div>
                </div>
                <div className={loading ? 'hidden' : 'visible'}>
                    <h2 className="text-3xl pt-12 font-bold text-center">Manage All Users</h2>
                    <div className="mt-10 mb-12 flex flex-col items-center">
                        <table className="table-auto border-collapse block overflow-auto w-10/12">
                            <thead>
                                <tr>
                                    <th className="border border-2 border-red-600 py-1 px-3">Title</th>
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
                                {
                                    books.map((book) => <tr key={book._id}>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.booked}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.name}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.email}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.date}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.paymentMethod}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3">{book.pending == "pending" ? 'pending' : 'approved'}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3 text-center">{book.pending == "pending" ? <button className="bg-green-500 text-white rounded py-1 px-2" onClick={() => setBookingPending(book._id, 'approved')}>Approve</button> : <button className="bg-red-500 text-white rounded py-1 px-2" onClick={() => setBookingPending(book._id, 'pending')}>Unapprove</button>}</td>
                                        <td className="border border-2 border-red-600 py-1 px-3 text-center"><button onClick={() => handleDeleteItem(book._id)}><i className="fas fa-trash bg-red-600 text-white p-3 rounded cursor-pointer"></i></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageOrders;