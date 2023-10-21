import React from "react";
import { useState } from "react";
import axios from "axios";

export default function HeaderModal() {
  const [headerText, setHeaderText] = useState("");
  const [headerTextDropdown, setHeaderTextDropdown] = useState("");
  const [headerTextDropdown1, setHeaderTextDropdown1] = useState("");
  const [headerTextDropdown2, setHeaderTextDropdown2] = useState("");
  const [headerTextDropdown3, setHeaderTextDropdown3] = useState("");

  const handleSubmit = async () => {
    try {
      const newHeader = {
        headerText: headerText,
        headerTextDropdown: headerTextDropdown,
        headerTextDropdown1: headerTextDropdown1,
        headerTextDropdown2: headerTextDropdown2,
        headerTextDropdown3: headerTextDropdown3,
      };
      await axios.post("http://localhost:4000/api/header", newHeader);
      setHeaderText("");
      setHeaderTextDropdown("");
      setHeaderTextDropdown1("");
      setHeaderTextDropdown2("");
      setHeaderTextDropdown3("");
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
        Yeni Header Ekle
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">Header Ekle</h3>
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
                        htmlFor="cardTitle"
                      >
                        Header Basligi
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={headerText}
                        onChange={(e) => setHeaderText(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Header Dropdown Basligi
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={headerTextDropdown}
                        onChange={(e) => setHeaderTextDropdown(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Header Dropdown Basligi 1
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={headerTextDropdown1}
                        onChange={(e) => setHeaderTextDropdown1(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Header Dropdown Basligi 2
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={headerTextDropdown2}
                        onChange={(e) => setHeaderTextDropdown2(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Header Dropdown Basligi 3
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={headerTextDropdown3}
                        onChange={(e) => setHeaderTextDropdown3(e.target.value)}
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
