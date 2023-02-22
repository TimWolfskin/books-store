import React from "react";

const Newsletters = () => {
  return (
    <div className="mb-40">
      <div className="mx-4 py-16 2xl:container 2xl:mx-auto">
        <div className=" relative  flex w-full items-center justify-center">
          <img
            src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dining"
            className="absolute z-0 hidden h-full w-full xl:block"
          />
          <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="absolute z-0 hidden h-full w-full sm:block xl:hidden"
          />
          <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            className="absolute z-0 h-full w-full  sm:hidden "
          />
          <div className="relative z-40 flex w-full flex-col items-center justify-center bg-[#ffffff91] bg-opacity-80 py-10 px-4 md:my-16 md:mx-24 md:px-12 lg:py-16">
            <h1 className="text-center font-cardo text-4xl font-bold leading-9 text-[#000]">
              Don’t miss out!
            </h1>
            <p className="mt-6 text-center font-montserrat text-base font-semibold leading-normal text-[#000]">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
            <div className="mt-12 flex w-full flex-col  items-center space-y-4 border-[#d14031] sm:flex-row sm:space-y-0 sm:border lg:w-5/12">
              <input
                className="#d14031 w-full border bg-transparent p-4 text-base font-medium leading-none text-[#000] placeholder-[#000] focus:outline-none sm:border-transparent"
                placeholder="Email Address"
              />
              <button className="w-full border border-[#d14031] bg-[#d14031] py-4 px-6 hover:bg-opacity-75 focus:outline-none focus:ring focus:ring-offset-2 sm:w-auto sm:border-transparent">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
