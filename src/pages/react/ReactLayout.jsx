import Navbar from "../../Components/Navbar.jsx";
import { useNotes } from "../../contexts/NotesContext";
const ReactLayout = () => {
  const {  filter } = useNotes();

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-16 px-4 flex flex-col">
        {filter.map((note, index) => {
          return (
            <article
              key={index}
              className="note-item flex flex-col justify-center"
            >
              <div dangerouslySetInnerHTML={{ __html: note.content }} />
            </article>
          );
        })}
      </main>
    </>
  );
};

export default ReactLayout;
