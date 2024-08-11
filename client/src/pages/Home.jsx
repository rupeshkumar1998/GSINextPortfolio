// import React from 'react'

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-slate-500 text-2xl text-orange-500">Home</div>
//   )
// }

// export default Home


import React from 'react'
import Header from '../Components/Header'
import Dummy from '../Components/Dummy';
import Projects from '../Components/Projects';
import Skill from '../Components/Skill';
import Awards from '../Components/Awards';
import MyService from '../Components/MyServices'; 
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
    <Header/>
    <Awards/>
    <Projects/>
    <MyService/>
    <Skill/>
    <Contact/>
    <Dummy/>
    <Footer/>
    </>
  )
}

export default Home