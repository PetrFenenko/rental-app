export default function Banner() {
  return (
    <section className="w-full h-full py-12 my-20 bg-gradient-to-r from-neutral-700 via-neutral-800 to-neutral-700">
      <div className="max-w-[87rem] mx-auto px-5">
        <p className="text-6xl font-bold text-gray-50 py-3 text-center">
          Save significantly with our rates.
        </p>
        <p className="text-2xl text-gray-100 font-light py-3 text-center ">
          We offer our services at major airports and partner with local
          suppliers, providing you with{" "}
          <span className="text-blue-400">24/7</span> customer support.
        </p>
      </div>
    </section>
  );
}
