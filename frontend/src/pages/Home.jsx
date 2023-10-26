import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Teams from "../components/Teams";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div>
        <HeroSection />
        <Services />
        <Teams />
      </div>
      <Footer />
    </div>
  );
}
