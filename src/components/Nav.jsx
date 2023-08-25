import { FaBars, FaTimes } from "react-icons/fa";

import { useToggle, useClickAway, useWindowSize } from "@uidotdev/usehooks";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [open, isOpen] = useToggle(false);
  const path = useLocation();
  const ref = useClickAway(() => {
    isOpen(false);
  });
  const isTruePage = (local) =>
    path.pathname == local
      ? " bg-blue-500 px-2 py-2 rounded-md text-white"
      : "";
  const size = useWindowSize();
  const handleMenu = () => {
    if (open) {
      isOpen(false);
    } else {
      isOpen(true);
    }
  };

  return (
    <nav className='flex  absolute top-0  tablet:grid tablet:grid-cols-2 z-10     text-white w-full justify-between items-center p-6 tablet:p-0 '>
      <div className='brand   tablet:p-6  desktop:px-8 flex items-center '>
        <img alt='logo' src='/assets/shared/logo.svg' />
        <div className=' bg-grays w-full ml-8 h-[1px] '></div>
      </div>
      {/* <div className='hidden transition-all duration-500  w-full h-[1px] bg-grays  col-start-3 col-end-6 border-grays desktop:block '></div> */}
      <div
        ref={ref}
        className={`${
          open ? "left-0" : "left-[-100%]"
        } collapse_menu absolute top-[100%] h-screen  w-[55%] transition-all duration-200  backdrop-blur-md  bg-[rgba(0,0,0,0.2)]  px-3 py-6  tablet:static     tablet:py-3 tablet:px-4 tablet:h-auto tablet:w-full `}
      >
        <ul className='flex   rounded-tr-md gap-y-10  gap-x-5 text-[1.2rem] tablet:flex-row tablet:justify-evenly tablet:p-2 tablet:gap-x-2 tablet:text-[0.88rem] text-[#d9dce2] desktop:text-[1rem] tablet:items-center relative   w-full h-full flex-col  '>
          <li>
            <Link className={isTruePage("/")} to={"/"}>
              00 Home
            </Link>
          </li>
          <li>
            <Link className={isTruePage("/destination")} to={"/destination"}>
              01 Destination
            </Link>
          </li>
          <li>
            <Link className={isTruePage("/crew")} to={"/crew"}>
              02 Crew
            </Link>
          </li>
          <li>
            <Link className={isTruePage("/technology")} to={"/technology"}>
              03 Technology
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={handleMenu} className='text-3xl tablet:hidden'>
        {!open ? <FaBars /> : <FaTimes />}
      </button>
    </nav>
  );
};

export default Nav;
