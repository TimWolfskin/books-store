import Image from "next/image";
import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="mb-12">
      <div
        className=""
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <Image alt="" src="/banner.jpg" layout="fill" objectFit="cover" />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-3">
          <p className="text-3xl font-montserrat font-semibold text-[#000]">Shop wide range of collections</p>
          <h3 className="tracking-wider text-7xl font-cardo text-[#d14031] font-bold">BOOK FESTIVAL</h3>
          <p className="text-2xl font-montserrat font-light">ALL BOOKS ARE FLAT <span className="font-semibold">50% OFF</span></p>
          <Button title="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
