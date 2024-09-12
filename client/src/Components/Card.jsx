import React from 'react';

const Card = ({ imageUrl, blogTime, heading }) => {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <div className="text-white mb-2">{blogTime}</div>
        <h2 className="text-white text-2xl font-bold">{heading}</h2>
      </div>
    </div>
  );
};

export default Card;
