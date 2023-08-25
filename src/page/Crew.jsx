import React, { useState } from "react";
import { data } from "../data/data";
import Box from "../components/Box";
import { useCounter, useWindowSize } from "@uidotdev/usehooks";

const Crew = () => {
  const [urlImage, setUrl] = useState("anousheh ansari");
  const longName = (item) => item.split("-")[0].toLowerCase();
  const size = useWindowSize();
  const filters = data.crew.find((res) => longName(res.name) == urlImage);
  return (
    <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] tablet:bg-[url('/assets/crew/background-crew-tablet.jpg')] desktop:bg-[url('/assets/crew/background-crew-desktop.jpg')]    px-10 h-[120vh] flex justify-center flex-col items-center bg-cover relative gap-10 text-white">
      <div className=' absolute hidden title  mt-1   top-[15%] left-[10%] tablet:block  '>
        <h1 className='uppercase text-[1.1rem] tablet:text-[1.4rem]'>
          02 meet your crew
        </h1>
      </div>
      <div className='cotaniner   tablet:flex justify-between w-full mx-auto desktop:px-24  '>
        <div className='img_container hover:scale-105 transition-transform duration-200 relative   group order-2'>
          <img
            className=' group-hover:backdrop-blur-md  tablet:my-5 tablet:w-64  desktop:w-[400px]   w-44 mx-auto my-1  desktop:my-0  bg-transparent cursor-pointer  duration-300'
            src={`/assets/crew/image-${urlImage.split(" ").join("-")}.webp`}
            alt=''
          />
          {size.width < 768 ? (
            <div className='dout_container flex justify-center items-center gap-x-5 '>
              {data.crew.map((item) => (
                <Box
                  key={item.name}
                  active={urlImage == longName(item.name) ? true : false}
                  setUrl={setUrl}
                  name={longName(item.name)}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='description mx-auto  desktop:mx-1 order-1 max-w-md text-center mt-8 desktop:flex justify-center items-center flex-col desktop:text-left'>
          <h1 className='text-[1.2rem] text-grays'>{filters.role}</h1>
          <h2 className='text-[1.3rem] py-3 desktop:text-[3rem] font-medium '>
            {filters.name}
          </h2>
          <p className='text-grays'>{filters.bio}</p>
          {size.width > 768 ? (
            <div className='dout_container flex w-full gap-x-5   mt-8'>
              {data.crew.map((item) => (
                <Box
                  key={item.name}
                  active={urlImage == longName(item.name) ? true : false}
                  setUrl={setUrl}
                  name={longName(item.name)}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Crew;
