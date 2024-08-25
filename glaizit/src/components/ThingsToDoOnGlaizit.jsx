"use client";
import React, { useState, useEffect } from "react";

const ThingsToDoOnGlaizit = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const labelImages = [
    { src: "/thingstodoimages/img1.png", alt: "Inspire Icon" },
    { src: "/thingstodoimages/img2.png", alt: "Discover Icon" },
    { src: "/thingstodoimages/img3.png", alt: "Learn Icon" },
    { src: "/thingstodoimages/img4.png", alt: "Discuss Icon" },
    { src: "/thingstodoimages/img5.png", alt: "Create Icon" },
    { src: "/thingstodoimages/img6.png", alt: "Record Icon" },
    { src: "/thingstodoimages/img7.png", alt: "Connect Icon" },
    { src: "/thingstodoimages/img8.png", alt: "Share Icon" },
    { src: "/thingstodoimages/img9.png", alt: "Achieve Icon" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === labelImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [labelImages.length]);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="relative">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
          <div className="relative">
            <img
              src="/thingstodo.png"
              alt="Glaizit App"
              className="w-full h-auto lg:w-[781px] lg:h-[722px]"
            />

            <img
              src="/thingstodoimages/icon1.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] left-[75px] top-[74px] lg:left-[195px] lg:top-[195px]"
            />
            <img
              src="/thingstodoimages/icon2.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] left-[49px] top-[119px] lg:left-[133px] lg:top-[310px]"
            />
            <img
              src="/thingstodoimages/icon3.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] left-[53px] top-[172.5px] lg:left-[140px] lg:top-[450px]"
            />
            <img
              src="/thingstodoimages/icon4.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] left-[84px] top-[218px] lg:left-[223px] lg:top-[573px]"
            />

            <img
              src="/thingstodoimages/icon9.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] right-[69.6px] top-[75px] lg:right-[182px] lg:top-[195px]"
            />
            <img
              src="/thingstodoimages/icon8.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] right-[43px] top-[120px] lg:right-[115px] lg:top-[315px]"
            />
            <img
              src="/thingstodoimages/icon7.png"
              alt=""
              className="absolute w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] right-[45px] top-[173px] lg:right-[120px] lg:top-[453px]"
            />
            <img
              src="/thingstodoimages/icon6.png"
              alt=""
              className="absolute w-[18px] h-[18px] lg:w-[50px] lg:h-[50px] right-[70px] top-[217px] lg:right-[185px] lg:top-[567px]"
            />
          </div>

          {/* Label images for larger screens */}
          <div className="">
            <img
              src="/thingstodoimages/img1.png"
              alt="Inspire Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute right-[570px] top-14 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img2.png"
              alt="Discover Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute right-[660px] top-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img3.png"
              alt="Learn Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute right-[632px] top-[490px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img4.png"
              alt="Discuss Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute right-[570px] top-[665px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img5.png"
              alt="Create Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute right-[220px] top-[730px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img6.png"
              alt="Record Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute -right-[100px] top-[660px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img7.png"
              alt="Connect Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute -right-[185px] top-[495px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img8.png"
              alt="Share Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute -right-[210px] top-[290px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/thingstodoimages/img9.png"
              alt="Achieve Icon"
              className="w-[310px] h-[104px] rounded-[25px] hidden lg:block absolute -right-[180px] top-[60px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          {/* Label images slider for mobile */}
          <div className="lg:hidden relative mt-6 overflow-hidden w-[300px] h-[150px]">
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {labelImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-[300px] h-[150px] rounded-[25px] flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDoOnGlaizit;
