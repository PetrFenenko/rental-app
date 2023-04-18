import { ImQuotesRight } from "react-icons/im";
import { REVIEW_DATA } from "./ReviewData";

export default function Reviews() {
  const review = REVIEW_DATA[0];
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[87rem] mx-auto">
        <div className="flex flex-col text-center gap-y-4 justify-center px-6">
          <h2 className="font-bold text-gray-700 text-2xl mb-6">
            CLIENT REVIEWS
          </h2>
          <h3 className="text-gray-600 font-medium mb-8">
            Read through our clients&apos; testimonials to learn about the
            positive impact we&apos;ve had on them.
          </h3>
          <div className="max-w-[50rem] rounded-lg min-h-[20rem] bg-white mx-auto shadow-lg border">
            <div className="p-10 flex flex-col justify-between">
              <div className="text-lg font-bold italic text-gray-800 ">
                &ldquo;{review.text}&rdquo;
              </div>

              <div className="flex py-16 justify-around">
                <div className="">
                  <p className="text-xl font-medium text-gray-700">
                    {review.name}
                  </p>
                  <p>{review.location}</p>
                </div>

                <ImQuotesRight size="55" color="#60a5fa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
