function Navbar() {
  return (
    <nav className="bg-[#f6f5f0] border-b border-gray-200">
      <div className="h-14 flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-[#084ccf] text-2xl font-semibold whitespace-nowrap">
            Admin
          </span>
        </a>
        <div className="block" id="navbar-default">
          <ul className="font-medium flex flex-col md:p-0 rounded-lg md:flex-row md:space-x-8 md:border-0">
            <li>
              <a
                href="#"
                className="block rounded bg-transparent text-[#1555d1] p-0"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
