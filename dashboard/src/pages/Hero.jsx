import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [heroes, setHeroes] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/hero", label: "Hero" },
  ];

  const getHeroes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/heroes");
      setHeroes(response.data.data);
    } catch (error) {
      console.error("Error fetching heros:", error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const handleClick = (id) => {
    navigate(`/hero/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Sidebar />
        <div className="ml-14   mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div>
                <div>
                  {heroes.map((hero, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(hero._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center text-2xl mb-4">
                        Turkce Hakkimizda Verileri
                      </h1>
                      <div className="flex justify-center items-center space-x-4">
                        <div className="w-[350px] bg-zinc-600 h-[200px] rounded-lg">
                          <div className="flex justify-center items-center h-full">
                            <span className="text-white">{hero.mainText}</span>
                          </div>
                        </div>
                        <div className="w-[350px] bg-zinc-600 h-[200px] rounded-lg">
                          <div className="flex justify-center items-center h-full">
                            <span className="text-white">{hero.subText}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
