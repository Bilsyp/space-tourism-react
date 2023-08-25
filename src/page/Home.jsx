import React from "react";

const Home = () => {
  return (
    <div className="bg-[url('/assets/home/home-mobile.jpg')] tablet:bg-[url('/assets/home/background-home-tablet.jpg')] desktop:bg-[url('/assets/home/background-home-desktop.jpg')]  h-[120vh] bg-cover flex justify-center items-center ">
      <div className='description  gap-10  text-white text-center flex justify-center items-center  w-full   flex-col desktop:flex-row desktop:text-left  desktop:justify-between desktop:px-[10rem] '>
        <article className='max-w-md px-3'>
          <h2 className=' text-grays pt-20 text-xl'>
            So, you want to travel to
          </h2>
          <h1 className='text-7xl py-3 tracking-widest uppercase tablet:text-8xl desktop:text-9xl desktop:py-6'>
            space
          </h1>
          <p className='text-[0.90rem] leading-[1.3rem]  text-grays tablet:text-[1rem] desktop:text-[1.3rem] desktop:leading-7'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className='w-[200px] h-[200px] rounded-full bg-white   text-black flex justify-center items-center cursor-pointer duration-200 hover:scale-110 hover:text-grays desktop:mt-24 '>
          <h1 className='text-3xl tracking-widest'>Explore</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
