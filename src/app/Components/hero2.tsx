import Image from "next/image";

function Hero2() {
  return (
    <>
<<<<<<< HEAD
      <section className="md:flex justify-evenly p-9 pt-24 bg-white">
=======
    
      <section className="md:flex justify-evenly p-9 pt-24">
>>>>>>> 37f53ea3cba8aa36a8c70e06a5df9dc0b96f8016
        <div className="text md:w-1/2 ">
          <h1 className="text-3xl font-bold p-3 ">
            Solve Your Design barrier Today
          </h1>

          <p className="text-md text-gray-900 p-3">
            Your brand&apos;s design deserves more than unreliable freelancers
            or costly in-house teams. Hire a dedicated, experienced designer who
            understands both your brand and your vision, without the high costs
            and profit cuts of maintaining a full-time team
          </p>
          <button className="rounded-2xl mt-4 px-4 py-2 transition-all duration-300 border text-black font-semibold border-black hover:bg-green-600 hover:text-black cursor-pointer">
            <a href="/Contact">Contact US</a>
          </button>
        </div>
        <div className="Image-hero">
          <Image
<<<<<<< HEAD
            src="/images/1.webp"
=======
            src="/images/Untitled-1 2.png"
>>>>>>> 37f53ea3cba8aa36a8c70e06a5df9dc0b96f8016
            alt="Description"
            height={300}
            width={300}
            className="pt-10 bg-transparent"
          />
        </div>
      </section>
    </>
  );
}
export default Hero2;
