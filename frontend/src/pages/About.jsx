import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/abouts");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-300">
      <Header />
      {data.map((about, index) => (
        <div key={index} className="pt-20">
          <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                    {about.cardTitle}
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    {about.cardText}
                  </p>
                </div>
                <div className="">
                  <button className="text-neutral-900 bg-blue-300 rounded border border-gray-200 p-2 text-lg font-medium inline-flex items-center">
                    <span>{about.cardButton}</span>
                  </button>
                </div>
              </div>
              <img
                alt="logo"
                width="420"
                height="120"
                src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x"
              />
            </div>
          </div>

          <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <img
                alt="logo"
                width="420"
                height="120"
                src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x"
              />
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                    {about.cardTitle1}
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    {about.cardText1}
                  </p>
                </div>
                <div className="">
                  <button className="text-neutral-900 bg-blue-300 rounded border border-gray-200 p-2 text-lg font-medium inline-flex items-center">
                    <span>{about.cardButton1}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                    {about.cardTitle2}
                  </h2>
                  <p className="text-black text-base md:text-lg">
                    {about.cardText2}
                  </p>
                </div>
                <div className="">
                  <button className="text-neutral-900 bg-blue-300 rounded border border-gray-200 p-2 text-lg font-medium inline-flex items-center">
                    <span>{about.cardButton2}</span>
                  </button>
                </div>
              </div>
              <img
                alt="logo"
                width="420"
                height="120"
                src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x"
              />
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
