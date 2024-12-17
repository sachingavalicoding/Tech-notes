import {  FaGithub } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import AnimatedButton from "./AnimatedButton";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="w-full py-5 px-2 md:px-6 flex items-center justify-between bg-slate-950 z-20 shadow-md shadow-emerald-500">
        {/* Logo Section */}
        <div className="flex items-center text-2xl gap-3">
          <BiLogoMicrosoftTeams className="text-emerald-500 text-4xl" />
          <Link to={"/"}><span className="text-white font-bold text-xl">Tech Notes </span></Link>
        </div>
        {/* Navigation Actions */}
        <div className="flex items-center gap-6">
        <Link to={"https://github.com/sachingavalicoding"}>  <FaGithub className="text-white hidden md:flex text-2xl cursor-pointer hover:text-emerald-500 transition-colors" /></Link>
          <IoMdSunny className="text-white text-2xl hidden md:flex cursor-pointer hover:text-emerald-500 transition-colors" />
          <AnimatedButton text={"Join with us"} link={"/contact"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
