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
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
