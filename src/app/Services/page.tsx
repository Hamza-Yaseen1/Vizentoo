import SpotlightCard from "../animation/SpotlightCard";
import ToolsSection from "../Components/ToolsSection";


export default function Services() {
  const services = [
    {
      title: "Branding & Identity",
      points: [
        "Logo design",
        "Brand guidelines",
        "Business cards",
        "Letterheads",
        "Stationery sets",
        "Email signatures",
        "Brand strategy",
        "Tone of voice",
        "Brand naming",
      ],
      icon: "🖌️",
      image: "/images/branding.jpg",
    },
    {
      title: "Creative Strategy",
      points: [
        "Brand storytelling",
        "Campaign planning",
        "Customer journey mapping",
        "Content strategy",
        "Market research",
        "User personas",
        "Trend analysis",
        "Idea validation",
        "Platform-specific adaptation",
      ],
      icon: "🧠",
    },
    {
      title: "Video Editing",
      points: [
        "Cutting and trimming clips",
        "Adding transitions and effects",
        "Color grading and correction",
        "Audio syncing and mixing",
        "Text and subtitle overlays",
        "Motion graphics and animations",
        "Social media video formatting",
        "Highlight reels and montages",
        "Exporting in multiple resolutions",
      ],
      icon: "🎥",
    },
    {
      title: "Web Design",
      points: [
        "Responsive website layouts",
        "Custom landing page design",
        "E-commerce UI design",
        "Wireframes & user flows",
        "Figma to code-ready handoff",
        "Homepage and inner page design",
        "Blog & content page layouts",
        "Design for speed & usability",
        "SEO-friendly design structure",
      ],
      icon: "💻",
    },
    {
      title: "Print Design",
      points: [
        "Brochures",
        "Flyers",
        "Posters",
        "Business cards",
        "Packaging",
        "Labels",
        "Catalogs",
        "Magazine layouts",
        "Print-ready files",
      ],
      icon: "📄",
    },
    {
      title: "UI Components Design",
      points: [
        "Design systems",
        "Reusable component libraries",
        "Button styles & states",
        "Input fields & form elements",
        "Modal and dialog interfaces",
        "Tabs, sliders & accordions",
        "Design tokens & theming",
        "Accessibility-first components (WCAG)",
        "Cross-platform responsive UI kits",
      ],
      icon: "🧰",
    },
    {
      title: "Motion Graphics",
      points: [
        "Animated logos",
        "Explainer videos",
        "Social media animations",
        "UI animations",
        "Product demos",
        "Motion typography",
        "Loading animations",
      ],
      icon: "🎬",
    },
    {
      title: "Illustration",
      points: [
        "Custom illustrations",
        "Icons sets",
        "Character design",
        "Infographics",
        "Pattern design",
        "Digital art",
        "Storyboarding",
      ],
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      points: [
        "Social media graphics",
        "Email campaigns",
        "Digital ads",
        "Infographics",
        "Presentation decks",
        "Banner ads",
        "Animated GIFs",
        "Cover photos",
      ],
      icon: "📈",
    },
  ];

  return (
    <section className="bg-[#011518]">
      {/* Hero */}
      <div className="top-head relative bg-green-500 bg-[url('/images/pic-removebg-preview.png')] p-10 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl underline font-bold mb-4 drop-shadow-md hover:scale-105 transition duration-300">
            Our Services
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 hover:text-white transition duration-300 drop-shadow-sm">
            Over 120+ design services to elevate your brand
          </p>
        </div>
      </div>

      {/* Cards */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((card, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(0, 229, 255, 0.2)"
              className="custom-spotlight-card bg-gray-700 rounded-xl border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{card.icon}</span>
                  <h2 className="text-xl font-bold text-white relative group cursor-pointer">
                    {card.title}
                    <span className="absolute bottom-0 left-0 block w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </h2>
                </div>

                <ul className="space-y-2 text-white hover:text-gray-900">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start p-2 hover:bg-gray-50 rounded transition">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/Contact"
                  className="mt-4 inline-flex items-center text-green-600 font-medium hover:text-green-700 transition"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="tools">
          <ToolsSection />
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Need something custom?</h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-6">
            We specialize in tailored solutions. Let us know your unique requirements and we&apos;ll create a custom service
            package just for you.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>

      {/* Spacer before footer */}
      <div className="p-4" />
    </section>
  );
}
