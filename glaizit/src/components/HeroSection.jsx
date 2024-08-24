"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-start items-start flex-row gap-8">
      <div className="w-1/2 p-4">
        <p className="text-[#A76D09] font-roboto font-semibold text-[20px] leading-[29.3px] text-left mb-2">
          When Creativity Meets Collaboration, Magic Happens!
        </p>
        <p className="text-[#424141] font-roboto font-semibold text-[25px] leading-[30.16px] text-left mb-4">
          Discover a vibrant community of ceramic artists. Join us to share your
          creations, learn new techniques, and connect with fellow enthusiasts.
        </p>
        <div className=" mt-1">
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400]  leading-[20.58px]">
            Master the Art of Pottery with Glaizit! Our platform offers a rich
            blend of resources to elevate your craft. Learn from videos and
            blogs that cover every aspect of pottery and glazing techniques.
          </p>
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400]  leading-[20.58px]">
            Create stunning, unique pieces with access to an extensive database
            of glaze combinations and innovative ideas. Connect with a vibrant
            community of fellow potters through forums and discussion groups,
            sharing tips, feedback, and inspiration.
          </p>
          <p className="mb-3 text-[15px] text-[#424141] font-roboto font-[400]  leading-[20.58px]">
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
      <div className="w-1/2 p-4 text-left">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          vitae sint unde id quidem quis inventore est. Cum ea ducimus expedita
          voluptate! Nesciunt, architecto provident? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Explicabo aliquam sit possimus enim
          dolore labore reprehenderit suscipit soluta? Libero voluptatibus
          ducimus reprehenderit facere, nihil officia?
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
