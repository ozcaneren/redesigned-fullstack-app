import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiLogoGooglePlus } from "react-icons/bi";

export default function Footer() {
  const [footer, setFooter] = useState([]);

  const { language } = useLanguage();

  const getFooter = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/footers");
      setFooter(response.data.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooter();
  }, []);

  return (
    <>
      <footer className="bg-gray-200">
        {footer.map((footer, index) => (
          <div
            key={index}
            className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="text-teal-600 font-semibold text-2xl">
                  {language === "tr"
                    ? footer.footerMainTitle
                    : footer.footerMainTitle_en}
                </div>
                <p className="mt-4 max-w-xs text-gray-500">
                  {language === "tr"
                    ? footer.footerMainText
                    : footer.footerMainText_en}
                </p>
                <ul className="mt-8 flex gap-6">
                  <li>
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
                      className="text-gray-700 transition hover:opacity-75"
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

                  <li>
                    <Link
                      to={
                        footer.footerIcon1 === "facebook"
                          ? "https://www.facebook.com"
                          : footer.footerIcon1 === "instagram"
                          ? "https://www.instagram.com"
                          : footer.footerIcon1 === "twitter"
                          ? "https://www.twitter.com"
                          : footer.footerIcon1 === "github"
                          ? "https://www.github.com"
                          : footer.footerIcon1 === "google"
                          ? "https://www.google.com"
                          : ""
                      }
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{footer.footerIcon1}</span>

                      {footer.footerIcon1 === "facebook" ? (
                        <BsFacebook size={20} />
                      ) : footer.footerIcon1 === "instagram" ? (
                        <BsInstagram size={20} />
                      ) : footer.footerIcon1 === "twitter" ? (
                        <BsTwitter size={20} />
                      ) : footer.footerIcon1 === "github" ? (
                        <BsGithub size={20} />
                      ) : footer.footerIcon1 === "google" ? (
                        <BiLogoGooglePlus size={20} />
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={
                        footer.footerIcon2 === "facebook"
                          ? "https://www.facebook.com"
                          : footer.footerIcon2 === "instagram"
                          ? "https://www.instagram.com"
                          : footer.footerIcon2 === "twitter"
                          ? "https://www.twitter.com"
                          : footer.footerIcon2 === "github"
                          ? "https://www.github.com"
                          : footer.footerIcon2 === "google"
                          ? "https://www.google.com"
                          : ""
                      }
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{footer.footerIcon2}</span>

                      {footer.footerIcon2 === "facebook" ? (
                        <BsFacebook size={20} />
                      ) : footer.footerIcon2 === "instagram" ? (
                        <BsInstagram size={20} />
                      ) : footer.footerIcon2 === "twitter" ? (
                        <BsTwitter size={20} />
                      ) : footer.footerIcon2 === "github" ? (
                        <BsGithub size={20} />
                      ) : footer.footerIcon2 === "google" ? (
                        <BiLogoGooglePlus size={20} />
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={
                        footer.footerIcon3 === "facebook"
                          ? "https://www.facebook.com"
                          : footer.footerIcon3 === "instagram"
                          ? "https://www.instagram.com"
                          : footer.footerIcon3 === "twitter"
                          ? "https://www.twitter.com"
                          : footer.footerIcon3 === "github"
                          ? "https://www.github.com"
                          : footer.footerIcon3 === "google"
                          ? "https://www.google.com"
                          : ""
                      }
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{footer.footerIcon3}</span>

                      {footer.footerIcon3 === "facebook" ? (
                        <BsFacebook size={20} />
                      ) : footer.footerIcon3 === "instagram" ? (
                        <BsInstagram size={20} />
                      ) : footer.footerIcon3 === "twitter" ? (
                        <BsTwitter size={20} />
                      ) : footer.footerIcon3 === "github" ? (
                        <BsGithub size={20} />
                      ) : footer.footerIcon3 === "google" ? (
                        <BiLogoGooglePlus size={20} />
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={
                        footer.footerIcon4 === "facebook"
                          ? "https://www.facebook.com"
                          : footer.footerIcon4 === "instagram"
                          ? "https://www.instagram.com"
                          : footer.footerIcon4 === "twitter"
                          ? "https://www.twitter.com"
                          : footer.footerIcon4 === "github"
                          ? "https://www.github.com"
                          : footer.footerIcon4 === "google"
                          ? "https://www.google.com"
                          : ""
                      }
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{footer.footerIcon4}</span>

                      {footer.footerIcon4 === "facebook" ? (
                        <BsFacebook size={20} />
                      ) : footer.footerIcon4 === "instagram" ? (
                        <BsInstagram size={20} />
                      ) : footer.footerIcon4 === "twitter" ? (
                        <BsTwitter size={20} />
                      ) : footer.footerIcon4 === "github" ? (
                        <BsGithub size={20} />
                      ) : footer.footerIcon4 === "google" ? (
                        <BiLogoGooglePlus size={20} />
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-gray-900">
                    {language === "tr"
                      ? footer.footerTitle
                      : footer.footerTitle_en}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to={
                          footer.footerTitleLink === "Belgeler"
                            ? "/documents"
                            : footer.footerTitleLink === "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitleLink === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitleLink === "İletişim"
                            ? "/contact"
                            : footer.footerTitleLink === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitleLink === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitleLink === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitleLink
                          : footer.footerTitleLink_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitleLink1 === "Belgeler"
                            ? "/documents"
                            : footer.footerTitleLink1 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitleLink1 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitleLink1 === "İletişim"
                            ? "/contact"
                            : footer.footerTitleLink1 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitleLink1 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitleLink1 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitleLink1
                          : footer.footerTitleLink1_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitleLink2 === "Belgeler"
                            ? "/documents"
                            : footer.footerTitleLink2 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitleLink2 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitleLink2 === "İletişim"
                            ? "/contact"
                            : footer.footerTitleLink2 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitleLink2 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitleLink2 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitleLink2
                          : footer.footerTitleLink2_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitleLink3 === "Belgeler"
                            ? "/documents"
                            : footer.footerTitleLink3 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitleLink3 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitleLink3 === "İletişim"
                            ? "/contact"
                            : footer.footerTitleLink3 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitleLink3 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitleLink3 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitleLink3
                          : footer.footerTitleLink3_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitleLink4 === "Belgeler"
                            ? "/documents"
                            : footer.footerTitleLink4 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitleLink4 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitleLink4 === "İletişim"
                            ? "/contact"
                            : footer.footerTitleLink4 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitleLink4 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitleLink4 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitleLink4
                          : footer.footerTitleLink4_en}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {language === "tr"
                      ? footer.footerTitle1
                      : footer.footerTitle1_en}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to={
                          footer.footerTitle1Link === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle1Link === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle1Link === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle1Link === "İletişim"
                            ? "/contact"
                            : footer.footerTitle1Link === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle1Link === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle1Link === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle1Link
                          : footer.footerTitle1Link_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle1Link1 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle1Link1 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle1Link1 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle1Link1 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle1Link1 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle1Link1 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle1Link1 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle1Link1
                          : footer.footerTitle1Link1_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle1Link2 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle1Link2 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle1Link2 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle1Link2 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle1Link2 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle1Link2 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle1Link2 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle1Link2
                          : footer.footerTitle1Link2_en}
                      </Link>
                    </li>
                    <li>
                      <a
                        to={
                          footer.footerTitle1Link3 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle1Link3 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle1Link3 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle1Link3 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle1Link3 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle1Link3 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle1Link3 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle1Link3
                          : footer.footerTitle1Link3_en}
                      </a>
                    </li>
                    <li>
                      <Link
                        to={
                          footer.footerTitle1Link4 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle1Link4 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle1Link4 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle1Link4 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle1Link4 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle1Link4 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle1Link4 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle1Link4
                          : footer.footerTitle1Link4_en}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {language === "tr"
                      ? footer.footerTitle2
                      : footer.footerTitle2_en}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to={
                          footer.footerTitle2Link === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle2Link ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle2Link ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle2Link ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle2Link === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle2Link === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle2Link === "İletişim"
                            ? "/contact"
                            : footer.footerTitle2Link === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle2Link === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle2Link === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700  transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle2Link.substring(0, 17)
                          : footer.footerTitle2Link_en.substring(0, 17)}
                        ...
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle2Link1 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle2Link1 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle2Link1 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle2Link1 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle2Link1 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle2Link1 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle2Link1 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle2Link1 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle2Link1 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle2Link1 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle2Link1.substring(0, 17)
                          : footer.footerTitle2Link1_en.substring(0, 17)}
                        ...
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle2Link2 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle2Link2 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle2Link2 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle2Link2 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle2Link2 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle2Link2 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle2Link2 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle2Link2 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle2Link2 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle2Link2 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle2Link2.substring(0, 17)
                          : footer.footerTitle2Link2_en.substring(0, 17)}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          footer.footerTitle2Link === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle2Link3 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle2Link3 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle2Link3 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle2Link3 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle2Link3 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle2Link3 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle2Link3 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle2Link3 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle2Link3 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle2Link3.substring(0, 17)
                          : footer.footerTitle2Link3_en.substring(0, 17)}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          footer.footerTitle2Link4 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle2Link4 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle2Link4 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle2Link4 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle2Link4 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle2Link4 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle2Link4 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle2Link4 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle2Link4 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle2Link4 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle2Link4.substring(0, 17)
                          : footer.footerTitle2Link4_en.substring(0, 17)}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {language === "tr"
                      ? footer.footerTitle3
                      : footer.footerTitle3_en}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        to={
                          footer.footerTitle3Link === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle3Link ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle3Link ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle3Link ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle3Link === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle3Link === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle3Link === "İletişim"
                            ? "/contact"
                            : footer.footerTitle3Link === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle3Link === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle3Link === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle3Link
                          : footer.footerTitle3Link_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle3Link1 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle3Link1 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle3Link1 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle3Link1 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle3Link1 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle3Link1 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle3Link1 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle3Link1 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle3Link1 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle3Link1 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle3Link1
                          : footer.footerTitle3Link1_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle3Link2 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle3Link2 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle3Link2 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle3Link2 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle3Link2 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle3Link2 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle3Link2 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle3Link2 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle3Link2 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle3Link2 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle3Link2
                          : footer.footerTitle3Link2_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle3Link3 === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle3Link3 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle3Link3 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle3Link3 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle3Link3 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle3Link3 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle3Link3 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle3Link3 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle3Link3 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle3Link3 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle3Link3
                          : footer.footerTitle3Link3_en}
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={
                          footer.footerTitle3Link === "1+1 Oda"
                            ? "/rooms"
                            : footer.footerTitle3Link4 ===
                              "Sürdürülebilirlik Raporlaması"
                            ? "/documents"
                            : footer.footerTitle3Link4 ===
                              "Sıkça Sorulan Sorular"
                            ? "/faq"
                            : footer.footerTitle3Link4 ===
                              "Çevre ve Atık Yönetimi"
                            ? "/documents"
                            : footer.footerTitle3Link4 === "Kral Dairesi"
                            ? "/rooms"
                            : footer.footerTitle3Link4 === "Hakkımızda"
                            ? "/about"
                            : footer.footerTitle3Link4 === "İletişim"
                            ? "/contact"
                            : footer.footerTitle3Link4 === "Hizmetlerimiz"
                            ? "/services"
                            : footer.footerTitle3Link4 === "Etkinliklerimiz"
                            ? "/events"
                            : footer.footerTitle3Link4 === "Foto Galeri"
                            ? "/gallery"
                            : "/"
                        }
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {language === "tr"
                          ? footer.footerTitle3Link4
                          : footer.footerTitle3Link4_en}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </footer>
    </>
  );
}
