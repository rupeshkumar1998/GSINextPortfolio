// // // import { useEffect, useState } from 'react';
// // // import { useLocation } from 'react-router-dom';
// // // import { awardsData } from "../Data/AwardsData";
// // // // import {MdCancel} from 'react-icons/md'
// // // import { formatDistanceToNowStrict, isThisWeek, isThisMonth, isThisYear, isToday, parse } from 'date-fns';

// // // const AwardRecognitionPage = () => {
// // //     const location = useLocation();

// // //     // State variables
// // //     const [selectedAward, setSelectedAward] = useState(null);
// // //     const [filteredAwards, setFilteredAwards] = useState(awardsData);
// // //     const [selectedTag, setSelectedTag] = useState("All");
// // //     const [searchQuery, setSearchQuery] = useState("");
// // //     const [suggestions, setSuggestions] = useState([]);
// // //     const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// // //     const [showTagDropdown, setShowTagDropdown] = useState(false);
// // //     const [showDateDropdown, setShowDateDropdown] = useState(false);
// // //     const [selectedDateFilter, setSelectedDateFilter] = useState("All Time");

// // //     // Extract unique tags from awardsData
// // //     const uniqueTags = ["All", ...new Set(awardsData.flatMap(award => award.tags))];

// // //     // Date filter options
// // //     const dateFilters = [
// // //         "All Time",
// // //         "Today",
// // //         "This Week",
// // //         "This Month",
// // //         "This Year"
// // //     ];

// // //     useEffect(() => {
// // //         if (location.state && location.state.title) {
// // //             setSelectedAward(location.state);
// // //             setFilteredAwards([location.state]);
// // //         }
// // //     }, [location.state]);

// // //     const handleTagClick = (tag) => {
// // //         setSelectedTag(tag);
// // //         setSearchQuery("");
// // //         setSuggestions([]);
// // //         setActiveSuggestionIndex(-1);
// // //         setShowTagDropdown(false);
// // //         applyFilters(tag, selectedDateFilter);
// // //     };

// // //     const handleDateFilterClick = (dateFilter) => {
// // //         setSelectedDateFilter(dateFilter);
// // //         setShowDateDropdown(false);
// // //         applyFilters(selectedTag, dateFilter);
// // //     };

// // //     const applyFilters = (tag, dateFilter) => {
// // //         let filtered = awardsData;

// // //         if (tag !== "All") {
// // //             filtered = filtered.filter(award => award.tags.includes(tag));
// // //         }

// // //         if (dateFilter !== "All Time") {
// // //             const now = new Date();
// // //             filtered = filtered.filter(award => {
// // //                 const uploadDate = parse(award.uploadDate, "dd-MM-yyyy", new Date());
// // //                 switch (dateFilter) {
// // //                     case "Today":
// // //                         return isToday(uploadDate);
// // //                     case "This Week":
// // //                         return isThisWeek(uploadDate);
// // //                     case "This Month":
// // //                         return isThisMonth(uploadDate);
// // //                     case "This Year":
// // //                         return isThisYear(uploadDate);
// // //                     default:
// // //                         return true;
// // //                 }
// // //             });
// // //         }

// // //         setFilteredAwards(filtered);
// // //     };

// // //     const handleSearchChange = (e) => {
// // //         const query = e.target.value;
// // //         setSearchQuery(query);
// // //         setActiveSuggestionIndex(-1);
// // //         if (query) {
// // //             const matchingAwards = awardsData.filter(award =>
// // //                 award.title.toLowerCase().includes(query.toLowerCase()) ||
// // //                 award.description.toLowerCase().includes(query.toLowerCase())
// // //             );
// // //             setSuggestions(matchingAwards);
// // //         } else {
// // //             setSuggestions([]);
// // //         }
// // //     };

// // //     const handleKeyDown = (e) => {
// // //         if (e.key === "ArrowDown") {
// // //             setActiveSuggestionIndex(prevIndex =>
// // //                 prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
// // //             );
// // //         } else if (e.key === "ArrowUp") {
// // //             setActiveSuggestionIndex(prevIndex =>
// // //                 prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
// // //             );
// // //         } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
// // //             handleSuggestionClick(suggestions[activeSuggestionIndex]);
// // //         }
// // //     };

// // //     const handleSuggestionClick = (suggestion) => {
// // //         setSelectedAward(suggestion);
// // //         setFilteredAwards([suggestion]);
// // //         setSearchQuery("");
// // //         setSuggestions([]);
// // //         setActiveSuggestionIndex(-1);
// // //     };

