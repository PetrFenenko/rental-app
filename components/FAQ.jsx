import Image from "next/image";
import { useState } from "react";
import { FAQ_DATA } from "./FAQData";

export default function FAQ() {
  // Setting the active question
  const [question, setQuestion] = useState(0);

  const handleClick = (i) => {
    question === i ? setQuestion(null) : setQuestion(i);
  };
  return (
    <section className="w-full py-20">
      <div className="max-w-[87rem] h-[40rem] mx-auto">
        <Image
          className="max-w-[32rem] absolute right-0 mt-60 z-10"
          height={960}
          width={1280}
          alt="bg-lexus"
          src="/images/banners/Blue-Lexus.png"
        />
        <div className="flex flex-col relative text-center z-20 gap-y-4 justify-center px-6">
          <h1 className="uppercase text-3xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h1>

          <h1 className="text-md font-thin text-gray-500">
            FAQs: Car Rental Booking on Our Website - Common Inquiries
            Addressed.
          </h1>
          <div className="bg-stone-50 flex flex-col shadow-md border max-w-[65rem] mt-10 mx-auto">
            {/* rendering questions  */}
            {FAQ_DATA.map((e, i) => {
              return (
                <div
                  key={i}
                  id={i}
                  onClick={() => handleClick(i)}
                  className="flex flex-col"
                >
                  <button
                    type="button"
                    className={`${
                      i === question
                        ? "bg-blue-400 text-white"
                        : "bg-none text-gray-600"
                    }  w-full text-lg border shadow-sm font-semibold py-4 px-8 text-start transition-colors duration-500`}
                  >
                    {`${i + 1}. ${e.question}`}
                  </button>
                  <div
                    className={`${
                      i === question ? "max-h-52" : "max-h-0"
                    } h-fit overflow-hidden transition-[max-height] ease-linear duration-500 `}
                  >
                    <p className="font-medium text-gray-500 text-start py-5 px-8">
                      {e.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
