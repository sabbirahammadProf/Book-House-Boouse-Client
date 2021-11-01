import React from 'react';

const CustomerCount = () => {
    return (
        <section className="my-28">
            <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-8 w-11/12 mx-auto">
                <div className="flex flex-col text-center">
                    <h3 className="text-5xl pb-3 font-bold">10298+</h3>
                    <p>Total client</p>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="text-5xl pb-3 font-bold">40+</h3>
                    <p>Runnig client</p>
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="text-5xl pb-3 font-bold">170+</h3>
                    <p>Countries</p >
                </div>
                <div className="flex flex-col text-center">
                    <h3 className="text-5xl pb-3 font-bold">3400+</h3>
                    <p>Available rooms</p >
                </div>
            </div>
        </section>
    );
};

export default CustomerCount;