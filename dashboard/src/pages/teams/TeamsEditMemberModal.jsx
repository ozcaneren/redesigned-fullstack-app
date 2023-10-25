import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import PropTypes from "prop-types";

const TeamsEditMemberModal = ({
  teamsId, showMemberModal, setShowMemberModal }) => {
  TeamsEditMemberModal.propTypes = {
    teamsId: PropTypes.string,
    showMemberModal: PropTypes.bool,
    setShowMemberModal: PropTypes.func,
  };
  const [teams, setTeams] = useState({});

  const fetchTeamsById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/teams/members/${teamsId}`
      );
      setTeams(response.data);
    } catch (error) {
      console.error("Teams getirilirken hata oluştu:", error);
    }
  }, [teamsId]);

  useEffect(() => {
    fetchTeamsById();
  }, [fetchTeamsById, teamsId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/teams/members/${teamsId}`, {
        ...teams,
      });
      setShowMemberModal(false);
    } catch (error) {
      console.error("Teams güncellenirken hata oluştu:", error);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTeams((prevTeams) => ({
      ...prevTeams,
      [name]: value,
    }));
  }

  return (
    <>
      {showMemberModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">
                    Ekip Uyesi Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowMemberModal(false)}
                  >
                    <span
                      className="text-modalMainText h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-base leading-relaxed text-modalMainText">
                    <div className="mb-4">
                      <label className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        name="cardTitle"
                        value={teams.cardTitle}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        Rol
                      </label>
                      <input
                        type="text"
                        name="cardText"
                        value={teams.cardText}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        Resim
                      </label>
                      <input
                        type="text"
                        name="cardIcon"
                        value={teams.cardIcon}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowMemberModal(false)}
                  >
                    Vazgec
                  </button>
                  <button
                    className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      handleUpdate();
                      setShowMemberModal(false);
                    }}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
};

export default TeamsEditMemberModal;
