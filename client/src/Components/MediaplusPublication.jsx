import React, { useEffect, useState } from 'react';
import list from '../../Public/List.json'; // Ensure correct path to your list JSON
import CardC from './CardC';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { Link } from 'react-router-dom';

const MndP = () => {
  // Slick slider settings with responsive breakpoints
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3, // Default number of slides for large screens
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 768, // Small tablets and large phones
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 480, // Small phones
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        }
      }
    ]
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleReadMore = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  // Get the latest items from the list
  const latestItems = list.slice(-6);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable background scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled again when modal closes
    };
  }, [selectedItem]);

  return (
    <div className="h-auto bg-neutral-900 items-center justify-center relative w-full">
      <div>
      <div className='text-4xl text-center  text-purple-400 font-semibold pt-10'>
        <h1>Media & Publication</h1>
      </div>
      <div className="absolute right-10 top-10 md:right-20 ">
          <Link to="/media-publication">
            <button className='bg-white font-semibold p-3 rounded-lg'>
              See More
            </button>
          </Link>
        </div>
      </div>
      
      <div className="relative w-full h-auto overflow-hidden">
        {/* See More Button */}
       

        <div className="container max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20">
          <div className="my-6">
            <Slider {...settings}>
              {latestItems.map((item) => (
                <div key={item.Id} className="p-5 flex justify-center"> {/* Flexbox used for better layout control */}
                  <CardC item={item} onReadMore={() => handleReadMore(item)} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Centered Popup for Details */}
        {selectedItem && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          >
            <div className="bg-slate-900 text-white p-6 w-full sm:w-5/6 md:w-2/3  max-h-[90vh] overflow-y-auto shadow-lg relative rounded-lg">
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={handleClose}>
                <MdOutlineCloseFullscreen />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 pb-6 pt-4 h-full w-full">
                {/* Left Side */}
                <div className="w-full sm:w-1/3 flex-shrink-0">
                  <div className="relative w-full h-60 overflow-hidden">
                    <img
                      src={selectedItem.Pic}
                      alt={selectedItem.Title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="pt-5 text-center">
                    <h2 className="text-3xl font-bold mb-2">{selectedItem.Name}</h2>
                    <p className="text-yellow-200 font-medium text-lg">{selectedItem.Date}</p>
                  </div>
                </div>

                {/* Right Side with Scroll */}
                <div className="w-full sm:w-2/3 overflow-y-auto no-scrollbar pr-4">
                  <h1 className="text-4xl font-semibold text-center mb-6">{selectedItem.Title}</h1>
                  <p className="text-lg px-4 sm:px-0">{selectedItem.Summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MndP;
