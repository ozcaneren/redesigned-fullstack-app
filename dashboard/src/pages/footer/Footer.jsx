import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import FooterAddTextModal from "./FooterAddTextModal";
import FooterAddLinkModal from "./FooterAddLinkModal";
import FooterAddIconModal from "./FooterAddIconModal";

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
                    <div className="w-full px-4 relative space-x-2">
                      <FooterAddTextModal />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <FooterAddLinkModal />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <FooterAddIconModal />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-xl">Simgeler</h1>
                  <div className="flex justify-center items-center flex-row space-x-4">
                    {footerIcon.map((footerIcon, index) => (
                      <div
                        key={index}
                        className="justify-center items-center my-4"
                      >
                        <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                          <label htmlFor="">Icon</label>
                          <h1 className="text-lg">{footerIcon.footerIcon}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="block text-xl">Başlık ve Metin</h1>
                  {footerText.map((footerText, index) => (
                    <div
                      key={index}
                      className="justify-center items-center my-4 flex flex-row space-x-4"
                    >
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Title</label>
                        <h1 className="text-lg">{footerText.footerTitle}</h1>
                      </div>
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Text</label>
                        <h1 className="text-lg">{footerText.footerText}</h1>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="block text-xl">Başlık ve Metin</h1>
                  {footerLink.map((footerTitle, index) => (
                    <div
                      key={index}
                      className="justify-center items-center my-4 flex flex-row space-x-4"
                    >
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Title</label>
                        <h1 className="text-lg">
                          {footerTitle.footerLinkTitle}
                        </h1>
                      </div>
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Text</label>
                        <h1 className="text-lg">
                          {footerTitle.footerLinkText}
                        </h1>
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
  );
}
