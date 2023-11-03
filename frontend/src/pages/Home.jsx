import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
// import Teams from "../components/Teams";
import MyRooms from "../components/MyRooms";
import Tutorial from "../components/Tutorial";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div>
        <HeroSection />
        <Services />
        {/* <Teams /> */}
        <MyRooms />
        <Tutorial />
      </div>
      <Footer />
    </div>
  );
}
