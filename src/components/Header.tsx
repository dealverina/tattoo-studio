import { useEffect, useState } from "react";
import { headerData } from "../data";
import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";
import { Socials } from "./Socials";
import { TiThMenuOutline } from "react-icons/ti";

export const Header = () => {
  const { logo } = headerData;
  const [active, isActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? isActive(true) : isActive(false);
    });
  });

  return (
    <header
      className={`${
        active ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img className="w-[188px] h-[90px ]" src={logo} alt="" />
        </a>
        {/* nav 0 initially hidden - show on desktop */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
        {/* nav menu btn - showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline className="text-3xl" />
        </div>
        {/* nav mobile - showing by default - hidden on desktop */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} ${
            active ? "top-[100px] lg:top-[110px]" : "top-[120px] lg:top-[150px]"
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - show on desktop */}
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};
