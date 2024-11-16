import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup } from "./pages/index.js";
import { Navbar } from "./components/index.js";
const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
