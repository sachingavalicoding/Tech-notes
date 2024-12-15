import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLayout from "./pages/react/ReactLayout";
// import HomeLayout from "./pages/home/HomeLayout";
import LanguageLayout from "./pages/react/LanguageLayout";
import HomeLayout from "./pages/home/HomeLayout";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/layout" element={<ReactLayout />} />
        <Route path="/" element={<HomeLayout />} />
        <Route path="/:language" element={<LanguageLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
