import Sidebar from "../components/Sidebar";
import Sidebarr from "../components/Sidebarr";

function Home() {
  return (
    <div>
      <Sidebarr />
      <Sidebar />
      <div className="w-[1665px] ml-[255px] h-screen bg-gray-100 pt-20 px-10">
        <div className="grid grid-cols-4 gap-y-8">
        <div className="w-[380px] h-[160px] bg-gray-300"></div>
        <div className="w-[380px] h-[160px] bg-gray-300"></div>
        <div className="w-[380px] h-[160px] bg-gray-300"></div>
        <div className="w-[380px] h-[160px] bg-gray-300"></div>
        <div className="w-[510px] h-[160px] bg-gray-300"></div>
        <div className="w-[510px] h-[160px] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
