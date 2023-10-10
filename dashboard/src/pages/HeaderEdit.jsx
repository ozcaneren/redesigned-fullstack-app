import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function HeaderEdit() {
  const { headerId } = useParams();

  const [header, setHeader] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
    { url: `/header/${headerId}/edit`, label: "Header Düzenle" },
  ];

  const getHeader = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/header/${headerId}`
      );
      setHeader(response.data.data);
    } catch (error) {
      console.error("Error fetching header:", error);
    }
  }, [headerId]);

  useEffect(() => {
    getHeader();
  }, [getHeader]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/header/${headerId}`, header);
      navigate("/header");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeader((prevState) => ({
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
                  <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Baslik
                          </label>
                          <input
                            type="text"
                            name="headerTitle"
                            id="headerTitle"
                            value={header.headerTitle}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 1
                          </label>
                          <input
                            type="text"
                            name="headerText"
                            id="headerText"
                            value={header.headerText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 2
                          </label>
                          <input
                            type="text"
                            name="headerText1"
                            id="headerText1"
                            value={header.headerText1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 3
                          </label>
                          <input
                            type="text"
                            name="headerText2"
                            id="headerText2"
                            value={header.headerText2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText3"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 4
                          </label>
                          <input
                            type="text"
                            name="headerText3"
                            id="headerText3"
                            value={header.headerText3}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText4"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 5
                          </label>
                          <input
                            type="text"
                            name="headerText4"
                            id="headerText4"
                            value={header.headerText4}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerText5"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Link 6
                          </label>
                          <input
                            type="text"
                            name="headerText5"
                            id="headerText5"
                            value={header.headerText5}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerDrowdown"
                            className="block text-sm font-medium text-gray-200"
                          >
                            headerDropdown
                          </label>
                          <input
                            type="text"
                            name="headerDropdown"
                            id="headerDropdown"
                            value={header.headerDropdown}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerDrowdown"
                            className="block text-sm font-medium text-gray-200"
                          >
                            headerDropdown1
                          </label>
                          <input
                            type="text"
                            name="headerDropdown1"
                            id="headerDropdown1"
                            value={header.headerDropdown1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerDrowdown"
                            className="block text-sm font-medium text-gray-200"
                          >
                            headerDropdown2
                          </label>
                          <input
                            type="text"
                            name="headerDropdown2"
                            id="headerDropdown2"
                            value={header.headerDropdown2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="headerDrowdown3"
                            className="block text-sm font-medium text-gray-200"
                          >
                            headerDropdown3
                          </label>
                          <input
                            type="text"
                            name="headerDropdown3"
                            id="headerDropdown3"
                            value={header.headerDropdown3}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
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
