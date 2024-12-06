/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {

  const [selectLanguage , setSelectLanguage] = useState("html");

  const [notes, setNotes] = useState("");
  console.log(notes[0].html);
  const [filter, setFilter] = useState([]);
  return (
    <NotesContext.Provider value={{ notes, setNotes, filter, setFilter , selectLanguage , setSelectLanguage}}>
      {children}
    </NotesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(NotesContext);
