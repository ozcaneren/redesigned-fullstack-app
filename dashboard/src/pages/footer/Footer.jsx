import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiLogoGooglePlus } from "react-icons/bi";
import FooterAddTextModal from "./FooterAddTextModal";
import FooterAddLinkModal from "./FooterAddLinkModal";
import FooterAddIconModal from "./FooterAddIconModal";
import FooterEditIconModel from "./FooterEditIconModel";
import FooterEditLinkModal from "./FooterEditLinkModal";
import FooterEditTextModal from "./FooterEditTextModal";

export default function Footer() {
  const [footerIcon, setFooterIcon] = useState([]);
  const [footerText, setFooterText] = useState([]);
  const [footerLink, setFooterLink] = useState([]);
  const [showIconModal, setShowIconModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [footerId, setFooterId] = useState();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
  ];

  const getFooterIcons = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/icons"
      );
      setFooterIcon(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterIcons();
  }, []);

  const getFooterTexts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/texts"
      );
      setFooterText(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTexts();
  }, []);

  const getFooterTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/links"
      );
      setFooterLink(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTitles();
  }, []);

  const handleIconDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/icon/${id}`);
      getFooterIcons();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  const handleTextDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/text/${id}`);
      getFooterTexts();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  const handleLinkDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/link/${id}`);
      getFooterTitles();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  const handleIconClick = (footerId) => {
    setFooterId(footerId);
    setShowIconModal(true);
  };

  const handleTextClick = (footerId) => {
    setFooterId(footerId);
    setShowTextModal(true);
  };

  const handleLinkClick = (footerId) => {
    setFooterId(footerId);
    setShowLinkModal(true);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div>
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-2 relative">
                      <FooterAddIconModal />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-2 relative">
                      <FooterAddTextModal />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-2 relative">
                      <FooterAddLinkModal />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="block text-xl text-modalLabelText pt-4">
                    Simgeler
                  </h1>
                  <div className="flex justify-center items-center flex-row space-x-4">
                    {footerIcon.map((footerIcon, index) => (
                      <div
                        key={index}
                        className="justify-center items-center my-4"
                      >
                        <div className="flex items-start rounded-xl bg-white p-4 border ">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border text-slate-700 border-blue-100 bg-blue-50">
                            {footerIcon.footerIcon === "facebook" ? (
                              <BsFacebook size={20} />
                            ) : footerIcon.footerIcon === "instagram" ? (
                              <BsInstagram size={20} />
                            ) : footerIcon.footerIcon === "twitter" ? (
                              <BsTwitter size={20} />
                            ) : footerIcon.footerIcon === "github" ? (
                              <BsGithub size={20} />
                            ) : footerIcon.footerIcon === "google" ? (
                              <BiLogoGooglePlus size={20} />
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="flex flex-row justify-center items-center">
                              <p className="text-gray-700 text-center text-sm">
                                Icon
                              </p>
                              <button
                                onClick={() => handleIconClick(footerIcon._id)}
                                className="ml-2 flex justify-center items-center"
                              >
                                <div className="font-medium text-cyan-500 bg-gray-200 p-1 rounded-full hover:underline">
                                  <TbEdit size={12} />
                                </div>
                              </button>
                              {showIconModal && (
                                <FooterEditIconModel
                                  showIconModal={showIconModal}
                                  setShowIconModal={setShowIconModal}
                                  footerId={footerId}
                                />
                              )}
                              <button
                                className="ml-1 flex justify-center items-center"
                                onClick={() => handleIconDelete(footerIcon._id)}
                              >
                                <div className="font-medium bg-gray-200 p-1 rounded-full text-red-600 dark:text-red-500 hover:underline">
                                  <HiOutlineTrash size={12} />
                                </div>
                              </button>
                            </div>
                            <h2 className="font-semibold text-gray-600 ">
                              {footerIcon.footerIcon}
                            </h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="block text-xl text-modalLabelText pt-4">
                    Başlık ve Metin
                  </h1>
                  <div className="max-w-2xl mx-auto px-4 pt-2">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full table-fixed">
                            <thead className="bg-gray-400 text-white">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase"
                                >
                                  Ana Başlık
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase"
                                >
                                  Alt Başlık
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                                >
                                  Duzenle/Sil
                                </th>
                              </tr>
                            </thead>
                            {footerText.map((footerText, index) => (
                              <tbody key={index} className="bg-slate-600">
                                <tr className="hover:bg-slate-500">
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {footerText.footerTitle}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {footerText.footerText}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap">
                                  <button
                                      onClick={() =>
                                        handleTextClick(footerText._id)
                                      }
                                    >
                                      <div className="font-medium mt-1 mr-1 text-cyan-500 hover:underline">
                                        <TbEdit size={20} />
                                      </div>
                                    </button>
                                    {showTextModal && (
                                      <FooterEditTextModal
                                        showTextModal={showTextModal}
                                        setShowTextModal={setShowTextModal}
                                        footerId={footerId}
                                      />
                                    )}
                                    <button onClick={
                                      () => handleTextDelete(footerText._id)
                                    }>
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
                <div className="flex justify-center items-center flex-col">
                  <h1 className="block text-xl text-modalLabelText pt-4">
                    Link ve Dropdownlar
                  </h1>
                  <div className="max-w-2xl mx-auto px-4 pt-2">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full table-fixed">
                            <thead className="bg-gray-400 text-white">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase"
                                >
                                  Ana Başlık
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase"
                                >
                                  Dropdownlar
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                                >
                                  Duzenle/Sil
                                </th>
                              </tr>
                            </thead>
                            {footerLink.map((footerTitle, index) => (
                              <tbody key={index} className="bg-slate-600">
                                <tr className="hover:bg-slate-500">
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {footerTitle.footerLinkTitle}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {footerTitle.footerLinkText}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-4 top-0 right-0 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap">
                                    <button
                                      onClick={() =>
                                        handleLinkClick(footerTitle._id)
                                      }
                                    >
                                      <div className="font-medium mt-1 mr-1 text-cyan-500 hover:underline">
                                        <TbEdit size={20} />
                                      </div>
                                    </button>
                                    {showLinkModal && (
                                      <FooterEditLinkModal
                                        showLinkModal={showLinkModal}
                                        setShowLinkModal={setShowLinkModal}
                                        footerId={footerId}
                                      />
                                    )}
                                    <button onClick={
                                      () => handleLinkDelete(footerTitle._id)
                                    }>
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
    </div>
  );
}
