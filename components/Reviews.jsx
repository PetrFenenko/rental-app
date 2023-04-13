import { ImQuotesRight } from "react-icons/im";
import { REVIEW_DATA } from "./ReviewData";

export default function Reviews() {
  const review = REVIEW_DATA[0];
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[87rem] h-full mx-auto">
        <h2 className="font-bold text-center text-gray-700 text-2xl mb-6">
          CLIENT REVIEWS
        </h2>
        <h3 className="text-center text-md text-gray-600 font-medium mb-8">
          Read through our clients&apos; testimonials to learn about the
          positive impact we&apos;ve had on them. <br />
          They have first-hand experience of our service and results, and are
          enthusiastic about sharing their positive experiences with you.
        </h3>
        <div className="w-[50rem] rounded-lg h-[20rem] bg-white mx-auto shadow-lg border">
          <div className="p-10 flex flex-col h-full justify-between">
            <div className="text-lg font-bold italic text-gray-800 ">
              &ldquo;{review.text}&rduo;
            </div>

            <div className="p-28 flex justify-between">
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
    </section>
  );
}
