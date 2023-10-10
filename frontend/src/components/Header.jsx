import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Header() {
  const [data, setData] = useState([]);
  const { language, toggleLanguage } = useLanguage();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/headers");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((header, index) => (
        <nav
          key={index}
          className="fixed top-0 left-0 w-full z-50 bg-gray-200 border-gray-200"
        >
          <div className="h-14 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/">
              <span className="flex items-center">
                <span className="self-center text-emerald-800 text-xl font-semibold whitespace-nowrap">
                  {language === "tr"
                    ? header.headerTitle
                    : header.headerTitle_en
                  }
                </span>
              </span>
            </Link>
            <div className="flex items-center">
            <button onClick={toggleLanguage}>Dil Değiştir</button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to={
                      header.headerText === "Iletisim"
                        ? "/contact"
                        : header.headerText === "Odalarimiz"
                        ? "/rooms"
                        : header.headerText === "Hakkimizda"
                        ? "/about"
                        : // Diğer durumları buraya ekleyebilirsiniz
                          "/" // Varsayılan bir yol belirleyin veya hata durumunda kullanabilirsiniz
                    }
                  >
                    <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                      {header.headerText}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      header.headerText1 === "Iletisim"
                        ? "/contact"
                        : header.headerText1 === "Odalarimiz"
                        ? "/rooms"
                        : header.headerText1 === "Hakkimizda"
                        ? "/about"
                        : // Diğer durumları buraya ekleyebilirsiniz
                          "/" // Varsayılan bir yol belirleyin veya hata durumunda kullanabilirsiniz
                    }
                  >
                    <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                      {header.headerText1}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      header.headerText2 === "Iletisim"
                        ? "/contact"
                        : header.headerText2 === "Odalarimiz"
                        ? "/rooms"
                        : header.headerText2 === "Hakkimizda"
                        ? "/about"
                        : // Diğer durumları buraya ekleyebilirsiniz
                          "/" // Varsayılan bir yol belirleyin veya hata durumunda kullanabilirsiniz
                    }
                  >
                    <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                      {header.headerText2}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      header.headerText3 === "Iletisim"
                        ? "/contact"
                        : header.headerText3 === "Odalarimiz"
                        ? "/rooms"
                        : header.headerText3 === "Hakkimizda"
                        ? "/about"
                        : // Diğer durumları buraya ekleyebilirsiniz
                          "/" // Varsayılan bir yol belirleyin veya hata durumunda kullanabilirsiniz
                    }
                  >
                    <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                      {header.headerText3}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </>
  );
}
