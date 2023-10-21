import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
// import { useNavigate } from "react-router-dom";
import FooterModal from "./FooterModal";

export default function Footer() {
  const [footerIcon, setFooterIcon] = useState([]);
  const [footerText, setFooterText] = useState([]);
  const [footerTitle, setFooterTitle] = useState([]);

  // const navigate = useNavigate();

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
      setFooterTitle(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  }

  useEffect(() => {
    getFooterTitles();
  }, []);

  // const handleClick = (id) => {
  //   navigate(`/footer/${id}/edit`);
  // };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Sidebar />
        <div className="ml-14   mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div>
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <FooterModal />
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
                  {footerTitle.map((footerTitle, index) => (
                    <div
                      key={index}
                      className="justify-center items-center my-4 flex flex-row space-x-4"
                    >
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Title</label>
                        <h1 className="text-lg">{footerTitle.footerLinkTitle}</h1>
                      </div>
                      <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                        <label htmlFor="">Text</label>
                        <h1 className="text-lg">{footerTitle.footerLinkText}</h1>
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
