import { useState } from 'react';
import MediaCard from './MediaCard';
import GameCard from './GameCard';
import Modal from './Modal';
import { mediaData } from '../../../mediaset/mediaData';
import { mediaData2 } from '../../../mediaset/mediaData2';
import { mediaData3 } from '../../../mediaset/mediaData3';

const MediaSection = () => {
  const [modalData, setModalData] = useState(null);

  const handleCardClick = (media) => {
    setModalData(media);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <section className="flex flex-col items-center justify-center bg-cover bg-center text-center text-white min-h-screen p-8" style={{ backgroundImage: "url('/img/bg_noscratch.71d906e.jpg')", backgroundSize: "100% 100%" }}>
      <h1 className="text-4xl font-bold mb-0">MÍDIAS</h1>
      
      <div className="w-full mt-6 items-center justify-center">
        <h2 className="text-xl mt-8 mb-4">Filmes</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {mediaData.map((media, index) => (
            <div key={index} onClick={() => handleCardClick(media)}>
              <MediaCard imageSrc={media.imageSrc} title={media.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-6">
        <h2 className="text-xl mt-8 mb-4">Séries e HQs</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {mediaData2.map((media, index) => (
            <div key={index} onClick={() => handleCardClick(media)}>
              <MediaCard imageSrc={media.imageSrc} title={media.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-6">
        <h2 className="text-xl mt-8 mb-4">Games</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {mediaData3.map((media, index) => (
            <div key={index} onClick={() => handleCardClick(media)}>
              <GameCard imageSrc={media.imageSrc} title={media.title} />
            </div>
          ))}
        </div>
      </div>

      <button className="mt-8 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">CONHEÇA A LINHA DO TEMPO</button>

      {modalData && (
        <Modal isOpen={!!modalData} onClose={handleCloseModal} media={modalData} />
      )}
    </section>
  );
};

export default MediaSection;