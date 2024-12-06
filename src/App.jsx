import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLayout from "./pages/react/ReactLayout";
import LanguageGrid from "./Components/LanguageGrid";
// import HomeLayout from "./pages/home/HomeLayout";
import LanguageLayout from "./pages/react/LanguageLayout";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<ReactLayout />} />
          <Route path="/" element={<LanguageGrid />} />
          <Route path="/:language" element={<LanguageLayout />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
