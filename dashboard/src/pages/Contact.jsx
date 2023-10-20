import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import ContactModel from "./ContactModel";
import ContactEditModal from "./ContactEditModal";
import { TbEdit } from "react-icons/tb";

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState();

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

  const handleDelete = async (contactId) => {
    try {
      await axios.delete(`http://localhost:4000/api/contact/${contactId}`);
      getContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleClick = (contactId) => {
    setContactId(contactId);
    setShowModal(true);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <ContactModel />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-5xl mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-[#9BA4B5] text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Iletisim Başlığı
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Iletisim Bilgisi
                              </th>
                              <th
                                scope="col"
                                className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                              >
                                Islemler
                              </th>
                            </tr>
                          </thead>
                          {contacts.map((contact, index) => (
                            <tbody key={index} className="bg-[#474E68] ">
                              <tr className="hover:bg-[#6B728E]">
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {contact.cardText}
                                    </p>
                                  </div>
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 text-sm pr-6 max-w-xs font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {contact.cardValue}
                                    </p>
                                  </div>
                                </td>
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap space-x-2">
                                  <button
                                    onClick={() => handleClick(contact._id)}
                                  >
                                    <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                      <TbEdit size={19} />
                                    </div>
                                  </button>
                                  {showModal && (
                                    <ContactEditModal
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                    contactId={contactId}
                                  />
                                  )}
                                  <button
                                    onClick={() => handleDelete(contact._id)}
                                  >
                                    <div className="font-medium mt-1 text-red-600 dark:text-red-500 hover:underline">
                                      <HiOutlineTrash size={20} />
                                    </div>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
