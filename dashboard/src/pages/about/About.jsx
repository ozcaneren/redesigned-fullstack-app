import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import AboutModal from "./AboutModal";
import AboutEditModal from "./AboutEditModal";
import { TbEdit } from "react-icons/tb";

export default function About() {
  const [abouts, setAbouts] = useState([]);
  const [aboutId, setAboutId] = useState();
  const [showModal, setShowModal] = useState(false);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/about", label: "Hakkimizda" },
  ];

  const getAbouts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/abouts");
      setAbouts(response.data.data);
    } catch (error) {
      console.error("Error fetching abouts:", error);
    }
  };

  useEffect(() => {
    getAbouts();
  }, []);

  const handleDelete = async (aboutId) => {
    try {
      await axios.delete(`http://localhost:4000/api/about/${aboutId}`);
      getAbouts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleClick = (aboutId) => {
    setAboutId(aboutId);
    setShowModal(true);
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
            <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <AboutModal />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-7xl mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Metin
                              </th>
                              <th
                                scope="col"
                                className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                              >
                                Duzenle/Sil
                              </th>
                            </tr>
                          </thead>
                          {abouts.map((about, index) => (
                            <tbody
                              key={index}
                              className="bg-slate-600 divide-y divide-gray-200"
                            >
                              <tr className="hover:bg-slate-500 text-gray-200">
                                <td className="py-4 pl-6 whitespace-nowrap text-sm font-medium">
                                  {about.cardTitle}
                                </td>
                                <td className="py-4 max-w-xs whitespace-nowrap text-sm truncate">
                                  {about.cardText}
                                </td>
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap space-x-2">
                                  <button
                                    onClick={() => handleClick(about._id)}
                                  >
                                    <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                      <TbEdit size={20} />
                                    </div>
                                  </button>
                                  {showModal ? (
                                    <AboutEditModal
                                      showModal={showModal}
                                      setShowModal={setShowModal}
                                      aboutId={aboutId}
                                    />
                                  ) : null}
                                  <button
                                    onClick={() => handleDelete(about._id)}
                                  >
                                    <div className="font-medium mt-1 text-red-600 dark:text-red-500 hover:underline">
                                      <HiOutlineTrash size={20} />
                                    </div>
                                  </button>
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
  );
}
