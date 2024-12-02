import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="w-full flex items-center px-6 py-4 justify-between border-1 bg-slate-800">
      <h2 className="text-4xl font-medium"> Tech Talk </h2>
        <nav className="hidden lg:flex gap-4 ">
          <Link to="/"> Home </Link>
          <Link to="/resoures"> Resoures</Link>
          <Link to="/assignments"> Assignments </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Contact </Link>
        </nav>
        <div className="flex  items-center gap-4 text-xl">
          <FaRegUserCircle />
          <IoMdMenu />
        </div>

    </header>
  )
}

export default Navbar