// // //     const closeModal = () => {
// // //         setSelectedAward(null);
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-8">
// // //             <div className="max-w-5xl mx-auto">
// // //                 <h1 className="text-5xl font-extrabold mb-8 text-center">Awards & Recognitions</h1>

// // //                 {/* Tag and Date Filter Section */}
// // //                 <div className="flex justify-center space-x-6 mb-8">
// // //                     {uniqueTags.slice(0, 3).map((tag) => (
// // //                         <button
// // //                             key={tag}
// // //                             onClick={() => handleTagClick(tag)}
// // //                             className={`px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${selectedTag === tag ? 'bg-indigo-600' : 'bg-purple-700'} hover:bg-purple-600`}
// // //                         >
// // //                             {tag}
// // //                         </button>
// // //                     ))}

// // //                     {/* Dropdown for additional tags */}
// // //                     {uniqueTags.length > 3 && (
// // //                         <div className="relative">
// // //                             <button
// // //                                 className="px-6 py-3 rounded-full bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
// // //                                 onClick={() => setShowTagDropdown(!showTagDropdown)}
// // //                             >
// // //                                 More Tags
// // //                             </button>
// // //                             {showTagDropdown && (
// // //                                 <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
// // //                                     {uniqueTags.slice(3).map((tag) => (
// // //                                         <button
// // //                                             key={tag}
// // //                                             onClick={() => handleTagClick(tag)}
// // //                                             className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedTag === tag ? 'bg-indigo-600 text-white' : ''}`}
// // //                                         >
// // //                                             {tag}
// // //                                         </button>
// // //                                     ))}
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     )}

// // //                     {/* Date Filter Dropdown */}
// // //                     <div className="relative">
// // //                         <button
// // //                             className="px-6 py-3 rounded-full bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
// // //                             onClick={() => setShowDateDropdown(!showDateDropdown)}
// // //                         >
// // //                             {selectedDateFilter}
// // //                         </button>
// // //                         {showDateDropdown && (
// // //                             <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
// // //                                 {dateFilters.map((filter) => (
// // //                                     <button
// // //                                         key={filter}
// // //                                         onClick={() => handleDateFilterClick(filter)}
// // //                                         className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedDateFilter === filter ? 'bg-indigo-600 text-white' : ''}`}
// // //                                     >
// // //                                         {filter}
// // //                                     </button>
// // //                                 ))}
// // //                             </div>
// // //                         )}
// // //                     </div>
// // //                 </div>

// // //                 {/* Search Bar with Suggestions */}
// // //                 <div className="relative mb-8 z-10">
// // //                     <input
// // //                         type="text"
// // //                         value={searchQuery}
// // //                         onChange={handleSearchChange}
// // //                         onKeyDown={handleKeyDown}
// // //                         placeholder="Search for awards or certifications..."
// // //                         className="w-full px-4 py-2 rounded-full bg-[#3A0C58] text-white focus:outline-none"
// // //                     />
// // //                     {suggestions.length > 0 && (
// // //                         <ul className="absolute w-full bg-white text-black rounded-lg shadow-lg mt-2 max-h-40 overflow-y-auto">
// // //                             {suggestions.map((suggestion, index) => (
// // //                                 <li
// // //                                     key={index}
// // //                                     onClick={() => handleSuggestionClick(suggestion)}
// // //                                     className={`px-4 py-2 cursor-pointer ${activeSuggestionIndex === index ? 'bg-gray-200' : ''} hover:bg-gray-200`}
// // //                                 >
// // //                                     {suggestion.title}
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     )}
// // //                 </div>

