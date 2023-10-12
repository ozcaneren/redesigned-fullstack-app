import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/teams", label: "Ekip" },
  ];

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/teams");
      setTeams(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const handleClick = (id) => {
    navigate(`/teams/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
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
                  <div>
                    {teams.map((team, index) => (
                      <div key={index}>
                        <div className="flex justify-center items-center">
                          <div className="w-full flex justify-center">
                            <div className="w-full px-4 relative space-x-2">
                              <button
                                onClick={() => handleClick(team._id)}
                                className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                              >
                                Ekip Bilgilerini Düzenle
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center w-full mb-4">
                          <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                            <h1 className="text-center text-gray-300">
                              Ana Başlık
                            </h1>
                            <h1 className="text-center text-lg">
                              {team.mainTitle}
                            </h1>
                          </div>
                        </div>
                        <div className="flex justify-center w-full mb-4">
                          <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                            <h1 className="text-center text-gray-300">
                              Alt Başlık
                            </h1>
                            <h1 className="text-center text-lg">
                              {team.mainText}
                            </h1>
                          </div>
                        </div>
                        <div className="container xl:max-w-6xl mx-auto px-4">
                          <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi
                              </h1>
                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon ? (
                                    <img
                                      src={team.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi 1
                              </h1>
                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon1 ? (
                                    <img
                                      src={team.cardIcon1}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle1 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle1}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText1 ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText1}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi 2
                              </h1>

                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon2 ? (
                                    <img
                                      src={team.cardIcon2}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle2 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle2}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText2 ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText2}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi 3
                              </h1>

                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon3 ? (
                                    <img
                                      src={team.cardIcon3}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle3 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle3}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText3 ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText3}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi 4
                              </h1>

                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon4 ? (
                                    <img
                                      src={team.cardIcon4}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle4 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle4}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText4 ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText4}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Ekip Uyesi 5
                              </h1>

                              <div className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="relative overflow-hidden px-6">
                                  {team.cardIcon5 ? (
                                    <img
                                      src={team.cardIcon5}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                                <div className="pt-6 text-center">
                                  {team.cardTitle5 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {team.cardTitle5}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[200px] flex items-center justify-center">
                                      Ekip üyesi eklenmedi.
                                    </p>
                                  )}
                                  {team.cardText5 ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {team.cardText5}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
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
    </div>
  );
}
