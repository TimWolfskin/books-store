import Image from "next/image";
import React from "react";
//import Button from "./Button";


function Landing () {
    return (
        <section className="mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
            <div className="relative  hidden  h-[-450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
                <Image src="https://m.media-amazon.com/images/I/91WBKTF-0iL.jpg" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className="">
                <p className="tracking-wide uppercase text-2xl mb-10">NOW IN STOCK</p>
                <h2 className="tracking-wide font-semibold text-5xl uppercase font-cardo max-w-2xl mb-8">Bestselling Authors</h2>
                <p className="font-cardo max-w-2xl text-2xl">
                "One glance at a book and you hear the voice of another person,
                 perhaps someone dead for 1,000 years. To read is to voyage through time."
                 <span className="text-3xl block mt-3"> – Carl Sagan</span>
                </p>
            </div>
        </section>
    )
}

export default Landing