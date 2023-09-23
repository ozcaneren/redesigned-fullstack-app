function Sidebarr() {
  return (
    <div className="">
      <div className="bg-gray-200 w-full p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-black gap-8">
            <div className="text-xl font-bold flex items-center ml-2.5">
              <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                className="h-6 mr-2"
                alt="Windster Logo"
              />
              <span className="self-center whitespace-nowrap">Admin Panel</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
              Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebarr;
