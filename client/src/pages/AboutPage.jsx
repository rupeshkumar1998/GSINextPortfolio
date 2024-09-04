import React from 'react';
import Footer from "../Components/Footer"
const sections = [
  {
    id: 1,
    title: 'About Us',
    content: 'GSI Group is a dynamic conglomerate dedicated to driving innovation and excellence across multiple industries. With a diverse portfolio of companies under our umbrella, GSI Group is committed to delivering top-tier solutions that meet the evolving needs of our clients and the market.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh1.jpg',
    imageAlt: 'About Us Image',
    isCentered: true,
  },
  {
    id: 2,
    title: 'Our Subsidiaries',
    content: 'Our subsidiaries include NEXT, a groundbreaking Q-commerce startup, and QuickTime, a cutting-edge turf booking management platform. Together, these companies exemplify our mission to leverage technology in transforming traditional industries and enhancing everyday experiences.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh1.jpg',
    imageAlt: 'Subsidiaries Image',
    isCentered: false,
  },
  {
    id: 3,
    title: 'Our Vision',
    content: 'At GSI Group, we believe in the power of collaboration and the importance of staying ahead of the curve. By fostering a culture of innovation and adaptability, we empower our companies to push boundaries and set new standards in their respective fields.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh1.jpg',
    imageAlt: 'Vision Image',
    isCentered: true,
  },
  {
    id: 4,
    title: 'Our Team',
    content: 'Our team is composed of visionary leaders, seasoned professionals, and passionate innovators who share a common goal: to make a lasting impact through the businesses we build and the communities we serve. Whether it’s through NEXT\'s AI-driven Q-commerce solutions or QuickTime\'s seamless sports facility management, GSI Group is dedicated to creating value and shaping the future.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh1.jpg',
    imageAlt: 'Team Image',
    isCentered: false,
  },
  {
    id: 5,
    title: 'Our Future',
    content: 'We are excited to announce that we are building a new startup project, which will further expand our influence and reinforce our commitment to innovation and excellence. This upcoming venture will continue our tradition of pushing the boundaries of what’s possible and delivering exceptional value.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh.jpg',
    imageAlt: 'Future Image',
    isCentered: true,
  },
  {
    id: 6,
    title: 'Join Us',
    content: 'Join us on our journey as we continue to explore new opportunities, expand our reach, and lead the way in delivering excellence.',
    bgColor: 'bg-purple-200',
    imageUrl: '/pic-Rupesh.jpg',
    imageAlt: 'Join Us Image',
    isCentered: true,
  },
];

const AboutPage = () => {
  return (
    <div>

      {/* <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://gerold.themejunction.net/wp-content/uploads/2024/05/breadcrumb-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Your Heading Text</h1>
          <p className="text-lg text-gray-200 mt-2">Manage Routes here</p>
        </div>
      </div> */}


      {/* Header Section */}
      {/* <div className="relative h-42 bg-cover bg-center" style={{ backgroundImage: "url('https://gerold.themejunction.net/wp-content/uploads/2024/05/breadcrumb-bg.jpg')" }}> */}

      <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-purple-300 shadow">
        <div className="text-purple-800 font-bold text-lg">GSI Group</div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Subsidiaries</li>
            <li>Vision</li>
            <li>Team</li>
          </ul>
        </nav>
        <div className="space-x-4 mt-4 md:mt-0">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Contact Us</button>
          <button className="border border-gray-600 px-4 py-2 rounded">Join Us</button>
        </div>
      </header>
{/* </div> */}
      {/* Dynamic Sections */}
      {sections.map((section) => (
        <section key={section.id} className={`p-6 md:p-12 ${section.bgColor}`}>
          <div className={`max-w-5xl mx-auto ${section.isCentered ? 'text-center' : 'md:grid md:grid-cols-2 md:gap-8'}`}>
            <div className={section.isCentered ? '' : 'flex flex-col justify-center'}>
              <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
              <p className="text-gray-600 mt-4">{section.content}</p>
            </div>
            {!section.isCentered && (
              <div className="mt-6 md:mt-0">
                <img src={section.imageUrl} alt={section.imageAlt} className="w-full h-48 md:h-64 object-cover rounded-lg" />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Footer Section */}
      <Footer />
      {/* <footer className="p-6 md:p-12 bg-black text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">GSI Group</h3>
            <p className="text-sm">Building the Future Together</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold">Stay Updated</h4>
            <div className="flex mt-2">
              <input type="email" placeholder="Enter Email Address" className="p-2 rounded text-black w-full md:w-auto"/>
              <button className="ml-2 bg-orange-600 px-4 py-2 rounded">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 text-sm gap-4">
          <div>Company | Careers | Contact Us</div>
          <div>About Us | Our Vision | Our History</div>
          <div>Resources | Blog | Projects</div>
          <div>Support | FAQ | Help</div>
        </div>
      </footer> */}
    </div>
  );
};

export default AboutPage;
