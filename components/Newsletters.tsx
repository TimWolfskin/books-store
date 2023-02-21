import React from 'react'

const Newsletters = () => {
  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
    <div className=" w-full  relative flex items-center justify-center">
        <img src="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
        <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
        <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
        <div className="bg-[#ffffff91] bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-bold font-cardo leading-9 text-[#000] text-center">Don’t miss out!</h1>
            <p className="text-base leading-normal font-montserrat font-semibold text-center text-[#000] mt-6">
                Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />a week on every friday so subscribe to get latest news and updates.
            </p>
            <div className="sm:border border-[#d14031] flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                <input className="border #d14031 sm:border-transparent text-base w-full font-medium leading-none text-[#000] p-4 focus:outline-none bg-transparent placeholder-[#000]" placeholder="Email Address" />
                <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-[#d14031] sm:border-transparent w-full sm:w-auto bg-[#d14031] py-4 px-6 hover:bg-opacity-75">Subscribe</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Newsletters