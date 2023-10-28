import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import ContactModel from "./ContactModel";
import ContactEditModal from "./ContactEditModal";

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

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

  const handleCheckboxChange = (contactId) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter((id) => id !== contactId));
    } else {
      setSelectedContacts([...selectedContacts, contactId]);
    }
  };

  const handleEditSelected = () => {
    setShowModal(true);
  };

  const handleDeleteSelected = () => {
    selectedContacts.map((contactId) => handleDelete(contactId));
  };

  const handleMasterCheckboxChange = () => {
    if (selectedContacts.length === contacts.length) {
      // Eğer tüm iletişimler zaten seçili ise, seçimleri kaldır.
      setSelectedContacts([]);
    } else {
      // Tüm iletişimleri seç.
      setSelectedContacts(contacts.map((contact) => contact._id));
    }
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
            <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <ContactModel />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showModal && (
                        <ContactEditModal
                          showModal={showModal}
                          setShowModal={setShowModal}
                          contactId={selectedContacts}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleDeleteSelected}
                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="max-w-full mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th scope="col" className="p-4 w-[10px]">
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    onChange={handleMasterCheckboxChange}
                                    checked={
                                      selectedContacts.length ===
                                      contacts.length
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label className="sr-only">checkbox</label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left w-[400px]"
                              >
                                İletişim Başlığı
                              </th>
                              <th
                                scope="col"
                                className="py-3 font-medium tracking-wider text-left w-[400px]"
                              >
                                İletişim Bilgisi
                              </th>
                            </tr>
                          </thead>
                          {contacts.map((contact, index) => (
                            <tbody key={index} className="bg-slate-600 ">
                              <tr className="hover:bg-slate-500">
                                <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    id={`contactCheckbox-${contact._id}`}
                                    onChange={() =>
                                      handleCheckboxChange(contact._id)
                                    }
                                    checked={selectedContacts.includes(
                                      contact._id
                                    )}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {contact.cardText}
                                    </p>
                                  </div>
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 pr-6 max-w-xs font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {contact.cardValue}
                                    </p>
                                  </div>
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
