import "../globals.css";
function MainCard() {
  return (
    <>
      <div
        style={{ backgroundColor: "#34b18c" }}
        className=" flex flex-col lg:flex-row justify-between items-center h-auto lg:h-80 w-11/12 mx-auto  rounded-lg border border-gray-300 shadow-lg p-6"
      >
        {/* Text Section */}
        <div className="text-center p-6 lg:w-1/2 w-full rounded-lg flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-white">
            Let&apos;s Work Together
          </h3>
          <h1 className="text-3xl lg:text-5xl font-bold text-white pt-2 leading-10">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-100 pt-5 p-3 leading-7">
            Know what you want? Great. Got questions? Even better{" "}
          </p>
          <button className="btn px-6 py-3 bg-gray-900 text-white font-medium rounded-4xl mt-5 hover:bg-gray-800 transition">
            Join Now
          </button>
        </div>

        {/* Image Section */}
        <div className="offerCard  h-72 lg:h-80 w-full lg:w-auto flex items-center justify-center mt-6 lg:mt-0 ">
          <img
            src="/images/pic10-removebg-preview 1.png"
            alt="Fitness Training"
            className=" h-64  lg:h-72 w-64 lg:w-72 object-cover sm:mt-7 sm:h-80 sm:w-80"
          />
        </div>
      </div>
    </>
  );
}

export default MainCard;
