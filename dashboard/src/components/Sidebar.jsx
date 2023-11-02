import { Home } from "./sidebar/home";
import { General } from "./sidebar/general";
import { Contact } from "./sidebar/contact";
import { About } from "./sidebar/about";
import { Header } from "./sidebar/header";
import { Footer } from "./sidebar/footer";
import { Document } from "./sidebar/document";
import { Hero } from "./sidebar/hero";
import { Services } from "./sidebar/services";
import { Teams } from "./sidebar/teams";
import { Room } from "./sidebar/room";
import { Feature } from "./sidebar/feature";

function Sidebar() {
  return (
    <div>
      <div className="fixed flex flex-col top-0 left-0 w-64 pb-24 bg-white font-medium transition-all duration-300 z-10">
        <div className="overflow-y-auto overflow-x-auto flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="block mb-2">
              <div className="text-center">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="m-auto rounded-full object-cover w-28 h-28"
                />
                <h5 className="mt-4 text-xl font-semibold text-gray-600">
                  Admin Adminoglu
                </h5>
                <span className="text-gray-400 block">Admin</span>
              </div>
            </li>

            {/* menu kismi */}
            <li className="px-5 block">
              <div className="flex flex-row items-center h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Menü
                </div>
              </div>
            </li>
            <li>
              <Home />
            </li>
            <li>
              <General />
            </li>

            {/* sayfa kismi */}
            <li className="px-5 block">
              <div className="flex pb-4 flex-row items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <Contact />
            </li>
            <li>
              <About />
            </li>
            <li>
              <Header />
            </li>
            <li>
              <Footer />
            </li>
            <li>
              <Document />
            </li>

            {/* ana sayfa kismi */}
            <li className="px-5 block">
              <div className="flex flex-row pb-4 items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Ana Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <Hero />
            </li>
            <li>
              <Services />
            </li>
            <li>
              <Teams />
            </li>

            {/* icerik kismi */}
            <li className="px-5 block">
              <div className="flex pb-4 flex-row items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  İçerik Yönetimi
                </div>
              </div>
            </li>
            <li>
              <Room />
            </li>
            <li>
              <Feature />
            </li>
          </ul>

          <p className="px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
