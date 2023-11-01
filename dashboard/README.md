<li>
              <NavLink
                onClick={toggleHeaderDropdown}
                className="relative flex flex-row items-center px-4 justify-between h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                </div>
              </NavLink>
              {openHeaderDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/header/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Title
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/header/link"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Link
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>