// // //                 {/* Selected Award Modal */}
// // //                 {selectedAward && (
// // //                     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
// // //                         <div className="bg-[#1F0735] p-6 rounded-lg shadow-lg max-w-xl w-full relative">
// // //                             {/* <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl">{<MdCancel/>}</button> */}
// // //                             <h2 className="text-3xl font-bold mb-4">{selectedAward.title}</h2>
// // //                             <img src={selectedAward.imagePath} alt={selectedAward.title} className="w-full h-64 object-cover rounded-md mb-4" />
// // //                             <p className="text-lg mb-6">{selectedAward.description}</p>
// // //                             <div className="flex justify-between items-center">
// // //                                 <p className="text-sm text-gray-400">Uploaded {formatDistanceToNowStrict(parse(selectedAward.uploadDate, "dd-MM-yyyy", new Date()))} ago</p>
// // //                                 {/* <a href={selectedAward.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View More <RxArrowTopRight className="inline" /></a> */}
// // //                                 <button
// // //                                     onClick={closeModal}
// // //                                     className="bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300"
// // //                                 >
// // //                                     Close
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 {/* Awards Section */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //                     {filteredAwards.map((award) => (
// // //                         <div key={award.title} className="bg-[#1F0735] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => setSelectedAward(award)}>
// // //                             <img src={award.imagePath} alt={award.title} className="w-full h-40 object-cover rounded-md mb-4" />
// // //                             <h3 className="text-xl font-bold mb-2">{award.title}</h3>
// // //                             <p className="text-sm text-gray-300 mb-4">{award.description}</p>
// // //                             <div className="flex justify-between items-center">
// // //                                 <p className="text-xs text-gray-400">Uploaded {formatDistanceToNowStrict(parse(award.uploadDate, "dd-MM-yyyy", new Date()))} ago</p>
// // //                                 {/* <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View More <RxArrowTopRight className="inline" /></a> */}
// // //                                 {/* <button onClick={closeModal} className="absolute bottom-5 right-5 border  text-white text-xl">Close</button> */}
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AwardRecognitionPage;




// // import React, { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import { awardsData } from "../Data/AwardsData";
// // import { formatDistanceToNowStrict, isThisWeek, isThisMonth, isThisYear, isToday, parse } from 'date-fns';

// // const AwardRecognitionPage = () => {
// //     const location = useLocation();

// //     // State variables
// //     const [selectedAward, setSelectedAward] = useState(null);
// //     const [filteredAwards, setFilteredAwards] = useState(awardsData);
// //     const [selectedTag, setSelectedTag] = useState("All");
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [suggestions, setSuggestions] = useState([]);
// //     const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
// //     const [showTagDropdown, setShowTagDropdown] = useState(false);
// //     const [showDateDropdown, setShowDateDropdown] = useState(false);
// //     const [selectedDateFilter, setSelectedDateFilter] = useState("All Time");

// //     // Extract unique tags from awardsData
// //     const uniqueTags = ["All", ...new Set(awardsData.flatMap(award => award.tags))];

// //     // Date filter options
// //     const dateFilters = [
// //         "All Time",
// //         "Today",
// //         "This Week",
// //         "This Month",
// //         "This Year"
// //     ];

// //     useEffect(() => {
// //         if (location.state && location.state.title) {
// //             setSelectedAward(location.state);
// //             setFilteredAwards([location.state]);
// //         }
// //     }, [location.state]);

// //     const handleTagClick = (tag) => {
// //         setSelectedTag(tag);
// //         setSearchQuery("");
// //         setSuggestions([]);
// //         setActiveSuggestionIndex(-1);
// //         setShowTagDropdown(false);
// //         applyFilters(tag, selectedDateFilter);
// //     };

// //     const handleDateFilterClick = (dateFilter) => {
// //         setSelectedDateFilter(dateFilter);
// //         setShowDateDropdown(false);
// //         applyFilters(selectedTag, dateFilter);
// //     };

// //     const applyFilters = (tag, dateFilter) => {
// //         let filtered = awardsData;

// //         if (tag !== "All") {
// //             filtered = filtered.filter(award => award.tags.includes(tag));
// //         }

// //         if (dateFilter !== "All Time") {
// //             const now = new Date();
// //             filtered = filtered.filter(award => {
// //                 const uploadDate = parse(award.uploadDate, "dd-MM-yyyy", new Date());
// //                 switch (dateFilter) {
// //                     case "Today":
// //                         return isToday(uploadDate);
// //                     case "This Week":
// //                         return isThisWeek(uploadDate);
// //                     case "This Month":
// //                         return isThisMonth(uploadDate);
// //                     case "This Year":
// //                         return isThisYear(uploadDate);
// //                     default:
// //                         return true;
// //                 }
// //             });
// //         }

// //         setFilteredAwards(filtered);
// //     };

// //     const handleSearchChange = (e) => {
// //         const query = e.target.value;
// //         setSearchQuery(query);
// //         setActiveSuggestionIndex(-1);
// //         if (query) {
// //             const matchingAwards = awardsData.filter(award =>
// //                 award.title.toLowerCase().includes(query.toLowerCase()) ||
// //                 award.description.toLowerCase().includes(query.toLowerCase())
// //             );
// //             setSuggestions(matchingAwards);
// //         } else {
// //             setSuggestions([]);
// //         }
// //     };

// //     const handleKeyDown = (e) => {
// //         if (e.key === "ArrowDown") {
// //             setActiveSuggestionIndex(prevIndex =>
// //                 prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
// //             );
// //         } else if (e.key === "ArrowUp") {
// //             setActiveSuggestionIndex(prevIndex =>
// //                 prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
// //             );
// //         } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
// //             handleSuggestionClick(suggestions[activeSuggestionIndex]);
// //         }
// //     };

// //     const handleSuggestionClick = (suggestion) => {
// //         setSelectedAward(suggestion);
// //         setFilteredAwards([suggestion]);
// //         setSearchQuery("");
// //         setSuggestions([]);
// //         setActiveSuggestionIndex(-1);
// //     };

// //     const closeModal = () => {
// //         setSelectedAward(null);
// //     };

// //     return (
// //         <div>
// //             {/* Header Section */}
// //             <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
// //                 <div className="text-purple-800 font-bold text-lg">GSI Group</div>
// //                 <nav className="mt-4 md:mt-0">
// //                     <ul className="flex space-x-6 text-gray-600">
// //                         <li>Home</li>
// //                         <li>Awards</li>
// //                         <li>Recognitions</li>
// //                         <li>About Us</li>
// //                         <li>Contact</li>
// //                     </ul>
// //                 </nav>
// //                 <div className="space-x-4 mt-4 md:mt-0">
// //                     <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
// //                     <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
// //                 </div>
// //             </header>

// //             {/* Tag and Date Filter Section */}
// //             <div className="bg-purple-200 py-6">
// //                 <div className=" bg-red-500 mx-auto flex justify-center space-x-10 mb-8">
// //                     {uniqueTags.slice(0, 3).map((tag) => (
// //                         <button
// //                             key={tag}
// //                             onClick={() => handleTagClick(tag)}
// //                             // className={`px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 ${selectedTag === tag ? 'bg-indigo-600' : 'bg-purple-700'} hover:bg-purple-600`}
// //                             className="px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105  hover:bg-purple-600"
// //                         >
// //                             {tag}
// //                         </button>
// //                     ))}
// //                     {uniqueTags.length > 3 && (
// //                         <div className="relative">
// //                             <button
// //                                 className="px-6 py-3  rounded-full bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
// //                                 onClick={() => setShowTagDropdown(!showTagDropdown)}
// //                             >
// //                                 More Tags
// //                             </button>
// //                             {showTagDropdown && (
// //                                 <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
// //                                     {uniqueTags.slice(3).map((tag) => (
// //                                         <button
// //                                             key={tag}
// //                                             onClick={() => handleTagClick(tag)}
// //                                             className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedTag === tag ? 'bg-indigo-600 text-white' : ''}`}
// //                                         >
// //                                             {tag}
// //                                         </button>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </div>
// //                     )}

// //                     {/* Date Filter Dropdown */}
// //                     <div className="relative">
// //                         <button
// //                             className="px-6 py-3 rounded-full bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
// //                             onClick={() => setShowDateDropdown(!showDateDropdown)}
// //                         >
// //                             {selectedDateFilter}
// //                         </button>
// //                         {showDateDropdown && (
// //                             <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
// //                                 {dateFilters.map((filter) => (
// //                                     <button
// //                                         key={filter}
// //                                         onClick={() => handleDateFilterClick(filter)}
// //                                         className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedDateFilter === filter ? 'bg-indigo-600 text-white' : ''}`}
// //                                     >
// //                                         {filter}
// //                                     </button>
// //                                 ))}
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Awards Section */}
// //             <div className="max-w-5xl mx-auto py-6">
// //                 {filteredAwards.map((award, index) => (
// //                     <section
// //                         key={index}
// //                         className={`p-6 md:p-12 bg-purple-200 ${index % 2 === 0 ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}
// //                     >
// //                         <div className={index % 2 !== 0 ? 'flex flex-col justify-center' : ''}>
// //                             <h2 className="text-2xl md:text-3xl font-bold">{award.title}</h2>
// //                             <p className="text-gray-600 mt-4">{award.description}</p>
// //                             <p className="text-sm text-gray-500 mt-2">Uploaded {formatDistanceToNowStrict(parse(award.uploadDate, "dd-MM-yyyy", new Date()))} ago</p>
// //                         </div>
// //                         <div className={`mt-6 md:mt-0 ${index % 2 === 0 ? 'flex justify-center' : ''}`}>
// //                             <img
// //                                 src={award.imagePath}
// //                                 alt={award.title}
// //                                 className="max-w-xs md:max-w-sm mx-auto rounded-lg shadow-lg"
// //                             />
// //                         </div>
// //                     </section>
// //                 ))}
// //             </div>

