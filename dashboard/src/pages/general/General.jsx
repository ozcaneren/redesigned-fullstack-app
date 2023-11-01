import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layout";
import Breadcrumb from "../../components/Breadcrumbs";
import { HexColorPicker } from "react-colorful";

function General() {
  const [general, setGeneral] = useState({});

  const [color, setColor] = useState("#F9651A");
  const [secondaryColor, setSecondaryColor] = useState("#F9651A");
  const [backgroundColor, setBackgroundColor] = useState("#F9651A");
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [openSecondaryColorPicker, setOpenSecondaryColorPicker] =
    useState(false);
  const [openBackgroundColorPicker, setOpenBackgroundColorPicker] =
    useState(false);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/general", label: "Genel Ayarlar" },
  ];

  const getGeneral = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/general/65400c04a4378864ef9c2ebb"
      );
      const generalData = response.data.data;

      setGeneral(generalData);

      setColor(generalData.mainColor);
      setSecondaryColor(generalData.secondaryColor);
      setBackgroundColor(generalData.backgroundColor);
    } catch (error) {
      console.error("Error fetching general:", error);
    }
  };

  useEffect(() => {
    getGeneral();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:4000/api/general/65400c04a4378864ef9c2ebb",
        {
          ...general,
          mainColor: color,
          secondaryColor: secondaryColor,
          backgroundColor: backgroundColor,
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating general:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneral((prevGeneral) => ({
      ...prevGeneral,
      [name]: value,
    }));
  };

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
            <div className="text-black">
              <form onSubmit={handleUpdate}>
                <div>
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
                            htmlFor="mainLogo"
                            className="block text-black text-sm font-medium mb-2"
                          >
                            Logo
                          </label>
                          <input
                            type="text"
                            name="mainLogo"
                            value={general.mainLogo}
                            onChange={handleChange}
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
                            htmlFor="mailLogo"
                            className="block text-black text-sm font-medium mb-2"
                          >
                            Mail Logo
                          </label>
                          <input
                            type="text"
                            name="mailLogo"
                            onChange={handleChange}
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
                            htmlFor="favicon"
                            className="block text-black text-sm font-medium mb-2"
                          >
                            Favicon
                          </label>
                          <input
                            type="text"
                            name="mainLogo"
                            onChange={handleChange}
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
                        htmlFor="mainColor"
                        className="block text-[#232a4e] text-lg font-semibold mb-2"
                      >
                        Ana Renk (Main Color)
                      </label>
                      <div className="flex flex-row mt-6">
                        <input
                          type="text"
                          name="mainColor"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="appearance-none border py-2 px-3 w-full text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div
                          onClick={() => setOpenColorPicker(!openColorPicker)}
                          className={`w-[35px] rounded-r`}
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                      {openColorPicker && (
                        <div className="">
                          <HexColorPicker
                            color={color}
                            onChange={(newColor) => {
                              setColor(newColor);
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 py-6 pl-6 pr-12">
                      <label
                        htmlFor="secondaryColor"
                        className="block text-[#232a4e] text-lg font-semibold mb-2"
                      >
                        İkincil Renk (Secondary Color)
                      </label>
                      <div className="flex flex-row mt-6">
                        <input
                          type="text"
                          name="secondaryColor"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="appearance-none border py-2 px-3 w-full text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div
                          onClick={() =>
                            setOpenSecondaryColorPicker(
                              !openSecondaryColorPicker
                            )
                          }
                          className={`w-[35px] rounded-r`}
                          style={{ backgroundColor: secondaryColor }}
                        ></div>
                      </div>
                      {openSecondaryColorPicker && (
                        <div className="">
                          <HexColorPicker
                            color={secondaryColor}
                            onChange={(newColor) => {
                              setSecondaryColor(newColor);
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="w-1/3 py-6 pl-6 pr-12">
                      <label
                        htmlFor="backgroundColor"
                        className="block text-[#232a4e] text-lg font-semibold mb-2"
                      >
                        Arka Plan Rengi (Background Color)
                      </label>
                      <div className="flex flex-row mt-6">
                        <input
                          type="text"
                          name="backgroundColor"
                          value={backgroundColor}
                          onChange={(e) => setBackgroundColor(e.target.value)}
                          className="appearance-none border py-2 px-3 w-full text-modalMainText rounded-l leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div
                          onClick={() =>
                            setOpenBackgroundColorPicker(
                              !openBackgroundColorPicker
                            )
                          }
                          className={`w-[35px] rounded-r`}
                          style={{ backgroundColor: backgroundColor }}
                        ></div>
                      </div>
                      {openBackgroundColorPicker && (
                        <div className="">
                          <HexColorPicker
                            color={backgroundColor}
                            onChange={(newColor) => {
                              setBackgroundColor(newColor);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* site title section */}
                  <div className="pt-6">
                    <label
                      htmlFor="siteLabel"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Site Başlığı
                    </label>
                    <input
                      type="text"
                      name="siteLabel"
                      onChange={handleChange}
                      value={general.siteLabel}
                      className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  {/* money type section */}
                  <div className="pt-6">
                    <label
                      htmlFor="defaultMoneyType"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Varsayilan Para Birimi
                    </label>
                    <select
                      type="text"
                      name="defaultMoneyType"
                      onChange={handleChange}
                      value={general.defaultMoneyType}
                      className="border bg-white rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="TRY">TRY</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>

                  {/* weather city section */}
                  <div className="pt-6">
                    <label
                      htmlFor="weatherCity"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Varsayilan Sehir
                    </label>
                    <select
                      type="text"
                      name="weatherCity"
                      onChange={handleChange}
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
                    <div>
                      <label
                        htmlFor="seoKeywords"
                        className="block text-black text-sm font-medium mb-2"
                      >
                        SEO Keywords
                      </label>
                      <div className="">
                        <input
                          type="text"
                          name="seoKeywords"
                          onChange={handleChange}
                          value={general.seoKeywords}
                          className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <label
                      htmlFor="seoDescription"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      SEO Açıklama
                    </label>
                    <input
                      type="text"
                      name="seoDescription"
                      onChange={handleChange}
                      value={general.seoDescription}
                      className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  {/* copyright section */}
                  <div className="pt-6">
                    <label
                      htmlFor="copyright"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Copyright Metni
                    </label>
                    <input
                      type="text"
                      name="copyright"
                      onChange={handleChange}
                      value={general.copyright}
                      className="appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="focus:outline-none animate-spin text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default General;
