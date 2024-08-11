import React, { useState, useEffect } from "react";

const PreLoader = () => {
  const [isSlidingUp, setIsSlidingUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSlidingUp(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-transform duration-1000 ${
        isSlidingUp ? "transform -translate-y-full" : ""
      }`}
    //   style={{
    //     clipPath: "ellipse(100% 85% at 50% 100%)", // Adjust the curve here
    //   }}
    >
      <div className="text-white text-4xl font-bold animate-pulse">
        Loading
      </div>
    </div>
  );
};

export default PreLoader;
