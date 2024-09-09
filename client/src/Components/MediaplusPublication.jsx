import React, { useEffect, useState } from 'react';
import list from '../../Public/List.json'; // Ensure correct path to your list JSON
import CardC from './CardC';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { Link } from 'react-router-dom';



const MndP = () => {

  


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500
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
    <div className="h-[620px] bg-neutral-900 items-center justify-center relative w-full">
      <div className='text-4xl text-center text-purple-400 font-semibold pt-10 '>
        <h1>Media & Publication</h1>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="container max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20">
          {/* Adjust the margin from top (mt-10) and bottom (mb-10) for overall spacing */}
          <div className="my-6">
            <Slider {...settings}>
              {latestItems.map((item) => (
                <div key={item.Id} className="p-5"> {/* Added padding around the card for spacing */}
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
            <div className="bg-slate-900 text-white p-6 w-2/3 md:w-1/2 lg:w-5/6 max-h-[80vh] overflow-y-auto shadow-lg h-5/6 relative">
              <button className="absolute top-4 right-4 text-white" onClick={handleClose}>
                <MdOutlineCloseFullscreen />
              </button>

              <div className="flex gap-8 pb-6 pt-4 h-full w-full">
                {/* Left Side */}
                <div className="w-[360px]  h-full sticky top-0"> {/* Make left side fixed */}
                  <div>
                    <figure className="relative w-[360px] h-60 overflow-hidden">
                      <img
                        src={selectedItem.Pic}
                        alt={selectedItem.Title}
                        className="w-full h-full object-fill object-center"
                      />
                    </figure>
                  </div>
                  <div className="p-7">
                    <h2 className="text-5xl font-bold mb-4 text-center">{selectedItem.Name}</h2>
                    <p className="text-center text-yellow-200 font-medium text-2xl">{selectedItem.Date}</p>
                  </div>
                </div>

                {/* Right Side with Scroll */}
                <div className="w-[580px] h-auto overflow-y-auto no-scrollbar pr-4">
                  <h1 className="text-5xl font-semibold text-center">{selectedItem.Title}</h1>
                  <p className="pt-6 text-xl px-8">{selectedItem.Summary}</p>
                  {/* Additional content can be added here, and the right side will scroll */}
                </div>
              </div>
            </div>
           
          </div>
        )}
         <div className="absolute bottom-20 right-20 ">
        <Link to="/media-publication">
          <button className='bg-white font-semibold p-2 rounded-lg'>
            see more
          </button>
        </Link>
        </div>
      </div>
     
    </div>
  );
};

export default MndP;
