"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeroCallToAction = () => {
  return (
    <button
      onClick={() => {
        const element = document.getElementById("sketchbook-section");
        element?.scrollIntoView({ behavior: "smooth" });
      }}
      className="btn text-black font-bold text-base bg-gray-100 hover:bg-gray-200 hover:scale-105 flex flex-row z-40"
    >
      Explore the Sketchbook
      <div className="h-full flex flex-col justify-center translate-y-1">
        <FontAwesomeIcon
          icon={faAngleDown}
          width={20}
          height={20}
          className="text-2xl animate-bounce"
        />
      </div>
    </button>
  );
};

export default HeroCallToAction;