// //             {/* Selected Award Modal */}
// //             {selectedAward && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
// //                         <h2 className="text-2xl font-bold">{selectedAward.title}</h2>
// //                         <p className="mt-4">{selectedAward.description}</p>
// //                         <img
// //                             src={selectedAward.imagePath}
// //                             alt={selectedAward.title}
// //                             className="mt-6 rounded-lg shadow-lg"
// //                         />
// //                         <button
// //                             onClick={closeModal}
// //                             className="mt-6 bg-purple-500 text-white px-4 py-2 rounded"
// //                         >
// //                             Close
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AwardRecognitionPage;






// import React, { useEffect, useState, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { awardsData } from "../Data/AwardsData";
// import { formatDistanceToNowStrict, isThisWeek, isThisMonth, isThisYear, isToday, parse } from 'date-fns';
// import Footer from "../Components/Footer"

// const AwardRecognitionPage = () => {
//     const location = useLocation();

//     // State variables
//     const [selectedAward, setSelectedAward] = useState(null);
//     const [filteredAwards, setFilteredAwards] = useState(awardsData);
//     const [selectedTag, setSelectedTag] = useState("All");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
//     const [showTagDropdown, setShowTagDropdown] = useState(false);
//     const [showDateDropdown, setShowDateDropdown] = useState(false);
//     const [selectedDateFilter, setSelectedDateFilter] = useState("All Time");

