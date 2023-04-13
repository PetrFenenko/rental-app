import { IoCallOutline, IoMailOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-100 to-white border-t py-20">
      <div className="max-w-[87rem] mx-auto">
        <div className="grid justify-items-center grid-cols-1 text-center sm:justify-items-start sm:text-start sm:grid-cols-2 lg:grid-cols-4 px-5">
          <div className="px-4 mb-8 max-w-xs">
            {/* Contact Info */}

            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Rental <span className="font-extrabold">APP</span>
            </h2>
            <p className="text-md font-medium text-gray-500 mb-4">
              Our selection of vehicles caters to various driving requirements,
              and we have an ideal car to fulfill your needs.
            </p>
            <a
              href="tel:+123456789"
              className="font-bold text-gray-700 text-md flex gap-x-2 justify-center sm:justify-start items-center mb-2"
            >
              <IoCallOutline />
              (123)-456-789
            </a>
            <a
              href="mailto:email@rentalapp.com"
              className="font-bold text-gray-700 text-md flex gap-x-2 justify-center sm:justify-start items-center mb-2"
            >
              <IoMailOutline />
              email@rentalapp.com
            </a>
          </div>

          {/* Company Links */}

          <div className="px-4 mb-8 max-w-xs">
            <h2 className="text-xl font-extrabold text-gray-700 mb-4">
              COMPANY
            </h2>

            <p className="font-medium text-gray-700 text-md mb-2">Careers</p>
            <p className="font-medium text-gray-700 text-md mb-2">Blog</p>
            <p className="font-medium text-gray-700 text-md mb-2">About</p>
          </div>

          {/* Working Hours */}

          <div className="px-4 mb-8 max-w-xs">
            <h2 className="text-xl font-extrabold text-gray-700 mb-4">
              WORKING HOURS
            </h2>

            <p className="font-medium text-gray-700 text-md mb-2">
              Mon-Fri: 9:00AM - 9:00PM
            </p>
            <p className="font-medium text-gray-700 text-md mb-2">
              Say: 9:00AM - 7:00PM
            </p>
            <p className="font-medium text-gray-700 text-md mb-2">
              Sun: Closed
            </p>
          </div>

          {/* Email Subscription */}

          <div className="px-4 mb-8 max-w-xs">
            <h2 className="text-xl font-extrabold text-gray-700 mb-4">
              SUBSCRIPTION
            </h2>

            <p className="font-medium text-gray-700 text-md mb-4">
              Subscribe with your Email to receive latest news & updates.
            </p>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="py-2.5 text-center mb-2 bg-gray-200 border shadow-sm rounded-[1px] outline-none cursor-text"
              />
              <input
                className="py-3 border shadow-blue-200 bg-blue-400 shadow-lg rounded-[2px] cursor-pointer text-center text-lg font-bold text-white hover:bg-blue-500"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
