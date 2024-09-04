import React from "react";
import ServicePageHeading from "../Components/ServicePageHeading";
import ServicePageMarketing from "../Components/ServicePageMarketing";
import ServicePageMoreServices from "../Components/ServicePageMoreServices";
import ServicePageMessenger from "../Components/ServicePageMessenger";
import ServicePageAbout from "../Components/ServicePageAbout";
import Footer from "../Components/Footer";

const AllService = () => {
  return (
    <div className="flex flex-col bg-black">
      <ServicePageHeading />
      <div className="flex mt-4">
        <div className="flex flex-col w-2/3 mr-4">
          <div className="pl-4">
            <ServicePageMarketing />

            <ServicePageAbout />
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="pr-4">
            <div className="pb-4">
              <ServicePageMoreServices />
            </div>
            <ServicePageMessenger />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AllService;