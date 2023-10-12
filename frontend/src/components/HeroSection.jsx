import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const [hero, setHero] = useState([]);

  const getHero = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/heroes");
      setHero(response.data.data);
    } catch (error) {
      console.error("Error fetching herosection:", error);
    }
  };

  useEffect(() => {
    getHero();
  }, []);

  return (
    <div>
      <header className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative">
          <div className="h-screen bg-black flex items-center justify-center bg-[url('http://www.clubaida.com.tr//tema/genel/uploads/slider/1.jpg')]">
            <div className="absolute inset-0 bg-indigo-600/20"></div>
            {hero.map((hero, index) => (
            <div key={index} className="mx-2 text-center z-10">
              <h1 className="text-white font-extrabold text-4xl xs:text-5xl md:text-6xl">
                <span className="">
                  {language === "tr"
                    ? hero.mainText
                    : hero.mainText_en
                  }
                </span>
              </h1>
              <h2 className="text-white font-bold text-3xl xs:text-4xl md:text-5xl mt-4 leading-tight">
                <span className="">
                  {language === "tr"
                    ? hero.subText
                    : hero.subText_en
                  }
                </span>
              </h2>
            </div>
            ))}
          </div>
        </header>
    </div>
  )
}
