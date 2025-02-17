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
        <h2 className="text-xl md:text-2xl font-bold text-blue-600">CHAIRMAN'S MESSAGE</h2>
        <p className="mt-2 text-sm md:text-base">
          Greetings from Asia Pacific Conglomerate!
        </p>
        <p className="mt-2 text-sm md:text-base">
          We are a multidimensional conglomerate specializing in Shipping and logistics industry in Bangladesh. The conglomerate has been in business for the last two decades. Our business stands on three core principles: integrity, efficiency, and innovation in process.
        </p>
        <p className="mt-2 text-sm md:text-base">
          I hope that our website can guide and help you to understand in which businesses we are involved and our future forays.
        </p>
        <p className="mt-2 text-sm md:text-base">
          As a welcoming organization, we always appreciate new ideas and business opportunities. If you need any sort of assistance in our service areas or have a new business opportunity to discuss, please feel free to contact us.
        </p>
        <p className="mt-4 font-semibold">Best Regards,</p>
        <p className="font-semibold">Shamima Khusi</p>
        <p className="text-sm text-gray-600">Founding Chairman</p>
      </div>
      
    </div>
  );
};

export default Owner;
