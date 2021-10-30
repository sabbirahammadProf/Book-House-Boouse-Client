import React from 'react';
import heroImage from '../../images/heroArea.jpg';

const HeroArea = () => {
    return (
        <section style={{backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
            <div className="light-bg w-full h-full flex items-center">
                <div className="w-10/12 mx-auto">   
                    <h1 className="text-black text-6xl font-bold">Book an House</h1>
                    <p className="text-black w-6/12 py-6 font-bold">Are you want a want a house in your vacation tour? We offer our service in more than 170+ countries. You can contact with us!!</p>
                    <button className="primary-button">Learn More <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;