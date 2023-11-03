import { useState } from "react";
function Services() {
  const [image, setImage] = useState(
    "https://www.insplosion.com/blog/wp-content/uploads/2020/12/The-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg"
  );
  const image1 =
    "https://www.insplosion.com/blog/wp-content/uploads/2020/12/The-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg";
  const image2 =
    "https://www.gannett-cdn.com/presto/2019/02/27/USAT/52c2114d-9f01-48b4-b9fd-0f29fb4bd542-ang_Oceanfront_Infinity_Pool_at_Anguillas_Zemi_Beach_House_Hotel__Spa_is_the_go-to_for_relaxation_Credit_Dylan_Cross_Tambourine.jpg?crop=3999,2249,x0,y303&width=3200&height=1800&format=pjpg&auto=webp";
  const image3 =
    "https://gafollowers.com/wp-content/uploads/2015/08/PTspawetroom_hi.jpg";
  const image4 =
    "https://messonghibeach.gr/wp-content/uploads/2015/01/1200P5230012-Copy.jpg";

  const handleImage = (image) => () => {
    setImage(image);
  };
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col mt-12">
        <div>
          <h1 className="text-center text-3xl text-[#0C3B59]">
            Loryma Hizmetleri
          </h1>
          <p className="text-base mt-6 text-[17px]">
            Loryma Resort misafirleri, bakımlı doğal bahçeler içine
            yerleştirilmiş şık mekanlar ve ayrı binalara dağıtılmış, yalın
            stilde döşenmiş kullanışlı odalarda konaklarlar. Geniş spa
            alanı,yüzme havuzları ve sosyal mekanlarımız, tatillerinde kaliteli
            vakit geçirmek ve dinginliğin tadını çıkarmak isteyen konuklarımızı
            hizmete bekliyorlar. <br />
            <br />
            Sürdürülebilir turizme gönül vermiş bir işletme olarak
            konuklarımızın tatillerini güzel tesisimizin dışında da
            geçirmelerini, yöremizin doğal ve kültürel güzelliklerini tanımaya
            vakit ayırmalarını ve aktif olarak keşfetmelerini umuyor ve teşvik
            ediyoruz. Bunların başında her biri ayrı güzellikte koylarla
            bezenmiş Güney Ege kıyılarımız ve özellikle Karia Yolu’nun Bozburun
            Yarımadası etabı gelir.
          </p>
        </div>
        <div className="grid grid-cols-2 my-12">
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt=""
              className="w-[700px] h-[500px] rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center ml-4 space-y-6">
            <div
              onClick={handleImage(image1)}
              className="cursor-pointer flex justify-center items-center shadow-md rounded-lg py-3 px-6"
            >
              <img
                src="https://www.oasys-me.com/images/restaurant.svg"
                alt=""
                className="w-[50px] h-[50px] ml-3"
              />
              <div className="ml-8">
                <h1 className="text-xl text-blue-800 mb-1">Restaurant</h1>
                <p className="text-[15px] text-left text-gray-600">
                  Loryma mutfaklarında tazeliğin ve lezzetin önemi ilk sırada.
                  Konuklarımıza kendi yetiştirdiğimiz sebzeler ve kendi
                  zeytinyağımızı sunmaktan mutluluk duyarız. Körfez manzaralı
                  restoranlarımızda güleryüzlü ve profesyonel servis ekibimiz
                  hizmetinizdedir.
                </p>
              </div>
            </div>
            <div
              onClick={handleImage(image2)}
              className="cursor-pointer flex justify-center items-center shadow-md rounded-lg py-3 px-6"
            >
              <img
                src="https://www.electusrecruitment.co.uk/icons/tgb9.svg"
                alt=""
                className="w-[50px] h-[50px] ml-3"
              />
              <div className="ml-8">
                <h1 className="text-xl text-blue-800 mb-1">Havuz ve Sahil</h1>
                <p className="text-[15px] text-left text-gray-600">
                  Açık ve kapalı olmak üzere iki havuzumuz sezon boyunca
                  misafirlerin hizmetindedir. Çocuk havuzu ise zeytin ağaçların
                  gölgesinde ve bahçe içinde ayrı yerde bulunmaktadır. Otelimize
                  en yakın Mavi Bayraklı koy ve plajlar Turunç, Amos ve Kumlubük
                  Koyları’dır.
                </p>
              </div>
            </div>
            <div
              onClick={handleImage(image3)}
              className="cursor-pointer flex justify-center items-center shadow-md rounded-lg py-3 px-6"
            >
              <img
                src="https://www.crystaluz.be/images/icon_spa.svg"
                alt=""
                className="w-[50px] h-[50px] ml-3"
              />
              <div className="ml-8">
                <h1 className="text-xl text-blue-800 mb-1">Spa</h1>
                <p className="text-[15px] text-left text-gray-600">
                  Yeni spa ve hamam bölümü için deneyimli partnerimiz Loryma Spa
                  profesyonel ekibiyle sizi doğu ve batı tarzı masaj ve bakım
                  programlarıyla dinçleştirecek. Loryma Spa Loryma Resort’un
                  doğasever yanaşımına uyumlu biçimde tasarladığı programında
                  bal, süt, şifalı bitkiler, yosunlar, aromatik yağlar ve Loryma
                  Resort’un kendi üretimi zeytinyağlarını kullanmaktadır.
                </p>
              </div>
            </div>
            <div
              onClick={handleImage(image4)}
              className="cursor-pointer flex justify-center items-center shadow-md rounded-lg py-3 px-6"
            >
              <img
                src="https://www.electusrecruitment.co.uk/icons/tgb6.svg"
                alt=""
                className="w-[50px] h-[50px] ml-3"
              />
              <div className="ml-8">
                <h1 className="text-xl text-blue-800 mb-1">Aktiviteler</h1>
                <p className="text-[15px] text-left text-gray-600">
                  Aktif tatil seçenekleri tercih eden misafirlerimiz için fitnes
                  salonumuz, Yoga seanslarımız, tenis kortumuz ve tırmanma
                  duvarımız ücretsiz olarak sunulmaktadır.Seçilmiş doğa sporu
                  programımız sayesinde misafirlerimiz ayrıca da güzel Bozburun
                  Yarımadasını daha iyi tanımaya fırsatını yakalarlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
