import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiLogoGooglePlus } from "react-icons/bi";
import FooterAddIconModal from "./FooterAddIconModal";
import FooterEditIconModel from "./FooterEditIconModel";
import Layout from "../layout";

export default function FooterIcon() {
  const [footerIcon, setFooterIcon] = useState([]);
  const [showIconModal, setShowIconModal] = useState(false);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
    { url: "/footer/icon", label: "İkonlar" },
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

  const handleIconDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/icon/${id}`);
      getFooterIcons();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  return (
    <Layout>
      <div className="ml-14 mb-10 md:ml-64">
        <div className="pt-4 pb-4 px-4">
          <div className="w-3/12">
            <div>
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-2 relative">
                      <FooterAddIconModal />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-row space-x-4">
                {footerIcon.map((footerIcon, index) => (
                  <div key={index} className="justify-center items-center my-4">
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
                          <button className="ml-2 flex justify-center items-center">
                            <div className="font-medium text-cyan-500 bg-gray-200 p-1 rounded-full hover:underline">
                              <TbEdit size={12} />
                            </div>
                          </button>
                          {showIconModal && (
                            <FooterEditIconModel
                              showIconModal={showIconModal}
                              setShowIconModal={setShowIconModal}
                              footerId={footerIcon._id}
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
