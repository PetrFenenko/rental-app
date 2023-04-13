import Link from "next/link";
import { useEffect, useState } from "react";
import { GiCarKey } from "react-icons/gi";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  // Checking if user has scrolled down

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else setScroll(false);
  };

  const [mobileNav, setMobileNav] = useState(false);
  // Checking if the screen is suitable for mobile nav

  const handleResize = () => {
    if (window.innerWidth > 768) setMobileNav(false);
  };

  // Adding event listeners for scroll and resizing
  useEffect(() => {
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`${
          scroll ? "border-gray-300" : "border-transparent "
        } bg-gray-100 border-b w-full h-[88px] z-50 top-0 left-0 sticky transition-colors duration-500 `}
      >
        <div className="max-w-[87rem] w-full bg-gray-100 relative h-full mx-auto px-6 py-3 flex justify-between items-center ">
          {/* Logo */}
          <Link href="/">
            <div className="flex flex-row items-center gap-x-3 select-none cursor-pointer">
              <GiCarKey color="#60a5fa" size="55" />
              <h1 className="text-xl text-gray-800 font-thin">
                Rental
                <p className="text-xl text-gray-800 font-extrabold">APP</p>
              </h1>
            </div>
          </Link>

          {/* Full-size Navbar */}

          <ul className="hidden md:flex my-auto gap-x-8">
            <li className="text-md text-gray-700 font-bold hover:text-blue-400 transition-colors duration-500  ">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md text-gray-700 font-bold hover:text-blue-400 transition-colors duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md text-gray-700 font-bold hover:text-blue-400 transition-colors duration-500">
              <Link href="/">Home</Link>
            </li>
          </ul>

          {/*  Login Buttons  */}

          <ul className="hidden h-fit md:flex items-center gap-x-8">
            <li className="text-lg text-gray-700 font-bold hover:text-blue-400 transition-colors duration-500">
              <Link href="/">Sign In</Link>
            </li>
            <li className="text-lg text-white font-medium px-5 py-2 shadow-lg shadow-blue-400 rounded-sm bg-blue-400 cursor-pointer hover:bg-blue-500 transition-colors duration-500">
              <Link href="/">Sign Up</Link>
            </li>
          </ul>

          {/* Expand Button */}

          <button
            onClick={() => setMobileNav(!mobileNav)}
            className="block md:hidden pt-6 pb-4 hover:bg-gray-100 select-none"
          >
            <div className="w-6 h-1 bg-gray-700 mb-1"></div>
            <div className="w-4 h-1 bg-gray-700 mb-1"></div>
            <div className="w-2 h-1 bg-gray-700 mb-1"></div>
          </button>
        </div>

        {/* Mobile Navbar */}

        <div
          className={`${
            mobileNav ? "scale-y-100" : "scale-y-0"
          } transition-scale origin-top duration-300 bg-gray-100 border-b w-full h-fit max-h-[70vh] overflow-y-auto pb-4`}
        >
          <ul className="flex flex-col text-xl text-center ">
            <li className="text-2xl mx-1 mt-5 border py-2 text-gray-600 font-bold bg-gray-200 hover:bg-gray-300">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl mx-1 mt-5 border py-2 text-gray-600 font-bold bg-gray-200 hover:bg-gray-300">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl mx-1 mt-5 border py-2 text-gray-600 font-bold bg-gray-200 hover:bg-gray-300">
              <Link href="/">Home</Link>
            </li>
          </ul>

          {/*  Login Buttons  */}

          <ul className="flex justify-between mt-5 gap-x-3">
            <li className="text-2xl p-3 text-center m-1 w-full text-white font-bold bg-gray-400 hover:bg-gray-500">
              <Link href="/">Sign In</Link>
            </li>
            <li className=" p-3 text-center m-1 text-2xl text-white w-full font-bold rounded-sm bg-blue-400 hover:bg-blue-500 cursor-pointer">
              <Link href="/">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
