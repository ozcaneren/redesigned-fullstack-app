export default function Services() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center text-center py-6">
            <h1 className="text-3xl text-[#0C3B59]">
              Online Rezervasyon Yapın
            </h1>
            <div className="flex justify-center items-center px-2 border border-gray-200 mt-8">
              <div className="p-2">
                <label htmlFor="" className="block text-left text-sm ">
                  Check-in date
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>
              <div className="p-2">
                <label htmlFor="" className="block text-left text-sm">
                  Check-out date
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>
              <div className="p-2">
                <label htmlFor="" className="block text-left text-sm">
                  Misafir Sayısı
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>

              <div className="p-2">
                <button className="px-3 py-2 mt-5 bg-[#2c485a] text-white rounded-lg">
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
