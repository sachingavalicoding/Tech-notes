/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import data from "../data/data.json"; // Assuming the data is in the correct format

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectLanguage, setSelectLanguage] = useState("html"); // Default to 'html'

  // State to store all content in a single object
  const [content, setContent] = useState({
    notes: [],
    assignments: [],
    programs: [],
    projects: [],
  });

  const [filter, setFilter] = useState([]);

  // Update the content based on selected language
  useEffect(() => {
    // Filter and set data based on selected language
    const selectedData = data[selectLanguage] || {}; // Defaults to empty if language data doesn't exist

    setContent({
      notes: selectedData.notes || [],
      assignments: selectedData.assignments || [],
      programs: selectedData.programs || [],
      projects: selectedData.projects || [],
    });
  }, [selectLanguage]); // Re-run the effect whenever `selectLanguage` changes

  return (
    <DataContext.Provider
      value={{
        content,
        filter,
        setFilter,
        selectLanguage,
        setSelectLanguage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access context values
// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(DataContext);
