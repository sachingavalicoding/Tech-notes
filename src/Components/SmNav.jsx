import { HiOutlineHome } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn, MdOutlineQuiz } from "react-icons/md";
import { Link } from "react-router-dom";
const SmNav = () => {
  return (
    <nav className="w-full flex items-center justify-center fixed bottom-4 left-0 z-10">
      <div className="flex items-center w-[22rem] bg-gradient-to-b from-gray-700 via-gray-900 to-black px-10 py-6 text-2xl rounded-3xl justify-between shadow-lg">
        <Link to={"/"}>
          <HiOutlineHome className="text-white hover:text-emerald-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:p-2 rounded-full" />
        </Link>
        <Link to={"/programs"}>
          <FaLaptopCode className="text-white hover:text-emerald-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:p-2 rounded-full" />
        </Link>
        <Link to={"/tasks"}>
          <MdOutlineAssignmentTurnedIn className="text-white hover:text-emerald-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:p-2 rounded-full" />
        </Link>
        <Link to={"/quiz"}>
          <MdOutlineQuiz className="text-white hover:text-emerald-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:p-2 rounded-full" />
        </Link>
      </div>
    </nav>
  );
};

export default SmNav;
