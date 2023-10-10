import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/contact", label: "Iletisim" },
  ];

  const getContacts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/contacts");
      setContacts(response.data.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handleClick = (id) => {
    navigate(`/contact/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div className="">
                <div className="">
                  {contacts.map((contact, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(contact._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center">
                          <div className="border p-4 w-[300px] border-gray-600 rounded">
                            <label
                              htmlFor="mainTitle"
                              className="block text-sm text-center mb-2 font-medium text-gray-200"
                            >
                              Ana Başlık
                            </label>
                            <h1 className="text-lg text-center">{contact.mainTitle}</h1>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="border w-[300px] p-4 border-gray-600 rounded">
                            <label
                              htmlFor="mainTitle"
                              className="block text-sm text-center mb-2 font-medium text-gray-200"
                            >
                              Ingilizce Ana Başlık
                            </label>
                            <h1 className="text-lg text-center">{contact.mainTitle_en}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
                        <div className="block border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText}</h1>
                          <span className="font-bold">{contact.cardValue}</span>
                        </div>
                        <div className="border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText1}</h1>
                          <span className="font-bold">
                            {contact.cardValue1}
                          </span>
                        </div>
                        <div className="border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText2}</h1>
                          <span className="font-bold">
                            {contact.cardValue2}
                          </span>
                        </div>
                        <div className="border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText3}</h1>
                          <span className="font-bold">
                            {contact.cardValue3}
                          </span>
                        </div>
                        <div className="border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText4}</h1>
                          <span className="font-bold">
                            {contact.cardValue4}
                          </span>
                        </div>
                        <div className="border shadow-lg rounded-lg py-20">
                          <h1 className="text-lg">{contact.cardText5}</h1>
                          <span className="font-bold">
                            {contact.cardValue5}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
