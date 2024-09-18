import { useState } from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, media }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#1a1a1a] p-5 rounded-xl relative w-4/5 max-w-lg text-center text-primary border-2 border-primary overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-1 right-3 bg-none border-none text-3xl text-primary cursor-pointer transform transition-transform duration-300 hover:text-white" onClick={onClose}>×</button>
        <Image src={media.imageMDL} alt={media.title} layout="responsive" width={600} height={400} className="rounded-lg p-2" />
        <h1 className="mt-0 text-2xl mb-2">{media.title}</h1>
        <h3 className="text-sm mb-2">{media.detalhes}</h3>
        <p className="text-justify">{media.description}</p>
      </div>
    </div>
  );
};

export default Modal;