import { useState } from "react";
import Box from "../components/Box";
import { useWindowSize } from "@uidotdev/usehooks";
import { data } from "../data/data";
const Technology = () => {
  const [urlImage, setUrl] = useState("launch vehicle");
  const size = useWindowSize();
  const longName = (item) => item.split("-")[0].toLowerCase();
  const isMobile = size.width > 752 ? "portrait" : "landscape";
  const filters = data.technology.find((res) => longName(res.name) == urlImage);

  return (
    <div className="bg-[url('/assets/technology/background-technology-mobile.jpg')] tablet:bg-[url('/assets/technology/background-technology-tablet.jpg')] desktop:bg-[url('/assets/technology/background-technology-desktop.jpg')]    px-10 h-[120vh] flex justify-center flex-col items-center bg-cover gap-10 text-white">
      <div className=' absolute title  mt-1   top-[15%] left-[10%]  '>
        <h1 className='uppercase text-[1.1rem] tablet:text-[1.4rem] hidden tablet:block'>
          03 SPACE LAUNCH 101
        </h1>
      </div>
      <div className='cotaniner   desktop:flex justify-between w-full mx-auto desktop:px-24  '>
        <div className='img_container hover:scale-105 transition-transform duration-200 relative   group order-2  flex justify-center items-center flex-col'>
          <img
            className=' group-hover:backdrop-blur-md  tablet:my-5 tablet:w-64  desktop:w-[400px] h-44  w-[90%] mx-auto my-1  desktop:my-0  bg-transparent cursor-pointer group-hover:rounded-md  duration-300 desktop:h-auto'
            src={`/assets/technology/image-${urlImage
              .split(" ")
              .join("-")}-${isMobile}.jpg`}
            alt=''
          />
          {size.width < 768 ? (
            <div className='dout_container  self-end flex mr-3 gap-x-5 mt-3 '>
              {data.technology.map((item) => (
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
          <h2 className='text-[1.2rem] text-grays'>THE TERMINOLOGY</h2>

          <h1 className='text-[1.3rem] py-3 desktop:text-[3rem] font-medium '>
            {filters.name}
          </h1>
          <p className='text-grays text-[0.87rem] tablet:text-[1rem]'>
            {filters.description}
          </p>
          {size.width > 768 ? (
            <div className='dout_container flex w-full gap-x-5   mt-8'>
              {data.technology.map((item) => (
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

export default Technology;
