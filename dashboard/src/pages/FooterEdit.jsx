import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function FooterEdit() {
  const [footer, setFooter] = useState([]);
  const { footerId } = useParams();

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
    { url: `/footer/${footerId}/edit`, label: "Düzenle" },
  ];

  const getFooter = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/footer/${footerId}`
      );
      setFooter(response.data.data);
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  }, [footerId]);

  useEffect(() => {
    getFooter();
  }, [getFooter]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/footer/${footerId}`, footer);
      navigate("/footer");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooter((prev) => ({
      ...prev,
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
                    <div className="flex justify-center items-center space-x-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerMainTitle"
                            >
                              Footer Ana Baslik
                            </label>
                            <input
                              type="text"
                              name="footerMainTitle"
                              id="footerMainTitle"
                              value={footer.footerMainTitle}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                          <div className="mt-4">
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerMainTitle_en"
                            >
                              Footer Ana Baslik_en
                            </label>
                            <input
                              type="text"
                              name="footerMainTitle_en"
                              id="footerMainTitle_en"
                              value={footer.footerMainTitle_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerMainText"
                            >
                              Footer Ana Yazi
                            </label>
                            <input
                              type="text"
                              name="footerMainText"
                              id="footerMainText"
                              value={footer.footerMainText}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                          <div className="mt-4">
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerMainText_en"
                            >
                              Footer Ana Yazi_en
                            </label>
                            <input
                              type="text"
                              name="footerMainText_en"
                              id="footerMainText_en"
                              value={footer.footerMainText_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center flex-row flex-wrap items-center space-x-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerIcon"
                            >
                              Footer Icon (kucuk harfler)
                            </label>
                            <input
                              type="text"
                              name="footerIcon"
                              id="footerIcon"
                              value={footer.footerIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerIcon1"
                            >
                              Footer Icon1 (kucuk harfler)
                            </label>
                            <input
                              type="text"
                              name="footerIcon1"
                              id="footerIcon1"
                              value={footer.footerIcon1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerIcon2"
                            >
                              Footer Icon2 (kucuk harfler)
                            </label>
                            <input
                              type="text"
                              name="footerIcon2"
                              id="footerIcon2"
                              value={footer.footerIcon2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerIcon3"
                            >
                              Footer Icon3 (kucuk harfler)
                            </label>
                            <input
                              type="text"
                              name="footerIcon3"
                              id="footerIcon3"
                              value={footer.footerIcon3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="footerIcon4"
                            >
                              Footer Icon4 (kucuk harfler)
                            </label>
                            <input
                              type="text"
                              name="footerIcon4"
                              id="footerIcon4"
                              value={footer.footerIcon4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle"
                              >
                                Footer Title
                              </label>
                              <input
                                type="text"
                                name="footerTitle"
                                id="footerTitle"
                                value={footer.footerTitle}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle_en"
                              >
                                Footer Title_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle_en"
                                id="footerTitle_en"
                                value={footer.footerTitle_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink"
                              >
                                Footer Title Link
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink"
                                id="footerTitleLink"
                                value={footer.footerTitleLink}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink_en"
                              >
                                Footer Title Link_en
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink_en"
                                id="footerTitleLink_en"
                                value={footer.footerTitleLink_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink1"
                              >
                                Footer Title Link1
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink1"
                                id="footerTitleLink1"
                                value={footer.footerTitleLink1}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink1_en"
                              >
                                Footer Title Link1_en
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink1_en"
                                id="footerTitleLink1_en"
                                value={footer.footerTitleLink1_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink2"
                              >
                                Footer Title Link2
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink2"
                                id="footerTitleLink2"
                                value={footer.footerTitleLink2}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink2_en"
                              >
                                Footer Title Link2_en
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink2_en"
                                id="footerTitleLink2_en"
                                value={footer.footerTitleLink2_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink"
                              >
                                Footer Title Link3
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink3"
                                id="footerTitleLink3"
                                value={footer.footerTitleLink3}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink3_en"
                              >
                                Footer Title Link3_en
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink3_en"
                                id="footerTitleLink3_en"
                                value={footer.footerTitleLink3_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink4"
                              >
                                Footer Title Link4
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink4"
                                id="footerTitleLink4"
                                value={footer.footerTitleLink4}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink4_en"
                              >
                                Footer Title Link4_en
                              </label>
                              <input
                                type="text"
                                name="footerTitleLink4_en"
                                id="footerTitleLink4_en"
                                value={footer.footerTitleLink4_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle"
                              >
                                Footer Title1
                              </label>
                              <input
                                type="text"
                                name="footerTitle1"
                                id="footerTitle1"
                                value={footer.footerTitle1}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1_en"
                              >
                                Footer Title1_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1_en"
                                id="footerTitle1_en"
                                value={footer.footerTitle1_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link"
                              >
                                Footer Title1 Link
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link"
                                id="footerTitle1Link"
                                value={footer.footerTitle1Link}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink_en"
                              >
                                Footer Title1 Link_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link_en"
                                id="footerTitle1Link_en"
                                value={footer.footerTitle1Link_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink1"
                              >
                                Footer Title1 Link1
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link1"
                                id="footerTitle1Link1"
                                value={footer.footerTitle1Link1}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink1_en"
                              >
                                Footer Title1 Link1_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link1_en"
                                id="footerTitle1Link1_en"
                                value={footer.footerTitle1Link1_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink2"
                              >
                                Footer Title1 Link2
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link2"
                                id="footerTitle1Link2"
                                value={footer.footerTitle1Link2}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link2_en"
                              >
                                Footer Title1 Link2_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link2_en"
                                id="footerTitle1Link2_en"
                                value={footer.footerTitle1Link2_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link"
                              >
                                Footer Title1 Link3
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link3"
                                id="footerTitle1Link3"
                                value={footer.footerTitle1Link3}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link3_en"
                              >
                                Footer Title1 Link3_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link3_en"
                                id="footerTitle1Link3_en"
                                value={footer.footerTitle1Link3_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link4"
                              >
                                Footer Title1 Link4
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link4"
                                id="footerTitle1Link4"
                                value={footer.footerTitle1Link4}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle1Link4_en"
                              >
                                Footer Title1 Link4_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle1Link4_en"
                                id="footerTitle1Link4_en"
                                value={footer.footerTitle1Link4_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2"
                              >
                                Footer Title2
                              </label>
                              <input
                                type="text"
                                name="footerTitle2"
                                id="footerTitle2"
                                value={footer.footerTitle2}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2_en"
                              >
                                Footer Title2_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2_en"
                                id="footerTitle2_en"
                                value={footer.footerTitle2_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link"
                              >
                                Footer Title2 Link
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link"
                                id="footerTitle2Link"
                                value={footer.footerTitle2Link}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link_en"
                              >
                                Footer Title2 Link_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link_en"
                                id="footerTitle2Link_en"
                                value={footer.footerTitle2Link_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link1"
                              >
                                Footer Title2 Link1
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link1"
                                id="footerTitle2Link1"
                                value={footer.footerTitle2Link1}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink1_en"
                              >
                                Footer Title2 Link1_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link1_en"
                                id="footerTitle2Link1_en"
                                value={footer.footerTitle2Link1_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitleLink2"
                              >
                                Footer Title2 Link2
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link2"
                                id="footerTitle2Link2"
                                value={footer.footerTitle2Link2}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link2_en"
                              >
                                Footer Title2 Link2_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link2_en"
                                id="footerTitle2Link2_en"
                                value={footer.footerTitle2Link2_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link3"
                              >
                                Footer Title2 Link3
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link3"
                                id="footerTitle2Link3"
                                value={footer.footerTitle2Link3}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link3_en"
                              >
                                Footer Title2 Link3_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link3_en"
                                id="footerTitle2Link3_en"
                                value={footer.footerTitle2Link3_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link4"
                              >
                                Footer Title2 Link4
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link4"
                                id="footerTitle2Link4"
                                value={footer.footerTitle2Link4}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle2Link4_en"
                              >
                                Footer Title2 Link4_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle2Link4_en"
                                id="footerTitle2Link4_en"
                                value={footer.footerTitle2Link4_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <div>
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3"
                              >
                                Footer Title3
                              </label>
                              <input
                                type="text"
                                name="footerTitle3"
                                id="footerTitle3"
                                value={footer.footerTitle3}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3_en"
                              >
                                Footer Title3_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3_en"
                                id="footerTitle3_en"
                                value={footer.footerTitle3_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <div>
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link"
                              >
                                Footer Title3 Link
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link"
                                id="footerTitle3Link"
                                value={footer.footerTitle3Link}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link_en"
                              >
                                Footer Title3 Link_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link_en"
                                id="footerTitle3Link_en"
                                value={footer.footerTitle3Link_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link1"
                              >
                                Footer Title3 Link1
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link1"
                                id="footerTitle3Link1"
                                value={footer.footerTitle3Link1}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link1_en"
                              >
                                Footer Title3 Link1_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link1_en"
                                id="footerTitle3Link1_en"
                                value={footer.footerTitle3Link1_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link2"
                              >
                                Footer Title3 Link2
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link2"
                                id="footerTitle3Link2"
                                value={footer.footerTitle3Link2}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link2_en"
                              >
                                Footer Title3 Link2_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link2_en"
                                id="footerTitle3Link2_en"
                                value={footer.footerTitle3Link2_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link3"
                              >
                                Footer Title3 Link3
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link3"
                                id="footerTitle3Link3"
                                value={footer.footerTitle3Link3}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link3_en"
                              >
                                Footer Title3 Link3_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link3_en"
                                id="footerTitle3Link3_en"
                                value={footer.footerTitle3Link3_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link4"
                              >
                                Footer Title3 Link4
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link4"
                                id="footerTitle3Link4"
                                value={footer.footerTitle3Link4}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
                            <div className="mt-4">
                              <label
                                className="block text-sm font-medium text-gray-200"
                                htmlFor="footerTitle3Link4_en"
                              >
                                Footer Title3 Link4_en
                              </label>
                              <input
                                type="text"
                                name="footerTitle3Link4_en"
                                id="footerTitle3Link4_en"
                                value={footer.footerTitle3Link4_en}
                                onChange={handleChange}
                                className="mt-1 p-2 rounded-sm w-full"
                              />
                            </div>
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
