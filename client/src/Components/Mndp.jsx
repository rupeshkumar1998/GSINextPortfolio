import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Use this only if using React Router
import list from "../../Public/List.json";
import Cards from './Cards';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';
import { FaBackwardStep } from "react-icons/fa6";

const MndP = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // State to handle sorting
  const navigate = useNavigate(); // Use this only if using React Router

  const handleReadMore = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  // Sorting logic for older to newest or newest to older
  const sortedList = [...list].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.Date) - new Date(a.Date); // Newest first
    } else {
      return new Date(a.Date) - new Date(b.Date); // Oldest first
    }
  });

  // Filter the list based on search query
  const filteredList = sortedList.filter(item =>
    searchQuery.toLowerCase() === '' ||
    item.Name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Date?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Id?.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Function to handle "Back" button click
  const handleBack = () => {
    navigate('/'); // If using React Router
    // window.location.href = "/"; // Uncomment if not using React Router and want to use plain navigation
  };

  return (
    <div className='h-[600px] rounded-md bg-neutral-900 items-center justify-center relative w-full'>
      <div>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className='relative w-full h-screen flex py-4 mb-20 overflow-hidden'>
        {/* Main Content */}
        <div className='flex-1 z-10'>
          
          {/* Back Button, Search Bar, and Sort Dropdown */}
          <div className='flex justify-between items-center py-5 pb-8 max-w-screen-2xl mx-auto px-6'>
            {/* Back Button */}
            <div className="relative mr-4">
              <button
                onClick={handleBack}
                className=" text-white px-4 py-2 rounded-full shadow-lg"
              >
                <FaBackwardStep />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg left-12">
              <label className="flex items-center bg-white rounded-full shadow-lg px-4 py-2">
                <IoIosSearch className="text-xl text-gray-500" />
                <input 
                  type="text" 
                  className="grow outline-none px-3 text-gray-700 bg-transparent" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <kbd className="kbd kbd-sm ml-2">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </div>

            {/* Dropdown for Sorting */}
            <div className="relative">
              <label htmlFor="sortOrder" className="text-white mr-2"> </label>
              <select
                id="sortOrder"
                className="bg-white text-gray-700 rounded-lg px-3 py-2 outline-none shadow-lg"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="newest">Newest to Oldest</option>
                <option value="oldest">Oldest to Newest</option>
              </select>
            </div>
          </div>

          {/* Cards Container with Flexbox and Scroll */}
          <div className='max-w-screen-2xl container mx-auto md:px-1 px-4'>
            <div className={`pt-10 flex flex-wrap gap-x-16 gap-y-10 justify-center ${selectedItem ? 'md:flex-nowrap' : ''} overflow-y-auto no-scrollbar max-h-[80vh]`}>
              {
                filteredList.map((item) => (
                  <Cards key={item.Id} item={item} onReadMore={() => handleReadMore(item)} />
                ))
              }
            </div>
          </div>
        </div>

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
                <div className="w-[360px] h-full sticky top-0">
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
                <div className="w-[580px] h-auto overflow-y-auto pr-4">
                  <h1 className="text-5xl font-semibold text-center">{selectedItem.Title}</h1>
                  <p className="pt-6 text-xl px-8">{selectedItem.Summary}</p>
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
