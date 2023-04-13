import { useForm } from "react-hook-form";
import { CAR_DATA } from "./CarData";

export default function Booking({ setBookingData, setDisplayModal, bookRef }) {
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const styles = {
    select:
      "py-2.5 px-1 flex-none border border-gray-200 shadow-sm rounded-[2px] outline-none cursor-pointer",
    date: "py-2.5 px-1 flex-none border border-gray-200 shadow-sm rounded-[2px] outline-none cursor-pointer",
    label: "text-lg mb-1 font-bold",
    error: "text-red-400 text-sm mt-1 font-medium",
  };

  const onSubmit = (data) => {
    setBookingData({
      ...data,
      carImage: CAR_DATA.find((e) => e.name === data.carmodel)?.img,
    });
    setDisplayModal(true);
    console.log(data);
  };
  return (
    <section className="w-full h-fit bg-gradient-to-b from-gray-100 to-white py-20">
      <div ref={bookRef} className="max-w-[87rem] mx-auto ">
        <div className="bg-form-pattern shadow-md mx-6  rounded bg-white p-9 ">
          <h2 className="text-2xl font-extrabold mb-4">Book a car</h2>

          <form
            className="grid gap-x-6 h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-evenly ease-linear justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex h-[100px] flex-col">
              <label className={styles.label} htmlFor="car-model">
                Car model <b className="text-blue-400">*</b>
              </label>

              <select
                className={styles.select}
                id="carmodel"
                {...register("carmodel", { required: true })}
              >
                <option value="" disabled selected hidden>
                  Choose...
                </option>
                {CAR_DATA.map((e, i) => (
                  <option key={i} value={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
              {errors.carmodel && (
                <p className={styles.error}>This field is required</p>
              )}
            </div>

            <div className="flex h-[100px] flex-col">
              <label className={styles.label} htmlFor="pick-up">
                Pick-up location <b className="text-blue-400">*</b>
              </label>

              <select
                className={styles.select}
                id="pickup"
                {...register("pickup", { required: true })}
              >
                <option value="" disabled selected hidden>
                  Choose...
                </option>
                <option value="Kyiv">Kyiv</option>
                <option value="Ternopil">Ternopil</option>
                <option value="Lviv">Lviv</option>
                <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
                <option value="Lutsk">Lutsk</option>
              </select>
              {errors.pickup && (
                <p className={styles.error}>This field is required</p>
              )}
            </div>

            <div className="flex h-[100px] flex-col">
              <label className={styles.label} htmlFor="drop-off">
                Drop-off location <b className="text-blue-400">*</b>
              </label>

              <select
                className={styles.select}
                id="dropoff"
                {...register("dropoff", { required: true })}
              >
                <option value="" disabled selected hidden>
                  Choose...
                </option>
                <option value="Kyiv">Kyiv</option>
                <option value="Ternopil">Ternopil</option>
                <option value="Lviv">Lviv</option>
                <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
                <option value="Lutsk">Lutsk</option>
              </select>
              {errors.dropoff && (
                <p className={styles.error}>This field is required</p>
              )}
            </div>

            <div className="flex h-[100px] flex-col">
              <label className={styles.label} htmlFor="start">
                Pick-up date <b className="text-blue-400">*</b>
              </label>

              <input
                className={styles.date}
                type="date"
                id="start"
                min={today}
                max={watch("end")}
                {...register("start", { required: true })}
              />
              {errors.start && (
                <p className={styles.error}>This field is required</p>
              )}
            </div>

            <div className="flex h-[100px] flex-col">
              <label className={styles.label} htmlFor="end">
                Drop-off date <b className="text-blue-400">*</b>
              </label>

              <input
                className={styles.date}
                type="date"
                id="end"
                min={watch("start")}
                {...register("end", { required: true })}
              />
              {errors.end && (
                <p className={styles.error}>This field is required</p>
              )}
            </div>
            <input
              className="py-3 md:mt-[1.6rem] mt-1 self-start shadow-blue-200 bg-blue-400 shadow-lg rounded-[2px] cursor-pointer text-center text-lg font-bold text-white hover:bg-blue-500 transition-colors duration-500"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
