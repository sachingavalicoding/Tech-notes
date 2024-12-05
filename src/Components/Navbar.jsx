/* eslint-disable react/prop-types */
import { FaReact } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";

const Navbar = ({topics}) => {
  const [isOpen , setIsOpen] = useState(true);
  return (
    <>
      <nav className="w-full py-3 px-4 flex items-center justify-between bg-slate-950 z-20 fixed top-0 left-0 shadow-md shadow-emerald-500 ">
        <div className="flex  items-center gap-4 text-2xl">
          <RiMenu5Line onClick={() => setIsOpen(!isOpen)} />
          <FaReact className="text-emerald-500 text-4xl" />
        </div>
        <div className="flex gap-8 text-2xl">
          <FiSearch />
          <MdOutlineWbSunny />
          <VscGithub />
        </div>
      </nav>
      <div className="sidebar w-full flex flex-col pt-16 z-10  py-4  bg-red-800 top-16 left-0 ">
        {/* <h2 className="text-center"> Topics </h2> */}
      {
        isOpen ? (
          <ul>
             {
              topics.map((ele , index) => (
                <li className="py-3 px-6 shadow-md shadow-green-700 text-white" key={index}> {ele.title} </li>
              ))
             }
         </ul>
        ) : " "
      }
      </div>
    </>
  );
};

export default Navbar;
