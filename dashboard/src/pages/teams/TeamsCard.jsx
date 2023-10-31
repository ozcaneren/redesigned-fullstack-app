import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import TeamsAddMemberModal from "./TeamsAddMemberModal.jsx";
import TeamsEditMemberModal from "./TeamsEditMemberModal.jsx";
import Layout from "../layout";

export default function TeamsCard() {
  const [teamMember, setTeamMember] = useState([]);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/teams", label: "Ekip" },
    { url: "/teams/card", label: "Calisanlar" },
  ];

  const getTeamMembers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/teams/members"
      );
      setTeamMember(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  const handleDeleteMember = async (teamsId) => {
    try {
      await axios.delete(`http://localhost:4000/api/teams/members/${teamsId}`);
      getTeamMembers();
    } catch (error) {
      console.error("Error deleting teams:", error);
    }
  };

  const handleDeleteMemberSelected = () => {
    selectedMembers.map((teamsId) => handleDeleteMember(teamsId));
  };

  const handleMemberCheckboxChange = (teamsId) => {
    if (selectedMembers.includes(teamsId)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== teamsId));
    } else {
      setSelectedMembers([...selectedMembers, teamsId]);
    }
  };

  const handleMemberEditSelected = () => {
    setShowMemberModal(true);
  };

  const handleMemberMasterCheckboxChange = () => {
    if (selectedMembers.length === teamMember.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(teamMember.map((member) => member._id));
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
            <div className="">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <TeamsAddMemberModal />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleMemberEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showMemberModal && (
                        <TeamsEditMemberModal
                          showMemberModal={showMemberModal}
                          setShowMemberModal={setShowMemberModal}
                          teamsId={selectedMembers}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleDeleteMemberSelected}
                        className="px-5 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-full mx-auto px-4 pt-2">
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
                                    onChange={handleMemberMasterCheckboxChange}
                                    checked={
                                      selectedMembers.length ===
                                      teamMember.length
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
                                Resim
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 font-medium tracking-wider text-left"
                              >
                                Ad Soyad
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 font-medium tracking-wider text-left"
                              >
                                Rol
                              </th>
                            </tr>
                          </thead>
                          {teamMember.map((member, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-gray-500">
                                <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    id={`teamMemberCheckbox-${member._id}`}
                                    onChange={() =>
                                      handleMemberCheckboxChange(member._id)
                                    }
                                    checked={selectedMembers.includes(
                                      member._id
                                    )}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                </td>
                                <td className="py-3 w-[140px]">
                                  <div className="max-w-xs flex items-center px-6 font-medium text-gray-200 truncate">
                                    <img
                                      className="w-10 h-10 object-cover rounded-full"
                                      src={member.cardIcon}
                                      alt=""
                                    />
                                  </div>
                                </td>
                                <td className="w-[330px]">
                                  <div className="max-w-xs flex items-center px-6 font-medium text-gray-200 truncate">
                                    {member.cardTitle}
                                  </div>
                                </td>
                                <td className="">
                                  <div className="max-w-xs flex items-center px-6 font-medium text-gray-200 truncate">
                                    {member.cardText}
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
    </Layout>
  );
}
