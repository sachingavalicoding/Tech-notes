import { useParams } from "react-router-dom";
import { useNotes } from "../../contexts/DataContext";
import { useState, useEffect } from "react";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const LanguageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useParams(); // Get the language from the URL
  const { content, setSelectLanguage } = useNotes(); // Access data and setter from context
  const [activeTab, setActiveTab] = useState("notes");
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [filteredContent, setFilteredContent] = useState(
    content[activeTab] || []
  ); // Store filtered content

  useEffect(() => {
    setSelectLanguage(language); // Update the selected language in context
  }, [language, setSelectLanguage]);

  // Filter content based on search query for the current active tab
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredContent(content[activeTab] || []); // Show all if no search query
    } else {
      const filtered = content[activeTab]?.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContent(filtered); // Update filtered content
    }
  }, [searchQuery, activeTab, content]);

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update active tab state
    setSearchQuery(""); // Reset search query when tab changes
  };

  const handleSidebarChange = (title) => {
    setSearchQuery(title);
    setIsOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Check if content is still loading or empty
  if (!content || Object.keys(content).length === 0) {
    return <p>Loading...</p>; // Show loading message until content is populated
  }

  return (
    <>
      <div className="w-full">
        {/* Tabs */}
        <div className="flex bg-slate-800 sm:flex-row items-center justify-around sm:justify-start gap-4 sm:gap-0 sm:space-x-8 bg-transparent fixed bottom-0 sm:static w-full py-3 px-4">
          {[
            { key: "notes", label: "Notes", icon: "📒" },
            { key: "assignments", label: "Assignments", icon: "✏️" },
            { key: "programs", label: "Programs", icon: "💻" },
            { key: "projects", label: "Projects", icon: "🛠️" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`group relative text-center flex flex-col items-center justify-center transition-transform duration-300 ${
                activeTab === tab.key
                  ? "text-emerald-500 scale-110"
                  : "text-gray-500 hover:scale-105"
              }`}
            >
              <span
                className={`text-2xl ${
                  activeTab === tab.key ? "animate-bounce" : ""
                }`}
              >
                {tab.icon}
              </span>
              <span className="text-sm sm:text-base">{tab.label}</span>
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 animate-slide-in"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <main className="min-w-full min-h-screen pt-8 px-2  sm:mt-0">
          {/* Search Bar */}
          <div className="mb-4 flex  py-3 px-6 items-center justify-between  gap-4 sticky top-5 left-0">
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {/* Hamburger Menu */}
            <div className="flex items-center gap-4 text-2xl">
              {isOpen ? (
                <RiCloseLine
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white"
                />
              ) : (
                <RiMenu5Line
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer text-white"
                />
              )}
            </div>
          </div>

          {/* Filtered Content */}
          {filteredContent.length > 0 ? (
            filteredContent.map((item, index) => (
              <article
                key={index}
                className="note-item flex flex-col justify-center mb-6 rounded-lg px-2 shadow-md"
              >
                <div
                  className="prose prose-sm max-w-none overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </article>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No {activeTab} available for this language.
            </p>
          )}
        </main>
      </div>
      {/* Sidebar */}
     {/* Sidebar */}
<div
  className={`sidebar w-82 flex flex-col pt-16 z-20 min-h-screen fixed py-6 bg-gradient-to-b from-gray-950 to-gray-900 top-0 left-0 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out shadow-lg`}
>
  <div className="w-full px-6 relative ">
    <IoMdClose
      onClick={() => setIsOpen(false)}
      className="bg-emerald-500 text-white text-4xl rounded-lg shadow-md hover:bg-emerald-400 transition-all duration-300 absolute top-0 right-6"
    />
    <h2 className="text-2xl font-semibold text-emerald-500 mb-6 tracking-wide text-center animate-fade-in">
      Topics for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
    </h2>

    {/* Scrollable Topic List */}
    <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
      {content[activeTab].length > 0 ? (
        <ul className="space-y-4 px-6 py-6">
          {content[activeTab].map((item, index) => (
            <li
              onClick={() => handleSidebarChange(item.title)}
              key={index}
              className="group  relative flex items-start justify-between p-4 bg-slate-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-lg cursor-pointer shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {item.description || "Click to view details"}
                </p>
              </div>
              <span className="text-gray-500 group-hover:text-emerald-400 transition-colors text-lg">
                ➤
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">No topics available.</p>
      )}
    </div>
  </div>
</div>

    </>
  );
};

export default LanguageLayout;
