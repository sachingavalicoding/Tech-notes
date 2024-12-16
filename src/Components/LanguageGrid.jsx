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
      text: "REACT",
      link: "react",
      icon: <IoLogoReact />,
    },
    {
      id: 2,
      text: "HTML",
      link: "html",
      icon: <IoLogoHtml5 />,
    },
    
    {
      id: 3,
      text: "JS",
      link: "js",
      icon: <IoLogoJavascript />,
    },
    {
      id: 4,
      text: "CSS",
      link: "css",
      icon: <IoLogoCss3 />,
    },
   
  ];

  const handleLanguageClick = (link) => {
    setSelectLanguage(link);
    navigate(`/${link}`);
  };

  return (
    <section className="w-full  flex items-center justify-center bg-gray-950 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-6 max-w-screen-xl">
        {data.map((ele) => (
          <article
            key={ele.id}
            onClick={() => handleLanguageClick(ele.link)}
            className="flex flex-col px-8 py-5 justify-center items-center text-center bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl shadow-xl hover:scale-110 cursor-pointer transition-all duration-500 transform hover:shadow-2xl hover:bg-gradient-to-l hover:from-green-600 hover:via-teal-600 hover:to-blue-600"
          >
            <div className="flex justify-center items-center bg-white p-8 rounded-full mb-6 transform transition-all duration-300 hover:bg-gray-800">
              <span className="text-6xl text-gray-800 hover:text-white transition-all duration-300">
                {ele.icon}
              </span>
            </div>
            <p className="text-white text-xl font-semibold">{ele.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LanguageGrid;