//     const tagDropdownRef = useRef(null);
//     const dateDropdownRef = useRef(null);


//     // Extract unique tags from awardsData
//     const uniqueTags = ["All", ...new Set(awardsData.flatMap(award => award.tags))];

//     // Date filter options
//     const dateFilters = [
//         "All Time",
//         "Today",
//         "This Week",
//         "This Month",
//         "This Year"
//     ];

//     useEffect(() => {
//         if (location.state && location.state.title) {
//             setSelectedAward(location.state);
//             setFilteredAwards([location.state]);
//         }
//     }, [location.state]);

//     const handleTagClick = (tag) => {
//         setSelectedTag(tag);
//         setSearchQuery("");
//         setSuggestions([]);
//         setActiveSuggestionIndex(-1);
//         setShowTagDropdown(false);
//         applyFilters(tag, selectedDateFilter);
//     };

//     const handleDateFilterClick = (dateFilter) => {
//         setSelectedDateFilter(dateFilter);
//         setShowDateDropdown(false);
//         applyFilters(selectedTag, dateFilter);
//     };

//     const applyFilters = (tag, dateFilter) => {
//         let filtered = awardsData;

//         if (tag !== "All") {
//             filtered = filtered.filter(award => award.tags.includes(tag));
//         }

//         if (dateFilter !== "All Time") {
//             const now = new Date();
//             filtered = filtered.filter(award => {
//                 const uploadDate = parse(award.uploadDate, "dd-MM-yyyy", new Date());
//                 switch (dateFilter) {
//                     case "Today":
//                         return isToday(uploadDate);
//                     case "This Week":
//                         return isThisWeek(uploadDate);
//                     case "This Month":
//                         return isThisMonth(uploadDate);
//                     case "This Year":
//                         return isThisYear(uploadDate);
//                     default:
//                         return true;
//                 }
//             });
//         }

//         setFilteredAwards(filtered);
//     };

//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         setActiveSuggestionIndex(-1);
//         if (query) {
//             const matchingAwards = awardsData.filter(award =>
//                 award.title.toLowerCase().includes(query.toLowerCase()) ||
//                 award.description.toLowerCase().includes(query.toLowerCase())
//             );
//             setSuggestions(matchingAwards);
//         } else {
//             setSuggestions([]);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "ArrowDown") {
//             setActiveSuggestionIndex(prevIndex =>
//                 prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
//             );
//         } else if (e.key === "ArrowUp") {
//             setActiveSuggestionIndex(prevIndex =>
//                 prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
//             );
//         } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
//             handleSuggestionClick(suggestions[activeSuggestionIndex]);
//         }
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setSelectedAward(suggestion);
//         setFilteredAwards([suggestion]);
//         setSearchQuery("");
//         setSuggestions([]);
//         setActiveSuggestionIndex(-1);
//     };

