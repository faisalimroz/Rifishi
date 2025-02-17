import React from 'react';
import Hero from '../../Components/Hero';
const Career = () => {
    return (
        <div>
            <Hero Title={'Career'} />
            <div className="h-40 w-40 sm:w-60 sm:h-48 md:w-80 md:h-56 flex items-center justify-center mx-auto text-center">
                <h1 className="text-lg font-bold">No Vacancy Available at the Moment</h1>
            </div>

        </div>
    );
};

export default Career;