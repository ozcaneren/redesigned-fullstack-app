import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiLogoGooglePlus } from "react-icons/bi";

export default function Footer() {
  const { language } = useLanguage();

  const [footerIcon, setFooterIcon] = useState([]);
  const [footerText, setFooterText] = useState([]);
  const [footerTitle, setFooterTitle] = useState([]);

  const getFooterIcons = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/icons"
      );
      setFooterIcon(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterIcons();
  }, []);

  const getFooterTexts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/texts"
      );
      setFooterText(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTexts();
  }, []);

  const getFooterTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/links"
      );
      setFooterTitle(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTitles();
  }, []);

  return (
    <>
      <footer className="bg-gray-200">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              {footerText.map((footer, index) => (
                <div key={index}>
                  <div className="text-teal-600 font-semibold text-2xl">
                    {language === "tr"
                      ? footer.footerTitle
                      : footer.footerTitle_en}
                  </div>
                  <p className="mt-4 max-w-xs text-gray-500">
                    {language === "tr"
                      ? footer.footerText
                      : footer.footerText_en}
                  </p>
                </div>
              ))}
              <ul className="mt-8 flex gap-6">
                {footerIcon.map((footer, index) => (
                  <li key={index}>
                    <Link
                      to={
                        footer.footerIcon === "facebook"
                          ? "https://www.facebook.com"
                          : footer.footerIcon === "instagram"
                          ? "https://www.instagram.com"
                          : footer.footerIcon === "twitter"
                          ? "https://www.twitter.com"
                          : footer.footerIcon === "github"
                          ? "https://www.github.com"
                          : footer.footerIcon === "google"
                          ? "https://www.google.com"
                          : ""
                      }
                      className="text-modalLabelText transition hover:opacity-75"
                    >
                      <span className="sr-only">{footer.footerIcon}</span>
                      {footer.footerIcon === "facebook" ? (
                        <BsFacebook size={20} />
                      ) : footer.footerIcon === "instagram" ? (
                        <BsInstagram size={20} />
                      ) : footer.footerIcon === "twitter" ? (
                        <BsTwitter size={20} />
                      ) : footer.footerIcon === "github" ? (
                        <BsGithub size={20} />
                      ) : footer.footerIcon === "google" ? (
                        <BiLogoGooglePlus size={20} />
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              {footerTitle.map((footer, index) => (
                <div key={index}>
                  <p className="font-medium text-gray-900">
                    {language === "tr"
                      ? footer.footerLinkTitle
                      : footer.footerLinkTitle_en}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li className="flex flex-col">
                      {footer.footerLinkText.map((text) => (
                        <React.Fragment key={text}>
                          <Link
                            to={
                              text === "deneme"
                                ? "/documents"
                                : text === "Sıkça Sorulan Sorular"
                                ? "/faq"
                                : text === "Hakkımızda"
                                ? "/about"
                                : text === "İletişim"
                                ? "/contact"
                                : text === "Hizmetlerimiz"
                                ? "/services"
                                : text === "Etkinliklerimiz"
                                ? "/events"
                                : text === "Foto Galeri"
                                ? "/gallery"
                                : "/"
                            }
                            className="text-modalLabelText transition hover:opacity-75"
                          >
                            {text}
                          </Link>
                        </React.Fragment>
                      ))}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
