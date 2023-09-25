import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Room from "./pages/Room";
import RoomEdit from './pages/RoomEdit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/room/:roomId/edit' element={<RoomEdit/>} />
      </Routes>
    </>
  );
}

export default App;
