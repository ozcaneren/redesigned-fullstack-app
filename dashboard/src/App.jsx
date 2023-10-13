import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Room from "./pages/Room";
import RoomEdit from './pages/RoomEdit';
import RoomAdd from './pages/RoomAdd';
import Feature from './pages/Feature';
import FeatureAdd from './pages/FeatureAdd';
import Contact from './pages/Contact';
import ContactEdit from './pages/ContactEdit';
import About from './pages/About';
import AboutEdit from './pages/AboutEdit';
import Header from './pages/Header';
import HeaderEdit from './pages/HeaderEdit';
import Footer from './pages/Footer';
import FooterEdit from './pages/FooterEdit';
import Hero from './pages/Hero';
import HeroEdit from './pages/HeroEdit';
import Services from './pages/Services';
import ServicesEdit from './pages/ServicesEdit';
import Teams from './pages/Teams';
import TeamsEdit from './pages/TeamsEdit';
import Document from './pages/Document';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/room/add' element={<RoomAdd/>} />
        <Route path='/room/turkish/:roomId/edit' element={<RoomEdit/>} />
        <Route path='/room/feature' element={<Feature/>} />
        <Route path='/room/feature/add' element={<FeatureAdd/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/:contactId/edit' element={<ContactEdit/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:aboutId/edit' element={<AboutEdit/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/header/:headerId/edit' element={<HeaderEdit/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/footer/:footerId/edit' element={<FooterEdit/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/hero/:heroId/edit' element={<HeroEdit/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/:servicesId/edit' element={<ServicesEdit/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/teams/:teamsId/edit' element={<TeamsEdit/>} />
        <Route path='/document' element={<Document/>} />
      </Routes>
    </>
  );
}

export default App;
