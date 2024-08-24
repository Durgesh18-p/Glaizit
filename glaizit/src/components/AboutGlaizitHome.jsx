import React from "react";

const data = [
  {
    title: "5000 artists",
    info: "Since our launch in 2023, we have connected thousands of ceramic artists, enabling them to share their unique styles and inspire one another through collaboration and creativity.",
  },
  {
    title: "150 events",
    info: "We organize numerous events and workshops, allowing artists to network, learn, and grow together. Our community is built on the values of support, creativity, and collaboration.",
  },
  {
    title: "10000 pieces",
    info: "To date, our platform has showcased over 10,000 unique ceramic pieces, celebrating the diverse talents of artists from around the globe.",
  },
  {
    title: "200 collaborations",
    info: "Glaizit has facilitated over 200 collaborations among artists, helping them to create and innovate together, thus enriching the ceramic art community.",
  },
];

const AboutGlaizitHome = () => {
  return (
    <div className="lg:m-28  lg:pt-0 pt-8 pl-3 pr-3">
      <p className="text-[#A76D09] font-roboto font-semibold lg:text-[25px] text-[17px] lg:leading-[29.3px] leading-[22.3px]  text-center mb-12">
        Glaizit is a vibrant social platform dedicated to ceramic artists,
        fostering a community where creativity thrives. Our mission is to
        empower artists by providing tools and a supportive environment to
        showcase their work.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.map((item) => (
          <div
            key={item.title}
            className="bg-[#FBF1E7] p-4 rounded-[50px] h-[223px] w-[295px] flex justify-center items-center flex-col"
          >
            <h3 className="text-[#000000] font-roboto font-semibold text-[25px] leading-[24px] mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 text-[15px] leading-[17px]">
              {item.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGlaizitHome;
