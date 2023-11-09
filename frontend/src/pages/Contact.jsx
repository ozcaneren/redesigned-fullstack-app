import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto">
        <div className="">
          <div className="py-14">
            <div className="mt-20 mb-10">
              <div className="flex flex-row justify-center items-center gap-x-6">
                <div className="max-w-4xl">
                  <h1 className="text-[#0C3E7F] text-3xl uppercase mb-4">
                    İLETİŞİM
                  </h1>
                  <p>
                    Loryma Resort Hotel, Marmaris’in merkezinden güneybatı
                    yönünde 18 km uzaklıktadır. Otel, Marmaris – İçmeler –
                    Turunç güzergâhı üzerinde bulunup, Turunç yerleşim merkezine
                    1,5 km’lik mesafede ve Turunç Koyu’nun üzerindeki yamaçta
                    konumlandırılmıştır. <br className="mb-2" />
                    GPS: 36 46 43N /28 14 35E <br className="mb-2" />
                    Plaja ve Turunç merkezine sabah saat 10.00 ile akşamüstü
                    saat 18.00 arasında düzenli olarak ücretsiz servishizmetimiz
                    mevcuttur. <br className="mb-2" />
                    Marmaris Otogarı ve Dalaman Havalimanı’na geliş-gidişler
                    için ücretli transfer hizmeti sağlanmaktadır. Bilgi ve
                    rezervasyon için info(at)loryma.com ile irtibata geçiniz.{" "}
                    <br /> Otelin girişindeki dolmuş durağından misafirlerimiz
                    Turunç-Marmaris dolmuşlarıyla İçmeler’e ve Marmaris şehir
                    merkezine ulaşabilirler. <br className="mb-2" />{" "}
                    Misafirlerimiz ayrıca Turunç Tekneciler Kooperatifi’nin
                    sunduğu güzergahlardan faydalanabilir, Turunç İskelesi’nden
                    Marmaris merkezdeki Saman İskelesi’ne veya Turunç’a komşu
                    güzel Amos ve Kumlubükü koylarına kolaylıkla ulaşabilirler.{" "}
                    <br className="mb-2" /> Tesis içindeki açık otopark
                    resepsiyon binasına direkt komşu olup 24 saat gözetim
                    altındadır. Otopark kullanımı ücretsizdir.
                  </p>
                </div>
                <div className="mt-12">
                  <img
                    src="https://picsum.photos/820/550"
                    className="w-[640px] h-[360px] rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-20 pt-10 pb-10">
              <div className="max-w-6xl">
                <h1 className="text-3xl text-[#0C3E7F] mb-4">Bize Ulaşın</h1>
                <form action="">
                  <div className="flex flex-row space-x-6">
                    <div>
                      <label htmlFor="" className="text-[#667F24]">
                        İsim - Soyisim
                      </label>
                      <input
                        type="text"
                        placeholder="İsim - Soyisim"
                        className="block border p-2 text-black placeholder-neutral-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-[#667F24]">
                        Telefon
                      </label>
                      <input
                        type="text"
                        placeholder="Telefon"
                        className="block border p-2 text-black placeholder-neutral-600"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row space-x-6">
                    <div>
                      <label htmlFor="" className="text-[#667F24]">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="block border text-black placeholder-neutral-600 p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-[#667F24]">
                        Konu
                      </label>
                      <input
                        type="text"
                        placeholder="Konu"
                        className="block border text-black placeholder-neutral-600 p-2"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <label htmlFor="" className="text-[#667F24]">
                        Mesaj
                      </label>
                      <textarea
                        type="text"
                        placeholder="Mesaj..."
                        className="block border w-full text-black placeholder-neutral-600 p-2"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="">
                <h1 className="text-3xl text-[#0C3E7F]">İletişim Bilgileri</h1>
                <div className="flex flex-row space-x-1 mt-5 mb-2">
                  <h1 className="font-semibold text-lime-700">Adres:</h1>
                  <p>
                    Loryma Resort | Turunç Mahallesi | 93.Sk. No. 2A | 48740
                    Marmaris
                  </p>
                </div>
                <div className="flex flex-row space-x-1">
                  <h1 className="font-semibold text-lime-700">Rezervasyon:</h1>
                  <p>+90 252 476 72 20</p>
                </div>
                <div className="flex flex-row space-x-3 mt-10">
                  <div className="p-2 border border-blue-800 rounded">
                    <BsFacebook />
                  </div>
                  <div className="p-2 border border-blue-800 rounded">
                    <BsInstagram />
                  </div>
                  <div className="p-2 border border-blue-800 rounded">
                    <BsYoutube />
                  </div>
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
