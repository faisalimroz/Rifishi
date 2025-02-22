import React from 'react';
import bd from '../assets/bd.jpg'
const Card = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 p-4 bd ">
                <div className="bg-white border border-gray-300 shadow-md p-6 max-w-3xl w-full rounded-md">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
                        Introduction
                    </h2>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    Since 2015, Rifishi Traders has emerged as a premier importer and supplier, specializing in a wide array of lightweight electrical goods, luxury items, everyday accessories, and exquisite gift products. Our dedication to quality is unwavering; we meticulously source each item to ensure it meets our high standards while remaining competitively priced.
  Our experienced team, including skilled technical professionals, works tirelessly to ensure that every client receives the highest standard of service.
                    </p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    At the heart of our success is our experienced team, composed of knowledgeable professionals who are committed to delivering unparalleled customer service. We prioritize client satisfaction above all else, working closely with our customers to understand their needs and provide tailored solutions.
                    </p>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                    Rifishi Traders is not just a supplier; we are a trusted partner in enhancing your lifestyle with our thoughtfully curated products. Our mission is to consistently exceed expectations, making every interaction a delightful experience for our valued customers.
                    </p>
                    <a href="/about" className="text-blue-600 font-medium mt-3 inline-block hover:underline">
                        KNOW MORE
                    </a>
                </div>
            </div>
            
                
            </div>
       
    );
};

export default Card;