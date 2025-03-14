// Hero Section about part
import Image from "next/image";
function About() {
    return (
        <section className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <h1 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                What is Vizentoo?
            </h1>
            <p className="text-center text-base sm:text-sm md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                At our core, we exist to simplify design for businesses already excelling in graphic services. 
                By offering seamless access to top-tier designers on a monthly subscription, we ensure your 
                team can meet growing demands without compromising quality. This allows companies to focus 
                on scaling their operations, welcoming more clients, and achieving their ambitious goals 
                with confidence.
            </p>
            <div className="images grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <Image
                src="/images/4.jpg"
                alt="Description"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              />
              <Image
                src="/images/1.jpg"
                alt="Description"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              />
              <Image
                src="/images/8.jpg"
                alt="Description"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              />
              <Image
                src="/images/2.jpg"
                alt="Description"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
              />
            </div>
        </section>
    );
}

export default About;