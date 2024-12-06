import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLayout from "./pages/react/ReactLayout";
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactLayout />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
