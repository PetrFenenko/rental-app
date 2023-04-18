import Image from "next/image";
import { useForm } from "react-hook-form";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";

export default function Modal({ BookingData, DisplayModal, setDisplayModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDisplayModal(false);
  };

  return (
    <div
      className={`${
        DisplayModal ? "" : "hidden"
      } w-[100%] h-[100%] bg-gray-500 top-0 right-0 bg-opacity-50 overflow-y-auto fixed z-50 `}
    >
      <div className=" modal:w-[51rem] w-full h-fit mx-auto mt-[4%] rounded-sm border-white border-2 shadow-xl">
        {/* ------- HEADER ------- */}
        <div className="w-full bg-blue-400">
          <span
            onClick={() => setDisplayModal(false)}
            className="text-4xl text-white hover:text-grey cursor-pointer font-bold float-right mt-2 mr-5"
          >
            &times;
          </span>
          <h1 className="p-3 uppercase text-white font-extrabold text-2xl">
            Complete booking
          </h1>
          <div className="text-lg bg-blue-100 font-medium leading-8 text-gray-500 p-6">
            <h2 className="text-xl font-bold text-blue-400 mb-1">
              After you finish making this reservation request, you will be
              given:
            </h2>
            <p>
              A rental voucher which you should present when you arrive at the
              rental desk, as well as a customer support number that you can
              call for free if you need assistance.
            </p>
          </div>
        </div>

        {/* ------- FORM ------- */}

        <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
          {/* --- LOCATION & TIME --- */}

          <div className="grid grid-cols-1 sm:grid-cols-2 px-8 pt-6 border-b border-gray-300">
            <div className="flex  flex-col gap-y-3 mb-5">
              <h2 className="text-blue-400 font-bold text-xl">Date & Time</h2>

              {/* PICK-UP TIME */}

              <div className="flex flex-row gap-2 items-top">
                <IoTimeOutline size="22" color="#6b7280" className="mt-0.5" />

                <div className=" text-gray-500 font-thin">
                  <p className="text-md font-bold text-gray-800">
                    Pick-Up Date & Time
                  </p>
                  <span>{BookingData?.start} / </span>
                  <span>
                    <input
                      className={`outline-none border ${
                        errors.pickuptime
                          ? "border-red-400 bg-red-50"
                          : "border-gray-400"
                      } rounded px-0.5`}
                      type="time"
                      {...register("pickuptime", {
                        required: true,
                      })}
                    />
                  </span>
                </div>
              </div>

              {/* DROP-OFF TIME */}

              <div className="flex flex-row gap-2 items-top">
                <IoTimeOutline size="22" color="#6b7280" className="mt-0.5" />

                <div className=" text-gray-500 font-thin">
                  <p className="text-md font-bold text-gray-800">
                    Drop-Off Date & Time
                  </p>
                  <span>{BookingData?.end} / </span>
                  <span>
                    <input
                      className={`outline-none border ${
                        errors.dropofftime
                          ? "border-red-400 bg-red-50"
                          : "border-gray-400"
                      } rounded px-0.5`}
                      type="time"
                      {...register("dropofftime", {
                        required: true,
                      })}
                    />
                  </span>
                </div>
              </div>

              {/* PICK-UP LOCATION */}

              <div className="flex flex-row gap-2 items-top">
                <IoLocationOutline
                  size="22"
                  color="#6b7280"
                  className="mt-0.5"
                />

                <div className=" text-gray-500 font-thin">
                  <p className="text-md font-bold text-gray-800">
                    Pick-Up Location
                  </p>
                  <span>{BookingData.pickup}</span>
                </div>
              </div>

              {/* DROP-OFF LOCATION */}

              <div className="flex flex-row gap-2 items-top">
                <IoLocationOutline
                  size="22"
                  color="#6b7280"
                  className="mt-0.5"
                />

                <div className=" text-gray-500 font-thin">
                  <p className="text-md font-bold text-gray-800">
                    Drop-Off Location
                  </p>
                  <span>{BookingData?.dropoff}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className=" font-bold text-xl">
                Car –{" "}
                <span className="text-blue-400">{BookingData?.carmodel}</span>
              </h2>
              <Image
                src={BookingData.carImage}
                alt={BookingData.carmodel}
                priority
                width={640}
                height={480}
              />
            </div>
          </div>
          {/* --- PERSONAL INFO --- */}
          <h2 className="text-blue-400 px-8 pt-5 mb-3 font-bold text-xl">
            Personal Information
          </h2>
          <div className=" px-8 grid gap-x-7 gap-y-1 h-fit grid-cols-1 sm:grid-cols-2 items-evenly justify-between">
            {/* FIRST NAME */}

            <div className="flex flex-col h-24 ">
              <label
                className="text-gray-500 font-semibold "
                htmlFor="firstname"
              >
                First Name <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="firstname"
                placeholder="Enter your first name..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("firstname", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.firstname && (
                <p className="text-red-400 text-sm font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* LAST NAME */}

            <div className="flex flex-col h-24">
              <label
                className="text-gray-500 font-semibold "
                htmlFor="lastname"
              >
                Last Name <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="lastname"
                placeholder="Enter your last name..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("lastname", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.lastname && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* PHONE NUMBER */}

            <div className="flex flex-col h-24">
              <label className="text-gray-500 font-semibold " htmlFor="phone">
                Phone Number <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("phone", {
                  required: true,
                  minLength: 9,
                  pattern: /\w/,
                })}
              />

              {errors.phone && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* AGE */}

            <div className="flex flex-col h-24">
              <label className="text-gray-500 font-semibold " htmlFor="age">
                Age <b className="text-blue-400">*</b>
              </label>

              <input
                type="number"
                id="age"
                placeholder="Enter your age..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("age", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.age && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* EMAIL */}

            <div className="flex flex-col col-span-1 sm:col-span-2 h-24">
              <label className="text-gray-500 font-semibold " htmlFor="email">
                Email <b className="text-blue-400">*</b>
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("email", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.email && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* ADDRESS */}

            <div className="flex flex-col h-24 col-span-1 sm:col-span-2 ">
              <label className="text-gray-500 font-semibold " htmlFor="address">
                Address <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="address"
                placeholder="Enter your address..."
                className="py-2.5 px-2 mt-1 mb-0.5 bg-gray-200 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("address", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.address && (
                <p className="text-red-400  text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* CITY */}

            <div className="flex flex-col h-24">
              <label className="text-gray-500 font-semibold " htmlFor="city">
                City <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="city"
                placeholder="Enter your city..."
                className="py-2.5 px-2 bg-gray-200 mt-1 mb-0.5 shadow-sm rounded-[2px] outline-none cursor-text"
                {...register("city", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.city && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>

            {/* ZIP-CODE */}

            <div className="flex flex-col h-24">
              <label className="text-gray-500 font-semibold " htmlFor="zip">
                ZIP Code <b className="text-blue-400">*</b>
              </label>

              <input
                type="text"
                id="zip"
                placeholder="Enter your ZIP-code..."
                className="py-2.5 px-2 border bg-gray-200 shadow-sm mt-1 mb-0.5 rounded-[2px] outline-none cursor-text"
                {...register("zip", {
                  required: true,
                  minLength: 1,
                  pattern: /\w/,
                })}
              />

              {errors.zip && (
                <p className="text-red-400 text-sm  font-medium">
                  This field is required
                </p>
              )}
            </div>
          </div>

          {/* --- SUBMIT --- */}
          <div className="mt-8 w-full bg-gray-200 text-right pt-4 pb-5 px-5 ">
            <input
              className="py-3 px-14 self-start border shadow-blue-200 bg-blue-400 cols-2 shadow-lg rounded-[2px] cursor-pointer text-center text-lg font-bold text-white"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
