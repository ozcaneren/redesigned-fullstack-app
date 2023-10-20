import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import PropTypes from "prop-types";

const AboutEditModal = ({ aboutId, showModal, setShowModal }) => {
  AboutEditModal.propTypes = {
    aboutId: PropTypes.string,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func,
  };
  const [about, setAbout] = useState([]);

  const fetchAboutById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/about/${aboutId}`
      );
      setAbout(response.data.data);
    } catch (error) {
      console.error("Hakkimizda getirilirken hata oluştu:", error);
    }
  }, [aboutId]);

  useEffect(() => {
    fetchAboutById();
  }, [fetchAboutById, aboutId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/about/${aboutId}`, {
        ...about,
      });
      setShowModal(false);
    } catch (error) {
      console.error("Hakkimizda güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout((prevAbout) => ({
      ...prevAbout,
      [name]: value,
    }));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[800px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-[#65647C] font-semibold">
                    Iletisim Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent flex  justify-center items-center text-[#65647C]  h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleUpdate}>
                  <div className="relative p-6 flex-auto">
                    <div>
                      <label
                        className="block text-gray-700 text-base font-bold mb-2"
                        htmlFor=""
                      >
                        Başlık
                      </label>
                      <div className="flex justify-center items-center space-x-3">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardTitle"
                          >
                            Türkçe
                          </label>
                          <input
                            id="cardTitle"
                            type="text"
                            name="cardTitle"
                            value={about.cardTitle}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardTitle_en"
                          >
                            İngilizce
                          </label>
                          <input
                            id="cardTitle_en"
                            type="text"
                            name="cardTitle_en"
                            value={about.cardTitle_en}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-base font-bold mb-2"
                        htmlFor=""
                      >
                        Metin
                      </label>
                      <div className="flex justify-center items-center space-x-3">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardText"
                          >
                            Türkçe
                          </label>
                          <textarea
                            id="cardText"
                            name="cardText"
                            value={about.cardText}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardText_en"
                          >
                            İngilizce
                          </label>
                          <textarea
                            id="cardText_en"
                            name="cardText_en"
                            value={about.cardText_en}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-base font-bold mb-2"
                        htmlFor=""
                      >
                        Buton
                      </label>
                      <div className="flex justify-center items-center space-x-3">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardButton"
                          >
                            Türkçe
                          </label>
                          <input
                            id="cardButton"
                            type="text"
                            name="cardButton"
                            value={about.cardButton}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cardButton_en"
                          >
                            İngilizce
                          </label>
                          <input
                            id="cardButton_en"
                            type="text"
                            name="cardButton_en"
                            value={about.cardButton_en}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </form>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-[#353A4E] text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Kapat
                    </button>
                    <button
                      className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => {
                        handleUpdate();
                        setShowModal(false);
                      }}
                    >
                      Kaydet
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
};

export default AboutEditModal;
