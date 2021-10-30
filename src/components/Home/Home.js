import React from 'react';
import InfoCount from './InfoCount';
import HeroArea from './HeroArea';
import Rooms from './Rooms';
import Review from './Review';

const Home = () => {
    return (
        <>
            <HeroArea></HeroArea>
            <InfoCount></InfoCount>
            <Rooms></Rooms>
            <Review></Review>
        </>
    );
};

export default Home;