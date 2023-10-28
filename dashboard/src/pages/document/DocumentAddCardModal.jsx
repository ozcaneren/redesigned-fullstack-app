import React from "react";
import { useState } from "react";
import axios from "axios";

export default function DocumentAddCardModal() {
  const [cardTitle, setCardTitle] = useState("");
  const [cardText, setCardText] = useState("");
  const [cardLink, setCardLink] = useState("");

  const handleSubmit = async () => {
    try {
      const newDocument = {
        cardTitle: cardTitle,
        cardText: cardText,
        cardLink: cardLink,
      };
      await axios.post("http://localhost:4000/api/document/cards", newDocument);
      setCardTitle("");
      setCardText("");
      setCardLink("");
    } catch (error) {
      console.error(error);
    }
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-green-600 px-4 py-2 mr-2 text-white rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Belge Ekle
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">
                    Belge Ekle
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
                        Card Başlık
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        id="cardTitle"
                        type="text"
                        placeholder="Card Başlık"
                        value={cardTitle}
                        onChange={(e) => setCardTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label 
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Card Yazi
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        id="cardText"
                        type="text"
                        placeholder="Card Başlık"
                        value={cardText}
                        onChange={(e) => setCardText(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label 
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor=""
                      >
                        Card Baglanti
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        id="cardLink"
                        type="text"
                        placeholder="Card Başlık"
                        value={cardLink}
                        onChange={(e) => setCardLink(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b">
                    <button
                      className="bg-slate-600 text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Kapat
                    </button>
                    <button
                      className="bg-slate-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
