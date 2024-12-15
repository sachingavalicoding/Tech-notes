import { useParams } from "react-router-dom";
import { useNotes } from "../../contexts/DataContext";
import { useState, useEffect } from "react";

const LanguageLayout = () => {
  const { language } = useParams(); // Get the language from the URL
  const { content, setSelectLanguage } = useNotes(); // Access data and setter from context
  const [activeTab, setActiveTab] = useState("notes");

  useEffect(() => {
    setSelectLanguage(language); // Update the selected language in context
  }, [language, setSelectLanguage]);

  // Update the content when the active tab changes
  useEffect(() => {
    console.log(content[activeTab]);
    const selectedContent = content[activeTab] || []; // Ensure it's not undefined or null
    if (!selectedContent.length) {
      console.log(`No data available for the tab: ${activeTab}`);
    }
  }, [activeTab, content]); // Trigger re-render whenever activeTab or content changes

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update active tab state
  };

  // Check if content is still loading or empty
  if (!content || Object.keys(content).length === 0) {
    return <p>Loading...</p>; // Show loading message until content is populated
  }

  return (
    <div className="w-full h-full p-6">
      {/* Tabs */}
      <div className="mb-4">
        {["notes", "assignment", "program", "project"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`mr-4 p-2 ${
              activeTab === tab ? "bg-emerald-500 text-white" : "bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize tab name */}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <main className="w-full min-h-screen pt-16 px-4 flex flex-col">
        {content[activeTab]?.length > 0 ? (
          content[activeTab].map((item, index) => (
            <article key={index} className="note-item flex flex-col justify-center">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </article>
          ))
        ) : (
          <p>No {activeTab} available for this language.</p>
        )}
      </main>
    </div>
  );
};

export default LanguageLayout;
