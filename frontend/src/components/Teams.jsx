import axios from "axios";
import { useEffect, useState } from "react";

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamTitles, setTeamTitles] = useState([]);

  const getTeamMembers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/teams/members"
      );
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/teams/descriptions"
      );
      setTeamTitles(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    getTeamTitles();
  }, []);

  return (
    <div className="bg-center bg-fixed bg-no-repeat bg-cover relative pt-8 pb-16">
      <div className="flex items-center justify-center bg-[url('https://www.sketchappsources.com/resources/source-image/40-craftsman-tools-icon-trinhho.jpg')] bg-center">
      <div className="absolute inset-0 bg-gray-100/90"></div>
        <div className="container xl:max-w-6xl mx-auto px-4 z-50">
          <div>
            {teamTitles.map((team, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                  {team.mainTitle}
                </h2>
                <span>
                  <p className="text-center mb-6 text-gray-700 leading-relaxed text-xl mx-auto pb-2">
                    {team.mainText}
                  </p>
                </span>
              </div>
            ))}
            <div className="flex flex-wrap flex-row pt-12 -mx-4 justify-center">
              <div className="">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                  <div className="grid gap-12 items-center md:grid-cols-3">
                    {teamMembers.map((team, index) => (
                      <div key={index} className="space-y-4 text-center">
                        <img
                          className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                          src={team.cardIcon}
                          alt="woman"
                          loading="lazy"
                          width="640"
                          height="805"
                        />
                        <div className="">
                          <h4 className="text-2xl">{team.cardTitle}</h4>
                          <span className="block text-base text-gray-800">
                            {team.cardText}
                          </span>
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
    </div>
  );
}
