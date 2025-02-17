import React from "react";

const CompanyOverview = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-200 px-4 mt-3 ">
      <div className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          COMPANY OVERVIEW
        </h2>
        <p className="text-gray-700 mb-4">
          Asia Pacific Conglomerate is one of the leading shipping and logistics
          groups in Bangladesh, which started its journey back in 1998 with its
          first venture as a freight Forwarding Company. Later, it has ventured
          out into shipping and distribution business. In addition to that, the
          freight forwarding company has become an independent third-party
          logistic (3PL) company in Bangladesh.
        </p>
        <p className="text-gray-700 mb-4">
          In the pursuit of growth, the conglomerate is in search to venture
          into different other industries like Ready-made garments, Packaging,
          Textile Chemical, Footwear, and leather goods industries.
        </p>
        <p className="text-gray-700 mb-4">
          The conglomerate always considers human resources as its core asset
          for sustainable growth. So, it conducts regular training and
          development programs to enhance the efficiency and capability of human
          resources.
        </p>
        <p className="text-gray-700">
          As a socially responsible organization, Asia Pacific Conglomerate is
          involved in different corporate social responsibility (CSR) programs
          in an aim to give back to society.
        </p>
      </div>
    </div>
  );
};

export default CompanyOverview;
