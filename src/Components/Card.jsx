import React from 'react';
import bd from '../assets/bd.jpg'
const Card = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 p-4 bd ">
                <div className="bg-white border border-gray-300 shadow-md p-6 max-w-3xl w-full rounded-md">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                        WELCOME TO Rifishi Traders
                    </h2>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    Rifishi Traders Conglomerate is one of the leading importers and suppliers of lightweight electrical goods, luxury items, daily accessories, and unique gifts.Our company established in 2015.
                    We prioritize customers needs and strive to exceed your expectations with every interaction.  Our experienced team, including skilled technical professionals, works tirelessly to ensure that every client receives the highest standard of service.
                    </p>
                    <a href="#" className="text-blue-600 font-medium mt-3 inline-block hover:underline">
                        KNOW MORE
                    </a>
                </div>
            </div>
            
                
            </div>
       
    );
};

export default Card;