import React from 'react';
// import { TiTick } from 'react-icons/fa'; // Importing an icon from react-icons
import { TiTick } from "react-icons/ti";

const BlogDescription = () => {
  return (
    <div className="pl-1 pr-4 pt-2 pb-6 font-sans  mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">Main Heading</h1>
      <p className="text-base text-white mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur beatae ipsam cum fugit harum ex molestiae ullam enim! Animi quibusdam amet dolores? Omnis labore eveniet incidunt atque fugiat optio voluptatem. Consectetur iste impedit quae dolorum repellendus numquam provident cupiditate fugit temporibus dicta deleniti consequatur, sequi in! Illum repellat earum quaerat modi alias iusto, tempora facere officia dolorem adipisci tempore, veniam rem minima pariatur rerum distinctio eveniet dolore labore harum similique numquam. Ab officiis incidunt provident iure, aut recusandae repellendus molestias sed voluptatem nemo deleniti magni, rerum facilis. Nemo labore nam beatae cumque at fugiat nisi alias quasi voluptates assumenda!
      </p>
      <h2 className="text-2xl font-semibold text-white mb-4">Subheading</h2>
      <ul className="list-none pl-0">
        <li className="flex items-center text-base text-white mb-2">
          <TiTick className="text-purple-500 mr-2" />
          Bullet Point 1
        </li>
        <li className="flex items-center text-base text-white mb-2">
          <TiTick className="text-purple-500 mr-2" />
          Bullet Point 2
        </li>
        <li className="flex items-center text-base text-white mb-2">
          <TiTick className="text-purple-500 mr-2" />
          Bullet Point 3
        </li>
      </ul>
    </div>
  );
};

export default BlogDescription;
