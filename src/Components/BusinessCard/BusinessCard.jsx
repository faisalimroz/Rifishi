import React from "react";

const BusinessCard = () => {
  return (
    <div className="bg-gray-200 py-10 px-5 flex justify-center items-center">
      <div className="bg-gray-200 rounded-lg p-6 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Text Section */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800">
              DOING BUSINESS WITH US
            </h2>
            <p className="text-gray-600 mt-2">
              We always look forward to listening and discussing new business
              ideas and opportunities. If you have any of them, then contact us
              soon! You are only one email/call away from us.
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-12 md:mt-0">
            <a
              href="#"
              className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              LET'S TALK BUSINESS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
