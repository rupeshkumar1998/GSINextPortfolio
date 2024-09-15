import React, { useEffect } from "react";
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams
import ServicePageHeading from "../Components/ServicePageHeading";
import ServicePageMarketing from "../Components/ServicePageMarketing";
import ServicePageMoreServices from "../Components/ServicePageMoreServices";
import ServicePageMessenger from "../Components/ServicePageMessenger";
import ServicePageAbout from "../Components/ServicePageAbout";

const AllService = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId'); // Retrieve serviceId from query parameters

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const marketing = document.querySelector("#marketing");
    const about = document.querySelector("#about");
    const moreServices = document.querySelector("#moreServices");
    const messenger = document.querySelector("#messenger");

    if (marketing) observer.observe(marketing);
    if (about) observer.observe(about);
    if (moreServices) observer.observe(moreServices);
    if (messenger) observer.observe(messenger);

    return () => {
      if (marketing) observer.unobserve(marketing);
      if (about) observer.unobserve(about);
      if (moreServices) observer.unobserve(moreServices);
      if (messenger) observer.unobserve(messenger);
    };
  }, []);

  return (
    <div className="flex flex-col bg-black">
      <ServicePageHeading serviceId={serviceId} />
      <div className="flex mt-4">
        <div className="flex flex-col w-2/3 mr-4">
          <div className="pl-4">
            <div
              id="marketing"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              <ServicePageMarketing serviceId={serviceId} />
            </div>
            <div
              id="about"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              <ServicePageAbout serviceId={serviceId} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="pr-4">
            <div
              id="moreServices"
              className="pb-4 opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              <ServicePageMoreServices serviceId={serviceId} />
            </div>
            <div
              id="messenger"
              className="opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
            >
              <ServicePageMessenger serviceId={serviceId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
