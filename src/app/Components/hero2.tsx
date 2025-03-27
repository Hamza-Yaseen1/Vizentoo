import Image from "next/image";

function Hero2() {
  return (
    <>
      <section className="md:flex justify-evenly p-9 pt-24">
        <div className="text md:w-1/2 ">
          <h1 className="text-3xl font-bold p-3 text-white">
            Solve Your Design barrier Today
          </h1>

          <p className="text-md text-gray-500 p-3">
            Your brand&apos;s design deserves more than unreliable freelancers
            or costly in-house teams. Hire a dedicated, experienced designer who
            understands both your brand and your vision, without the high costs
            and profit cuts of maintaining a full-time team
          </p>
          <button className="rounded-2xl mt-4 px-4 py-2 transition-all duration-300 border text-white border-white hover:bg-black hover:text-white cursor-pointer">
            Click me
          </button>
        </div>
        <div className="Image-hero">
          <Image
            src="/images/pexels-photo-11180937.webp"
            alt="Description"
            height={300}
            width={300}
            className="pt-10"
          />
        </div>
      </section>
    </>
  );
}
export default Hero2;
