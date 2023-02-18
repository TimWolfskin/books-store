import Image from "next/image";
import React from "react";
import Button from "./Button";
//import Button from "./Button";

function Landing() {
  return (
    <section className="mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="relative  hidden  h-[-450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          src="https://m.media-amazon.com/images/I/91WBKTF-0iL.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col">
        <p className="mb-10 text-2xl uppercase tracking-wide">NOW IN STOCK</p>
        <h2 className="mb-8 max-w-2xl font-cardo text-5xl font-semibold uppercase tracking-wide">
          Bestselling Authors
        </h2>
        <p className="mb-8 max-w-2xl font-cardo text-2xl">
          "One glance at a book and you hear the voice of another person,
          perhaps someone dead for 1,000 years. To read is to voyage through
          time."
          <span className="mt-3 block text-3xl"> – Carl Sagan</span>
        </p>
        <div className="">
          <Button title="SHOP NOW" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
