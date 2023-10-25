import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import TeamsAddMemberModal from "./TeamsAddMemberModal.jsx";
import { TbEdit } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import TeamsEditMemberModal from "./TeamsEditMemberModal.jsx";
import TeamsEditTitleModal from "./TeamsEditTitleModal.jsx";

export default function Teams() {
  const [teamMember, setTeamMember] = useState([]);
  const [teamDescription, setTeamDescription] = useState([]);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [teamsId, setTeamsId] = useState("");

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/teams", label: "Ekip" },
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

  const handleDeleteMember = async (teamsId) => {
    try {
      await axios.delete(`http://localhost:4000/api/teams/members/${teamsId}`);
      getTeamMembers();
    } catch (error) {
      console.error("Error deleting teams:", error);
    }
  };

  const handleMemberEdit = (teamsId) => {
    setTeamsId(teamsId);
    setShowMemberModal(true);
  };

  const handleTitleEdit = (teamsId) => {
    setTeamsId(teamsId);
    setShowTitleModal(true);
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
            <div className="bg-white rounded border border-gray-200/70 pt-4 pb-4">
              <div>
                <div>
                  <div>
                    <div>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <TeamsAddMemberModal />
                          </div>
                        </div>
                      </div>
                      {teamDescription.map((desc, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full mb-4">
                            <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                              <h1 className="text-center text-gray-300">
                                Ana Başlık
                              </h1>
                              <h1 className="text-center text-lg">
                                {desc.mainText}
                              </h1>
                            </div>
                            <button onClick={() => handleTitleEdit(desc._id)}>
                              <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                <TbEdit />
                              </div>
                            </button>
                            {showTitleModal && (
                              <TeamsEditTitleModal
                                showTitleModal={showTitleModal}
                                setShowTitleModal={setShowTitleModal}
                                teamsId={teamsId}
                              />
                            )}
                          </div>
                          <div className="flex justify-center w-full mb-4">
                            <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                              <h1 className="text-center text-gray-300">
                                Alt Başlık
                              </h1>
                              <h1 className="text-center text-lg">
                                {desc.mainTitle}
                              </h1>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="">
                        <div className="max-w-5xl mx-auto px-4 pt-2">
                          <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                              <div className="overflow-hidden">
                                <table className="min-w-full table-fixed">
                                  <thead className="bg-gray-400 text-white">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase"
                                      >
                                        Resim
                                      </th>
                                      <th
                                        scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase"
                                      >
                                        Ad Soyad
                                      </th>
                                      <th
                                        scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase"
                                      >
                                        Rol
                                      </th>
                                      <th
                                        scope="col"
                                        className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                                      >
                                        Duzenle/Sil
                                      </th>
                                    </tr>
                                  </thead>
                                  {teamMember.map((member, index) => (
                                    <tbody key={index} className="bg-slate-600">
                                      <tr className="hover:bg-gray-500">
                                        <td className="py-3">
                                          <div className="max-w-xs flex items-center px-6 text-sm font-medium text-gray-200 truncate">
                                            <img
                                              className="w-10 h-10 rounded-full"
                                              src={member.cardIcon}
                                              alt=""
                                            />
                                          </div>
                                        </td>
                                        <td className="">
                                          <div className="max-w-xs flex items-center px-6 text-sm font-medium text-gray-200 truncate">
                                            {member.cardTitle}
                                          </div>
                                        </td>
                                        <td className="">
                                          <div className="max-w-xs flex items-center px-6 text-sm font-medium text-gray-200 truncate">
                                            {member.cardText}
                                          </div>
                                        </td>
                                        <td className="flex justify-end py-4 items-center pr-10 space-x-2 font-medium text-gray-200">
                                          <button
                                            onClick={() =>
                                              handleMemberEdit(member._id)
                                            }
                                          >
                                            <div className="font-medium mt-1 text-blue-400 hover:underline">
                                              <TbEdit size={20} />
                                            </div>
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleDeleteMember(member._id)
                                            }
                                          >
                                            <div className="font-medium mt-1 text-red-600 hover:underline">
                                              <HiOutlineTrash size={20} />
                                            </div>
                                          </button>
                                          {showMemberModal && (
                                            <TeamsEditMemberModal
                                              showMemberModal={showMemberModal}
                                              setShowMemberModal={
                                                setShowMemberModal
                                              }
                                              teamsId={teamsId}
                                            />
                                          )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