//     const closeModal = () => {
//         setSelectedAward(null);
//     };

//      // Close dropdown if clicked outside
//      useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target)) {
//                 setShowTagDropdown(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [tagDropdownRef]);

//     // Close dropdown if clicked outside (All Time)
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target)) {
//                 setShowDateDropdown(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dateDropdownRef]);

//     return (
//         <>
//     <div>

//         {/* Tag and Date Filter Section */}
//         <header className="flex flex-col md:flex-row justify-center items-center p-4 sm:p-6 lg:p-8 bg-purple-300">
//             <div className="text-purple-800 font-bold text-lg md:text-xl lg:text-2xl">GSI Group</div>
//             <div className="mx-auto mt-4 md:mt-0 flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4 lg:space-x-10">

//                 {/* Tag Buttons */}
//                 <div className=" flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-3 lg:space-x-6">
//                     {uniqueTags.slice(0, 3).map((tag) => (
//                         <button
//                             key={tag}
//                             onClick={() => handleTagClick(tag)}
//                             className="px-4 py-2 sm:px-5 sm:py-3 rounded text-gray-600 transition duration-300 ease-in-out transform hover:scale-125"
//                         >
//                             {tag}
//                         </button>
//                     ))}
//                 </div>

//                 {/* More Tags and 'All time' */}
//                 <div className="relative flex space-x-4 justify-center ">
//                     {uniqueTags.length > 3 && (
//                         <div className="relative" ref={tagDropdownRef}>
//                             <button
//                                 className="px-4 py-2 md:py-3 rounded bg-purple-500 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
//                                 onClick={() => setShowTagDropdown(!showTagDropdown)}
//                             >
//                                 More Tags
//                             </button>
//                             {showTagDropdown && (
//                                 <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
//                                     {uniqueTags.slice(3).map((tag) => (
//                                         <button
//                                             key={tag}
//                                             onClick={() => handleTagClick(tag)}
//                                             className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedTag === tag ? 'bg-indigo-600 text-white' : ''}`}
//                                         >
//                                             {tag}
//                                         </button>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     )}
//                     {/* <button
//                         onClick={() => handleTagClick('All time')}
//                         className="px-4 py-2 sm:px-6 sm:py-3 rounded bg-red-900 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"

//                     >
//                         All time
//                     </button> */}
//                 {/* </div> */}

//                 {/* Date Filter Dropdown */}
//                 <div className="relative" ref={dateDropdownRef}>
//                     <button
//                         className="px-4 py-2 md:py-3 border border-gray-600 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
//                         onClick={() => setShowDateDropdown(!showDateDropdown)}
//                     >
//                         {selectedDateFilter}
//                     </button>
//                     {showDateDropdown && (
//                         <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
//                             {dateFilters.map((filter) => (
//                                 <button
//                                     key={filter}
//                                     onClick={() => handleDateFilterClick(filter)}
//                                     className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedDateFilter === filter ? 'bg-indigo-600 text-white' : ''}`}
//                                 >
//                                     {filter}
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//                 </div>
//             </div>
//         </header>

//         {/* Awards Section */}
//         <div className="mx-auto ">
//             {filteredAwards.map((award, index) => (
//                 <section
//                     key={index}
//                     className={`p-4 md:p-6 lg:p-8 bg-purple-200 ${index % 2 === 0 ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}
//                 >
//                     <div className={index % 2 !== 0 ? 'flex flex-col justify-center text-center' : ''}>
//                         <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{award.title}</h2>
//                         <p className="text-gray-600 mt-4 text-sm md:text-base">{award.description}</p>
//                         <p className="text-xs md:text-sm text-gray-500 mt-2">Uploaded {formatDistanceToNowStrict(parse(award.uploadDate, "dd-MM-yyyy", new Date()))} ago</p>
//                     </div>
//                     <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'flex justify-center' : ''}`}>
//                         <img
//                             src={award.imagePath}
//                             alt={award.title}
//                             className="max-w-xs md:max-w-sm mx-auto rounded-lg shadow-lg mt-5"
//                         />
//                     </div>
//                 </section>
//             ))}
//         </div>

//         {/* Selected Award Modal */}
//         {selectedAward && (
//             <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md mx-4 sm:mx-auto">
//                     <h2 className="text-xl font-bold">{selectedAward.title}</h2>
//                     <p className="mt-4">{selectedAward.description}</p>
//                     <img
//                         src={selectedAward.imagePath}
//                         alt={selectedAward.title}
//                         className="mt-4 rounded-lg shadow-lg"
//                     />
//                     <button
//                         onClick={closeModal}
//                         className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         )}
//     </div>
//     <Footer></Footer>
// </>

//     );
// };

// export default AwardRecognitionPage;


import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNowStrict, isThisWeek, isThisMonth, isThisYear, isToday, parseISO } from 'date-fns';
import Footer from "../Components/Footer";

