import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

export default function Home() {
  const getRooms = async () => {
    const { data } = await axios.get("http://localhost:4000/api/rooms");
    console.log(data);
  };

  useEffect(() => {
    getRooms();
  }, []);

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
