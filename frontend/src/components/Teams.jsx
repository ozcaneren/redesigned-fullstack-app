import { Link } from "react-router-dom";
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
  }

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <div className="relative pb-8 ">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div>
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Team
              </h2>
            </div>
            <div className="flex flex-wrap flex-row -mx-4 justify-center">
              <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                  <div className="relative overflow-hidden px-6">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                      alt="title image"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      Joe Antonio
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light mb-4">
                      Founder CEO
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                  <div className="relative overflow-hidden px-6">
                    <img
                      src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                      alt="title image"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      Sarah Daeva
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light mb-4">
                      Chef
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                  <div className="relative overflow-hidden px-6">
                    <img
                      src="https://images.unsplash.com/photo-1637684666587-91e51b10a555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                      alt="title image"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      Daniel Emo
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light mb-4">
                      Sales manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                <div className="relative py-2 overflow-hidden bg-gray-200 rounded-lg border border-gray-300 mb-12 hover-grayscale-0 wow fadeInUp">
                  <div className="relative overflow-hidden px-6">
                    <img
                      src="https://images.unsplash.com/photo-1678292443037-cb7f8be1205b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoZWYlMjBwYXRpc3NlcmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                      alt="title image"
                    />
                  </div>
                  <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">
                      Toni Lana
                    </p>
                    <p className="text-gray-500 leading-relaxed font-light mb-4">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}