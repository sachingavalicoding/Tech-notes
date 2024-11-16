import { Link } from "react-router-dom";
import { Button } from "./index.js";
const Navbar = () => {
  return (
    <header className="w-full px-2 py-4 border-[1px] border-slate-700 ">
      <div className="container mx-auto flex items-center justify-between">
        <h2> Tech talk </h2>
        <nav className="flex gap-4 ">
          <Link to="/"> Home </Link>
          <Link to="/resoures"> Resoures</Link>
          <Link to="/assignments"> Assignments </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Contact </Link>
        </nav>
        <Button text="Join With Us" />
      </div>
    </header>
  );
};

export default Navbar;
