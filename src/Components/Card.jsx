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
                        Asia Pacific Conglomerate is one of the leading shipping and logistics groups in Bangladesh,
                        which started its journey back in 1998 with its first venture as a freight Forwarding Company.
                        Later, it has ventured out into shipping and distribution business. In addition to that, the
                        freight forwarding company has become an independent third-party logistic (3PL) company in Bangladesh.
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