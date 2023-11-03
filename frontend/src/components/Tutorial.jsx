import { useState } from "react";

function Tutorial() {
  const [show, setShow] = useState(false);

  const shortText =
    "Loryma Resort, Bozburun Yarımadası’nın muhteşem deniz ve dağ manzarasına sahip 200 metre rakımdan Turunç Koyu'na bakan yemyeşil bir yamaç üzerinde konumlandırılmıştır. Doğal bahçe içinde, huzurlu, dingin ortamda 164 süit, özel rezidans daireler, 2 bar, 2 restoran, havuz, miniclub, açık park yeri gibi birçok hizmet birimi içermektedir. Ayrıca doğa sporu programları ve spa ve hamamında wellness, fitness ve yoga seansları sunan tesis, ‘’sürdürülebilir turizm’’ düşüncesiyle çevreye duyarlı ve kalıcı bir yapı olarak tasarlanmıştır. Otel, sunduğu seçkin hizmetleriyle ve dinlendirici tatil seçenekleriyle birlikte, Güney Ege’nin mükemmel doğası içinde aktif tatil olanaklarından yararlanmayı arzu eden ailelere ve her yaştan çiftlere, arkadaş gruplarına ve tek başına seyahat edenlere hitap eder.";

  const longText =
    "Loryma Resort, Bozburun Yarımadası’nın muhteşem deniz ve dağ manzarasına sahip 200 metre rakımdan Turunç Koyu'na bakan yemyeşil bir yamaç üzerinde konumlandırılmıştır. Doğal bahçe içinde, huzurlu, dingin ortamda 164 süit, özel rezidans daireler, 2 bar, 2 restoran, havuz, miniclub, açık park yeri gibi birçok hizmet birimi içermektedir. Ayrıca doğa sporu programları ve spa ve hamamında wellness, fitness ve yoga seansları sunan tesis, ‘’sürdürülebilir turizm’’ düşüncesiyle çevreye duyarlı ve kalıcı bir yapı olarak tasarlanmıştır. Otel, sunduğu seçkin hizmetleriyle ve dinlendirici tatil seçenekleriyle birlikte, Güney Ege’nin mükemmel doğası içinde aktif tatil olanaklarından yararlanmayı arzu eden ailelere ve her yaştan çiftlere, arkadaş gruplarına ve tek başına seyahat edenlere hitap eder.Bulunduğu yamacın doğal bitki örtüsü içerisinde kaybolan tesis, 24.000 metrekarelik bir alanı kapsamaktadır. Tesisin mimarisinde doğal taş gibi yöresel unsurları fonksiyonel, modern ve estetik bir mimari stil ile harmanlayan bir yaklaşım hakimdir. Tesisteki tüm yapıların izlediği yalın mimari çizgi, yoğun ve nitelikli taş duvar işçiliğiyle yumuşatılmıştır. Böylece Loryma Resort Hotel, entegre edildiği doğal çevresiyle, yani Turunç Koyu'nun çam ormanı ve zeytinliklerle bezenmiş yamaç bölgesiyle ahenk içindedir. Loryma misafirleri, sağlıklı beslenmenin, tazeliğin ve lezzetin Loryma mutfaklarında çok önemli bir yere sahip olduğunu bilirler. Otel kendi doğal sızma zeytinyağını üretmekte, kendi bahçesinde organik sebze yetiştiriciliği yapmaktadır. Bu taze ve mevsimsel seçenekler Loryma’nın zengin büfesinde ve Loryma Bistro’nun A La Carte servisinde sunulmaktadır. 1989 senesinde hizmete açılan otel 1997 yılında genişletilmiş, 2008 ile 2012 arasında ve son olarak 2018’de yapılan kapsamlı yenileme çalışmalarıyla son halini almış";

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-l from-[#0D3C5A] to-[#6C96B7] px-16 py-20 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="py-6 px-4 flex justify-center items-center flex-row gap-x-8">
            <div className="border-[16px] rounded-full border-[#89B022]">
              <img
                src="https://cache.marriott.com/marriottassets/marriott/PMIXR/pmixr-exterior-4478-hor-feat.jpg"
                className="w-[270px] h-[270px] rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="border-[16px] rounded-full border-[#89B022]">
              <img
                src="https://cache.marriott.com/marriottassets/marriott/PMIXR/pmixr-exterior-4478-hor-feat.jpg"
                className="w-[270px] h-[270px] rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-3xl mb-8 text-white">
              Loryma Resort Hotel, Doğa İle Dost Bir Tatil…
            </h1>
            <span className="text-white text-[18px]">
              {show ? longText : shortText}
            </span>
            <button
              onClick={toggleShow}
              className="block mt-4 bg-[#89B022] text-white py-2 px-4 rounded-lg"
            >
              Devamını Oku
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
