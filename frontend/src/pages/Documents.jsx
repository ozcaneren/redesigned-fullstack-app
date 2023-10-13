import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLanguage } from "../LanguageContext";

export default function Documents() {
  const { language } = useLanguage();

  return (
    <div className="">
      <Header />
      <div className="mt-20 pb-12 bg-white">
        <div className="">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="md:text-5xl text-3xl font-semibold tracking-tight">
                Belgelerimiz
              </h2>
              <div className="flex justify-center">
                <p className="md:w-1/2 mt-6 text-xl/8 font-medium text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">

              <div>
                <div className="p-7 rounded-xl bg-amber-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    Sürdürülebilirlik Raporu
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun sürdürülebilirlik performansını ve geleceğe yönelik
                    hedeflerini paylaşmak amacıyla hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>

              <div>
                <div className="p-7 rounded-xl bg-emerald-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    Çevre Koruma Ve Atık Yönetimi Politikası
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun çevre
                    performansını iyileştirmek ve çevre üzerindeki etkilerini
                    azaltmak amacıyla hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>

              <div>
                <div className="p-7 rounded-xl bg-red-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    Gıda Güvenliği Politikası
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun gıda güvenliği performansını iyileştirmek ve gıda
                    güvenliği etkilerini azaltmak amacıyla
                    hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>

              <div>
                <div className="p-7 rounded-xl bg-red-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    Enerji Verimliliği Politikası
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun enerji verimliliği performansını iyileştirmek ve
                    enerji verimliliği etkilerini azaltmak amacıyla
                    hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>

              <div>
                <div className="p-7 rounded-xl bg-amber-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    İş Sağlığı Ve Güvenliği Politikası
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun iş sağlığı performansını iyileştirmek
                    ve iş sağlığı ve güvenliği etkilerini azaltmak amacıyla
                    hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>

              <div>
                <div className="p-7 rounded-xl bg-emerald-100">
                  <h3 className="text-xl font-semibold mb-7 capitalize">
                    Su Yönetimi Politikası
                  </h3>
                  <p className="font-medium leading-7 text-gray-500 mb-6 line-clamp-2">
                    Kurumun su yönetimi performansını iyileştirmek ve su
                    yönetimi etkilerini azaltmak amacıyla hazırlanmıştır.
                  </p>
                  <a
                    href="#"
                    className="py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-purple-500 hover:text-white transition-all duration-500"
                  >
                    {language === "tr" ? "İndir" : "Download"}
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
