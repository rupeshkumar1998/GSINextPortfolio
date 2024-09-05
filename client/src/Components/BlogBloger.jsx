import React from 'react';
import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa';
import BlogDescription from './BlogDescription';

const BlogBloger = ({ imageUrl, authorName, blogDate, buttonText }) => {
  return (
    <div className="relative inline-block p-4 bg-[#050709] rounded-lg shadow-lg">
      {/* Image with Button */}
      <div className="relative">
        <img
          src={imageUrl}
          alt="Blog"
          className="rounded-lg w-full h-auto"
        />
        <button
          className="absolute top-2 right-2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm"
          style={{ whiteSpace: 'nowrap' }}
        >
          {buttonText}
        </button>
      </div>

      {/* Author, Date, and Comments */}
      <div className="mt-4 flex items-center text-white  space-x-4">
        {/* Author */}
        <div className="flex items-center space-x-2 hover:text-purple-400">
          <FaUser />
          <span>{authorName}</span>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2 hover:text-purple-400">
          <FaCalendarAlt />
          <span>{blogDate}</span>
        </div>

        {/* Comments Button */}
        <button className="bg-[#050709] text-white hover:text-purple-400 px-4 py-2 rounded-full text-sm flex items-center space-x-2">
          <FaComments />
          <span>Comments</span>
        </button>
      </div>
        <p className='text-white pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo alias harum adipisci mollitia at reiciendis et autem sit est quis dolores qui, accusantium ipsa eius. Vel alias esse explicabo veniam maxime dicta aliquam dolorum praesentium architecto molestias odio magnam sunt magni distinctio suscipit ea similique, porro sapiente eius cum consectetur a quae. Culpa exercitationem ducimus reiciendis quo nisi temporibus ea reprehenderit velit minus? Rerum quis porro excepturi sit. Illum dignissimos assumenda fuga officia nesciunt, in totam aut ducimus voluptatum sit incidunt voluptas eaque, esse inventore cum quas quis, ipsum dicta beatae nobis. Tempora saepe molestias, excepturi veniam reprehenderit quibusdam?</p>
        <hr className="border-t border-purple-500 my-4" />
        <BlogDescription/>
    </div>
  );
};

export default BlogBloger;
