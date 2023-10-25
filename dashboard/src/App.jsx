import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";
import Feature from './pages/feature/Feature';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Hero from './pages/hero/Hero';
import Services from './pages/services/Services';
import Teams from './pages/teams/Teams';
import Document from './pages/document/Document';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/room/feature' element={<Feature/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/document' element={<Document/>} />
      </Routes>
    </>
  );
}

export default App;