const AwardRecognitionPage = () => {
    const location = useLocation();

    // State variables
    const [awardsData, setAwardsData] = useState([]);  // State for fetched data
    const [selectedAward, setSelectedAward] = useState(null);
    const [filteredAwards, setFilteredAwards] = useState([]);
    const [selectedTag, setSelectedTag] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
    const [showTagDropdown, setShowTagDropdown] = useState(false);
    const [showDateDropdown, setShowDateDropdown] = useState(false);
    const [selectedDateFilter, setSelectedDateFilter] = useState("All Time");

    const tagDropdownRef = useRef(null);
    const dateDropdownRef = useRef(null);

    // Fetch awards data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/awardRecognition/getall');
                setAwardsData(response.data.awardRecognitions);
                setFilteredAwards(response.data.awardRecognitions);  // Set initial filtered data
            } catch (error) {
                console.error("Error fetching awards data:", error);
            }
        };

        fetchData();
    }, []);

    // Extract unique tags from fetched awardsData
    const uniqueTags = ["All", ...new Set(awardsData.flatMap(award => award.tags))];

    // Date filter options
    const dateFilters = [
        "All Time",
        "Today",
        "This Week",
        "This Month",
        "This Year"
    ];

    useEffect(() => {
        if (location.state && location.state.title) {
            setSelectedAward(location.state);
            setFilteredAwards([location.state]);
        }
    }, [location.state]);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setSearchQuery("");
        setSuggestions([]);
        setActiveSuggestionIndex(-1);
        setShowTagDropdown(false);
        applyFilters(tag, selectedDateFilter);
    };

    const handleDateFilterClick = (dateFilter) => {
        setSelectedDateFilter(dateFilter);
        setShowDateDropdown(false);
        applyFilters(selectedTag, dateFilter);
    };

    const applyFilters = (tag, dateFilter) => {
        let filtered = awardsData;

        if (tag !== "All") {
            filtered = filtered.filter(award => award.tags.includes(tag));
        }

        if (dateFilter !== "All Time") {
            filtered = filtered.filter(award => {
                const uploadDate = parseISO(award.uploadDate);
                switch (dateFilter) {
                    case "Today":
                        return isToday(uploadDate);
                    case "This Week":
                        return isThisWeek(uploadDate);
                    case "This Month":
                        return isThisMonth(uploadDate);
                    case "This Year":
                        return isThisYear(uploadDate);
                    default:
                        return true;
                }
            });
        }

        setFilteredAwards(filtered);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setActiveSuggestionIndex(-1);
        if (query) {
            const matchingAwards = awardsData.filter(award =>
                award.title.toLowerCase().includes(query.toLowerCase()) ||
                award.content.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(matchingAwards);
        } else {
            setSuggestions([]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setActiveSuggestionIndex(prevIndex =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
            );
        } else if (e.key === "ArrowUp") {
            setActiveSuggestionIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
            );
        } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
            handleSuggestionClick(suggestions[activeSuggestionIndex]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSelectedAward(suggestion);
        setFilteredAwards([suggestion]);
        setSearchQuery("");
        setSuggestions([]);
        setActiveSuggestionIndex(-1);
    };

    const closeModal = () => {
        setSelectedAward(null);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tagDropdownRef.current && !tagDropdownRef.current.contains(event.target)) {
                setShowTagDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tagDropdownRef]);

    // Close dropdown if clicked outside (All Time)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target)) {
                setShowDateDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dateDropdownRef]);

    return (
        <>
            <div className='bg-purple-200'>
                {/* Tag and Date Filter Section */}
                <header className="flex flex-col md:flex-row justify-center items-center p-4 sm:p-6 lg:p-8 bg-purple-300">
                    <div className="text-purple-800 font-bold text-lg md:text-xl lg:text-2xl">GSI Group</div>
                    <div className="mx-auto mt-4 md:mt-0 flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4 lg:space-x-10">

                        {/* Tag Buttons */}
                        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-3 lg:space-x-6">
                            {uniqueTags.slice(0, 3).map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className="px-4 py-2 sm:px-5 sm:py-3 rounded text-gray-600 transition duration-300 ease-in-out transform hover:scale-125"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        {/* More Tags and 'All time' */}
                        <div className="relative flex space-x-4 justify-center">
                            {uniqueTags.length > 3 && (
                                <div className="relative" ref={tagDropdownRef}>
                                    <button
                                        className="px-4 py-2 md:py-3 rounded bg-purple-500 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
                                        onClick={() => setShowTagDropdown(!showTagDropdown)}
                                    >
                                        More Tags
                                    </button>
                                    {showTagDropdown && (
                                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
                                            {uniqueTags.slice(3).map((tag) => (
                                                <button
                                                    key={tag}
                                                    onClick={() => handleTagClick(tag)}
                                                    className={`block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white w-full text-left ${selectedTag === tag ? 'bg-indigo-600 text-white' : ''}`}
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Date Filter Dropdown */}
                            <div className="relative" ref={dateDropdownRef}>
                                <button
                                    className="px-4 py-2 md:py-3 border border-gray-600 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600"
                                    onClick={() => setShowDateDropdown(!showDateDropdown)}
                                >
                                    {selectedDateFilter}
                                </button>
                                {showDateDropdown && (
                                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-40">
                                        {dateFilters.map((filter) => (
                                            <button
                                                key={filter}
                                                onClick={() => handleDateFilterClick(filter)}
                                                className={`block px-4 py-2 text-gray-800 hover:bg-purple-600 hover:text-white w-full text-left ${selectedDateFilter === filter ? 'bg-purple-600 text-white' : ''}`}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Search bar */}
                <div className="mx-auto max-w-md p-4 sm:p-6 lg:p-8">
                    <input
                        type="text"
                        placeholder="Search awards..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {suggestions.length > 0 && (
                        <ul className="bg-white border rounded-lg mt-2">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={suggestion._id}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className={`cursor-pointer p-4 hover:bg-purple-100 ${activeSuggestionIndex === index ? "bg-purple-100" : ""}`}
                                >
                                    {suggestion.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>



                {/* Display Awards */}



                <section className="p-4 sm:p-6 lg:p-8">
                    {/* Awards Grid */}
                    {filteredAwards.length > 0 ? (
                        <div className="mx-auto grid grid-cols-1 gap-6">
                            {filteredAwards.map((award, index) => (
                                <section
                                    key={award._id}
                                    className={`max-w-5xl mx-auto ${award.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>

                                    {/* Content */}
                                    <div className={award.isCentered ? '' : 'flex flex-col justify-center'}>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{award.title}</h3>
                                        <p className="text-gray-600 mt-4 text-sm md:text-base">{award.content}</p>
                                        <p className="text-xs md:text-sm text-gray-500 mt-2">
                                            Uploaded {formatDistanceToNowStrict(parseISO(award.uploadDate))} ago
                                        </p>
                                    </div>

                                    {/* Image */}
                                    {/* {!award.isCentered && ( */}
                                    <div className="mt-6 md:mt-0">
                                        <img
                                            src={award.svg.url}
                                            alt={award.imageAlt}
                                            className="w-auto h-48 md:h-64 object-cover rounded-lg"
                                        />
                                    </div>
                                    {/* )} */}
                                </section>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">No awards found for the selected filters.</p>
                    )}
                </section>


{/* ///// */}
        {/* Selected Award Modal */}
        {selectedAward && (
            <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md mx-4 sm:mx-auto">
                    <h2 className="text-xl font-bold">{selectedAward.title}</h2>
                    <p className="mt-4">{selectedAward.content}</p>
                    <img
                        src={selectedAward.svg.url}
                        alt={selectedAward.title}
                        className="mt-4 rounded-lg shadow-lg"
                    />
                    <button
                        onClick={closeModal}
                        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
{/* ////////////// */}



            </div>

            <Footer />
        </>
    );
};

export default AwardRecognitionPage;
