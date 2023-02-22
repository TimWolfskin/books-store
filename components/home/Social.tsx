import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Social = () => {
  return (
    <div className="mb-40">
      <div className=" py-9 px-4 2xl:container md:py-12 md:px-6 lg:px-20 2xl:mx-auto">
        <div className=" text-center">
          <h2 className="mb-12 text-center font-cardo text-4xl font-medium uppercase tracking-wide text-[#35383C] md:text-5xl">
            Follow Us on Instagram
          </h2>
          <p className=" mx-auto mt-4 text-lg font-semibold leading-6 text-gray-600 md:w-9/12 lg:w-5/12">
            Follow us on instagram
            <span className="cursor-pointer text-base underline font-normal ml-2">@pages</span>{" "}
            and tag us to get featured on our timeline
          </p>
        </div>
        <div className=" lg:grap-8 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/3021329/pexels-photo-3021329.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className=" hidden h-full w-full object-cover lg:block "
            />
            <img
              src="https://images.pexels.com/photos/3021329/pexels-photo-3021329.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="block w-full lg:hidden "
            />
            <div className=" to-opacity-30 absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gradient-to-t from-gray-800 via-gray-800 opacity-0 group-hover:opacity-50" />
            <div className=" absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
            <InstagramIcon className="text-[#fff] w-14 h-14" />
            </div>
          </div>
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/9572688/pexels-photo-9572688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" hidden h-full w-full object-cover lg:block "
            />
            <img
              src="https://images.pexels.com/photos/9572688/pexels-photo-9572688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="block w-full lg:hidden "
            />
            <div className="to-opacity-30 absolute top-0 left-0 h-full w-full bg-gradient-to-t from-gray-800 via-gray-800 opacity-0 group-hover:opacity-50" />
            <div className=" absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
            <InstagramIcon className="text-[#fff] w-14 h-14" />
            </div>
          </div>
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/9490219/pexels-photo-9490219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" hidden h-full w-full object-cover lg:block "
            />
            <img
              src="https://images.pexels.com/photos/9490219/pexels-photo-9490219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="block w-full lg:hidden "
            />
            <div className="to-opacity-30 absolute top-0 left-0 h-full w-full bg-gradient-to-t from-gray-800 via-gray-800 opacity-0 group-hover:opacity-50" />
            <div className=" absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
            <InstagramIcon className="text-[#fff] w-14 h-14" />
            </div>
          </div>
          <div className="group relative">
            <img
              src="https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" hidden h-full w-full object-cover lg:block "
            />
            <img
              src="https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="block w-full lg:hidden "
            />
            <div className="to-opacity-30 absolute top-0 left-0 h-full w-full bg-gradient-to-t from-gray-800 via-gray-800 opacity-0 group-hover:opacity-50" />
            <div className=" absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100">
              <InstagramIcon className="text-[#fff] w-14 h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
