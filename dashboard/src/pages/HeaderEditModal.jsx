import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const HeaderEditModal = ({ headerId, showModal, setShowModal }) => {
  HeaderEditModal.propTypes = {
    headerId: PropTypes.string,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func,
  };
  const [header, setHeader] = useState({});

  const fetchHeaderById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/header/${headerId}`
      );
      setHeader(response.data.data);
    } catch (error) {
      console.error("Header getirilirken hata oluştu:", error);
    }
  }, [headerId]);

  useEffect(() => {
    fetchHeaderById();
  }, [fetchHeaderById, headerId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/header/${headerId}`, {
        ...header,
      });
      setShowModal(false);
    } catch (error) {
      console.error("Header güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeader((prevHeader) => ({
      ...prevHeader,
      [name]: value,
    }));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
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
                    <div className="mb-4">
                      <label
                        htmlFor="headerText"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Header Text
                      </label>
                      <input
                        type="text"
                        name="headerText"
                        id="headerText"
                        value={header.headerText}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="headerTextDropdown"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Header Text Dropdown
                      </label>
                      <input
                        type="text"
                        name="headerTextDropdown"
                        id="headerTextDropdown"
                        value={header.headerTextDropdown}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="headerTextDropdown1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Header Text Dropdown 1
                      </label>
                      <input
                        type="text"
                        name="headerTextDropdown1"
                        id="headerTextDropdown1"
                        value={header.headerTextDropdown1}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="headerTextDropdown2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Header Text Dropdown 2
                      </label>
                      <input
                        type="text"
                        name="headerTextDropdown2"
                        id="headerTextDropdown2"
                        value={header.headerTextDropdown2}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2"
                      />
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

export default HeaderEditModal;
