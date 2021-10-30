import React from 'react';
import roomA from '../../images/room2.jpg';

const Review = () => {
    return (
        <section className="w-11/12 mx-auto mt-28 mb-24">
            <h2 className="text-3xl font-bold">What client's says about us</h2>
            <p className="pt-3 mb-8">Why we popular? Hear from them</p>
            <div className="grid grid-cols-3 gap-8">
                {/* <div className="px-3 py-8 border-2 border-gray-300 animate-pulse">
                   <div className="animate-pulse h-20 w-20 bg-gray-300 rounded-full mx-auto"></div>
                   <div className="animate-pulse h-10 w-2/3 bg-gray-300 mt-4 mx-auto"></div>
                   <div className="animate-pulse h-2 w-1/3 bg-gray-300 mt-4 mx-auto"></div>
                   <div className="animate-pulse h-2 w-2/5 bg-gray-300 mt-4 mx-auto mt-8"></div>
                   <div className="animate-pulse h-20 w-4/5 bg-gray-300 mt-4 mx-auto mt-8"></div>
                </div> */}
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src={roomA} alt="" className="w-20 h-20 rounded-full mx-auto my-3"/>
                    <h3 className="text-2xl font-bold pt-3">Selina Akter</h3>
                    <p className="text-sm">Tourist of Sri Lanka</p>
                    <div className="mt-4">
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">This experience is very good. I have everything what I want. Thanks to Boouse for that.</p>
                </div>
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src={roomA} alt="" className="w-20 h-20 rounded-full mx-auto my-3"/>
                    <h3 className="text-2xl font-bold pt-3">Atik Mia</h3>
                    <p className="text-sm">Tourist of London</p>
                    <div className="mt-4">
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">This experience is very good. I have everything what I want. Thanks to Boouse for that.</p>
                </div>
                <div className="shadow-2xl pt-8 pb-12 px-5 rounded text-center">
                    <img src={roomA} alt="" className="w-20 h-20 rounded-full mx-auto my-3"/>
                    <h3 className="text-2xl font-bold pt-3">Shoaib Akter</h3>
                    <p className="text-sm">Tourist of Abu Dhabi</p>
                    <div className="mt-4">
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                        <i class="fas fa-star inline-block text-yellow-400"></i>
                    </div>
                    <p className="mt-4">This experience is very good. I have everything what I want. Thanks to Boouse for that.</p>
                </div>
            </div>
        </section>
    );
};

export default Review;