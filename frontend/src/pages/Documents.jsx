import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLanguage } from "../LanguageContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Documents() {
  const { language } = useLanguage();
  const [documentData, setDocumentData] = useState([]);

  const getDocumentData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/documents");
      setDocumentData(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getDocumentData();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="mt-20 pb-12 bg-white">
        <div className="">
          {documentData.map((document, index) => (
            <div className="container mx-auto" key={index}>
              <div className="mx-auto max-w-4xl sm:text-center">
                <h2 className="md:text-5xl text-3xl font-semibold tracking-tight">
                  {language === "tr" ? document.title : document.title_en}
                </h2>
                {document.text ? (
                <div className="flex justify-center">
                  <p className="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500">
                    {language === "tr" ? document.text : document.text_en}
                  </p>
                </div>
                ) : (
                  null
                )}
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                <div>
                  <div className="p-7 rounded-xl bg-amber-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize">
                      {language === "tr"
                        ? document.cardTitle
                        : document.cardTitle_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText
                        : document.cardText_en}
                    </p>
                    <a
                      href={document.cardLink}
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="p-7 rounded-xl bg-emerald-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize truncate">
                      {language === "tr"
                        ? document.cardTitle1
                        : document.cardTitle1_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText1
                        : document.cardText1_en}
                    </p>
                    <a
                      href={document.cardLink1}
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="p-7 rounded-xl bg-red-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize">
                      {language === "tr"
                        ? document.cardTitle2
                        : document.cardTitle2_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText2
                        : document.cardText2_en}
                    </p>
                    <a
                      href={document.cardLink2}
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="p-7 rounded-xl bg-red-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize">
                      {language === "tr"
                        ? document.cardTitle3
                        : document.cardTitle3_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText3
                        : document.cardText3_en}
                    </p>
                    <a
                      href={document.cardLink3}
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="p-7 rounded-xl bg-amber-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize">
                      {language === "tr"
                        ? document.cardTitle4
                        : document.cardTitle4_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText4
                        : document.cardText4_en}
                    </p>
                    <a
                      href={document.cardLink4}
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="p-7 rounded-xl bg-emerald-100">
                    <h3 className="text-xl font-semibold mb-7 capitalize">
                      {language === "tr"
                        ? document.cardTitle5
                        : document.cardTitle5_en}
                    </h3>
                    <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                      {language === "tr"
                        ? document.cardText5
                        : document.cardText5_en}
                    </p>
                    <a
                      href="#"
                      className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                    >
                      {language === "tr" ? "İndir" : "Download"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
