import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [abouts, setAbouts] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/about", label: "Hakkimizda" },
  ];

  const getAbouts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/abouts");
      setAbouts(response.data.data);
    } catch (error) {
      console.error("Error fetching abouts:", error);
    }
  };

  useEffect(() => {
    getAbouts();
  }, []);

  const handleClick = (id) => {
    navigate(`/about/${id}/edit`);
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
              <div>
                <div>
                  {abouts.map((about, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(about._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center text-2xl mb-4">Turkce Hakkimizda Verileri</h1>
                      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mx-6 sm:mx-48 gap-x-5 gap-y-5">
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px]  p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle}</h1>
                            <span className="font-bold">{about.cardText}</span>
                            <div className="">
                              <button className="">{about.cardButton}</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px] p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle1}</h1>
                            <span className="font-bold">{about.cardText1}</span>
                            <div className="">
                              <button className="">{about.cardButton1}</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px] p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle2}</h1>
                            <span className="font-bold">{about.cardText2}</span>
                            <div className="">
                              <button className="">{about.cardButton2}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h1 className="text-center text-2xl my-12 mb-4">Ingilizce Hakkimizda Verileri</h1>
                      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mx-6 sm:mx-48 gap-x-5 gap-y-5">
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px]  p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle_en}</h1>
                            <span className="font-bold">{about.cardText_en.substring(0,300)}</span>
                            <div className="">
                              <button className="">{about.cardButton_en}</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px] p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle1_en}</h1>
                            <span className="font-bold">{about.cardText1_en.substring(0,300)}</span>
                            <div className="">
                              <button className="">{about.cardButton1_en}</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center text-center">
                          <div className="grid grid-rows-1 max-h-[320px] max-w-[400px] min-w-[400px] min-h-[300px] p-4 border shadow-lg rounded-lg space-y-4">
                            <h1 className="text-lg">{about.cardTitle2_en}</h1>
                            <span className="font-bold">{about.cardText2_en.substring(0,300)}</span>
                            <div className="">
                              <button className="">{about.cardButton2_en}</button>
                            </div>
                          </div>
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
