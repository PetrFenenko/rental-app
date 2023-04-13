import Image from "next/image";

export default function Hero({ scrollToBook }) {
  return (
    <section className="w-full h-[97vh] min-h-[60rem] lg:min-h-[40rem] bg-gray-100">
      <div className="max-w-[87rem] h-full mx-auto">
        <div className="flex w-full flex-col lg:flex-row h-full justify-center items-center lg:justify-between p-6 ">
          <div className="max-w-lg text-center lg:text-left z-20 space-y-6">
            <h1 className="uppercase text-5xl font-bold">
              Drive <span className="text-blue-400">Your</span> Dreams
            </h1>
            <p className="text-xl h-fit font-medium">
              We help you turn your travel dreams into reality. Wide selection
              of cars to suit your needs. Affordable rates and easy booking
              process make renting a car with us a stress-free experience.
            </p>
            <div>
              <button
                onClick={scrollToBook}
                className="bg-blue-400 p-5 mr-7 w-40 hover:bg-blue-500 transition-colors duration-500 rounded-sm shadow-md uppercase text-white font-bold"
              >
                Book now
              </button>
              <button className=" bg-blue-400 p-5 hover:bg-blue-500 transition-colors duration-500 rounded-sm shadow-md uppercase text-white font-bold">
                ABOUT
              </button>
            </div>
          </div>
          <Image
            className="z-10 order-first lg:order-none w-full max-w-2xl mt-14"
            src="/images/banners/bg-bmw.png"
            alt="Hero Image"
            width={1280}
            height={902}
          />
        </div>
      </div>
    </section>
  );
}
