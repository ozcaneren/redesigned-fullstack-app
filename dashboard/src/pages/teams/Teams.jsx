import {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import {useNavigate} from "react-router-dom";
import TeamsAddMemberModal from "./TeamsAddMemberModal.jsx";
import {TbEdit} from "react-icons/tb";
import TeamsEditMemberModal from "./TeamsEditMemberModal.jsx";
import TeamsEditTitleModal from "./TeamsEditTitleModal.jsx";

export default function Teams() {
  const [teamMember, setTeamMember] = useState([]);
  const [teamDescription, setTeamDescription] = useState([]);
  const navigate = useNavigate();
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [teamsId, setTeamsId] = useState("");

  const breadcrumbPaths = [
    {url: "/", label: "Ana Sayfa"},
    {url: "/teams", label: "Ekip"},
  ];

  const getTeamMembers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/teams/members");
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
      const response = await axios.get("http://localhost:4000/api/teams/descriptions");
      setTeamDescription(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }

  useEffect(() => {
    getTeamDescription();
  }, []);

  const handleMemberEdit = (teamsId) => {
    setTeamsId(teamsId);
    setShowMemberModal(true);
  }

  const handleTitleEdit = (teamsId) => {
    setTeamsId(teamsId);
    setShowTitleModal(true);
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar/>
        <div className="ml-14   mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths}/>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] rounded border border-gray-200/70 pt-4 pb-4">
              <div>
                <div>
                  <div>
                    <div>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <TeamsAddMemberModal/>
                          </div>
                        </div>
                      </div>
                      {teamDescription.map((desc, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full mb-4">
                            <div
                              className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                              <h1 className="text-center text-gray-300">
                                Ana Başlık
                              </h1>
                              <h1 className="text-center text-lg">
                                {desc.mainText}
                              </h1>
                            </div>
                          </div>
                          <div className="flex justify-center w-full mb-4">
                            <div
                              className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                              <h1 className="text-center text-gray-300">
                                Alt Başlık
                              </h1>
                              <h1 className="text-center text-lg">
                                {desc.mainTitle}
                              </h1>
                            </div>
                          </div>
                          <button
                            onClick={() => handleTitleEdit(desc._id)}
                          >
                            <div className="font-medium mt-1 text-cyan-500 hover:underline">
                              <TbEdit/>
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
                      ))}

                      {teamMember.map((member, index) => (
                        <div key={index} className="container xl:max-w-6xl mx-auto px-4">
                          <div className="max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                            <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                              Ekip Uyesi
                            </h1>
                            <div
                              className="relative py-2 w-[240px] h-[258px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                              <div className="relative overflow-hidden px-6">
                                {member.cardIcon} image url
                              </div>
                              <div className="pt-6 text-center">
                                <h5 className="text-lg font-bold">{member.cardTitle} uye adi</h5>
                                <p className="text-base text-gray-200">{member.cardText} uye rolu</p>
                              </div>
                              <button
                                onClick={() => handleMemberEdit(member._id)}
                              >
                                <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                  <TbEdit/>
                                </div>
                              </button>
                              {showMemberModal && (
                                <TeamsEditMemberModal
                                  showMemberModal={showMemberModal}
                                  setShowMemberModal={setShowMemberModal}
                                  teamsId={teamsId}
                                />
                              )}
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
    </div>
  );
}
