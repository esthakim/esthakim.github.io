import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        className="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-highlight peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-2xl">
        <div className="xl:container m-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div className="w-full flex justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-highlight dark:bg-gray-200"></div>
                  <div className="h-6 w-2 bg-darkcyan dark:bg-darkcyan"></div>
                </div>
                <span className="text-base font-bold text-gray-600 dark:text-white">
                  HAKIM
                </span>
              </Link>
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="#about"
                      className="block md:px-4 transition hover:text-white dark:hover:text-primaryLight"
                    >
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="block md:px-4 transition hover:text-white dark:hover:text-primaryLight"
                    >
                      <span>Portfolio</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block md:px-4 transition hover:text-white dark:hover:text-primaryLight"
                    >
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
