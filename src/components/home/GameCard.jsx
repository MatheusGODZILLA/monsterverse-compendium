import Image from 'next/image';

const GameCard = ({ imageSrc, title }) => (
  <div className="flex flex-col items-center bg-black from-gray-800 to-black rounded-lg p-4 text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl w-56 h-full shadow-lg hover:bg-opacity-90"> {/* Card maior para um layout mais espaçoso */}
    <div className="w-full h-84 flex items-center justify-center mb-4 rounded-lg overflow-hidden">
      <Image 
        src={imageSrc} 
        alt={title} 
        width={300} 
        height={300} 
        className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" 
      />
    </div>
    <h2 className="text-m font-bold text-orange-400 transition-colors duration-300 ease-in-out hover:text-orange-500">{title}</h2>
  </div>
);

export default GameCard;