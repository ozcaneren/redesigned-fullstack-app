import Link from "next/link";
import { getHeaderData, getFooterData, getRoomsData } from "./api";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { BiLogoGooglePlus } from "react-icons/bi";
import {
  PiTelevisionSimpleBold,
  PiToiletBold,
  PiBathtubBold,
} from "react-icons/pi";
import { BiWifi, BiFridge } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import {
  RiCustomerService2Fill,
  RiSafe2Fill,
  RiTShirtAirFill,
} from "react-icons/ri";
import { BsTelephoneOutbound } from "react-icons/bs";

export async function HeaderContent() {
  const header = await getHeaderData();
  return (
    <>
      {header.data.map((header, index) => (
        <nav
          key={index}
          className="fixed top-0 left-0 w-full bg-gray-200 border-gray-200"
        >
          <div className="h-14 flex flex-wrap justify-between items-center mx-auto z-20 max-w-screen-xl">
            <Link href="/">
              <span className="flex items-center">
                <span className="self-center text-emerald-800 text-xl font-semibold whitespace-nowrap">
                  {header.headerTitle}
                </span>
              </span>
            </Link>
          </div>
        </nav>
      ))}
    </>
  );
}

export async function FooterContent() {
  const footer = await getFooterData();
  return (
    <>
      <div className="w-full bg-gray-200">
        {footer.data.map((footer, index) => (
          <footer
            key={index}
            className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="text-teal-600 font-semibold text-2xl">
                  {footer.footerMainTitle}
                </div>
                <p className="mt-4 max-w-xs text-gray-500">
                  {footer.footerMainText}
                </p>
                <ul className="mt-8 flex gap-6">
                  <li>
                    <Link
                      href={
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
                      href={
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
                      href={
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
                      href={
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
                      href={
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
                    {footer.footerTitle1}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link1}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link2}
                      </Link>
                    </li>
                    <li>
                      <a
                        href={
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
                        {footer.footerTitle1Link3}
                      </a>
                    </li>
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link4}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {footer.footerTitle1}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link1}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link2}
                      </Link>
                    </li>
                    <li>
                      <a
                        href={
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
                        {footer.footerTitle1Link3}
                      </a>
                    </li>
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link4}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {footer.footerTitle1}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link1}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link2}
                      </Link>
                    </li>
                    <li>
                      <a
                        href={
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
                        {footer.footerTitle1Link3}
                      </a>
                    </li>
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link4}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {footer.footerTitle1}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link1}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link2}
                      </Link>
                    </li>
                    <li>
                      <a
                        href={
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
                        {footer.footerTitle1Link3}
                      </a>
                    </li>
                    <li>
                      <Link
                        href={
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
                        {footer.footerTitle1Link4}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        ))}
      </div>
    </>
  );
}

export async function RoomsContent() {
  const rooms = await getRoomsData();
  function renderWifiIcon(room) {
    if (room.roomFeatures.includes("wifi")) {
      return <BiWifi />;
    }
    return null;
  }

  function renderTvIcon(room) {
    if (room.roomFeatures.includes("tv")) {
      return <PiTelevisionSimpleBold />;
    }
    return null;
  }

  function renderAirConditioningIcon(room) {
    if (room.roomFeatures.includes("klima")) {
      return <TbAirConditioning />;
    }
    return null;
  }

  function renderFridgeIcon(room) {
    if (room.roomFeatures.includes("mini bar")) {
      return <BiFridge />;
    }
    return null;
  }

  function renderCustomerServiceIcon(room) {
    if (room.roomFeatures.includes("7/24 servis")) {
      return <RiCustomerService2Fill />;
    }
    return null;
  }

  function renderTelephoneIcon(room) {
    if (room.roomFeatures.includes("telefon")) {
      return <BsTelephoneOutbound />;
    }
    return null;
  }

  function renderToiletIcon(room) {
    if (room.roomFeatures.includes("wc")) {
      return <PiToiletBold />;
    }
    return null;
  }

  function renderBathtubIcon(room) {
    if (room.roomFeatures.includes("banyo")) {
      return <PiBathtubBold />;
    }
    return null;
  }

  function renderSafeIcon(room) {
    if (room.roomFeatures.includes("elektronik kasa")) {
      return <RiSafe2Fill />;
    }
    return null;
  }

  function renderAirfryIcon(room) {
    if (room.roomFeatures.includes("airfryer")) {
      return <RiTShirtAirFill />;
    }
    return null;
  }
  return (
    <div>
      {rooms.data.map((room, index) => (
        <div key={index} className="">
          <div className="">
            <div className="pt-14">
              <div className="grid grid-cols-2 gap-8 justify-center mt-14">
                <div className="">
                  <div className="max-w-md bg-gray-200 p-2 rounded overflow-hidden shadow-lg hover:shadow-xl">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                      alt="Property Image"
                    />
                    <div className="px-4 py-4">
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-gray-900 truncate">
                          {room.roomTitle}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                          {renderWifiIcon(room)}
                          {renderTvIcon(room)}
                          {renderAirConditioningIcon(room)}
                          {renderFridgeIcon(room)}
                          {renderCustomerServiceIcon(room)}
                          {renderTelephoneIcon(room)}
                          {renderToiletIcon(room)}
                          {renderBathtubIcon(room)}
                          {renderSafeIcon(room)}
                          {renderAirfryIcon(room)}
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-3xl font-extrabold text-blue-600">
                          XYZ TL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
