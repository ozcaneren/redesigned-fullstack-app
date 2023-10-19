import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FiEdit2 } from "react-icons/fi";

const ContactEditModal = ({ contactId }) => {
  const [contact, setContact] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchContactById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/contact/${contactId}`
      );
      setContact(response.data.data);
    } catch (error) {
      console.error("Iletisim getirilirken hata oluştu:", error);
    }
  }, [contactId]);

  useEffect(() => {
    fetchContactById();
  }, [fetchContactById, contactId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/contact/${contactId}`, {
        ...contact,
      });
    } catch (error) {
      console.error("Iletisim güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <div className="font-medium mt-1 text-blue-300 hover:underline">
          <FiEdit2 size={12} />
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">Iletisim Duzenle</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleUpdate}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Iletisim Basligi
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardText"
                        type="text"
                        placeholder="Iletisim Basligi"
                        name="cardText"
                        value={contact.cardText}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cardValue"
                      >
                        Iletisim Degeri
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardValue"
                        type="text"
                        placeholder="Iletisim Degeri"
                        name="cardValue"
                        value={contact.cardValue}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ContactEditModal;
