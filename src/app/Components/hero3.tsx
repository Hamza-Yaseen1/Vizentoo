import Image from "next/image";

function Hero3() {
  const featureCards = [
    {
      icon: "/images/stars.png",
      title: "Expert Creative Services",
      description: "Experience the same level of creative expertise trusted by major brands, now brought to your projects or your clients' ensuring world-class quality at every step",
      className: "star",
    },
    {
      icon: "/images/check_box.png", // You might want to replace with appropriate icons
      title: "Creative Solutions",
      description: "Experience the same level of creative expertise trusted by major brands, now brought to your projects or your clients' ensuring world-class quality at every step",
      className: "creative",
    },
    {
      icon: "/images/target 1.png", // You might want to replace with appropriate icons
      title: "Quality Guaranteed",
      description: "Experience the same level of creative expertise trusted by major brands, now brought to your projects or your clients' ensuring world-class quality at every step",
      className: "tick",
    },
    {
      icon: "/images/newpreficon-2.svg fill.png", // You might want to replace with appropriate icons 
      title: "Forward Thinking",
      description: "Experience the same level of creative expertise trusted by major brands, now brought to your projects or your clients' ensuring world-class quality at every step",
      className: "arrow",
    },
  ];

  return (
    <section className="py-15">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Creative Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className={`${card.className}  rounded-lg  p-6`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    height={80}
                    width={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">

      <div className="images grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <div
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md p-3 shadow-amber-400"
              >
                <Image
                    src="/images/stars.png"
                    alt="images"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                <h1 className="text-lg font-bold p-3">7 Day MoneyBack Guarantee</h1>
                <p className="pl-3 pt-1">Try us risk-free and get a full refund in 7 days</p>
                 </div>
              <div
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md p-3 shadow-amber-400"
              >
                <Image
                    src="/images/stars.png"
                    alt="images"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                <h1 className="text-lg font-bold p-3">7 Day MoneyBack Guarantee</h1>
                <p className="pl-3 pt-1">Try us risk-free and get a full refund in 7 days</p>
                 </div>
              <div
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md p-3 shadow-amber-400"
              >
                <Image
                    src="/images/stars.png"
                    alt="images"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                <h1 className="text-lg font-bold p-3">7 Day MoneyBack Guarantee</h1>
                <p className="pl-3 pt-1">Try us risk-free and get a full refund in 7 days</p>
                 </div>
              <div
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md p-3 shadow-amber-400"
              >
                <Image
                    src="/images/stars.png"
                    alt="images"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                <h1 className="text-lg font-bold p-3">7 Day MoneyBack Guarantee</h1>
                <p className="pl-3 pt-1">Try us risk-free and get a full refund in 7 days</p>
                 </div>





            </div>
             </div>
    </section>
  );
}

export default Hero3;