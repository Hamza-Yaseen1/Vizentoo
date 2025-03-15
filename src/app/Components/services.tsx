import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences with modern design principles",
    image: "/images/6.jpg",
  },
  {
    title: "Brand Identity",
    description: "Develop distinctive and memorable brand identities that resonate with your audience",
    image: "/images/2 copy.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Craft compelling visual content for your digital marketing campaigns",
    image: "/images/4.jpg",
  },
  {
    title: "Print Design",
    description: "Professional print materials that maintain brand consistency across all mediums",
    image: "/images/8.jpg",
  },
];

function Services(){
    return(
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12">
                    Our Services
                </h1>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {services.map((service, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                    <div className="relative w-full aspect-[16/10] mb-6 overflow-hidden rounded-lg">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-lg">{service.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <CarouselPrevious className="static" />
                        <CarouselNext className="static" />
                    </div>
                </Carousel>
            </div>
            <button className="text-center border-2 border-black px-6 py-3 rounded-full hover:text-white hover:bg-black transition-all duration-300 mx-auto block mt-8 font-medium text-lg">
                All Design Services
            </button>
        </section>
    )
}
export default Services;