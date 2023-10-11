import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Faq from "./pages/Faq";


import { LanguageProvider } from "./LanguageContext";


function App() {
  return (
    <LanguageProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
