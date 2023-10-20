import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const [contactData, setContactData] = useState([]);
  const { language } = useLanguage();

  const getContactData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/contacts");
      setContactData(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div className="bg-gray-300">
      <Header />
      <div className="container h-full mx-auto">
        <div className="">
          <div className="pt-14">
            <div className="">
              <div className="grid place-items-center sm:mt-20">
                <img
                  className="sm:w-96 w-48"
                  src="https://i.ibb.co/2M7rtLk/Remote1.png"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
                {contactData.map((contact, index) => (
                  <div key={index}>
                    <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                      {language === "tr"
                        ? contact.mainTitle
                        : contact.mainTitle_en}
                    </h1>
                    <div className="block border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText}</h1>
                      <span className="font-bold">{contact.cardValue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
