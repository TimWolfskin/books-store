import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const BannerSale = () => {
  return (
    <>
    <div className="mb-12">
      <div
        className=""
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <Image alt="" src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" layout="fill" objectFit="cover" />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-3">
        <h3 className="tracking-wider text-7xl font-cardo text-[#134683] font-bold">Give your family and friends a book</h3>
          <p className="text-3xl font-montserrat font-semibold text-[#676767]">Wonderful Gifts</p>
          <Button title="Shop Now" />
        </div>
      </div>
    </div>
    </>
  );
};

export default BannerSale;
