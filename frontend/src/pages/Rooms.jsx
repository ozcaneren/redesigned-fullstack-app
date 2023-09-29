import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();


  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/rooms");
      setRooms(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="">
      <Header />
      <div className="bg-gray-300 h-full mt-14">
        {rooms.map((room, index) => (
          <Card key={index} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img className="w-[352px] h-[216px]" src={"https://picsum.photos/500"} alt="card" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {room.title}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => handleCardClick(room._id)}>Detaylar</Button>
          </CardFooter>
        </Card>
        ))}
      </div>
      <Divide />
      <Footer />
    </div>
  );
}
