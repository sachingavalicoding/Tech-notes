import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AnimatedButton = ({ text , link }) => {
  return (
    <Link to={link}>
    <button className="relative group px-5 py-2 flex items-center gap-3 bg-emerald-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-md shadow-emerald-500 hover:shadow-lg hover:shadow-emerald-700 hover:bg-emerald-600">
      {/* Icon */}
      <span className="text-[1rem] group-hover:rotate-90 transition-transform duration-300">
        <FaRocket />
      </span>
      {/* Text */}
      <span className="z-10">{text}</span>
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </button></Link>
  );
};

export default AnimatedButton;
