import Image from "next/image";

function Diff() {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto "
      >
        <div className="one p-5 md:w-1/3 ">
          <h3 className="text-lg text-gray-100 md:pl-4">see how we compare</h3>
          <h1 className="text-2xl text-gray-100 md:text-4xl font-bold mt-2 md:pl-4">
            What Makes Us Different?
          </h1>
          <h4 className="mt-4 md:p-4 text-gray-100">
            We handle all your creative needs with no inefficiency, no lengthy
            hiring, and no contracts. Just quality work done right.
          </h4>
        </div>

        {/* <div className="two  p-4 md:w-1/3  flex flex-col justify-center text-gray-100">
            <ul className="space-y-10">
             <li className="flex items-center gap-3">
  <div className="relative">
    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
    <img src="/images/1.png" alt="" className="h-10 w-10 relative z-10" />
  </div>
  <span className="text-white">Unlimited requests</span>
</li>

              <li className="flex items-center gap-3">
              <img src="/images/2.png" alt="" className="h-10 w-10" />
              <span>Unlimited revisions</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/3.png" alt="" className="h-10 w-10" />
              <span>Native source files</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/4.png" alt="" className="h-10 w-10" />
              <span>Art Director</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/5.png" alt="" className="h-10 w-10" />
              <span>Project Manager</span>
              </li>
            </ul>
          </div>
          
          <div className="three  p-4 md:w-1/3  flex flex-col justify-center text-gray-100">
            <ul className="space-y-10">
              <li className="flex items-center gap-3">
              <img src="/images/6.png" alt="" className="h-10 w-10" />
              <span>Real-time collaboration</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/7.png" alt="" className="h-10 w-10" />
              <span>7-day money-back guarantee</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/8.png" alt="" className="h-10 w-10" />
              <span>Cancel anytime</span>
              </li>
              <li className="flex items-center gap-3">
              <img src="/images/9.png" alt="" className="h-10 w-10" />
              <span>Middle+/Senior Designer</span>
              </li>
            </ul>
          </div> */}
        <div className="two p-4 md:w-1/3 flex flex-col justify-center text-gray-100">
          <ul className="space-y-10">
            {[
              { icon: "/images/1.png", text: "Unlimited requests" },
              { icon: "/images/2.png", text: "Unlimited revisions" },
              { icon: "/images/3.png", text: "Native source files" },
              { icon: "/images/4.png", text: "Art Director" },
              { icon: "/images/5.png", text: "Project Manager" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
                  <Image src={item.icon} alt="" width={40} height={40} className="relative z-10" />
                </div>
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="three p-4 md:w-1/3 flex flex-col justify-center text-gray-100">
          <ul className="space-y-10">
            {[
              { icon: "/images/6.png", text: "Real-time collaboration" },
              { icon: "/images/7.png", text: "7-day money-back guarantee" },
              { icon: "/images/8.png", text: "Cancel anytime" },
              { icon: "/images/9.png", text: "Middle+/Senior Designer" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"></div>
                  <Image src={item.icon} alt="" width={40} height={40} className="relative z-10" />
                </div>
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>
    </>
  );
}

export default Diff;