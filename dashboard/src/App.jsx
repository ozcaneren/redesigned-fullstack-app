import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";
import Feature from "./pages/feature/Feature";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Hero from "./pages/hero/Hero";
import DocumentTitle from "./pages/document/DocumentTitle";
import DocumentCard from "./pages/document/DocumentCard";
import HeaderTitle from "./pages/header/HeaderTitle";
import HeaderLink from "./pages/header/HeaderCard";
import FooterIcon from "./pages/footer/FooterIcon";
import FooterLink from "./pages/footer/FooterLink";
import FooterTitle from "./pages/footer/FooterTitle";
import ServicesCard from "./pages/services/ServicesCard";
import ServicesTitle from "./pages/services/ServicesTitle";
import TeamsCard from "./pages/teams/TeamsCard";
import TeamsTitle from "./pages/teams/TeamsTitle";
import General from "./pages/general/General";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/header/title" element={<HeaderTitle />} />
        <Route path="/header/link" element={<HeaderLink />} />
        <Route path="/footer/title" element={<FooterTitle />} />
        <Route path="/footer/link" element={<FooterLink />} />
        <Route path="/footer/icon" element={<FooterIcon />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/services/title" element={<ServicesTitle />} />
        <Route path="/services/card" element={<ServicesCard />} />
        <Route path="/teams/title" element={<TeamsTitle />} />
        <Route path="/teams/card" element={<TeamsCard />} />
        <Route path="/document/title" element={<DocumentTitle />} />
        <Route path="/document/card" element={<DocumentCard />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </>
  );
}

export default App;
