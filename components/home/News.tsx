import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const News = () => {
  return (
    <div className="my-40">
      <h4 className="mb-12 text-center font-cardo text-4xl font-medium uppercase tracking-wide text-[#35383C] md:text-5xl">
        latest News
      </h4>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="rounded-xl bg-white p-6">
          <a href="#" className="group">
            <div className="overflow-hidden mb-2">
              <img
                src="https://neilpatel.com/wp-content/uploads/2018/03/how-writers-improve-blogging-skills.jpg"
                className="h-auto w-auto transition-all  duration-200 ease-in-out hover:scale-105"
                alt=""
              />
            </div>
            <h3 className="mb-2 line-clamp-3 translation-all   font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-[#d14031] lg:text-2xl">
              Books changed my ideology
            </h3>
          </a>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 mb-5">
            <div className="flex">
              <CalendarMonthOutlinedIcon />
              <p className="ml-3 text-gray-600">November 6, 2023</p>
            </div>

            <a href="#" className="flex items-center">
              <AccountCircleOutlinedIcon />
              <span className="ml-2 text-gray-600">John Doe</span>
            </a>
          </div>
          <div className="mb-3 max-w-[480px]">
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
            <div className="overflow-hidden mb-2">
              <img
                src="https://www.countryandtownhouse.com/wp-content/uploads/2018/11/1-11.jpg"
                className="h-auto w-auto transition-all  duration-200 ease-in-out hover:scale-105"
                alt=""
              />
            </div>
            <h3 className="mb-2 line-clamp-3 translation-all  text-xl font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-[#d14031] lg:text-2xl">
              Best writers of 19th century
            </h3>
          </a>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 mb-5">
            <div className="flex">
              <CalendarMonthOutlinedIcon />
              <p className="ml-3 text-gray-600">November 6, 2023</p>
            </div>

            <a href="#" className="flex items-center">
              <AccountCircleOutlinedIcon />

              <span className="ml-2 text-gray-600">John Doe</span>
            </a>
          </div>
          <div className="mb-3 max-w-[480px]">
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
            <div className="overflow-hidden mb-2">
              <img
                src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="h-auto w-auto transition-all  duration-200 ease-in-out hover:scale-105"
                alt=""
              />
            </div>

            <h3 className="mb-2 line-clamp-3 translation-all  text-2xl font-semibold leading-normal text-gray-800 transition duration-200 ease-in-out group-hover:text-[#d14031] lg:text-2xl">
              My favourite books of 2023
            </h3>
          </a>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 mb-5">
            <div className="flex">
              <CalendarMonthOutlinedIcon />
              <p className="ml-3 text-gray-600">November 6, 2023</p>
            </div>

            <a href="#" className="flex items-center">
              <AccountCircleOutlinedIcon />

              <span className="ml-2 text-gray-600">John Doe</span>
            </a>
          </div>
          <div className="mb-3 max-w-[480px]">
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
