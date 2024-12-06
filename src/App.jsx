import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLayout from "./pages/react/ReactLayout";
import SmNav from "./Components/SmNav";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactLayout />} />
        </Routes>
        <SmNav />
    </BrowserRouter>
  );
};

export default App;
