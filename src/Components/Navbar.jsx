import { FaReact } from "react-icons/fa";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../contexts/DataContext"; // Use the custom hook

const Navbar = () => {
  const {  filteredContent, filterContent } = useNotes(); // Get filteredContent and filterContent function
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterContent(query); // Call the filterContent function to update filteredContent
  };

  return (
    <>
      <nav className="w-full py-3 px-4 flex items-center justify-between bg-slate-950 z-20 fixed top-0 left-0 shadow-md shadow-emerald-500">
        <div className="flex items-center text-2xl">
          <FaReact className="text-emerald-500 text-4xl" />
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <div className="flex items-center justify-between w-full max-w-sm bg-gray-800 p-2 rounded-lg border border-gray-600 focus-within:ring-2 focus-within:ring-emerald-500">
            <input
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              type="search"
              placeholder="Search Topics..."
              className="w-full px-3 py-1 bg-transparent text-gray-300 text-sm rounded-lg focus:outline-none"
            />
            <FiSearch
              className="text-gray-400 text-lg cursor-pointer hover:text-emerald-500 transition-all duration-300"
              onClick={() => handleSearch(searchQuery)}
            />
          </div>
          {isOpen ? (
            <RiCloseLine onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <RiMenu5Line onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </nav>

      <div
        className={`sidebar w-64 flex flex-col pt-16 z-10 min-h-screen fixed py-4 bg-slate-950 top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 overflow-y-auto`}
      >
        <div className="w-full flex flex-col">
          {filteredContent.notes.map((note) => (
            <Link
              key={note.id}
              to={`#${note.id}`}
              className="py-3 px-6 shadow shadow-slate-700 text-white"
            >
              {note.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
