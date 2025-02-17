import vabi from "../../assets/vabi.jpg";

const Owner = () => {
  return (
    <div className="max-w-4xl mt-2 mx-auto p-6 bg-gray-200 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <img
          src={vabi} 
          alt="Chairman"
          width={160}
          height={160}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      
      <div className="text-gray-800 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600">Founder's MESSAGE</h2>
        <p className="mt-2 text-sm md:text-base">
          Greetings from Rifishi Traders
        </p>
        <p className="mt-2 text-sm md:text-base">

        Since our inception in 2015, we have dedicated ourselves to becoming one of the leading importers and suppliers of lightweight electrical goods, luxury items, daily accessories, and unique gifts. Our commitment to quality and affordability is at the heart of everything we do.        </p>
        <p className="mt-2 text-sm md:text-base">
        At Rifishi Traders, we believe that customer satisfaction is paramount. Our experienced team, including skilled technical professionals, works tirelessly to ensure that every client receives the highest standard of service. We prioritize your needs and strive to exceed your expectations with every interaction.        </p>
        <p className="mt-2 text-sm md:text-base">
        Thank you for choosing Rifishi Traders. We look forward to serving you!        </p>
        <p className="mt-4 font-semibold">Warm Regards,</p>
        <p className="font-semibold">Shamima Khusi</p>
        <p className="text-sm text-gray-600">Founder, Rifishi Traders</p>
      </div>
      
    </div>
  );
};

export default Owner;
