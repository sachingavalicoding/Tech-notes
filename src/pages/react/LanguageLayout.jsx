import { useParams } from "react-router-dom";
import { useNotes } from "../../contexts/DataContext";
import { useState , useEffect } from "react";
const LanguageLayout = () => {
  const { language } = useParams();  // Get the language from the URL
  const { content, setSelectLanguage } = useNotes();
  const [activeTab, setActiveTab] = useState("notes");

  useEffect(() => {
    // Set the selected language in the context
    setSelectLanguage(language);
  }, [language, setSelectLanguage]); // Update when the language changes

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full p-6">
      <h1 className="text-2xl font-bold mb-4">{language.toUpperCase()} Web Development Info</h1>

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
      <div>
        {activeTab === "notes" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Notes</h2>
            <ul>
              {content.notes.length === 0 ? (
                <li>No notes available</li>
              ) : (
                content.notes.map((note, index) => <li key={index}>{note}</li>)
              )}
            </ul>
          </div>
        )}

        {activeTab === "assignments" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Assignments</h2>
            <ul>
              {content.assignments.length === 0 ? (
                <li>No assignments available</li>
              ) : (
                content.assignments.map((assignment, index) => <li key={index}>{assignment}</li>)
              )}
            </ul>
          </div>
        )}

        {activeTab === "programs" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Programs</h2>
            <ul>
              {content.programs.length === 0 ? (
                <li>No programs available</li>
              ) : (
                content.programs.map((program, index) => <li key={index}>{program}</li>)
              )}
            </ul>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul>
              {content.projects.length === 0 ? (
                <li>No projects available</li>
              ) : (
                content.projects.map((project, index) => <li key={index}>{project}</li>)
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageLayout;
