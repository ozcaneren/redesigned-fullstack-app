import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="antialiased tracking-tight text-gray-900 bg-gray-300 font-inter">
        <div className="container mx-auto">
          <h1 className="px-8 mt-16 mb-4 text-5xl font-extrabold leading-tight text-center text-white xl:text-6xl">
            Landing template for{" "}
            <span className="text-indigo-700">startups</span>
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-xl text-center xl:max-w-2xl">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex flex-col justify-center max-w-xs mx-auto mb-12 sm:max-w-full sm:flex-row">
            <a
              className="w-full mb-4 whitespace-no-wrap bg-indigo-600 btn btn-tall md:w-auto hover:bg-indigo-500 sm:mr-2"
              href="#"
            >
              Get started
            </a>
            <a
              className="w-full mb-4 whitespace-no-wrap bg-gray-800 btn btn-tall md:w-auto hover:bg-gray-600 sm:ml-2"
              href="#"
            >
              View on Github
            </a>
          </div>
          <div className="mb-16">
            <img
              className="block w-full max-w-5xl mx-auto rounded"
              src="img/video-placeholder.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="title sm:text-4xl md:text-5xl">
              Build up the whole picture
            </h2>
            <p className="mb-16 mx-auto intro sm:max-w-xl">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum — semper quis lectus
              nulla at volutpat diam ut venenatis.
            </p>
            <ul className="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row">
              <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-01.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
              <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-02.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
              <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-03.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
              <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-04.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-medium text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
              <li className="w-full px-6 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-05.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-medium text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
              <li className="w-full px-8 mb-8 sm:mb-16 md:w-1/2 lg:w-1/3">
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-indigo-700 rounded-full">
                  <img src="img/feature-tile-icon-06.svg" alt="" />
                </span>
                <h3 className="mb-2 text-2xl font-medium text-white">
                  Robust Workflow
                </h3>
                <p className="max-w-xs mx-auto text-lg text-gray-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-16 border-b border-gray-800">
            <div className="flex flex-col mb-8 sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img
                  className="rounded-sm"
                  src="https://open.michelegera.dev/features-split-image-01.b4363cde.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left">
                  Lightning fast workflow
                </p>
                <h3 className="title title-small sm:text-left md:text-4xl">
                  Data-driven insights
                </h3>
                <p className="text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img
                  className="rounded-sm"
                  src="img/features-split-image-02.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left">
                  Lightning fast workflow
                </p>
                <h3 className="title title-small sm:text-left md:text-4xl">
                  Data-driven insights
                </h3>
                <p className="text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 sm:flex-row">
              <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img
                  className="rounded-sm"
                  src="img/features-split-image-03.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-center text-indigo-600 uppercase sm:text-left">
                  Lightning fast workflow
                </p>
                <h3 className="title title-small sm:text-left md:text-4xl">
                  Data-driven insights
                </h3>
                <p className="text md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="title sm:text-4xl md:text-5xl">
              Customer testimonials
            </h2>
            <p className="intro mx-auto sm:max-w-xl">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
            <div className="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap">
              <div className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
                <div className="p-8 bg-gray-800">
                  <div className="mb-8 text-indigo-600">
                    <svg
                      className="fill-current"
                      width="24"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </blockquote>
                  <p className="font-semibold">
                    <span className="text-white">Roman Level</span>
                    <span className="text-gray-700">/</span>
                    <a href="#" className="text-green-400 hover:text-green-300">
                      AppName
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
                <div className="p-8 bg-gray-800">
                  <div className="mb-8 text-indigo-600">
                    <svg
                      className="fill-current"
                      width="24"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </blockquote>
                  <p className="font-semibold">
                    <span className="text-white">Diana Rynzhuk</span>
                    <span className="text-gray-700">/</span>
                    <a href="#" className="text-green-400 hover:text-green-300">
                      AppName
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
                <div className="p-8 bg-gray-800">
                  <div className="mb-8 text-indigo-600">
                    <svg
                      className="fill-current"
                      width="24"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700">
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </blockquote>
                  <p className="font-semibold">
                    <span className="text-white">Ben Stafford</span>
                    <span className="text-gray-700">/</span>
                    <a href="#" className="text-green-400 hover:text-green-300">
                      AppName
                    </a>
                  </p>
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
