import { useParams } from "react-router-dom";
import { useNotes } from "../../contexts/DataContext";
import { useState, useEffect } from "react";

const LanguageLayout = () => {
  const { language } = useParams(); // Get the language from the URL
  const { content, setSelectLanguage } = useNotes(); // Access data and setter from context
  const [activeTab, setActiveTab] = useState("notes");
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [filteredContent, setFilteredContent] = useState(content[activeTab] || []); // Store filtered content

  useEffect(() => {
    setSelectLanguage(language); // Update the selected language in context
  }, [language, setSelectLanguage]);

  // Filter content based on search query
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
    <div className="w-full">
      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

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
              className={`text-2xl ${activeTab === tab.key ? "animate-bounce" : ""}`}
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
      <main className="min-w-full min-h-screen pt-8 px-2 mt-10 sm:mt-0">
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
  );
};

export default LanguageLayout;
