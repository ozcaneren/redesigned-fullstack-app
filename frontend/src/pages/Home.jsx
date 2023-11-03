import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Reservation from "../components/Reservation";
// import Teams from "../components/Teams";
import MyRooms from "../components/MyRooms";
import Tutorial from "../components/Tutorial";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div>
        <HeroSection />
        <Reservation />
        {/* <Teams /> */}
        <MyRooms />
        <Tutorial />
        <Services />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
