import React from 'react';

const Cards = ({ item, onReadMore }) => {
  return (
    <div className="card bg-gray-700 w-72 shadow-xl h-[440px] hover:scale-105 transform duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-lg overflow-hidden">
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          src={item.Pic}
          alt=""
          className="w-full h-full object-fill object-center"
        />
      </figure>
      <div>
        <div className="card-body p-4 h-48">
          <h3 className='font-light text-center text-amber-100 mb-1'>
            {item.Name} , {item.Date}
          </h3>
          <h2 className="card-title text-purple-600 mb-2 font-bold">
            {item.Title}
          </h2>
          {/* Summary with text truncation */}
          <p
            className="text-purple-300 font-semibold overflow-hidden text-ellipsis"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4, // Truncate after 4 lines
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.Summary}
          </p>
        </div>
        <div className="card-actions pr-4 pt-0 flex justify-end items-end">
          <button
            className="cursor-pointer px-3 py-2 rounded-full border-[2px] border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-200"
            onClick={() => onReadMore(item)} // Trigger onReadMore when button is clicked
          >
            ReadMe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
