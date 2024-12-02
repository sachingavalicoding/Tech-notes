import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Home from "./home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Topic from "./components/Topic.jsx";
import Details from "./components/Details.jsx";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/topics/:featureId" element={<Topic />} />
        <Route path="/details/:topicId" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
