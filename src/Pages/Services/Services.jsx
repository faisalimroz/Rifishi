import React from 'react';
import Hero from '../../Components/Hero';
import BusinessCard from '../../Components/BusinessCard/BusinessCard';
import CompanyOverview from '../../Components/CompanyOverview/CompanyOverview';

const Services = () => {
    return (
        <div className='bg-gray-200'>
            <Hero Title={Services}></Hero>
             <CompanyOverview></CompanyOverview>
            <BusinessCard></BusinessCard>
        </div>
    );
};

export default Services;