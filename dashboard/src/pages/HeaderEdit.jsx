import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function HeaderEdit() {
  const { headerId } = useParams();

  const [header, setHeader] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

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

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  const handleToggle5 = () => {
    setToggle5(!toggle5);
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
                    <div className="flex justify-center items-center">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
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
                          <div className="mt-4">
                            <label
                              htmlFor="headerTitle"
                              className="block text-sm font-medium text-gray-200"
                            >
                              Baslik_en
                            </label>
                            <input
                              type="text"
                              name="headerTitle_en"
                              id="headerTitle_en"
                              value={header.headerTitle_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText_en"
                                  id="headerText_en"
                                  value={header.headerText_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText_en"
                                  id="headerText_en"
                                  value={header.headerText_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown"
                                    id="headerTextDropdown"
                                    value={header.headerTextDropdown}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown_en
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown_en"
                                    id="headerTextDropdown_en"
                                    value={header.headerTextDropdown_en}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown 1
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown1"
                                    id="headerTextDropdown1"
                                    value={header.headerTextDropdown1}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown_en 1
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown1_en"
                                    id="headerTextDropdown1_en"
                                    value={header.headerTextDropdown1_en}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown 2
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown2"
                                    id="headerTextDropdown2"
                                    value={header.headerTextDropdown2}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown_en 2
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown2_en"
                                    id="headerTextDropdown2_en"
                                    value={header.headerTextDropdown2_en}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown 3
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown3"
                                    id="headerTextDropdown3"
                                    value={header.headerTextDropdown3}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                                <div className="mt-4">
                                  <label
                                    htmlFor="headerText"
                                    className="block text-sm font-medium text-gray-200"
                                  >
                                    Link 1 Dropdown_en 3
                                  </label>
                                  <input
                                    type="text"
                                    name="headerTextDropdown3_en"
                                    id="headerTextDropdown3_en"
                                    value={header.headerTextDropdown3_en}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle1 ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle1}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle1
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText1"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 2_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText1_en"
                                  id="headerText1_en"
                                  value={header.headerText1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle1}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle1
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText1"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 2_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText1_en"
                                  id="headerText1_en"
                                  value={header.headerText1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown"
                                  id="headerText1Dropdown"
                                  value={header.headerText1Dropdown}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown_en"
                                  id="headerText1Dropdown_en"
                                  value={header.headerText1Dropdown_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown1"
                                  id="headerText1Dropdown1"
                                  value={header.headerText1Dropdown1}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown1_en"
                                  id="headerText1Dropdown1_en"
                                  value={header.headerText1Dropdown1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown2"
                                  id="headerText1Dropdown2"
                                  value={header.headerText1Dropdown2}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown2_en"
                                  id="headerText1Dropdown2_en"
                                  value={header.headerText1Dropdown2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown3"
                                  id="headerText1Dropdown3"
                                  value={header.headerText1Dropdown3}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText1Dropdown3_en"
                                  id="headerText1Dropdown3_en"
                                  value={header.headerText1Dropdown3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle2 ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle2}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle2
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText2"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 3_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText2_en"
                                  id="headerText2_en"
                                  value={header.headerText2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle2}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle2
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText2"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 3_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText2_en"
                                  id="headerText2_en"
                                  value={header.headerText2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown"
                                  id="headerText2Dropdown"
                                  value={header.headerText2Dropdown}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown_en"
                                  id="headerText2Dropdown_en"
                                  value={header.headerText2Dropdown_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown1"
                                  id="headerText2Dropdown1"
                                  value={header.headerText2Dropdown1}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown1_en"
                                  id="headerText2Dropdown1_en"
                                  value={header.headerText2Dropdown1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown2"
                                  id="headerText2Dropdown2"
                                  value={header.headerText2Dropdown2}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown2_en"
                                  id="headerText2Dropdown2_en"
                                  value={header.headerText2Dropdown2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown3"
                                  id="headerText2Dropdown3"
                                  value={header.headerText2Dropdown3}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText2Dropdown3_en"
                                  id="headerText2Dropdown3_en"
                                  value={header.headerText2Dropdown3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle3 ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle3}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle3
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText3_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 4_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText3_en"
                                  id="headerText3_en"
                                  value={header.headerText3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle3}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle3
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText3_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 4_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText3_en"
                                  id="headerText3_en"
                                  value={header.headerText3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown"
                                  id="headerText3Dropdown"
                                  value={header.headerText3Dropdown}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown_en"
                                  id="headerText3Dropdown_en"
                                  value={header.headerText3Dropdown_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown1"
                                  id="headerText3Dropdown1"
                                  value={header.headerText3Dropdown1}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown1_en"
                                  id="headerText3Dropdown1_en"
                                  value={header.headerText3Dropdown1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown2"
                                  id="headerText3Dropdown2"
                                  value={header.headerText3Dropdown2}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown2_en"
                                  id="headerText3Dropdown2_en"
                                  value={header.headerText3Dropdown2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown3"
                                  id="headerText3Dropdown3"
                                  value={header.headerText3Dropdown3}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText3Dropdown3_en"
                                  id="headerText3Dropdown3_en"
                                  value={header.headerText3Dropdown3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle4 ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle4}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle4
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText4_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 5_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText4_en"
                                  id="headerText4_en"
                                  value={header.headerText4_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle4}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle4
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText4_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 5_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText4_en"
                                  id="headerText4_en"
                                  value={header.headerText4_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown"
                                  id="headerText4Dropdown"
                                  value={header.headerText4Dropdown}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown_en"
                                  id="headerText4Dropdown_en"
                                  value={header.headerText4Dropdown_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown1"
                                  id="headerText4Dropdown1"
                                  value={header.headerText4Dropdown1}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown1_en"
                                  id="headerText4Dropdown1_en"
                                  value={header.headerText4Dropdown1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown2"
                                  id="headerText4Dropdown2"
                                  value={header.headerText4Dropdown2}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown2_en"
                                  id="headerText4Dropdown2_en"
                                  value={header.headerText4Dropdown2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown3"
                                  id="headerText4Dropdown3"
                                  value={header.headerText4Dropdown3}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText4Dropdown3_en"
                                  id="headerText4Dropdown3_en"
                                  value={header.headerText4Dropdown3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          {!toggle5 ? (
                            <div>
                              <div className="mb-4">
                                <button
                                  onClick={handleToggle5}
                                  className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                >
                                  {toggle5
                                    ? "Dropdownu Gizle"
                                    : "Dropdownu Goster"}
                                </button>
                              </div>
                              <div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText5_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 6_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText5_en"
                                  id="headerText5_en"
                                  value={header.headerText5_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div>
                                <div className="mb-4">
                                  <button
                                    onClick={handleToggle5}
                                    className="bg-zinc-600 py-2 pr-2 text-white text-sm border border-gray-600 rounded-[6px]"
                                  >
                                    {toggle5
                                      ? "Dropdownu Gizle"
                                      : "Dropdownu Goster"}
                                  </button>
                                </div>
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
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText5_en"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 6_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText5_en"
                                  id="headerText5_en"
                                  value={header.headerText5_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown"
                                  id="headerText5Dropdown"
                                  value={header.headerText5Dropdown}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown_en"
                                  id="headerText5Dropdown_en"
                                  value={header.headerText5Dropdown_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown1"
                                  id="headerText5Dropdown1"
                                  value={header.headerText5Dropdown1}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 1
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown1_en"
                                  id="headerText5Dropdown1_en"
                                  value={header.headerText5Dropdown1_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown2"
                                  id="headerText5Dropdown2"
                                  value={header.headerText5Dropdown2}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 2
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown2_en"
                                  id="headerText5Dropdown2_en"
                                  value={header.headerText5Dropdown2_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown3"
                                  id="headerText5Dropdown3"
                                  value={header.headerText5Dropdown3}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                              <div className="mt-4">
                                <label
                                  htmlFor="headerText"
                                  className="block text-sm font-medium text-gray-200"
                                >
                                  Link 1 Dropdown_en 3
                                </label>
                                <input
                                  type="text"
                                  name="headerText5Dropdown3_en"
                                  id="headerText5Dropdown3_en"
                                  value={header.headerText5Dropdown3_en}
                                  onChange={handleChange}
                                  className="mt-1 p-2 rounded-sm"
                                />
                              </div>
                            </div>
                          )}
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
