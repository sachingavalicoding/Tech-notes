import { useParams } from "react-router-dom";
import { useNotes } from "../../contexts/DataContext";
import { useState, useEffect } from "react";

const LanguageLayout = () => {
  const { language } = useParams(); // Get the language from the URL
  const { content, setSelectLanguage } = useNotes();
  const [activeTab, setActiveTab] = useState("notes");
  console.log(content);
  useEffect(() => {
    // Set the selected language in the context
    setSelectLanguage(language);
  }, [language, setSelectLanguage]); // Update when the language changes

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full p-6">
      {/* Tabs */}
      <div className="mb-4">
        <button
          onClick={() => handleTabChange("notes")}
          className={`mr-4 p-2 ${activeTab === "notes" ? "bg-emerald-500 text-white" : "bg-gray-300"}`}
        >
          Notes
        </button>
        <button
          onClick={() => handleTabChange("assignments")}
          className={`mr-4 p-2 ${activeTab === "assignments" ? "bg-emerald-500 text-white" : "bg-gray-300"}`}
        >
          Assignments
        </button>
        <button
          onClick={() => handleTabChange("programs")}
          className={`mr-4 p-2 ${activeTab === "programs" ? "bg-emerald-500 text-white" : "bg-gray-300"}`}
        >
          Programs
        </button>
        <button
          onClick={() => handleTabChange("projects")}
          className={`p-2 ${activeTab === "projects" ? "bg-emerald-500 text-white" : "bg-gray-300"}`}
        >
          Projects
        </button>
      </div>

      {/* Content Section */}
      <main className="w-full min-h-screen pt-16 px-4 flex flex-col">
        {content[activeTab] && content[activeTab].length > 0 ? (
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
