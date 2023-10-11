import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [footers, setFooters] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
  ];

  const getFooters = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/footers");
      setFooters(response.data.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooters();
  }, []);

  const handleClick = (id) => {
    navigate(`/footer/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-2/12">
              <div>
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div>
                <div>
                  {footers.map((footer, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(footer._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mx-6 sm:mx-48 gap-x-5 gap-y-5">
                        <div className="w-full flex justify-center items-center my-4 space-x-4">
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="" className="">
                              Baslik
                            </label>
                            {footer.footerMainTitle ? (
                              <h1 className="text-lg">
                                {footer.footerMainTitle}
                              </h1>
                            ) : (
                              <p className="text-gray-400">
                                Baslik eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Yazi</label>
                            {footer.footerMainText ? (
                              <h1 className="text-lg">
                                {footer.footerMainText}
                              </h1>
                            ) : (
                              <p className="text-gray-400">Yazi eklemediniz.</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center my-4 space-x-4">
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Icon</label>
                            {footer.footerIcon ? (
                              <h1 className="text-lg">{footer.footerIcon}</h1>
                            ) : (
                              <p className="text-gray-400">Icon eklemediniz.</p>
                            )}
                          </div>
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Icon 1</label>
                            {footer.footerIcon1 ? (
                              <h1 className="text-lg">{footer.footerIcon1}</h1>
                            ) : (
                              <p className="text-gray-400">Icon eklemediniz.</p>
                            )}
                          </div>
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Icon 2</label>
                            {footer.footerIcon2 ? (
                              <h1 className="text-lg">{footer.footerIcon2}</h1>
                            ) : (
                              <p className="text-gray-400">Icon eklemediniz.</p>
                            )}
                          </div>
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Icon 3</label>
                            {footer.footerIcon3 ? (
                              <h1 className="text-lg">{footer.footerIcon3}</h1>
                            ) : (
                              <p className="text-gray-400">Icon eklemediniz.</p>
                            )}
                          </div>
                          <div className="p-4 flex justify-center items-center flex-col space-y-2 bg-zinc-700 border shadow-lg rounded-lg w-[200px] h-[100px]">
                            <label htmlFor="">Icon 4</label>
                            {footer.footerIcon4 ? (
                              <h1 className="text-lg">{footer.footerIcon4}</h1>
                            ) : (
                              <p className="text-gray-400">Icon eklemediniz.</p>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <div className="flex flex-row justify-center space-x-2">
                              <span className="">Baslik 1 {" => "}</span>
                              {footer.footerTitle ? (
                                <span className="">{footer.footerTitle}</span>
                              ) : (
                                <p className="text-gray-400">
                                  Baslik eklemediniz.
                                </p>
                              )}
                            </div>
                            <hr />
                            <div className="text-center grid grid-cols-3 gap-y-2">
                              <div>
                                <label htmlFor="">Link 1</label>
                                {footer.footerTitleLink ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitleLink}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 2</label>
                                {footer.footerTitleLink1 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitleLink1}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 3</label>
                                {footer.footerTitleLink2 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitleLink2}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 4</label>
                                {footer.footerTitleLink3 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitleLink3}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 5</label>
                                {footer.footerTitleLink4 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitleLink4}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <div className="flex flex-row justify-center space-x-2">
                              <span className="">Baslik 2 {" => "}</span>
                              {footer.footerTitle1 ? (
                                <span className="">{footer.footerTitle1}</span>
                              ) : (
                                <p className="text-gray-400">
                                  Baslik eklemediniz.
                                </p>
                              )}
                            </div>
                            <hr />
                            <div className="text-center grid grid-cols-3 gap-y-2">
                              <div>
                                <label htmlFor="">Link 1</label>
                                {footer.footerTitle1Link ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle1Link}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 2</label>
                                {footer.footerTitle1Link1 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle1Link1}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 3</label>
                                {footer.footerTitle1Link2 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle1Link2}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 4</label>
                                {footer.footerTitle1Link3 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle1Link3}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 5</label>
                                {footer.footerTitle1Link4 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle1Link4}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <div className="flex flex-row justify-center space-x-2">
                              <span className="">Baslik 3 {" => "}</span>
                              {footer.footerTitle2 ? (
                                <span className="">{footer.footerTitle2}</span>
                              ) : (
                                <p className="text-gray-400">
                                  Baslik eklemediniz.
                                </p>
                              )}
                            </div>
                            <hr />
                            <div className="text-center grid grid-cols-3 gap-y-2">
                              <div>
                                <label htmlFor="">Link 1</label>
                                {footer.footerTitle2Link ? (
                                  <h1 className="text-lg truncate">
                                    {footer.footerTitle2Link}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 2</label>
                                {footer.footerTitle2Link1 ? (
                                  <h1 className="text-lg truncate">
                                    {footer.footerTitle2Link1}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 3</label>
                                {footer.footerTitle2Link2 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle2Link2}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 4</label>
                                {footer.footerTitle2Link3 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle2Link3}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 5</label>
                                {footer.footerTitle2Link4 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle2Link4}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <div className="flex flex-row justify-center space-x-2">
                              <span className="">Baslik 4 {" => "}</span>
                              {footer.footerTitle3 ? (
                                <span className="">{footer.footerTitle3}</span>
                              ) : (
                                <p className="text-gray-400">
                                  Baslik eklemediniz.
                                </p>
                              )}
                            </div>
                            <hr />
                            <div className="text-center grid grid-cols-3 gap-y-2">
                              <div>
                                <label htmlFor="">Link 1</label>
                                {footer.footerTitle3Link ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle3Link}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 2</label>
                                {footer.footerTitle3Link1 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle3Link1}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 3</label>
                                {footer.footerTitle3Link2 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle3Link2}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 4</label>
                                {footer.footerTitle3Link3 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle3Link3}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">Link 5</label>
                                {footer.footerTitle3Link4 ? (
                                  <h1 className="text-lg">
                                    {footer.footerTitle3Link4}
                                  </h1>
                                ) : (
                                  <p className="text-gray-400">Link yok.</p>
                                )}
                              </div>
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
