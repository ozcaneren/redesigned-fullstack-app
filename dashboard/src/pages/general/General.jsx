import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import Breadcrumb from "../../components/Breadcrumbs";

function General() {
  const [general, setGeneral] = useState([]);
  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/general", label: "Genel Ayarlar" },
  ];

  const getGeneral = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/general");
      setGeneral(response.data);
    } catch (error) {
      console.error("Error fetching general:", error);
    }
  };

  useEffect(() => {
    getGeneral();
  }, []);

  return (
    <Layout>
      <div className="ml-14 mb-10 md:ml-64">
        <div className="pt-4 pb-4 px-4">
          <div className="w-2/12">
            <div>
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="p-4 bg-[#FEFEFE] border border-gray-200/70 rounded">
            {general.map((general, index) => (
              <div className="text-black" key={index}>
                {/* logo section */}
                <div className="w-full pb-8">
                  <div className="flex justify-center flex-row items-center space-x-8 w-full">
                    <div className="w-1/3 h-[300px] flex flex-col rounded border">
                      <div className="bg-gray-200 py-2">
                        <span className="font-medium font-mono p-4">
                          Logo Yükle
                        </span>
                      </div>
                      <div className="py-6 px-8">
                        <label
                          htmlFor=""
                          className="block text-black text-sm font-medium mb-2"
                        >
                          Logo
                        </label>
                        <input
                          type="text"
                          name="mainLogo"
                          value={general.mainLogo}
                          className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src={general.mainLogo}
                          className=""
                          width={114}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-1/3 h-[300px] flex flex-col rounded border">
                      <div className="bg-gray-200 py-2">
                        <span className="font-medium font-mono p-4">
                          Mail Şablonu İçin Logo Yükle
                        </span>
                      </div>
                      <div className="py-6 px-8">
                        <label
                          htmlFor=""
                          className="block text-black text-sm font-medium mb-2"
                        >
                          Mail Logo
                        </label>
                        <input
                          type="text"
                          name="mainLogo"
                          value={general.mailLogo}
                          className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src={general.mailLogo}
                          className=""
                          width={114}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-1/3 h-[300px] flex flex-col rounded border">
                      <div className="bg-gray-200 py-2">
                        <span className="font-medium font-mono p-4">
                          Favicon Yükle
                        </span>
                      </div>
                      <div className="py-6 px-8">
                        <label
                          htmlFor=""
                          className="block text-black text-sm font-medium mb-2"
                        >
                          Favicon
                        </label>
                        <input
                          type="text"
                          name="mainLogo"
                          value={general.favicon}
                          className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src={general.favicon}
                          className=""
                          width={75}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* color section */}
                <div className="w-full h-[150px] pb-8 border flex flex-row rounded">
                  <div className="w-1/3 py-6 pl-6 pr-12">
                    <label
                      htmlFor=""
                      className="block text-[#232a4e] text-lg font-semibold mb-2"
                    >
                      Ana Renk (Main Color)
                    </label>
                    <div className="flex flex-row mt-6">
                      <input
                        type="text"
                        name="mainColor"
                        value={general.mainColor}
                        className="appearance-none border py-2 px-3 w-full text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <div
                        className={`bg-[${general.mainColor}] w-[35px] rounded-r`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-1/3 py-6 px-8">
                    <label
                      htmlFor=""
                      className="block text-[#232a4e] text-lg font-semibold mb-2"
                    >
                      İkincil Renk (Secondary Color)
                    </label>
                    <div className="flex flex-row mt-6">
                      <input
                        type="text"
                        name="secondaryColor"
                        value={general.secondaryColor}
                        className="appearance-none border py-2 px-3 w-full text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <div
                        className={`bg-[${general.secondaryColor}] w-[35px] rounded-r`}
                      ></div>
                    </div>
                  </div>
                  <div className="w-1/3 py-6 px-8">
                    <label
                      htmlFor=""
                      className="block text-[#232a4e] text-lg font-semibold mb-2"
                    >
                      Ana Renk (Main Color)
                    </label>
                    <div className="flex flex-row mt-6">
                      <input
                        type="text"
                        name="mainColor"
                        value={general.backgroundColor}
                        className="appearance-none border py-2 px-3 w-full  text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <div
                        className={`bg-[${general.backgroundColor}] w-[35px] rounded-r`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* site title section */}
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Site Başlığı
                  </label>
                  <input
                    type="text"
                    name="mainLogo"
                    value={general.siteLabel}
                    className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* money type section */}
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Varsayilan Para Birimi
                  </label>
                  <select
                    type="text"
                    name="defaultMoneyType"
                    value={general.defaultMoneyType}
                    className="appearance-none border bg-white rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="TRY">TRY</option>
                    <option value="USD">$ USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>

                {/* weather section */}
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Varsayilan Sehir
                  </label>
                  <select
                    type="text"
                    name="weatherCity"
                    value={general.weatherCity}
                    className="appearance-none border bg-white rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="Ankara">Ankara</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Çanakkale">Çanakkale</option>
                    <option value="İzmir">İzmir</option>
                  </select>
                </div>

                {/* seo section */}
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    SEO Keywords
                  </label>
                  <input
                    type="text"
                    name="seoKeywords"
                    value={general.seoKeywords}
                    className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    SEO Açıklama
                  </label>
                  <input
                    type="text"
                    name="seoDescription"
                    value={general.seoDescription}
                    className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>


                {/* copyright section */}
                <div className="pt-6">
                  <label
                    htmlFor=""
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Copyright Metni
                  </label>
                  <input
                    type="text"
                    name="copyright"
                    value={general.copyright}
                    className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default General;
