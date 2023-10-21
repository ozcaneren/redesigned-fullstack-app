import React from "react";
import { useState } from "react";
import axios from "axios";

export default function FooterModal() {
  const [footerTitle, setFooterTitle] = useState("");
  const [footerTitle_en, setFooterTitle_en] = useState("");
  const [footerTitleLink, setFooterTitleLink] = useState("");
  const [footerTitleLink_en, setFooterTitleLink_en] = useState("");
  const [footerTitleLink1, setFooterTitleLink1] = useState("");
  const [footerTitleLink1_en, setFooterTitleLink1_en] = useState("");
  const [footerTitleLink2, setFooterTitleLink2] = useState("");
  const [footerTitleLink2_en, setFooterTitleLink2_en] = useState("");
  const [footerTitleLink3, setFooterTitleLink3] = useState("");
  const [footerTitleLink3_en, setFooterTitleLink3_en] = useState("");
  const [footerTitleLink4, setFooterTitleLink4] = useState("");
  const [footerTitleLink4_en, setFooterTitleLink4_en] = useState("");

  const handleSubmit = async () => {
    try {
      const newFooter = {
        footerTitle: footerTitle,
        footerTitle_en: footerTitle_en,
        footerTitleLink: footerTitleLink,
        footerTitleLink_en: footerTitleLink_en,
        footerTitleLink1: footerTitleLink1,
        footerTitleLink1_en: footerTitleLink1_en,
        footerTitleLink2: footerTitleLink2,
        footerTitleLink2_en: footerTitleLink2_en,
        footerTitleLink3: footerTitleLink3,
        footerTitleLink3_en: footerTitleLink3_en,
        footerTitleLink4: footerTitleLink4,
        footerTitleLink4_en: footerTitleLink4_en,
      };
      await axios.post("http://localhost:4000/api/footer", newFooter);
      setFooterTitle("");
      setFooterTitle_en("");
      setFooterTitleLink("");
      setFooterTitleLink_en("");
      setFooterTitleLink1("");
      setFooterTitleLink1_en("");
      setFooterTitleLink2("");
      setFooterTitleLink2_en("");
      setFooterTitleLink3("");
      setFooterTitleLink3_en("");
      setFooterTitleLink4("");
      setFooterTitleLink4_en("");
    } catch (error) {
      console.error(error);
    }
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-[#474E68] p-2 text-white text-sm rounded-[6px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Yeni Footer Ekle
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[900px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">
                    Footer Ekle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-modalMainText float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent flex justify-center items-center text-modalMainText h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title
                      </label>
                      <input
                        type="text"
                        name="footerTitle"
                        value={footerTitle}
                        onChange={(e) => setFooterTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title Link
                      </label>
                      <input
                        type="text"
                        name="footerTitleLink"
                        value={footerTitleLink}
                        onChange={(e) => setFooterTitleLink(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title Link 1
                      </label>
                      <input
                        type="text"
                        name="footerTitleLink1"
                        value={footerTitleLink1}
                        onChange={(e) => setFooterTitleLink1(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title Link 2
                      </label>
                      <input
                        type="text"
                        name="footerTitleLink2"
                        value={footerTitleLink2}
                        onChange={(e) => setFooterTitleLink2(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title Link 3
                      </label>
                      <input
                        type="text"
                        name="footerTitleLink3"
                        value={footerTitleLink3}
                        onChange={(e) => setFooterTitleLink3(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Footer Title Link 4
                      </label>
                      <input
                        type="text"
                        name="footerTitleLink4"
                        value={footerTitleLink4}
                        onChange={(e) => setFooterTitleLink4(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b">
                    <button
                      className="bg-[#474E68] text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Kapat
                    </button>
                    <button
                      className="bg-[#474E68] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        handleSubmit();
                        setShowModal(false);
                      }}
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
}
