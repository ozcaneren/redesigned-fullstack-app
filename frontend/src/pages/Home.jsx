import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-gray-300">
        <div className="pt-72">
          <h1 className="text-4xl text-center">
            Welcome to <span className="text-blue-500">Hotel Booking</span>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
