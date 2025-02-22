import React from 'react';
import Hero from '../../Components/Hero';
import Card from '../../Components/Card';
import BusinessCard from '../../Components/BusinessCard/BusinessCard';
import PartnersCard from '../../Components/OurPartners/OurPartners';

const Home = () => {
    return (
        <div className='bg-gray-200'>
            <Hero Title={"WELCOME TO Rifishi Traders"}></Hero>
            <Card></Card>
            <PartnersCard></PartnersCard>
            <BusinessCard></BusinessCard>
        </div>
    );
};

export default Home;