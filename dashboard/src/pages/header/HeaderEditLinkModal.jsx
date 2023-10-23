import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const HeaderEditLinkModal = ({ headerId, showLinkModal, setShowLinkModal }) => {
  HeaderEditLinkModal.propTypes = {
    headerId: PropTypes.string,
    showLinkModal: PropTypes.bool,
    setShowLinkModal: PropTypes.func,
  };
  const [header, setHeader] = useState({});

  const fetchHeaderById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/header/link/${headerId}`
      );
      setHeader(response.data);
    } catch (error) {
      console.error("Header getirilirken hata oluştu:", error);
    }
  }, [headerId]);

  useEffect(() => {
    fetchHeaderById();
  }, [fetchHeaderById, headerId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/header/link/${headerId}`, {
        ...header,
      });
      setShowLinkModal(false);
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
      {showLinkModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">
                    Header Link Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-modalMainText float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowLinkModal(false)}
                  >
                    <span className="bg-transparent flex justify-center items-center text-modalMainText h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleUpdate}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="headerText"
                      >
                        Header Text
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={header.headerText}
                        onChange={handleChange}
                        name="headerText"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="headerText_en"
                      >
                        Header Text (English)
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={header.headerText_en}
                        onChange={handleChange}
                        name="headerText_en"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-modalLabelText text-sm font-bold mb-2"
                        htmlFor="headerTextDropdown"
                      >
                        Header Text Dropdown
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={header.headerTextDropdown}
                        onChange={handleChange}
                        name="headerTextDropdown"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowLinkModal(false)}
                    >
                      İptal
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => {
                        handleUpdate();
                        setShowLinkModal(false);
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

export default HeaderEditLinkModal;