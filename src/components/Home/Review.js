import React from 'react';

const Review = () => {
    return (
        <section className="w-11/12 mx-auto mt-28 mb-24">
            <h2 className="text-3xl font-bold">What client's says about us</h2>
            <p className="pt-3 mb-8">Why we popular? Hear from them</p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src="https://i.ibb.co/dWcMY0p/download.jpg" alt="" className="w-20 h-20 rounded-full mx-auto my-3 rounded-full"/>
                    <h3 className="text-2xl font-bold pt-3">Selina Akter</h3>
                    <p className="text-sm">Tourist of Sri Lanka</p>
                    <div className="mt-4">
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">This experience is very good. I have everything what I want. Thanks to Boouse for that.</p>
                </div>
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src="https://i.ibb.co/5LGLh2k/download-1.jpg" alt="" className="w-20 h-20 rounded-full mx-auto my-3"/>
                    <h3 className="text-2xl font-bold pt-3">Renita Maxwell</h3>
                    <p className="text-sm">Tourist of London</p>
                    <div className="mt-4">
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">What a company that is!! I am very happy for their very good support.</p>
                </div>
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src="https://i.ibb.co/X7yQZ46/download-2.jpg" alt="" className="w-20 h-20 rounded-full mx-auto my-3"/>
                    <h3 className="text-2xl font-bold pt-3">Shoaib Akter</h3>
                    <p className="text-sm">Tourist of Abu Dhabi</p>
                    <div className="mt-4">
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                        <i className="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">Why this company is too good??? Just kidding, it was a very good experience. Thanks for the best support.</p>
                </div>
            </div>
        </section>
    );
};

export default Review;