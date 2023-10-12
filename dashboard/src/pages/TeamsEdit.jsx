import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useParams, useNavigate } from "react-router-dom";

export default function TeamsEdit() {
  const { teamsId } = useParams();

  const [team, setTeam] = useState([]);
  
  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/teams", label: "Ekip" },
    { url: `/teams/${teamsId}/edit`, label: "Ekip Düzenle" },
  ];

  const getTeam = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/team/${teamsId}`
      );
      setTeam(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }, [teamsId]);

  useEffect(() => {
    getTeam();
  }, [getTeam, teamsId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/team/${teamsId}`, {
        ...team,
      });
      navigate("/teams");
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
        <div className="pt-8 pb-4 px-4">
          <div className="w-4/12">
            <div className="">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-center rounded-sm bg-zinc-800">
              <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                <div className="mx-auto mt-4">
                  <form onSubmit={handleUpdate} className="">
                    <div className="flex flex-row justify-center mx-auto w-[1000px] space-x-4 border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                      <div className="mb-4">
                        <div>
                          <label
                            htmlFor="mainTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik
                          </label>
                          <input
                            type="text"
                            name="mainTitle"
                            id="mainTitle"
                            value={team.mainTitle}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="mainTitle_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik_en
                          </label>
                          <input
                            type="text"
                            name="mainTitle_en"
                            id="mainTitle_en"
                            value={team.mainTitle_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div>
                          <label
                            htmlFor="mainTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Alt Baslik
                          </label>
                          <input
                            type="text"
                            name="mainText"
                            id="mainText"
                            value={team.mainText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="mainTitle_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik_en
                          </label>
                          <input
                            type="text"
                            name="mainTitle_en"
                            id="mainTitle_en"
                            value={team.mainTitle_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center flex-row flex-wrap items-center gap-x-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={team.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle"
                            >
                              Ekip Üyesi Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle"
                              id="cardTitle"
                              value={team.cardTitle}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText"
                            >
                              Ekip Üyesi Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText"
                              id="cardText"
                              value={team.cardText}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon1"
                            >
                              Ekip Uyesi 1 Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon1"
                              id="cardIcon1"
                              value={team.cardIcon1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle"
                            >
                              Ekip Üyesi 1 Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle1"
                              id="cardTitle1"
                              value={team.cardTitle1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText1"
                            >
                              Ekip Üyesi 1 Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText1"
                              id="cardText1"
                              value={team.cardText1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon2"
                            >
                              Ekip Üyesi 2 Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon2"
                              id="cardIcon2"
                              value={team.cardIcon2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle2"
                            >
                              Ekip Üyesi 2 Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle2"
                              id="cardTitle2"
                              value={team.cardTitle2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText2"
                            >
                              Ekip Üyesi 2 Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText2"
                              id="cardText2"
                              value={team.cardText2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon3"
                            >
                              Ekip Üyesi 3 Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon3"
                              id="cardIcon3"
                              value={team.cardIcon3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle3"
                            >
                              Ekip Üyesi 3 Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle3"
                              id="cardTitle3"
                              value={team.cardTitle3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText3"
                            >
                              Ekip Üyesi 3 Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText3"
                              id="cardText3"
                              value={team.cardText3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon4"
                            >
                              Ekip Üyesi 4 Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon4"
                              id="cardIcon4"
                              value={team.cardIcon4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle"
                            >
                              Ekip Üyesi 4 Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle4"
                              id="cardTitle4"
                              value={team.cardTitle4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText4"
                            >
                              Ekip Üyesi 4 Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText4"
                              id="cardText4"
                              value={team.cardText4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon5"
                            >
                              Ekip Üyesi 5 Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon5"
                              id="cardIcon5"
                              value={team.cardIcon5}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle5"
                            >
                              Ekip Üyesi 5 Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle5"
                              id="cardTitle5"
                              value={team.cardTitle5}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText5"
                            >
                              Ekip Üyesi 5 Rolu
                            </label>
                            <input
                              type="text"
                              name="cardText5"
                              id="cardText5"
                              value={team.cardText5}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={() => navigate("/about")}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        İptal
                      </button>
                      <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Kaydet
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
