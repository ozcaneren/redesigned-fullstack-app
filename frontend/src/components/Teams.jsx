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
  }

  useEffect(() => {
    getTeamTitles();
  }, []);

  return (
    <div>
      <div className="relative pb-8 pt-16">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div>
            {teamTitles.map((team, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                {team.mainTitle}
              </h2>
              <span>
                <p className="text-center mb-6 text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                  {team.mainText}
                </p>
              </span>
            </div>
            ))}
            <div className="flex flex-wrap flex-row pt-8 -mx-4 justify-center">
              {teamMembers.map((team, index) => (
                <div
                  key={index}
                  className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"
                >
                  <div className="relative py-2 overflow-hidden bg-gray-100 rounded-lg border border-gray-100 mb-12 hover-grayscale-0 wow fadeInUp">
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
                        {team.cardText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
