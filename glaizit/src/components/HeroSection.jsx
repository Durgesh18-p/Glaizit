"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 lg:px-12 py-8 bg-white">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <p className="text-[#A76D09] font-semibold text-[20px] leading-[29.3px] mb-2">
          When Creativity Meets Collaboration, Magic Happens!
        </p>
        <p className="text-[#424141] font-semibold text-[25px] leading-[30.16px] mb-4">
          Discover a vibrant community of ceramic artists. Join us to share your
          creations, learn new techniques, and connect with fellow enthusiasts.
        </p>
        <p className="text-[#424141] font-normal text-[15px] leading-[20.58px] mb-3">
          Master the Art of Pottery with Glaizit! Our platform offers a rich
          blend of resources to elevate your craft. Learn from videos and blogs
          that cover every aspect of pottery and glazing techniques.
        </p>
        <p className="text-[#424141] font-normal text-[15px] leading-[20.58px] mb-3">
          Create stunning, unique pieces with access to an extensive database of
          glaze combinations and innovative ideas. Connect with a vibrant
          community of fellow potters through forums and discussion groups,
          sharing tips, feedback, and inspiration.
        </p>
        <p className="text-[#424141] font-normal text-[15px] leading-[20.58px] mb-3">
          Be inspired by diverse experiences and creative solutions from others
          in the field. Whether you’re a seasoned artist or just starting out,
          Glaizit is your go-to resource for mastering pottery and glazing.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button className="h-[52px] w-[180px] text-[17px] rounded-[24px] bg-[#A76D09] text-white">
            Start Exploring
          </button>
          <img
            src="/appstore.png"
            alt="App Store"
            className="h-[52px] w-[160px]"
          />
          <img
            src="/googleplay.png"
            alt="Google Play"
            className="h-[52px] w-[160px]"
          />
        </div>
      </div>

      <div className="w-1/2 p-4 flex justify-center items-center relative h-full">
        <div className="z-0">
          {" "}
          <div className="absolute bg-[#D77412] bg-opacity-25 rounded-full h-[500px] w-[500px] top-[10px] left-[5rem]"></div>
          <div className="absolute bg-[#D77412] bg-opacity-50 rounded-full h-[400px] w-[400px] top-[60px] left-[8rem] "></div>
          <div className="absolute bg-[#D77412] bg-opacity-75 rounded-full h-[300px] w-[300px] top-28 left-[11rem]"></div>
        </div>
        <div className="z-10 ">
          <div className="relative  h-[570px] z-40">
            <img
              src="/firstmobileframe.png"
              alt="mobile frame"
              className="absolute h-full -top-10 right-1"
            />
            <img
              src="/firmenuimage.png"
              alt=""
              className="absolute h-[450px] right-[185px] top-5"
            />
          </div>
          <div className="relative z-30  h-[570px]">
            <img
              src="/secondmobileframe.png"
              alt="mobile frame"
              className="ml-72 -mt-[570px] h-[500px]"
            />
            <img
              src="/secondmenuimage.png"
              alt=""
              className="ml-[415px] -mt-[450px] h-[25rem] "
            />
          </div>
        </div>
      </div>
      {/* <div className="lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
      
        <div className="absolute bg-[#D77412] bg-opacity-25 rounded-full h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] top-0 right-16"></div>
        <div className="absolute bg-[#D77412] bg-opacity-50 rounded-full h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] top-10 right-28"></div>
        <div className="absolute bg-[#D77412] bg-opacity-75 rounded-full h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] top-20 right-40"></div>

       
        <div className="relative z-10 flex items-center justify-center">
          
          <div className="relative">
            <img
              src="/firstmobileframe.png"
              alt="First Mobile Frame"
              className="h-[280px] lg:h-[450px] z-20"
            />
            <img
              src="/firmenuimage.png"
              alt="First Menu Image"
              className="absolute top-[10%] left-[25%] h-[240px] lg:h-[350px] z-30"
            />
          </div>

          
          <div className="relative ml-4 lg:ml-8">
            <img
              src="/secondmobileframe.png"
              alt="Second Mobile Frame"
              className="h-[280px] lg:h-[450px] z-20"
            />
            <img
              src="/secondmenuimage.png"
              alt="Second Menu Image"
              className="absolute top-[8%] left-[13%] h-[240px] lg:h-[400px] z-30"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
