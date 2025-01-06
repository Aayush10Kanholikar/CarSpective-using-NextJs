"use client";

import React from "react";
import Image from "next/image";
import { CustomButtom } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Experience the Drive: Where Style Meets Performance
        </h1>
        <p className="hero__subtitle">
        Discover the perfect blend of cutting-edge technology, unmatched performance, and timeless design.
        </p>
        <CustomButtom
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
