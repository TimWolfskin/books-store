import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <div className="mt-auto xl:px-20 lg:px-12 sm:px-6 px-4 bg-[#333333] py-12">
            <div className="flex flex-col items-center justify-center">
                <div className="logo">
                    Pages
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="headerLink">About</p>
                    <p className="headerLink">Contact us</p>
                    <p className="headerLink">Terms of Service</p>
                    <p className="headerLink">Privacy Policy</p>
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                    <div className="cursor-pointer text-[#fff]">
                        <FacebookOutlinedIcon />
                    </div>
                    <div className="cursor-pointer text-[#fff]">
                        <InstagramIcon />
                    </div>
                    <div className="cursor-pointer text-[#fff]">
                        <TelegramIcon />
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-[#F5F8FC]">
                        2023 <span className="font-semibold">Pages</span>
                    </p>
                    <div className="border-l border-[#F5F8FC] pl-2 ml-2">
                        <p className="text-base leading-4 text-[#F5F8FC]">Inc. All righys reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;