import React from "react";
import { useState } from "react";
import axios from "axios";

export default function FooterAddIconModal() {
  const [footerIcon, setFooterIcon] = useState("");

  const handleSubmit = async () => {
    try {
      const newFooter = {
        footerIcon: footerIcon,
      };
      await axios.post("http://localhost:4000/api/footer/icons", newFooter);
      setFooterIcon("");
    } catch (error) {
      console.error(error);
    }
  }

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-[#474E68] p-2 text-white text-sm rounded-[6px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Yeni Icon Ekle
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
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
                        htmlFor="headerTitle"
                      >
                        Footer Başlık
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        id="footerIcon"
                        type="text"
                        placeholder="Footer Başlık"
                        value={footerIcon}
                        onChange={(e) => setFooterIcon(e.target.value)}
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