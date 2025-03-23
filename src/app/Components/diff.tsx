function Diff() {
    return (
      <>
        <section className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto "
        >
          <div className="one p-5 md:w-1/3 ">
            <h3 className="text-lg text-gray-600 md:pl-4">see how we compare</h3>
            <h1 className="text-2xl md:text-4xl font-bold mt-2 md:pl-4">
              What Makes Us Different?
            </h1>
            <h4 className="mt-4 md:p-4 text-gray-700">
              We handle all your creative needs with no inefficiency, no lengthy
              hiring, and no contracts. Just quality work done right.
            </h4>
          </div>
          
          <div className="two  p-4 md:w-1/3  flex flex-col justify-center">
            <ul className="space-y-10">
              <li className="flex items-center gap-3">
                <img src="/images/1.png" alt="" className="h-10 w-10" />
                <span>Unlimited requests</span>
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
          
          <div className="three  p-4 md:w-1/3  flex flex-col justify-center">
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
          </div>
        </section>
      </>
    );
  }
  
  export default Diff;