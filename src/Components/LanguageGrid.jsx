import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../contexts/DataContext"; 

const LanguageGrid = () => {
  const navigate = useNavigate();
  const { setSelectLanguage } = useNotes();

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

  const handleLanguageClick = (link) => {
    setSelectLanguage(link);
    navigate(`/${link}`);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-darkGray">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {data.map((ele) => (
          <article
            key={ele.id}
            onClick={() => handleLanguageClick(ele.link)}
            className="flex flex-col w-36 h-36 justify-center items-center bg-slate-950 shadow-xl shadow-emerald-500 gap-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-2xl hover:text-white animate-slide-in"
          >
            <span className="text-emerald-500 text-5xl">{ele.icon}</span>
            <p className="text-white text-xl font-semibold">{ele.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LanguageGrid;
