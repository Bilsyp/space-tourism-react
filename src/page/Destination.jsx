import React, { useState } from "react";
import { data } from "../data/data";
const Destination = () => {
  const [plane, setPlane] = useState("moon");

  const handleClick = (item) => {
    setPlane(item);
  };

  const filters = data.destinations.find(
    (item) => item.name.toLowerCase() == plane
  );
  return (
    <div className="bg-[url('/assets/destination/background-destination-mobile.jpg')] tablet:bg-[url('/assets/destination/background-destination-tablet.jpg')] desktop:bg-[url('/assets/destination/background-destination-desktop.jpg')] flex-col flex justify-center items-center tablet:py-[1.4rem] h-[120vh] tablet:h-[140vh]  relative  bg-cover text-white ">
      <div className=' absolute title  mt-1   top-[34%] tablet:top-[15%] left-[10%]   hidden  tablet:block  '>
        <h1 className='uppercase text-[1.1rem] tablet:text-[1.4rem]'>
          02 pick destination
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center gap-y-5 p-3 desktop:gap-x-5  desktop:flex-row desktop:justify-evenly w-[80%]  '>
        <div className=' relative z-1 my-4  w-full  hover:scale-110 transition-transform duration-500    py-3 tablet:w-auto '>
          <img
            className=' w-40 image-wrapper cursor-pointer duration-200 my-3 mx-auto tablet:w-48 desktop:w-96'
            src={`/assets/destination/image-${plane}.webp`}
            alt=''
          />
        </div>
        <div>
          <ul className='flex gap-x-5  justify-evenly '>
            {data.destinations.map((item) => {
              return (
                <li
                  onClick={() => handleClick(item.name.toLowerCase())}
                  className={`${
                    plane == item.name.toLowerCase()
                      ? "border-b-[1px] border-white"
                      : ""
                  } text-md tablet:text-xl cursor-pointer`}
                  key={item.name}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className='max-w-md text-center my-3'>
            <div>
              <h1 className='text-[1.3rem] text-left py-3 desktop:text-[3rem] font-medium '>
                {filters.name}
              </h1>
              <p className='text-[0.93rem] font-medium text-grays leading-6 desktop:text-[1.1rem]   text-left'>
                {filters.description}
              </p>
            </div>
            <hr className='my-5' />
            <div className='flex flex-col justify-center items-center text-center gap-y-5  text-grays tablet:flex-row  tablet:justify-between'>
              <h2>
                AVG. DISTANCE{" "}
                <span className='block text-[1.5rem] font-light text-white'>
                  {filters.distance}
                </span>
              </h2>
              <h2>
                EST. TRAVEL TIME{" "}
                <span className='block text-[1.5rem] font-light text-white'>
                  {filters.travel}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
