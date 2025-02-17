import nogod from '../../assets/nogod.png'

const partners = [
    { name: "Partner 1", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 2", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 3", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 4", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 5", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 6", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 7", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
    { name: "Partner 8", icon: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" },
  ];
  
  const PartnersCard = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-200  rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={partner.icon}
                alt={partner.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <p className="mt-2 text-sm md:text-base font-semibold text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PartnersCard;
  