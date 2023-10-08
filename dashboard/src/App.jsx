import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Room from "./pages/Room";
import RoomEdit from './pages/RoomEdit';
import EnglishRoomEdit from './pages/EnglishRoomEdit';
import RoomAdd from './pages/RoomAdd';
import Feature from './pages/Feature';
import FeatureAdd from './pages/FeatureAdd';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/room/add' element={<RoomAdd/>} />
        <Route path='/room/turkish/:roomId/edit' element={<RoomEdit/>} />
        <Route path='/room/english/:roomId/edit/' element={<EnglishRoomEdit/>} />
        <Route path='/room/feature' element={<Feature/>} />
        <Route path='/room/feature/add' element={<FeatureAdd/>} />
      </Routes>
    </>
  );
}

export default App;
