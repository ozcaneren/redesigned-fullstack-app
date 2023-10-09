import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contactData, setContactData] = useState([]);

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
              <div className="grid  place-items-center sm:mt-20">
                <img
                  className="sm:w-96 w-48"
                  src="https://i.ibb.co/2M7rtLk/Remote1.png"
                />
              </div>
              {contactData.map((contact, index) => (
                <div key={index}>
                  <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                    {contact.mainTitle}
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
                    <div className="block border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText}</h1>
                      <span className="font-bold">{contact.cardValue}</span>
                    </div>
                    <div className="border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText1}</h1>
                      <span className="font-bold">{contact.cardValue1}</span>
                    </div>
                    <div className="border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText2}</h1>
                      <span className="font-bold">{contact.cardValue2}</span>
                    </div>
                    <div className="border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText3}</h1>
                      <span className="font-bold">{contact.cardValue3}</span>
                    </div>
                    <div className="border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText4}</h1>
                      <span className="font-bold">{contact.cardValue4}</span>
                    </div>
                    <div className="border shadow-lg rounded-lg py-20">
                      <h1 className="text-lg">{contact.cardText5}</h1>
                      <span className="font-bold">{contact.cardValue5}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
