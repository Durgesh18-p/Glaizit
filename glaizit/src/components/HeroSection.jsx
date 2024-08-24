"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-start items-start flex-row gap-8 h-full ">
      <div className="w-1/2 p-4 h-full">
        <p className="text-[#A76D09] font-roboto font-semibold text-[20px] leading-[29.3px] text-left mb-2">
          When Creativity Meets Collaboration, Magic Happens!
        </p>
        <p className="text-[#424141] font-roboto font-semibold text-[25px] leading-[30.16px] text-left mb-4">
          Discover a vibrant community of ceramic artists. Join us to share your
          creations, learn new techniques, and connect with fellow enthusiasts.
        </p>
        <div className="mt-1">
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400] leading-[20.58px]">
            Master the Art of Pottery with Glaizit! Our platform offers a rich
            blend of resources to elevate your craft. Learn from videos and
            blogs that cover every aspect of pottery and glazing techniques.
          </p>
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400] leading-[20.58px]">
            Create stunning, unique pieces with access to an extensive database
            of glaze combinations and innovative ideas. Connect with a vibrant
            community of fellow potters through forums and discussion groups,
            sharing tips, feedback, and inspiration.
          </p>
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400] leading-[20.58px]">
            Get inspired by diverse experiences and creative solutions from
            others in the field. Whether you're a seasoned artist or just
            starting out, Glaizit is your go-to resource for mastering pottery
            and glazing.
          </p>
        </div>
        <div className="mt-5 flex items-center">
          <button className="w-[149px] h-[48px] rounded-[24px] bg-[#A76D09] text-white mr-4">
            Start Exploring
          </button>

          <div className="flex gap-2">
            <img
              src="/appstore.png"
              alt="App Store"
              height={52}
              width={180}
              className="inline-block"
            />
            <img
              src="/googleplay.png"
              alt="Google Play"
              height={52}
              width={180}
              className="inline-block"
            />
          </div>
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
              className="absolute h-full -top-10 right-10"
            />
            <img
              src="/firmenuimage.png"
              alt=""
              className="absolute h-[450px] left-56 top-5"
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
    </div>
  );
};

export default HeroSection;
