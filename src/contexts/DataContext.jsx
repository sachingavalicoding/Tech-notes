/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { WebNotes } from "../data/data.js"; // Ensure your data format is consistent

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectLanguage, setSelectLanguage] = useState("html"); // Default to HTML
  const [content, setContent] = useState({
    notes: [],
    assignments: [],
    programs: [],
    projects: [],
  });

  useEffect(() => {
    // Ensure the selected language data exists
    if (WebNotes[0][selectLanguage]) {
      const selectedData = WebNotes[0][selectLanguage];
     
      setContent({
        notes: selectedData[0].notes || [],
        assignments: selectedData[0].assignment || [],
        programs: selectedData[0].program || [],
        projects: selectedData[0].project || [],
      });
    } else {
      // Fallback to empty data if the language doesn't exist
      setContent({
        notes: [],
        assignments: [],
        programs: [],
        projects: [],
      });
    }
  }, [selectLanguage]); // Trigger the effect whenever `selectLanguage` changes

  return (
    <DataContext.Provider value={{ content, setSelectLanguage }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for accessing context
// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(DataContext);
