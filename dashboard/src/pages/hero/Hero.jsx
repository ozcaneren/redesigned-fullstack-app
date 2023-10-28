import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
// import { TbEdit } from "react-icons/tb";
import HeroEditModal from "./HeroEditModal";

export default function Hero() {
  const [heroes, setHeroes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [heroId, setHeroId] = useState();

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
              <div>
                <div className="max-w-full mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Iletisim Başlığı
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Iletisim Bilgisi
                              </th>
                              <th
                                scope="col"
                                className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                              >
                                Islemler
                              </th>
                            </tr>
                          </thead>
                          {heroes.map((hero, index) => (
                            <tbody key={index} className="bg-slate-600 ">
                              <tr className="hover:bg-slate-500">
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">{hero.mainText}</p>
                                  </div>
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">{hero.subText}</p>
                                  </div>
                                </td>
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap">
                                  <button
                                    onClick={() => handleClick(hero._id)}
                                    className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    Hero Duzenle
                                  </button>
                                  {showModal ? (
                                    <HeroEditModal
                                      showModal={showModal}
                                      setShowModal={setShowModal}
                                      heroId={heroId}
                                    />
                                  ) : null}
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
