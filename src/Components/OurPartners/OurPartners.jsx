import nogod from '../../assets/nogod.png'
import brac from '../../assets/brac.jfif'
import b from '../../assets/shah.jfif'
import br from '../../assets/national.jfif'
import bracss from '../../assets/opsonin.jfif'
import brc from '../../assets/general.jfif'
import bracs from '../../assets/incepta.jfif'

const partners = [
    { name: "Partner 1", icon: brac },
    { name: "Partner 2", icon: bracs },
    { name: "Partner 3", icon: brc },
    { name: "Partner 4", icon: bracss },
    { name: "Partner 5", icon:br },
    { name: "Partner 6", icon: b }
]
  
  const PartnersCard = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-200  rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 text-center">Our Partners</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center ">
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
  