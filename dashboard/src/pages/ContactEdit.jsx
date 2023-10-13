import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

function ContactEdit() {
  const { contactId } = useParams();

  const [contact, setContact] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/contact", label: "Iletisim" },
    { url: `/contact/${contactId}/edit`, label: "Iletisim Düzenle" },
  ];

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
      navigate("/contact");
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
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
        <div className="pt-8 pb-4 px-4">
          <div className="w-4/12">
            <div className="">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-center rounded-sm bg-zinc-800">
              <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                <div className="mx-auto mt-4">
                  <form onSubmit={handleUpdate}>
                    <div className="flex items-center justify-center space-x-8">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <label
                          htmlFor="mainTitle"
                          className="block text-sm font-medium text-gray-200"
                        >
                          Ana Başlık
                        </label>
                        <input
                          type="text"
                          id="mainTitle"
                          name="mainTitle"
                          value={contact.mainTitle}
                          onChange={handleChange}
                          className="mt-1 p-2 rounded-sm"
                        />
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <label
                          htmlFor="mainTitle"
                          className="block text-sm font-medium text-gray-200"
                        >
                          Ingilizce Ana Başlık
                        </label>
                        <input
                          type="text"
                          id="mainTitle_en"
                          name="mainTitle_en"
                          value={contact.mainTitle_en}
                          onChange={handleChange}
                          className="mt-1 p-2 rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText"
                          >
                            Kart Başlık 1
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText"
                            name="cardText"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue"
                          >
                            Kart Değer 1
                          </label>
                          <input
                            className=" px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue"
                            name="cardValue"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText1"
                          >
                            Kart Başlık 2
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText1"
                            name="cardText1"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText1}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue1"
                          >
                            Kart Değer 2
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue1"
                            name="cardValue1"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue1}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText2"
                          >
                            Kart Başlık 3
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText2"
                            name="cardText2"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText2}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue2"
                          >
                            Kart Değer 3
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue2"
                            name="cardValue2"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue2}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText3"
                          >
                            Kart Başlık 4
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText3"
                            name="cardText3"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText3}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue3"
                          >
                            Kart Değer 4
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue3"
                            name="cardValue3"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue3}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText4"
                          >
                            Kart Başlık 5
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText4"
                            name="cardText4"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText4}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue4"
                          >
                            Kart Değer 5
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue4"
                            name="cardValue4"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue4}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="border p-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardText5"
                          >
                            Kart Başlık 6
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardText5"
                            name="cardText5"
                            type="text"
                            placeholder="Kart Başlık"
                            value={contact.cardText5}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-sm font-bold mb-2 text-gray-300"
                            htmlFor="cardValue5"
                          >
                            Kart Değer 6
                          </label>
                          <input
                            className="px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="cardValue5"
                            name="cardValue5"
                            type="text"
                            placeholder="Kart Değer"
                            value={contact.cardValue5}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={() => navigate("/contact")}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        İptal
                      </button>
                      <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Kaydet
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEdit;
