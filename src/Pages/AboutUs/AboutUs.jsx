import React from 'react';
import Hero from '../../Components/Hero';
import CompanyOverview from '../../Components/CompanyOverview/CompanyOverview';
import History from '../../Components/History/History';
import Owner from '../../Components/Owner/Owner';
import BusinessCard from '../../Components/BusinessCard/BusinessCard';

const AboutUs = () => {
    return (
        <div className='min-h-screen bg-gray-200'>
            <Hero Title={"About Us"}/>
            <History></History>
            <Owner></Owner>
            <BusinessCard></BusinessCard>
        </div>
    );
};

export default AboutUs;