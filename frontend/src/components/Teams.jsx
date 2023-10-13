import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Teams() {
  const { language } = useLanguage();
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/teams");
      setTeams(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <div className="relative pb-8 ">
        {teams.map((team, index) => (
          <div key={index} className="container xl:max-w-6xl mx-auto px-4">
            {team.title || team.title_en || team.cardTitle || team.cardText ? (
              <div>
                <div>
                  <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    {language === "tr" ? team.mainTitle : team.mainTitle_en}
                  </h2>
                  <span>
                    <p className="text-center mb-6 text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                      {language === "tr" ? team.mainText : team.mainText_en}
                    </p>
                  </span>
                </div>
                <div className="flex flex-wrap flex-row -mx-4 justify-center">
                  {team.cardTitle || team.cardText ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText
                              : team.cardText_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {team.cardTitle1 || team.cardText1 ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon1}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle1}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText1
                              : team.cardText1_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {team.cardTitle2 || team.cardText2 ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon2}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle2}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText2
                              : team.cardText2_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {team.cardTitle3 || team.cardText3 ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon3}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle3}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText3
                              : team.cardText3_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {team.cardTitle4 || team.cardText4 ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon4}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle4}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText4
                              : team.cardText4_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {team.cardTitle5 || team.cardText5 ? (
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                      <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                        <div className="relative overflow-hidden px-6">
                          <img
                            src={team.cardIcon5}
                            className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50"
                            alt="title image"
                          />
                        </div>
                        <div className="pt-6 text-center">
                          <p className="text-lg leading-normal font-bold mb-1">
                            {team.cardTitle5}
                          </p>
                          <p className="text-gray-500 leading-relaxed font-light mb-4">
                            {language === "tr"
                              ? team.cardText5
                              : team.cardText5_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
