import { useEffect, useRef, useState } from "react";
import {
  ImCircleLeft,
  ImCircleRight,
  ImQuotesRight,
  ImRadioChecked,
  ImRadioUnchecked,
} from "react-icons/im";

import { REVIEW_DATA } from "./ReviewData";

export default function Reviews() {
  // Referencing Reviews flexbox
  const reviewContainter = useRef();

  // Defining selected review

  const [currentReview, setCurrentReview] = useState(
    Math.abs(REVIEW_DATA.length - 1) / 2
  );

  // Handling arrow presses
  const handleRight = () => {
    currentReview === REVIEW_DATA.length - 1
      ? setCurrentReview(0)
      : setCurrentReview(currentReview + 1);
  };

  const handleLeft = () => {
    currentReview === 0
      ? setCurrentReview(REVIEW_DATA.length - 1)
      : setCurrentReview(currentReview - 1);
  };

  const goToReview = (id) => setCurrentReview(id);

  // Scrolling to the current review

  useEffect(() => {
    reviewContainter.current.style.transform = `translate(-${
      currentReview * 100
    }%)`;
  }, [currentReview]);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[87rem] mx-auto">
        <div className="flex flex-col text-center gap-y-4 px-6">
          <h2 className="font-bold text-gray-700 text-2xl mb-6">
            CLIENT REVIEWS
          </h2>
          <h3 className="text-gray-600 font-medium mb-8">
            Read through our clients&apos; testimonials to learn about the
            positive impact we&apos;ve had on them.
          </h3>

          {/* Navigation */}

          <div className="relative max-w-[50rem] min-h-[20rem] w-full isolate rounded-lg bg-form-pattern overflow-hidden mx-auto shadow-lg border">
            {/* Left */}
            <button
              type="button"
              className="cursor-pointer absolute left-4 top-1/2 z-50"
              onClick={handleLeft}
            >
              <ImCircleLeft size="18" color="#cccccc" />
            </button>

            {/* Right */}
            <button
              type="button"
              className="cursor-pointer absolute right-4 top-1/2 z-50"
              onClick={handleRight}
            >
              <ImCircleRight size="18" color="#cccccc" />
            </button>

            {/* Dots */}

            <div className="absolute bottom-4 z-50 flex w-full justify-center cursor-pointer">
              {REVIEW_DATA.map((e, i) => (
                <button type="button" key={i} onClick={() => goToReview(i)}>
                  {i === currentReview ? (
                    <ImRadioChecked size="18" color="#cccccc" />
                  ) : (
                    <ImRadioUnchecked size="18" color="#dddddd" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}

            <div
              ref={reviewContainter}
              className={`flex min-w-full transition-transform duration-500 translate-x-[-${currentReview}00%]`}
            >
              {REVIEW_DATA.map((review, i) => (
                <div
                  key={i}
                  className="flex p-10 flex-col min-w-full justify-between"
                >
                  <div className="text-lg font-bold italic z-20 text-gray-800 ">
                    &ldquo;{review.text}&rdquo;
                  </div>

                  <div className="flex px-4 justify-between">
                    <div className="text-left">
                      <p className="text-xl font-bold text-gray-700">
                        {review.name}
                      </p>
                      <p className="text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <ImQuotesRight
                    className="self-end z-10 opacity-20"
                    size="70"
                    color="#60a5fa"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
