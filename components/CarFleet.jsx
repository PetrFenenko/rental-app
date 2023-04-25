import Image from "next/image";
import { useState } from "react";
import { CAR_DATA } from "./CarData";

export default function CarFleet({ scrollToBook }) {
  const [car, setCar] = useState(CAR_DATA[0]);

  const [loading, setLoading] = useState(false);

  const handleSelect = (e) => {
    setCar(CAR_DATA.find((i) => i.name === e.target.id));
    setLoading(true);
  };

  return (
    <section className="w-full h-full py-20">
      <div className="max-w-[87rem] mx-auto">
        <div className="flex flex-col text-center gap-y-4 justify-center px-6">
          <h1 className="uppercase text-3xl font-extrabold text-gray-800">
            Our Rental Fleet
          </h1>
          <h2 className="text-md font-thin text-gray-500">
            Select from a range of fantastic vehicles that are available for
            rental for your upcoming <br />
            excursion or business journey.
          </h2>
          <div className="mt-6 grid grid-cols-4 gap-10 ">
            {/* Car Selection */}

            <div className="h-[22rem] flex flex-col justify-between gap-y-2 col-span-4 md:col-span-2 lg:col-span-1 ">
              {CAR_DATA.map((e, i) => (
                <div
                  onClick={handleSelect}
                  id={e.name}
                  key={i}
                  className={`font-semibold w-full p-3.5 text-left text-lg cursor-pointer hover:text-white hover:bg-blue-400 transition-colors duration-300 ${
                    e.name === car.name
                      ? " text-white bg-blue-400"
                      : "text-gray-900 bg-gray-100"
                  }`}
                >
                  {e.name}
                </div>
              ))}
            </div>

            {/* CAR Image */}

            <div className="h-[22rem] col-span-4 lg:col-span-2 md:order-first lg:order-none flex items-center">
              <Image
                onLoadingComplete={() => {
                  setLoading(false);
                }}
                className={`md:col-span-2 mx-auto ${
                  loading ? "opacity-0" : "opacity-100"
                } transition-opacity duration-1000 `}
                src={car.img}
                alt={car.name}
                width="640"
                height="480"
              />
            </div>

            {/* CAR Data */}

            <div className="h-[22rem] col-span-4 md:col-span-2 lg:col-span-1 order-3 flex flex-col justify-between">
              <div>
                <div className="w-full bg-blue-400 text-white text-center py-2 px-3.5">
                  <span className="font-extrabold text-2xl">${car.price}</span>
                  <span className="text-2xl"> / per day</span>
                </div>
                <div className="h-fit grid grid-cols-2 border-x-2 border-b-2 text-sm lg:text-md font-semibold text-gray-800">
                  <div className="flex flex-col  border-r-2 ">
                    <p className="border-b-2 py-1.5 ">Brand</p>
                    <p className="border-b-2 py-1.5 ">Model</p>
                    <p className="border-b-2 py-1.5 ">Year</p>
                    <p className="border-b-2 py-1.5 ">Doors</p>
                    <p className="border-b-2 py-1.5 ">AC</p>
                    <p className="border-b-2 py-1.5 ">Transmission</p>
                    <p className="py-1.5 ">Fuel</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="border-b-2 py-1.5 ">{car.brand}</p>
                    <p className="border-b-2 py-1.5 ">{car.model}</p>
                    <p className="border-b-2 py-1.5 ">{car.year}</p>
                    <p className="border-b-2 py-1.5 ">{car.doors}</p>
                    <p className="border-b-2 py-1.5 ">{car.air}</p>
                    <p className="border-b-2 py-1.5 ">{car.transmission}</p>
                    <p className="py-1.5 ">{car.fuel}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={scrollToBook}
                type="button"
                className="shadow-blue-200 bg-blue-400 shadow-lg rounded-[2px] cursor-pointer w-full mt-3 py-3 font-xl text-white font-bold hover:bg-blue-500 transition-colors duration-500"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
