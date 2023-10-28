import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
// import { TbEdit } from "react-icons/tb";
import HeroEditModal from "./HeroEditModal";

export default function Hero() {
  const [heroes, setHeroes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedHero, setSelectedHero] = useState([]);

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

  const handleClick = (heroId) => {
    setHeroId(heroId);
    setShowModal(true);
  };

  const handleCheckboxChange = (heroId) => {
    if (selectedHero.includes(heroId)) {
      setSelectedHero(selectedHero.filter((id) => id !== heroId));
    } else {
      setSelectedHero([...selectedHero, heroId]);
    }
  };

  const handleEditSelected = () => {
    setShowModal(true);
  };

  const handleMasterCheckboxChange = () => {
    if (selectedHero.length === heroes.length) {
      setSelectedHero([]);
    } else {
      setSelectedHero(heroes.map((hero) => hero._id));
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center px-4">
                    <button
                      onClick={handleEditSelected}
                      className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Duzenle
                    </button>
                    {showModal && (
                      <HeroEditModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        heroId={selectedHero}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-full mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                            <th scope="col" className="p-4 w-[10px]">
                              <div className="flex items-center">
                                <input
                                  id="checkbox-all"
                                  type="checkbox"
                                  onChange={handleMasterCheckboxChange}
                                  checked={
                                    selectedHero.length ===
                                    heroes.length
                                  }
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="sr-only">checkbox</label>
                              </div>
                            </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left uppercase"
                              >
                                Iletisim Başlığı
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left uppercase"
                              >
                                Iletisim Bilgisi
                              </th>
                            </tr>
                          </thead>
                          {heroes.map((hero, index) => (
                            <tbody key={index} className="bg-slate-600 ">
                              <tr className="hover:bg-slate-500">
                              <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    id={`heroCheckbox-${hero._id}`}
                                    onChange={() =>
                                      handleCheckboxChange(hero._id)
                                    }
                                    checked={selectedHero.includes(hero._id)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">{hero.mainText}</p>
                                  </div>
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs pr-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">{hero.subText}</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
