import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { useNotes } from "../contexts/DataContext"; // Importing useNotes hook

const LanguageGrid = () => {
  const navigate = useNavigate();
  const { setSelectLanguage } = useNotes(); // Using the useNotes hook to access setSelectLanguage

  const data = [
    {
      id: 1,
      text: "HTML",
      link: "html",
      icon: <IoLogoHtml5 />,
    },
    {
      id: 2,
      text: "CSS",
      link: "css",
      icon: <IoLogoCss3 />,
    },
    {
      id: 3,
      text: "JS",
      link: "js",
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      text: "REACT",
      link: "react",
      icon: <IoLogoReact />,
    },
  ];

  // Function to handle language selection and navigation
  const handleLanguageClick = (link) => {
    setSelectLanguage(link); // Set the selected language in context
    navigate(`/${link}`); // Navigate to the corresponding page
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 border-2 gap-6 justify-center p-10">
        {data.map((ele) => (
          <article
            key={ele.id}
            onClick={() => handleLanguageClick(ele.link)} // Use the handler to set language and navigate
            className="flex flex-col w-36 h-36 justify-center items-center bg-slate-950 shadow-md shadow-emerald-500 gap-4 cursor-pointer"
          >
            <span className="text-emerald-500 text-5xl">{ele.icon}</span>
            <p className="text-white text-xl">{ele.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LanguageGrid;
