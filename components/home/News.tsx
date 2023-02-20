import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const News = () => {
  return (
    <div className="my-40">
      <h4 className="text-center font-cardo text-4xl font-medium tracking-wide text-[#35383C] md:text-5xl uppercase mb-12">latest News</h4>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-6">
          <a href="#" className="group">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                className="h-auto w-[450px] transition-all  duration-200 ease-in-out hover:scale-105"
                alt="Sample Cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <p className="text-gray-600">November 6, 2021</p>

              <a href="#" className="flex items-center">
                <AccountCircleOutlinedIcon />
                <span className="ml-2 text-gray-600">John Doe</span>
              </a>
            </div>
            <h3 className="line-clamp-3 translation-all   font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-purple-400 lg:text-2xl">
              Books changed my ideology
            </h3>
          </a>
          <div className="">
            <p className="line-clamp-3 text-lg leading-normal text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo ipsa laudantium maxime nemo non numquam praesentium quia
              quidem reiciendis sint tempora temporibus tenetur, totam unde vel
              velit voluptas? Alias.
            </p>
          </div>
          <Button title="Read more" />
        </div>

        <div className="rounded-xl bg-white p-6">
          <a href="#" className="group">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                className="h-auto w-[450px] transition-all  duration-200 ease-in-out hover:scale-105"
                alt="Sample Cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <p className="text-gray-600">November 6, 2021</p>

              <a href="#" className="flex items-center">
                <AccountCircleOutlinedIcon />

                <span className="ml-2 text-gray-600">John Doe</span>
              </a>
            </div>
            <h3 className="line-clamp-3 translation-all  text-xl font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-purple-400 lg:text-2xl">
              Best writers of 19th century
            </h3>
          </a>

          <div className="">
            <p className="line-clamp-3 text-lg leading-normal text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo ipsa laudantium maxime nemo non numquam praesentium quia
              quidem reiciendis sint tempora temporibus tenetur, totam unde vel
              velit voluptas? Alias.
            </p>
          </div>

          <Button title="Read more" />
        </div>

        <div className="rounded-xl bg-white p-6">
          <a href="#" className="group">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                className="h-auto w-[450px] transition-all  duration-200 ease-in-out hover:scale-105"
                alt="Sample Cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <p className="text-gray-600">November 6, 2023</p>

              <a href="#" className="flex items-center">
                <AccountCircleOutlinedIcon />

                <span className="ml-2 text-gray-600">John Doe</span>
              </a>
            </div>

            <h3 className="line-clamp-3 translation-all  text-2xl font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-purple-400 lg:text-2xl">
              My favourite books of 2023
            </h3>
          </a>

          <div className="">
            <p className="line-clamp-3 text-lg leading-normal text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              explicabo ipsa laudantium maxime nemo non numquam praesentium quia
              quidem reiciendis sint tempora temporibus tenetur, totam unde vel
              velit voluptas? Alias.
            </p>
          </div>

          <Button title="Read more" />
        </div>
      </div>
    </div>
  );
};

export default News;
