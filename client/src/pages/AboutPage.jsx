// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import Footer from "../Components/Footer";

// // // const AboutPage = () => {
// // //   const [sections, setSections] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchSections = async () => {
// // //       try {
// // //         const response = await axios.get("http://localhost:4000/api/v1/about/getall");
// // //         setSections(response.data.abouts); // Accessing `abouts` from the response
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError("Failed to load data");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchSections();
// // //   }, []);

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div>{error}</div>;
// // //   }

// // //   return (
// // //     <div>
// // //       {/* Header Section */}
// // //       <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
// // //         <div className="text-purple-800 font-bold text-lg">GSI Group</div>
// // //         <nav className="mt-4 md:mt-0">
// // //           <ul className="flex space-x-6 text-gray-600">
// // //             <li>Home</li>
// // //             <li>About Us</li>
// // //             <li>Subsidiaries</li>
// // //             <li>Vision</li>
// // //             <li>Team</li>
// // //           </ul>
// // //         </nav>
// // //         <div className="space-x-4 mt-4 md:mt-0">
// // //           <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
// // //           <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
// // //         </div>
// // //       </header>

// // //       {/* Body Sections */}
// // //       {sections.map((section) => (
// // //         <section key={section._id} className="p-6 md:p-12 bg-purple-200">
// // //           <div className={`max-w-5xl mx-auto ${section.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
// // //             <div className={section.isCentered ? '' : 'flex flex-col justify-center'}>
// // //               <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
// // //               <p className="text-gray-600 mt-4">{section.content}</p>
// // //             </div>
// // //             {!section.isCentered && (
// // //               <div className="mt-6 md:mt-0">
// // //                 <img 
// // //                   src={section.svg.url} 
// // //                   alt={section.imageAlt} 
// // //                   className="w-full h-48 md:h-64 object-cover rounded-lg" 
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
// // //         </section>
// // //       ))}

// // //       {/* Footer Section */}
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default AboutPage;



// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Footer from "../Components/Footer";

// // const AboutPage = () => {
// //   const [sections, setSections] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchSections = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:4000/api/v1/about/getall");
// //         setSections(response.data.abouts); // Accessing `abouts` from the response
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to load data");
// //         setLoading(false);
// //       }
// //     };

// //     fetchSections();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   return (
// //     <div>
// //       {/* Header Section */}
// //       <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
// //         <div className="text-purple-800 font-bold text-lg">GSI Group</div>
// //         <nav className="mt-4 md:mt-0">
// //           <ul className="flex space-x-6 text-gray-600">
// //             <li>Home</li>
// //             {sections.map((section) => (
// //               <li key={section._id}>{section.title}</li>
// //             ))}
// //           </ul>
// //         </nav>
// //         <div className="space-x-4 mt-4 md:mt-0">
// //           <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
// //           <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
// //         </div>
// //       </header>

// //       {/* Body Sections */}
// //       {sections.map((section) => (
// //         <section key={section._id} className="p-6 md:p-12 bg-purple-200">
// //           <div className={`max-w-5xl mx-auto ${section.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
// //             <div className={section.isCentered ? '' : 'flex flex-col justify-center'}>
// //               <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
// //               <p className="text-gray-600 mt-4">{section.content}</p>
// //             </div>
// //             {!section.isCentered && (
// //               <div className="mt-6 md:mt-0">
// //                 <img
// //                   src={section.svg.url}
// //                   alt={section.imageAlt}
// //                   className="w-full h-48 md:h-64 object-cover rounded-lg"
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         </section>
// //       ))}

// //       {/* Footer Section */}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default AboutPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Footer from "../Components/Footer";

// const AboutPage = () => {
//   const [sections, setSections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/v1/about/getall");
//         setSections(response.data.abouts); // Accessing `abouts` from the response
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to load data");
//         setLoading(false);
//       }
//     };

//     fetchSections();
//   }, []);

//   const handleScroll = (id) => {
//     const sectionElement = document.getElementById(id);
//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       {/* Header Section */}
//       <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
//         <div className="text-purple-800 font-bold text-lg">GSI Group</div>
//         <nav className="mt-4 md:mt-0">
//           <ul className="flex space-x-6 text-gray-600">
//             <li>Home</li>
//             {sections.map((section) => (
//               <li key={section._id} onClick={() => handleScroll(section._id)}>
//                 {section.title}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="space-x-4 mt-4 md:mt-0">
//           <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
//           <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
//         </div>
//       </header>

//       {/* Body Sections */}
//       <section id="home" className="p-6 md:p-12 bg-purple-200">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-2xl md:text-3xl font-bold">Welcome to GSI Group</h2>
//           <p className="text-gray-600 mt-4">We deliver innovative solutions for a better future.</p>
//         </div>
//       </section> 
      
//       {sections.map((section) => (
//         <section key={section._id} id={section._id} className="p-6 md:p-12 bg-purple-200">
//           <div className={`max-w-5xl mx-auto ${section.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
//             <div className={section.isCentered ? '' : 'flex flex-col justify-center'}>
//               <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
//               <p className="text-gray-600 mt-4">{section.content}</p>
//             </div>
//             {!section.isCentered && (
//               <div className="mt-6 md:mt-0">
//                 <img
//                   src={section.svg.url}
//                   alt={section.imageAlt}
//                   className="w-full h-48 md:h-64 object-cover rounded-lg"
//                 />
//               </div>
//             )}
//           </div>
//         </section>
//       ))}

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AboutPage = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/about/getall");
        setSections(response.data.abouts); // Accessing `abouts` from the response
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  const handleScroll = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToHome = () => {
    navigate('/'); // Redirects to the homepage
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
        <div className="text-purple-800 font-bold text-lg">GSI Group</div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-gray-600">
            <li onClick={goToHome} style={{ cursor: 'pointer' }}>Home</li> {/* Redirects to Home */}
            {sections.map((section) => (
              <li key={section._id} onClick={() => handleScroll(section._id)} className='transition duration-300 ease-in-out transform hover:scale-125'>
                {section.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-x-4 mt-4 md:mt-0">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
          <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
        </div>
      </header>

      {/* Body Sections */}
      {sections.map((section) => (
        <section key={section._id} id={section._id} className="p-6 md:p-12 bg-purple-200">
          <div className={`max-w-5xl mx-auto ${section.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
            <div className={section.isCentered ? '' : 'flex flex-col justify-center'}>
              <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
              <p className="text-gray-600 mt-4">{section.content}</p>
            </div>
            {!section.isCentered && (
              <div className="mt-6 md:mt-0">
                <img
                  src={section.svg.url}
                  alt={section.imageAlt}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
