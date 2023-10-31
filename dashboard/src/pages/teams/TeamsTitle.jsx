import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import TeamsEditTitleModal from "./TeamsEditTitleModal.jsx";
import Layout from "../layout";

export default function TeamsTitle() {
  const [teamDescription, setTeamDescription] = useState([]);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/teams", label: "Ekip" },
    { url: "/teams/title", label: "Başlık" },
  ];

  const getTeamDescription = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/teams/descriptions"
      );
      setTeamDescription(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeamDescription();
  }, []);

  const handleTitleCheckboxChange = (teamsId) => {
    if (selectedTitles.includes(teamsId)) {
      setSelectedTitles(selectedTitles.filter((id) => id !== teamsId));
    } else {
      setSelectedTitles([...selectedTitles, teamsId]);
    }
  };

  const handleTitleEditSelected = () => {
    setShowTitleModal(true);
  };

  const handleTitleMasterCheckboxChange = () => {
    if (selectedTitles.length === teamDescription.length) {
      setSelectedTitles([]);
    } else {
      setSelectedTitles(teamDescription.map((desc) => desc._id));
    }
  };

  return (
    <Layout>
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-3/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded border border-gray-200/70 pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <div className="ml-auto mr-4">
                        <button
                          onClick={handleTitleEditSelected}
                          className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Düzenle
                        </button>
                        {showTitleModal && (
                          <TeamsEditTitleModal
                            showTitleModal={showTitleModal}
                            setShowTitleModal={setShowTitleModal}
                            teamsId={selectedTitles}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-full mx-auto px-4 pt-2">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th scope="col" className="p-4 w-[48px]">
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    onChange={handleTitleMasterCheckboxChange}
                                    checked={
                                      selectedTitles.length ===
                                      teamDescription.length
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label className="sr-only">checkbox</label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 font-medium tracking-wider text-left"
                              >
                                Ana Baslik
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 font-medium tracking-wider text-left"
                              >
                                Alt Baslik
                              </th>
                            </tr>
                          </thead>
                          {teamDescription.map((desc, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-gray-500">
                                <td className="px-4 py-5 flex items-center w-[48px] h-[48px]">
                                  <input
                                    type="checkbox"
                                    id={`teamDescCheckbox-${desc._id}`}
                                    onChange={() =>
                                      handleTitleCheckboxChange(desc._id)
                                    }
                                    checked={selectedTitles.includes(desc._id)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                </td>
                                <td className="py-3 w-[140px]">
                                  <div className="max-w-xs flex items-center px-6 font-medium text-gray-200 truncate">
                                    {desc.mainTitle}
                                  </div>
                                </td>
                                <td className="py-3">
                                  <div className="max-w-xs flex items-center px-6 font-medium text-gray-200 truncate">
                                    {desc.mainText}
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
    </Layout>
  );
}
